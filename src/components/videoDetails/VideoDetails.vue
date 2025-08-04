<template>
  <div class="hero bg-base-200 min-h-screen mt-8">
    <div class="hero-content flex flex-col px-2">
      <div class="text-center my-4">
        <h1 class="text-sm font-bold">{{ title }}</h1>
      </div>

      <div
        class="card bg-base-100 shadow-xl/30 flex flex-col justify-center max-w-xs md:max-w-full"
      >
        <div class="w-full aspect-video">
          <iframe
            class="w-full h-96 rounded-xl shadow-2xl shadow-indigo-500/50 animate__animated animate__fadeIn"
            :src="`https://www.youtube.com/embed/${id}?autoplay=1`"
            title="`{{ title }}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="card-body flex flex-col justify-center items-center text-center">
          <h2 class="card-title">
            {{ title }}
            <div v-if="quality" class="badge badge-secondary">{{ quality }}</div>
          </h2>
          <RouterLink :to="`/channel/${channelId}`">
            <div class="py-4 flex items-center justify-center gap-4">
              <div class="avatar">
                <div
                  class="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2"
                >
                  <img :src="thumbnail" :alt="channel" />
                </div>
              </div>

              <div class="badge badge-primary">
                {{ channel }}
              </div>
            </div>
          </RouterLink>
          <div v-if="likes && views" class="card-actions">
            <div class="stats shadow justify-center flex flex-col md:flex-row">
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
                <div class="stat-title">Likes</div>
                <div class="stat-value text-primary">{{ likes }}K</div>
              </div>
              <div class="stat">
                <div class="stat-figure text-secondary">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div class="stat-title">Views</div>
                <div class="stat-value text-secondary">{{ views }}</div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <div v-for="item in tags" class="badge badge-outline">{{ item }}</div>
          </div>
        </div>
      </div>
      <p class="text-left py-2">Published: {{ formatDate(published) }}</p>
      <p class="py-6 px-2 text-base/8 texzt-sm text-justify">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import formatDate from '../../utils/formatDate.js'
defineProps<{
  id: string
  title: string
  description: string
  thumbnail: string
  views: string
  likes: string
  channel: string
  quality: string
  tags: []
  published: string
  channelId: string
}>()
</script>
