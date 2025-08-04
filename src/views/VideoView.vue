<script setup>
import { useRoute } from 'vue-router'
import { computed, watchEffect } from 'vue'
import VideoDetails from '../components/videoDetails/VideoDetails.vue'
import Heading from '../components/Heading.vue'
import useFetchVideoDetails from '../composables/useFetchVideoDetails.js'
import useFetchSearch from '../composables/fetchSearch.js'
import VideoCard from '../components/VideoList.vue'
import GridVideosList from '../components/ui/GridVideosList.vue'
import { useLocalStorage } from '@vueuse/core'

const { VITE_BASE_URL, VITE_API_KEY } = import.meta.env
const url = `${VITE_BASE_URL}search?part=snippet&type=video&key=${VITE_API_KEY}&q=`

const route = useRoute()
const videoId = computed(() => route.params.id)
const video = useFetchVideoDetails(videoId)
const { data } = useFetchSearch(url, route.params.channel)

const videos = useLocalStorage('videos', [])

// Agregar a historial cuando se cargue el video
watchEffect(() => {
  if (video.value && video.value.id) {
    const exists = videos.value.some((v) => v.id === video.value.id)
    if (!exists) {
      videos.value.push({
        id: video.value.id,
        title: video.value.snippet.title,
        channel: video.value.snippet.channelTitle,
        thumbnail: video.value.snippet.thumbnails.default.url,
      })
    }
  }
})
console.log(videos)
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="col-span-2" v-if="video">
      <VideoDetails
        :id="video.id"
        :title="video.snippet.title"
        :description="video.snippet.description"
        :views="video.statistics?.viewCount"
        :likes="video.statistics?.likeCount"
        :channel="video.snippet.channelTitle"
        :tags="video.snippet.tags"
        :quality="video.contentDetails.definition"
        :thumbnail="video.snippet.thumbnails.default.url"
        :published="video.snippet.publishedAt"
        :channelId="video.snippet.channelId"
      />
    </div>
    <div v-if="data">
      <Heading title="Related Videos" subtitle="see the related videos" />
      <div class="divider"></div>
      <GridVideosList>
        <VideoCard
          v-for="item in data"
          :id="item.id.videoId"
          :key="item.id.videoId"
          :title="item.snippet.title"
          :thumbnail="item.snippet.thumbnails.medium.url"
          :views="item.statistics?.viewCount"
          :likes="item.statistics?.likeCount"
          :channel="item.snippet.channelTitle"
          :channelId="item.snippet.channelId"
        />
      </GridVideosList>
    </div>
  </div>
</template>
