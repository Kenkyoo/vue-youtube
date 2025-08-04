<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{
  id: string
  title: string
  thumbnail: string
  views: string
  likes: string
  channel: string
  quality: string
  channelId: string
}>()
</script>
<template>
  <div
    class="card w-96 card-side card-sm bg-base-100 shadow-xl/30 animate__animated animate__fadeIn"
  >
    <div class="grid grid-cols-3">
      <figure>
        <RouterLink :to="`/videos/${id}/${channel}`">
          <img :src="thumbnail" :alt="title" class="h-full object-cover" />
        </RouterLink>
      </figure>
      <div class="card-body col-span-2">
        <div class="tooltip tooltip-accent" :data-tip="title">
          <h2 class="card-title text-sm truncate">{{ title }}</h2>
        </div>

        <RouterLink :to="`/channel/${channelId}`">
          <div class="flex gap-2 py-4">
            <div class="avatar">
              <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
                <img :src="thumbnail" :alt="channel" />
              </div>
            </div>

            <div class="badge badge-primary text-sm truncate">
              {{ channel }}
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
