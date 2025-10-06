<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore.js";

const router = useRouter();
const authStore = useAuthStore();

const username = ref('');
const password = ref('');
const error = ref(null);

const handleSubmit = async () => {
  error.value = null;
  try {
    await authStore.login(username.value, password.value);
    await router.push('/');
  } catch (err) {
    error.value = 'Please enter a correct username and password.';
  }
};
</script>

<template>
  <div class="container mx-auto max-w-md p-8">
    <h1 class="text-3xl font-bold mb-6 text-center">Login</h1>

    <p v-if="error" class="text-red-500 mt-4 mb-4 text-center">{{ error }}</p>

    <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-lg shadow-md">
      <div class="mb-4">
        <label for="username" class="block mb-2 font-semibold text-gray-700">Username</label>
        <input v-model="username" type="text" id="username" class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2 font-semibold text-gray-700">Password</label>
        <input v-model="password" type="password" id="password" class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
      </div>

      <button
          type="submit"
          class="w-full bg-green-700 text-white p-3 rounded-md font-bold transition hover:bg-green-800 disabled:bg-gray-400">
        Login
      </button>

    </form>

  </div>
</template>