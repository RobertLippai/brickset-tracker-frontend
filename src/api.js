import axios from 'axios';

import { useAuthStore } from "@/stores/authStore.js";

const apiClient = axios.create();

apiClient.interceptors.request.use(
    (config) => {
        if(config.requiresAuth){
            const authStore = useAuthStore();
            const token = authStore.token;

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        console.error("Request error ::", error);
        return Promise.reject(error);
    }
);

export default apiClient;