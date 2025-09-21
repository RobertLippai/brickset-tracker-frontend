<script setup>
import SetCard from '@/components/SetCard.vue';
import { VueSpinnerSync } from 'vue3-spinners'
import { defineProps } from 'vue';

defineProps({
  limit: Number,
  sets: {
    type: Array,
    required: true
  },
  isLoading: {
    type: Boolean,
    required: true
  }
});
</script>

<template>
    <!-- Loading message -->
    <div v-if="isLoading" class="text-center py-10">
      <VueSpinnerSync class="mb-5" color="#008236" /> <!-- same as green-700 -->
      <p class="text-lg text-gray-600">Loading sets...</p>
    </div>

  <SetCard v-else v-for="set in sets.slice(0, limit || sets.length)" :key="set.sid" :set="set" />
</template>