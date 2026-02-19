<template>
  <div class="mb-8">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search products..."
      class="w-full p-2 border rounded"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
</script>
