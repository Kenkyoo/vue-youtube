<template>
  <div class="hero-content text-center py-4 mt-8">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold animate__animated animate__fadeInUp">{{ title }}</h1>
      <p class="py-6">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>
