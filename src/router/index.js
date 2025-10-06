import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import SetsView from "@/views/SetsView.vue";
import SetDetailView from "@/views/SetDetailView.vue";
import BrandsView from "@/views/BrandsView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

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
            path: '/sets/:sid',
            name: 'set-detail',
            component: SetDetailView
        },
        {
            path: '/brands',
            name: 'brands',
            component: BrandsView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/not-found',
            name: 'not-found',
            component: NotFoundView
        },
        {
            path: '/:catchAll(.*)', // any resource that doesn't exist
            redirect: '/not-found'
        }
    ]
})

export default router;