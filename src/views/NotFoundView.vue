<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
    <i class="fas fa-exclamation-triangle text-yellow-500 text-8xl mb-6"></i>

    <h1 class="text-5xl font-bold text-gray-800 mb-4">404 Not Found</h1>
    <p class="text-xl text-gray-600 mb-8">This page does not exist.</p>

    <RouterLink
        to="/"
        class="rounded-lg bg-green-700 px-6 py-3 font-bold text-white shadow-md transition hover:bg-green-800">
      Go Back
    </RouterLink>

  </div>
</template>
