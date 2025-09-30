<script setup>
import BrandCard from '@/components/BrandCard.vue';
import { VueSpinnerSync } from 'vue3-spinners'
import { defineProps } from 'vue';

defineProps({
  limit: Number,
  brands: {
    type: Array,
    required: true
  },
  isLoading: {
    type: Boolean,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <!-- Loading message -->
  <div v-if="isLoading" class="text-center py-10 col-span-full">
    <VueSpinnerSync class="mb-5" color="#008236" /> <!-- same as green-700 -->
    <p class="text-lg text-gray-600">Loading brands...</p>
  </div>

  <BrandCard v-else v-for="brand in brands.slice(0, limit || brands.length)" :key="brand.id" :brand="brand" :compact="compact" />
</template>