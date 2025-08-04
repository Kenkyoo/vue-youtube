<script setup>
import { ref, watchEffect } from 'vue'
import VideoCard from '../Video.vue'
import SearchInput from '../../components/Search.vue'
import GridVideos from '../../components/ui/GridVideos.vue'

const { VITE_BASE_URL, VITE_API_KEY } = import.meta.env
const url = `${VITE_BASE_URL}search?part=snippet&type=video&key=${VITE_API_KEY}&q=`

const searchTerm = ref('avicii')
const data = ref([])
const nextPage = ref('')
const loading = ref(false)
let json = null // Declara 'json' fuera de watchEffect

watchEffect(async () => {
  loading.value = true
  const fetchUrl = `${url}${searchTerm.value}&pageToken=${nextPage.value}&maxResults=12`
  const response = await fetch(fetchUrl)
  json = await response.json() // Asigna el valor aquí
  data.value = json.items
  loading.value = false
})

const setNextPage = () => {
  if (json && json.nextPageToken) {
    nextPage.value = json.nextPageToken
  }
}
</script>

<template>
  <SearchInput v-model="searchTerm" />
  <div class="divider"></div>
  <div v-if="loading"><span class="loading loading-spinner loading-xs"></span></div>
  <GridVideos>
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
  </GridVideos>
  <div class="join grid grid-cols-2 py-8 max-w-64 mx-auto">
    <button class="join-item btn btn-outline">Previous</button>
    <button class="join-item btn btn-outline" @click="setNextPage">Next</button>
  </div>
</template>
