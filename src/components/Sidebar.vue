<script setup>
import SideHistoryVideos from './history/SideHistoryVideos.vue'
import { Bars3Icon } from '@heroicons/vue/24/solid'
</script>
<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer" class="drawer-button">
        <Bars3Icon class="size-6 cursor-pointer" />
      </label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="bg-base-200 text-base-content min-h-full py-4">
        <h1 class="text-2xl font-bold text-center mt-2">History</h1>
        <div class="divider"></div>
        <!-- Sidebar content here -->
        <SideHistoryVideos style="border: none" />
      </div>
    </div>
  </div>
</template>
