import { defineStore } from 'pinia';
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null,
    }),

    getters: {
        isAuthenticated(){
            return !!this.token;
        },
        username() {
            if (this.user && this.user.sub) {
                const username = this.user.sub;
                return username.charAt(0).toUpperCase() + username.slice(1);
            }
            return null;
        },
        roles() {
            return this.user?.roles || [];
        }
    },

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

        async register(username, password) {
            try {
                const response = await axios.post('/api/auth/register', { username, password} );
                const token = response.data.token;

                const userData = jwtDecode(token);

                this.token = token;
                this.user = userData;

                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(userData));
            } catch (error) {
                console.error('Register failed:', error);
                throw error;
            }
        }
    },
});