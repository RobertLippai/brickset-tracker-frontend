<script setup lang="ts">

</script>

<template>
  <div class="rounded-2xl bg-[linear-gradient(135deg,_#ffcc00,_#ff3d3d,_#3399ff)] px-8 py-10 sm:py-12 text-white">

    <div class="flex flex-col items-center text-center">

      <h1 class="text-4xl md:text-5xl font-bold">
        Welcome to BrickSet Tracker
      </h1>

      <p class="mt-4 text-lg max-w-2xl">
        Keep track. Stay stacked. Discover your collection like never before.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">

        <RouterLink
            to="/sets"
            class="flex items-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-gray-800 shadow-md transition hover:bg-gray-100">
          <i class="fas fa-search mr-2"></i>
          Browse Sets
        </RouterLink>
      </div>

    </div>
  </div>
</template>