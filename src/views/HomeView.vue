<script setup>
import Hero from '@/components/Hero.vue'
import SetList from '@/components/SetList.vue';
import BrandList from "@/components/BrandList.vue";

import { ref, onMounted } from 'vue';
import apiClient from '@/api.js'
import { placeholderSets, placeholderBrands } from '@/placeholder-data.js';
import { useAuthStore } from "@/stores/authStore.js";


const featuredSets = ref([]);
const featuredBrands = ref([]);
const isLoading = ref(true);
const authStore = useAuthStore();

onMounted(async () => {
  isLoading.value = true;

  try {
    const [setsResponse, brandsResponse] = await Promise.all([
      apiClient.get('/api/sets'),
      apiClient.get('/api/brands')
    ]);

    const allSets = setsResponse.data;
    const allBrands = brandsResponse.data;

    featuredSets.value = [...allSets].sort(() => 0.5 - Math.random());
    featuredBrands.value = [...allBrands].sort(() => 0.5 - Math.random());
  } catch (error) {
    console.warn('One or more API fetches failed. Falling back to placeholder data.', error);
    featuredSets.value = [...placeholderSets].sort(() => 0.5 - Math.random());
    featuredBrands.value = [...placeholderBrands].sort(() => 0.5 - Math.random());
  } finally {
    isLoading.value = false;
  }
});

const handleAddSetToInventory = async (setId) => {
  try {
    await apiClient.post(`/api/me/sets`, { brickSetId: setId }, { requiresAuth: true });
    alert(`Set added to your inventory!`);
  } catch (error) {
    console.error('Failed to add set:', error);
    alert('Could not add set to inventory. Please try again.');
  }
};
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
      <SetList
          :sets="featuredSets"
          :is-loading="isLoading"
          :is-authenticated="authStore.isAuthenticated"
          :limit="3"
          @add-to-inventory="handleAddSetToInventory"/>
    </div>
  </div>

  <div class="container mx-auto max-w-7xl px-4 py-12">
    <div class="bg-gray-50 rounded-lg p-8">

      <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-bold text-gray-800">Featured Brands</h2>
        <RouterLink to="/brands" class="rounded-md bg-green-700 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-green-800">View All Brands</RouterLink>
      </div>

      <p class="text-center text-gray-600 mb-8">
        Discover sets from multiple brands.
      </p>

      <div class="flex flex-wrap justify-center gap-6">
        <BrandList :brands="featuredBrands" :is-loading="isLoading" :limit="3" compact/>
      </div>
    </div>
  </div>

</template>