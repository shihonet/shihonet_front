import { createRouter, createWebHistory } from 'vue-router'
import TopPage from '../views/TopPage.vue'
import BlogsPage from '../views/BlogsPage.vue'
import SchedulesPage from '../views/SchedulesPage.vue'

const routes = [
    {
        path: '/',
        name: 'main',
        component: TopPage
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: BlogsPage
    },
    {
        path: '/schedules',
        name: 'schedules',
        component: SchedulesPage
    },
    {
        // 未定義のURLをルートにリダイレクト
        path: '/:catchAll(.*)',
        redirect: { name: 'main' }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
