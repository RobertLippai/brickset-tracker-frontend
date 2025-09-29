<script setup>
import brandPlaceholderImage from '@/assets/img/bricks_1.jpeg';

defineProps({
  brand: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    required: false
  }
});
</script>

<template>
  <div class="flex flex-col bg-white rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <img :src="brandPlaceholderImage" alt="Bricks" class="w-full object-cover rounded-md bg-gray-200 grayscale opacity-50" :class="{ 'h-32': !compact, 'h-32': compact }">

    <div class="flex flex-col flex-grow">
      <div class="p-6 flex-grow">
        <h3 class="text-xl font-bold text-gray-800">{{ brand.name }}</h3>
        <p v-if="brand.description && !compact" class="text-sm text-gray-600 mt-2">{{ brand.description }}</p>
      </div>

    <div v-if="!compact" class="bg-gray-50 border-t-gray-400 border-t p-3 flex justify-center">
      <RouterLink :to="`/sets?brand=${brand.name}`" class="rounded-md bg-green-700 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-green-800">
        View Sets
      </RouterLink>
    </div>
    </div>

  </div>
</template>