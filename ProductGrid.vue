<template>
  <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
    <ProductCard
      v-for="p in products"
      :key="p.id"
      :product="p"
    />
  </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import type { Product } from './Product'

defineProps<{ products: Product[] }>()
</script>
