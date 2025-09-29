<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter, RouterLink } from 'vue-router';
import axios from 'axios';
import { VueSpinnerSync } from "vue3-spinners";
import { placeholderSets } from '../placeholder-data.js';
import { lastSetsPath } from "@/navigationStore.js";

const set = ref(null);
const isLoading = ref(true);

const route = useRoute();
const router = useRouter();

const sid = route.params.sid;

onMounted(async () => {
  try {
    const response = await axios.get(`/api/sets/${sid}`);
    set.value = response.data;
  } catch (err) {
    console.warn(`API fetch for set ${sid} failed. Searching in placeholder data.`, err);

    const sidAsNumber = parseInt(sid);
    const foundPlaceholder = placeholderSets.find(p => p.sid === sidAsNumber);

    if (foundPlaceholder) {
      set.value = foundPlaceholder;
    } else {
      await router.replace({name: 'not-found'});
    }
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="container mx-auto max-w-6xl p-4 md:p-8">
    <!-- Go Back Button -->
    <RouterLink :to="lastSetsPath" class="text-green-700 hover:text-green-900 mb-8 inline-block">
      &larr; Back to All Sets
    </RouterLink>

    <!-- Loading -->
    <div v-if="isLoading" class="text-center py-20">
      <VueSpinnerSync class="mx-auto mb-5" color="#008236" />
      <p class="text-lg text-gray-600">Loading Set Details...</p>
    </div>

    <!-- Set Info -->
    <div v-else-if="set" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="aspect-square bg-white rounded-lg shadow-xl flex items-center justify-center p-4">
          <img
              :src="set.imageUrl"
              :alt="set.name"
              class="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      <!-- Details Column -->
      <div>
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900">{{ set.name }}</h1>

        <!-- Stats -->
        <div class="mt-4 space-y-2 text-lg text-gray-700">
          <p><strong>Brand:</strong> {{ set.brandName }}</p>
          <p><strong>Set ID:</strong> {{ set.setId }}</p>
          <p><strong>Pieces:</strong> {{ set.pieces }}</p>
          <p><strong>Minifigures:</strong> {{ set.minifiguresCount || 'N/A' }}</p>
          <p><strong>Year:</strong> {{ set.releaseYear }}</p>
        </div>

        <!-- Description -->
        <p v-if="set.description" class="mt-6 text-gray-600">{{ set.description }}</p>

        <!-- TODO Implement tags displaying -->

        <div class="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <!-- Instruction button -->
          <a v-if="set.instructionUrl" :href="set.instructionUrl" target="_blank" class="rounded-md bg-green-700 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-green-800">
            View Instruction Manual
          </a>
          <!-- TODO Implement add to inventory button -->
        </div>
      </div>
    </div>

  </div>
</template>