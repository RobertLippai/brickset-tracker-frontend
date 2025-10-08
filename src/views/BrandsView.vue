<script setup>
import BrandList from '@/components/BrandList.vue';
import { ref, onMounted } from 'vue';
import { placeholderBrands } from "@/placeholder-data.js";
import apiClient from '@/api.js'

const brands = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await apiClient.get('/api/brands');
    brands.value = response.data;
  } catch (error) {
    console.warn('API fetch failed. Falling back to placeholder data.', error);
    brands.value = placeholderBrands;
  } finally {
    isLoading.value = false;
  }
  });
</script>

<template>
  <div class="container mx-auto max-w-7xl px-4 py-8">
    <h1 class="text-4xl font-bold text-gray-800 mb-10">Explore Brands</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <BrandList :brands="brands" :is-loading="isLoading" />
    </div>
  </div>
</template>