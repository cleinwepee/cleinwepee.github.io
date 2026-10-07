<script setup lang="ts">
import { useDarkMode } from '@/composables/dark-mode.ts'
import { links } from '@/data/links'

const { dark, toggleDarkMode } = useDarkMode()
</script>

<template>
  <header
    class="fixed z-50 w-full bg-white/80 p-5 backdrop-blur duration-500 motion-reduce:transition-none dark:bg-black/80 dark:text-white"
  >
    <div class="mx-auto grid max-w-screen-2xl grid-cols-2">
      <div class="font-montserrat">
        <RouterLink aria-label="Home" to="/"> LOGO HERE </RouterLink>
      </div>

      <nav aria-label="Primary" class="text-right font-black uppercase">
        <ul>
          <li class="mr-5 inline-block last:mr-0" v-for="link in links" :key="link.name">
            <RouterLink class="p-1 hover:underline" :to="link.url">
              <span><i :class="['fa-solid', link.icon, 'mr-1']" aria-hidden="true"></i></span>
              <span class="sr-only lg:not-sr-only"> {{ link.name }}</span>
            </RouterLink>
          </li>

          <!-- Dark Mode -->
          <li class="inline-block">
            <button
              :aria-pressed="dark"
              @click="toggleDarkMode"
              class="toggle cursor-pointer p-1 uppercase hover:underline"
              type="button"
            >
              <span class="mr-1 inline-block"
                ><i aria-hidden="true" class="fa-solid fa-circle-half-stroke"></i
              ></span>
              <span class="sr-only lg:not-sr-only">{{ dark ? 'Light' : 'Dark' }} Mode</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
