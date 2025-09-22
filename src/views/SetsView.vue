<script setup>
import SetList from '@/components/SetList.vue';
import { ref, onMounted } from 'vue';
import { placeholderSets } from '@/placeholder-data.js';
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

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <SetList :sets="sets" :is-loading="isLoading" />
    </div>

  </div>
</template>