import { createApp, ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

import Title from './page/Title.vue'

const cityName = ref('Киров')

const router = createRouter({
        history: createWebHistory(),
        routes: [{
            name: 'Title',
            path: '/',
            component: Title,
        }
    ]
})

createApp(App)
    .provide('cityName', cityName)
    .use(router)
    .mount('#app')
