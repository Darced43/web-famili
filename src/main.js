import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'

const cityName = ref('Киров')

const app = createApp(App)
app.provide('cityName', cityName)
app.mount('#app')
