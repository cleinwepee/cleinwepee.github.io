<script setup lang="ts">
import ContentHeading from '@/components/ContentHeading.vue'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

/**
 * Project Section
 */
interface Project {
  id: number
  tags: string[]
  thumbnail: string
  title: string
  url: string
}

const projects: Project[] = []

const tagColors: Record<string, string> = {
  Inertia: '#7c3aed',
  Laravel: '#d9261b',
  MySQL: '#00758f',
  TypeScript: '#2b6cb0',
  Vue: '#1f7a55',
}

const getTagColor = (tag: string) => tagColors[tag] ?? '#6b7280'
</script>

<template>
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-60 focus:bg-white focus:p-3 focus:text-black"
  >
    Skip to main content
  </a>

  <SiteHeader />

  <main
    class="duration-500 motion-reduce:transition-none dark:bg-black dark:text-white"
    id="main"
    tabindex="-1"
  >
    <div class="mx-auto max-w-screen-2xl p-5">
      <!-- Hero -->
      <section class="scroll-mt-24 py-50 text-center md:text-left" id="hero">
        <header class="font-montserrat">
          <p class="text-2xl font-light">
            <span class="font-black text-red-600">
              <span><i aria-hidden="true" class="fa-brands fa-laravel"></i></span> LARAVEL
            </span>

            DEVELOPER
          </p>

          <h1 class="mt-3 text-4xl font-black md:text-6xl lg:text-8xl">CLEIN WEPEE</h1>
        </header>

        <p class="my-10 inline-block text-lg tracking-wide md:w-1/2 lg:w-1/4">
          I turn complex ideas into powerful Laravel applications, built to perform, built to scale,
          built to stand out.
        </p>

        <div>
          <a
            href="mailto:cleinentine@gmail.com"
            class="inline-block bg-red-600 px-7 py-4 text-sm font-bold text-white uppercase duration-500 hover:rounded-md hover:bg-red-700 motion-reduce:transition-none"
          >
            Send an Email

            <span><i aria-hidden="true" class="fa-solid fa-paper-plane"></i></span>
          </a>
        </div>
      </section>

      <!-- Projects -->
      <section class="mt-50 mb-100" id="projects">
        <ContentHeading text="My Projects" />

        <article class="grid gap-5 md:grid-cols-2 lg:grid-cols-4" v-if="projects.length > 0">
          <RouterLink
            :to="project.url"
            class="group duration-500 hover:text-red-400 motion-reduce:transition-none"
            v-for="project in projects"
            :key="project.id"
          >
            <h3 class="uppercase">
              <span class="mr-2 text-xl font-bold text-red-600 dark:text-red-400"
                >{{ String(project.id).padStart(2, '0') }}.</span
              >
              <span class="text-2xl font-bold">{{ project.title }}</span>
              <span class="ml-1"
                ><i aria-hidden="true" class="fa-solid fa-up-right-from-square"></i
              ></span>
            </h3>

            <img
              :alt="`${project.title}'s Thumbnail`"
              :src="project.thumbnail"
              class="my-2 w-full duration-500 group-hover:rounded-md motion-reduce:transition-none"
              loading="lazy"
            />

            <ul>
              <li
                :style="{ backgroundColor: getTagColor(tag) }"
                class="mr-1 inline-block rounded-md p-1 text-sm font-bold text-white"
                v-for="tag in project.tags"
                :key="tag"
              >
                {{ tag }}
              </li>
            </ul>
          </RouterLink>
        </article>

        <article class="mt-5 text-center select-none" v-else>
          <span class="text-7xl"><i aria-hidden="true" class="fa-solid fa-trowel"></i></span>
          <h3 class="mt-5 font-montserrat text-2xl font-bold uppercase">Work in Progress...</h3>
        </article>
      </section>
    </div>
  </main>

  <SiteFooter />
</template>
