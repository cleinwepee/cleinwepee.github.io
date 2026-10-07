<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <h2 class="mb-5 font-montserrat text-2xl font-black text-red-600 uppercase">{{ text }}</h2>
</template>
