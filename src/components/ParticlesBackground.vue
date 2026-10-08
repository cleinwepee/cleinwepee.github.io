<!-- src/components/ParticlesBackground.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import type { ISourceOptions } from '@tsparticles/engine'
import { useDarkMode } from '@/composables/dark-mode.ts'

const { dark } = useDarkMode()

const enabled =
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
  window.matchMedia('(min-width: 768px)').matches

const options = computed<ISourceOptions>(() => {
  const color = dark.value ? '#ffffff' : '#111111'
  const dotOpacity = dark ? 0.5 : 0.9
  const linkOpacity = dark ? 0.3 : 0.6
  const linkWidth = dark ? 1 : 1.5

  return {
    fullScreen: { enable: false },
    fpsLimit: 60,
    background: { color: { value: 'transparent' } },
    particles: {
      number: { value: 80, density: { enable: true } },
      color: { value: color },
      opacity: { value: dotOpacity },
      size: { value: { min: 1, max: 3 } },
      links: { enable: true, color, distance: 140, opacity: linkOpacity, width: linkWidth },
      move: { enable: true, speed: 0.8, outModes: { default: 'out' } },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: 'grab' } },
      modes: { grab: { distance: 160, links: { opacity: dark ? 0.6 : 0.9 } } },
    },
    detectRetina: true,
  }
})
</script>

<template>
  <vue-particles
    v-if="enabled"
    :key="String(dark)"
    id="hero-particles"
    :options="options"
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 -z-10"
  />
</template>
