import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import MainPage from './pages/MainPage.vue'
import PageAbout from './pages/PageAbout.vue'




const router = createRouter({
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/about',
            component: PageAbout
        }
    ],
    history: createWebHistory()
})


const app = createApp(App)
app.use(router)
app.mount('#app')