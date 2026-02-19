<template>
  <header class="bg-white border-b">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold">
        ShopSphere
      </router-link>

      <nav class="flex gap-4">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
// No script needed for basic navigation
</script>
