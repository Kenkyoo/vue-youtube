<script setup>
import { useLocalStorage } from '@vueuse/core'
import VideoCard from '../../components/VideoList.vue'
import GridVideosList from '../../components/ui/GridVideosList.vue'
const videos = useLocalStorage('videos', [])
</script>

<template>
  <GridVideosList>
    <VideoCard
      v-for="item in videos"
      :id="item.id"
      :key="item.id"
      :title="item.title"
      :thumbnail="item.thumbnail"
      :channel="item.channel"
    />
  </GridVideosList>
</template>
