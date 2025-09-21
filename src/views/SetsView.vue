<script setup>
import SetCard from '@/components/SetCard.vue';
import { ref, onMounted } from 'vue';
import { placeholderSets } from '@/placeholder-data.js';
import { VueSpinnerSync } from "vue3-spinners"

import axios from 'axios';

const sets = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await axios.get('/api/sets');
    sets.value = response.data;
  } catch (error) {
    console.warn('API fetch failed. Falling back to placeholder data.', error);
    sets.value = placeholderSets;
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="container mx-auto max-w-7xl px-4 py-8">
    <h1 class="text-4xl font-bold text-gray-800 mb-10">Explore Sets</h1>

    <!-- Loading message -->
    <div v-if="isLoading" class="text-center py-10">
      <VueSpinnerSync class="mb-5" color="#008236" /> <!-- same as green-700 -->
      <p class="text-lg text-gray-600">Loading sets...</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <SetCard v-for="set in sets" :key="set.sid" :set="set" />
    </div>
  </div>
</template>