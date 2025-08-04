<template>
  <div class="card card-sm card-border bg-base-100 shadow-xl/30 animate__animated animate__zoomIn">
    <RouterLink :to="`/videos/${id}/${channel}`">
      <figure>
        <img
          :src="thumbnail"
          :alt="title"
          class="w-full object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
        />
      </figure>
    </RouterLink>
    <div class="card-body">
      <div class="tooltip tooltip-accent" :data-tip="title">
        <h2 class="card-title text-sm truncate">
          {{ title }}
          <div v-if="quality" class="badge badge-secondary">{{ quality }}</div>
        </h2>
      </div>
      <RouterLink :to="`/channel/${channelId}`">
        <div class="flex items-center justify-start gap-4">
          <div class="avatar">
            <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
              <img :src="thumbnail" :alt="channel" />
            </div>
          </div>

          <div class="badge badge-primary text-sm truncate">
            {{ channel }}
          </div>
        </div>
      </RouterLink>
      <div v-if="likes && views" class="card-actions">
        <div class="stats shadow mx-auto">
          <div class="stat">
            <div class="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-8 w-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div class="stat-title text-sm">Likes</div>
            <div class="stat-value text-primary text-sm">{{ likes }}K</div>
          </div>
          <div class="stat">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <div class="stat-title text-sm">Views</div>
            <div class="stat-value text-secondary text-sm">{{ views }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
