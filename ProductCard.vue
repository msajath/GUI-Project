<template>
  <div class="border rounded p-4">
    <img :src="product.thumbnail" :alt="product.title" class="w-full h-48 object-cover mb-4" />

    <h3 class="font-bold mb-2">{{ product.title }}</h3>

    <p class="text-lg font-semibold mb-2">${{ product.price }}</p>

    <div class="space-y-2">
      <router-link :to="`/product/${product.id}`" class="block w-full text-center border rounded py-2">
        View Details
      </router-link>
      <button class="w-full border rounded py-2">
        Save
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from './Product'

defineProps<{ product: Product }>()
</script>
