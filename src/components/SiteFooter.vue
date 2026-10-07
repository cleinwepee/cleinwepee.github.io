<script setup lang="ts">
import { links, socials } from '@/data/links.ts'

import FooterHeading from './FooterHeading.vue'
</script>

<template>
  <footer class="bg-black/90 px-5 py-25 text-center text-white lg:text-left">
    <section class="mx-auto grid max-w-screen-2xl gap-5 lg:grid-cols-3">
      <article>
        <RouterLink aria-label="Home" to="/">Logo Here...</RouterLink>
      </article>

      <article>
        <FooterHeading text="Navigation" />

        <nav aria-label="Footer">
          <ul>
            <li class="mt-3 first:mt-0" v-for="link in links" :key="link.name">
              <RouterLink class="hover:underline" :to="link.url">{{ link.name }}</RouterLink>
            </li>
          </ul>
        </nav>
      </article>

      <article>
        <FooterHeading text="Socials" />

        <nav aria-label="Social">
          <ul>
            <li class="mt-3 first:mt-0" v-for="social in socials" :key="social.name">
              <a
                :href="social.url"
                class="hover:underline"
                rel="noopener noreferrer"
                target="_blank"
                >{{ social.name }}
                <span class="sr-only">(opens in new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </article>
    </section>

    <hr class="mx-auto mt-25 mb-5 w-1/2 border-red-400" />

    <p class="text-center text-sm font-bold uppercase">
      <span
        ><i aria-hidden="true" class="fa-solid fa-copyright"></i> 2026 Clein Wepee. All Rights
        Reserved.</span
      >
    </p>
  </footer>
</template>
