<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const username = ref('');
const password = ref('');
const password2 = ref('');

const error = ref(null);

const handleSubmit = async () => {
  error.value = null;
};
</script>

<template>
  <div class="container mx-auto max-w-md p-8">
    <h1 class="text-3xl font-bold mb-6 text-center">Create an Account</h1>

    <p v-if="error" class="text-red-500 mt-4 mb-4 text-center">{{ error }}</p>

    <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-lg shadow-md">
      <div class="mb-4">
        <label for="username" class="block mb-2 font-semibold text-gray-700">Username</label>
        <input v-model="username" type="text" id="username" class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
      </div>

      <div class="mb-4">
        <label for="password" class="block mb-2 font-semibold text-gray-700">Password</label>
        <input v-model="password" type="password" id="password" class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
      </div>

      <div class="mb-6">
        <label for="password2" class="block mb-2 font-semibold text-gray-700">Confirm Password</label>
        <input v-model="password2" type="password" id="password2" class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
      </div>

      <button
          type="submit"
          class="w-full bg-green-700 text-white p-3 rounded-md font-bold transition hover:bg-green-800 disabled:bg-gray-400">
         Register
      </button>

    </form>

    <p class="text-center mt-6 text-gray-600">
      Already have an account?
      <RouterLink to="/login" class="text-green-700 font-semibold hover:underline">
        Login here
      </RouterLink>
    </p>

  </div>
</template>