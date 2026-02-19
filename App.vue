<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
