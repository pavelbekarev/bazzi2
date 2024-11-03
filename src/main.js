import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import MainPage from './pages/MainPage.vue'
import PageAbout from './pages/PageAbout.vue'
import store from './store'
import AdminPage from './pages/AdminPage.vue'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: MainPage,
        },
        {
            path: '/about',
            component: PageAbout,
        },
        {
            path: '/admin',
            component: AdminPage,
        },
    ],
    history: createWebHashHistory()
})


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');