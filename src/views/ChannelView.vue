<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, watchEffect } from 'vue'
import useFetchChannel from '../composables/fetchChannel.js'
import ChannelInfo from '@/components/channel/ChannelInfo.vue'
import fetchChannelVideos from '@/composables/fetchChannelVideos.js'
import GridVideos from '@/components/ui/GridVideos.vue'
import VideoCard from '@/components/Video.vue'
import Heading from '@/components/Heading.vue'

const { VITE_BASE_URL, VITE_API_KEY } = import.meta.env
const url = `${VITE_BASE_URL}playlistItems?part=snippet&key=${VITE_API_KEY}&maxResults=10&playlistId=`
const route = useRoute()
const channelId = computed(() => route.params.id)
const channel = useFetchChannel(channelId)
const playlistId = ref('')
watchEffect(() => {
  if (channel.value && channel.value.contentDetails) {
    playlistId.value = channel.value.contentDetails.relatedPlaylists.uploads
  }
})
const { data } = fetchChannelVideos(url, playlistId)
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <div v-if="channel">
      <ChannelInfo
        :title="channel.snippet.title"
        :description="channel.snippet.description"
        :thumbnail="channel.snippet.thumbnails.high.url"
        :subscriber="channel.statistics?.subscriberCount"
        :totalVideos="channel.statistics?.videoCount"
        :views="channel.statistics?.viewCount"
      />
    </div>
    <Heading title="Channel Videos" subtitle="see the channel videos" />
    <div class="divider"></div>
    <div v-if="data">
      <GridVideos class="px-4">
        <VideoCard
          v-for="item in data"
          :id="item.snippet.resourceId.videoId"
          :key="item.snippet.resourceId.videoId"
          :title="item.snippet.title"
          :thumbnail="item.snippet.thumbnails.medium.url"
          :views="item.statistics?.viewCount"
          :likes="item.statistics?.likeCount"
          :channel="item.snippet.channelTitle"
          :channelId="item.snippet.channelId"
        />
      </GridVideos>
    </div>
  </div>
</template>
