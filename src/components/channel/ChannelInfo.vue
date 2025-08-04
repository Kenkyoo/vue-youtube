<script setup lang="ts">
defineProps<{
  description: string
  title: string
  thumbnail: string
  subscriber: string
  totalVideos: string
  views: string
}>()
</script>
<template>
  <div class="hero min-h-screen min-w-screen" :style="{ backgroundImage: `url(${thumbnail})` }">
    <div class="hero-overlay"></div>
    <div class="hero-content text-neutral-content text-center">
      <div>
        <h1 class="mb-5 py-4 text-2xl md:text-5xl font-bold">{{ title }}</h1>
        <p class="mb-5 py-2">
          {{ description }}
        </p>
        <div class="hidden md:flex stats mx-auto inset-shadow-sm inset-shadow-indigo-500 mt-8">
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Videos</div>
            <div class="stat-value">{{ totalVideos }}</div>
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
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Views</div>
            <div class="stat-value">{{ views }}</div>
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
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Subscribers</div>
            <div class="stat-value">{{ subscriber }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
