<template>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Products</h1>

    <FilterBar />

    <ProductGrid :products="products" />
  </main>
</template>

<script setup lang="ts">
import FilterBar from './FilterBar.vue'
import ProductGrid from './ProductGrid.vue'
import type { Product } from './Product'

const products: Product[] = [
  {
    id: 1,
    title: 'iPhone 14 Pro',
    description: 'Latest Apple phone',
    price: 999,
    rating: 4.8,
    thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg'
  },
  {
    id: 2,
    title: 'Samsung Galaxy S23',
    description: 'Premium Android device',
    price: 899,
    rating: 4.7,
    thumbnail: 'https://dummyjson.com/image/i/products/2/thumbnail.jpg'
  },
  {
    id: 3,
    title: 'iPad Air',
    description: 'Powerful tablet device',
    price: 599,
    rating: 4.6,
    thumbnail: 'https://dummyjson.com/image/i/products/3/thumbnail.jpg'
  },
  {
    id: 4,
    title: 'MacBook Pro',
    description: 'Professional laptop',
    price: 1999,
    rating: 4.9,
    thumbnail: 'https://dummyjson.com/image/i/products/4/thumbnail.jpg'
  },
]
</script>
