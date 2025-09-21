<script setup>
import Hero from '@/components/Hero.vue'
import SetList from '@/components/SetList.vue';


import { ref, onMounted } from 'vue';
import axios from 'axios';
import { placeholderSets } from '@/placeholder-data.js';


const featuredSets = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await axios.get('/api/sets');
    const allSets = response.data;

    featuredSets.value = [...allSets].sort(() => 0.5 - Math.random());
  } catch (error) {
    console.warn('API fetch failed, using placeholder data for featured sets.', error);
    featuredSets.value = [...placeholderSets].sort(() => 0.5 - Math.random());
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="container mx-auto max-w-6xl px-4 py-8">
    <Hero/>
  </div>
  <div class="container mx-auto max-w-7xl px-4 py-12">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-3xl font-bold text-gray-800">Featured Sets</h2>
      <RouterLink to="/sets" class="rounded-md bg-green-700 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-green-800">
        View All Sets
      </RouterLink>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <SetList :sets="featuredSets" :is-loading="isLoading" :limit="3"/>
    </div>
  </div>
</template>