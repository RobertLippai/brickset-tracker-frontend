<script setup>
defineProps({
  set: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">

    <!-- Image -->
    <RouterLink :to="`/sets/${set.setId}`">
      <img
          :src="set.imageUrl"
          :alt="set.name"
          class="w-full h-48 object-contain"
          loading="lazy"
      />
    </RouterLink>


    <div>
      <!-- Infos -->
      <div class="p-4">
        <h3 class="text-lg font-bold text-gray-800 truncate">{{ set.name }}</h3>
        <p class="text-sm text-gray-600 mt-1">{{ set.brandName }} #{{ set.setId }}</p>
      </div>

      <!-- Buttons -->
      <div class="bg-gray-50 border-t-gray-400 border-t p-3 mt-4 flex justify-center">
        <RouterLink :to="`/sets/${set.sid}`" class="rounded-md bg-green-700 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-green-800">
          View
        </RouterLink>
      </div>
    </div>

  </div>
</template>
