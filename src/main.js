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

export const BackgroundType = Object.freeze({
  Dim: 1,
  Blurred: 2,
  DimmedAndBlurred: 3
});

export const DeskView = Object.freeze({
  Home: 1,
  Apiaries: 2,
  Inventory: 3,
  Finances: 4
});
