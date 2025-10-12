<script setup>
import { onMounted, ref } from 'vue';
import apiClient from '@/api.js'
import SetList from "@/components/SetList.vue";
import { useAuthStore } from "@/stores/authStore.js";

const sets = ref([]);
const isLoading = ref(true);
const authStore = useAuthStore();

const fetchInventory = async () => {
  try {
    const response = await apiClient.get('/api/me/sets', { requiresAuth: true });
    sets.value = response.data;
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false;
  }
};

const handleRemoveSet = async (setId) => {
  if (confirm('Are you sure you want to remove this set from your inventory?')) {
    try {
      await apiClient.delete(`/api/me/sets/${setId}`, { requiresAuth: true });
      await fetchInventory();
    } catch (error) {
      console.error('Failed to remove set:', error);
      alert('Could not remove the set. Please try again.');
    }
  }
};

onMounted(fetchInventory);
</script>

<template>
  <div class="container mx-auto max-w-7xl px-4 py-8">
    <h1 class="text-4xl font-bold text-gray-800 mb-10">Owned Sets</h1>

    <!-- TODO display owned brands with set filtering -->
    <!-- TODO implement backend endpoint for filtering sets -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <SetList
          :sets="sets"
          :is-loading="isLoading"
          context="inventory"
          :is-authenticated="authStore.isAuthenticated"
          @remove-set="handleRemoveSet"
          empty-array-message="Your inventory is empty. Start by adding some sets!"/>
    </div>
  </div>
</template>