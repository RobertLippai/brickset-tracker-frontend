import { defineStore } from 'pinia';
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null,
    }),

    actions: {
        async login(username, password) {
            try {
                const response = await axios.post('/api/auth/login', { username, password} );
                const token = response.data.token;

                const userData = jwtDecode(token);

                this.token = token;
                this.user = userData;

                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(userData));
            } catch (error) {
                console.error('Login failed:', error);
                throw error;
            }
        },

        logout() {
            this.token = null;
            this.user = null;

            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },

        // TODO Register
    },
});