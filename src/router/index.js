import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import SetsView from "@/views/SetsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // for back button
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/sets',
            name: 'sets',
            component: SetsView
        },
        {
            path: '/:catchAll(.*)', // any resource that doesn't exist
            name: 'not-found',
            component: NotFoundView
        }
    ]
})

export default router;