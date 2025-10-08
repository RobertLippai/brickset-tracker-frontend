<script setup>
import SetList from '@/components/SetList.vue';
import { useRoute, RouterLink } from 'vue-router';
import { ref, watchEffect } from 'vue';
import { placeholderBrands, placeholderSets } from '@/placeholder-data.js';
import apiClient from '@/api.js'
import { lastSetsPath } from "@/navigationStore.js";

const sets = ref([]);
const brands = ref([]);
const isLoading = ref(true);
const route = useRoute();

watchEffect(async () => {
  lastSetsPath.value = route.fullPath;

  const brandName = route.query.brand;

  let apiUrl = '/api/sets';
  if (brandName) {
    apiUrl += `?brandName=${brandName}`;
  }

  try {
    const [setsResponse, brandsResponse] = await Promise.all([
      apiClient.get(apiUrl),
      apiClient.get('/api/brands')
    ]);

    sets.value = setsResponse.data;
    brands.value = brandsResponse.data;
  } catch (error) {
    console.warn('API fetch failed. Falling back to placeholder data.', error);

    brands.value = placeholderBrands;
    if (brandName) {
      sets.value = placeholderSets.filter(
          (set) => set.brandName.toLowerCase() === brandName.toLowerCase()
      );
    } else {
      sets.value = placeholderSets;
    }
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="container mx-auto max-w-7xl px-4 py-8">
    <h1 class="text-4xl font-bold text-gray-800 mb-10">Explore Sets</h1>

    <div v-if="!isLoading" class="flex justify-start flex-wrap gap-4 mb-10">
      <!-- All Brands Button -->
      <RouterLink
          to="/sets"
          :class="!route.query.brand ? 'bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md' : 'bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-full transition hover:bg-gray-300'">
        All Brands
      </RouterLink>
      <!-- Buttons for each brand -->
      <RouterLink
          v-for="brand in brands"
          :key="brand.bid"
          :to="`/sets?brand=${brand.name}`"
          :class="route.query.brand === brand.name ? 'bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md' : 'bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-full transition hover:bg-gray-300'">
        {{ brand.name }}
      </RouterLink>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <SetList :sets="sets" :is-loading="isLoading" />
    </div>

  </div>
</template>