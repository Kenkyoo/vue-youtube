<script setup>
import { useFetch } from '../../composables/fetch.js'
import VideoCard from '../Video.vue'
import GridVideos from '../../components/ui/GridVideos.vue'

const endpoint = 'videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US'
const { data, error, loading } = useFetch(
  `${import.meta.env.VITE_BASE_URL}${endpoint}&key=${import.meta.env.VITE_API_KEY}&maxResults=20`,
)
</script>

<template>
  <div v-if="loading"><span class="loading loading-spinner loading-xs"></span></div>
  <GridVideos>
    <VideoCard
      v-for="item in data"
      :id="item.id"
      :key="item.id"
      :title="item.snippet.title"
      :thumbnail="item.snippet.thumbnails.medium.url"
      :views="item.statistics.viewCount"
      :likes="item.statistics.likeCount"
      :channel="item.snippet.channelTitle"
      :quality="item.contentDetails.definition"
      :channelId="item.snippet.channelId"
    />
  </GridVideos>
</template>
