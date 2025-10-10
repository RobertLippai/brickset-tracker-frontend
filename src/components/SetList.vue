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
  },
  context: {
    type: String,
    default: 'browse'
  },
  isAuthenticated: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['remove-set', 'add-to-inventory']);
</script>

<template>
    <!-- Loading message -->
    <div v-if="isLoading" class="text-center py-10 col-span-full">
      <VueSpinnerSync class="mb-5" color="#008236" /> <!-- same as green-700 -->
      <p class="text-lg text-gray-600">Loading sets...</p>
    </div>

    <div v-else-if="!isLoading && sets.length === 0" class="text-center py-10 col-span-full">
      <i class="fas fa-search-minus text-gray-400 text-6xl mb-4"></i>
      <p class="text-xl text-gray-600">No sets found for this brand.</p>
    </div>

    <SetCard
        v-else
        v-for="set in sets.slice(0, limit || sets.length)"
        :key="set.sid"
        :set="set"
        :context="context"
        :is-authenticated="isAuthenticated"
        @remove-set="(setId) => emit('remove-set', setId)"
        @add-to-inventory="(setId) => emit('add-to-inventory', setId)"/>
</template>