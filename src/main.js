import '@/ui/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './core/router'

const app = createApp(App)

app.use(router)

app.mount('#app')

export function JsonToArr(Json, key) {
  return Json[key]
}

export const PodiumPlace = Object.freeze({
  First: 1,
  Second: 2,
  Third: 3
});
