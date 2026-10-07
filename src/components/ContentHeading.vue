<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <h2
    class="mb-10 text-center font-montserrat text-4xl font-black uppercase md:text-left md:text-6xl"
  >
    {{ text }}
  </h2>
</template>
