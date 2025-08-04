<script setup>
import { useLocalStorage } from '@vueuse/core'
import VideoCard from '../Video.vue'
import GridVideos from '../../components/ui/GridVideos.vue'

const videos = useLocalStorage('videos', [])
</script>

<template>
  <GridVideos>
    <VideoCard
      v-for="item in videos"
      :id="item.id"
      :key="item.id"
      :title="item.title"
      :thumbnail="item.thumbnail"
      :channel="item.channel"
    />
  </GridVideos>
</template>
