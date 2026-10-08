import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from '@tsparticles/vue3'

import '@/assets/main.css'

const app = createApp(App)

app.use(router)
app.use(Particles, {
  init: async (engine) => {
    const { loadSlim } = await import('@tsparticles/slim')
    await loadSlim(engine)
  },
})

app.mount('#app')
