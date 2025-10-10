<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from "@/stores/authStore.js";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

const isLinkActive = (path) => {
  return route.path === path;
};
</script>

<template>
  <nav class="bg-gray-100 shadow">
    <div class="flex items-center justify-between h-16 px-4">

      <!-- Logo -->
      <div class="flex-shrink-0">
        <RouterLink to="/" class="flex items-center text-xl font-semibold">
          <i class="fas fa-cubes mr-2"></i>
          <span>BrickSet Tracker</span>
        </RouterLink>
      </div>

      <!-- Desktop menu -->
      <div class="hidden md:flex md:items-center md:space-x-2">
        <RouterLink
            to="/"
            class="px-3 py-2 rounded-md text-sm font-medium"
            :class="[isLinkActive('/') ? 'text-gray-900 bg-gray-200' : 'text-gray-700 hover:bg-gray-200']">
          Home
        </RouterLink>
        <RouterLink
            to="/sets"
            class="px-3 py-2 rounded-md text-sm font-medium"
            :class="[isLinkActive('/sets') ? 'text-gray-900 bg-gray-200' : 'text-gray-700 hover:bg-gray-200']">
          All Sets
        </RouterLink>
        <RouterLink
            to="/brands"
            class="px-3 py-2 rounded-md text-sm font-medium"
            :class="[isLinkActive('/brands') ? 'text-gray-900 bg-gray-200' : 'text-gray-700 hover:bg-gray-200']">
          All Brands
        </RouterLink>

        <RouterLink
            v-if="authStore.isAuthenticated"
            to="/inventory"
            class="px-3 py-2 rounded-md text-sm font-medium"
            :class="[isLinkActive('/inventory') ? 'text-gray-900 bg-gray-200' : 'text-gray-700 hover:bg-gray-200']">
          Inventory
        </RouterLink>

        <div v-if="authStore.isAuthenticated">
          <button
              @click="authStore.logout()"
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">
            Logout
          </button>
        </div>
        <div v-else>
          <RouterLink
              to="/login"
              class="px-3 py-2 rounded-md text-sm font-medium"
              :class="[isLinkActive('/login') ? 'text-gray-900 bg-gray-200' : 'text-gray-700 hover:bg-gray-200']">
            Login
          </RouterLink>
        </div>

      </div>

      <!-- Mobile menu -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none">
          <span class="sr-only">Open main menu</span>
          <i v-if="!isMobileMenuOpen" class="fa-solid fa-bars"></i>
          <i v-else class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Panel-->
    <div v-if="isMobileMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <RouterLink
            to="/"
            @click="toggleMobileMenu"
            class="block px-3 py-2 rounded-md text-base font-medium"
            :class="[isLinkActive('/') ? 'text-gray-900 bg-gray-200' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200']">
          Home
        </RouterLink>
        <RouterLink
            to="/sets"
            @click="toggleMobileMenu"
            class="block px-3 py-2 rounded-md text-base font-medium"
            :class="[isLinkActive('/sets') ? 'text-gray-900 bg-gray-200' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200']">
          All Sets
        </RouterLink>
        <RouterLink
            to="/brands"
            @click="toggleMobileMenu"
            class="block px-3 py-2 rounded-md text-base font-medium"
            :class="[isLinkActive('/brands') ? 'text-gray-900 bg-gray-200' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200']">
          All Brands
        </RouterLink>
      </div>
    </div>
  </nav>
</template>