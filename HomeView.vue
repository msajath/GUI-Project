<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-4">Welcome to Cool Shopping</h1>
        <p class="text-xl mb-8">Discover amazing products at unbeatable prices</p>
        <button class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Shop Now
        </button>
      </div>
    </section>

    <main class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Products</h1>

      <FilterBar ref="filterBarRef" />

      <ProductGrid :products="filteredProducts" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import FilterBar from './FilterBar.vue'
import ProductGrid from './ProductGrid.vue'
import type { Product } from './Product'

const products = ref<Product[]>([
  // Electronics
  {
    id: 1,
    title: 'iPhone 14 Pro',
    description: 'Latest Apple phone with advanced camera system',
    price: 999,
    rating: 4.8,
    thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg'
  },
  {
    id: 2,
    title: 'Samsung Galaxy S23',
    description: 'Premium Android device with stunning display',
    price: 899,
    rating: 4.7,
    thumbnail: 'https://dummyjson.com/image/i/products/2/thumbnail.jpg'
  },
  {
    id: 3,
    title: 'iPad Air',
    description: 'Powerful tablet device for work and play',
    price: 599,
    rating: 4.6,
    thumbnail: 'https://dummyjson.com/image/i/products/3/thumbnail.jpg'
  },
  {
    id: 4,
    title: 'MacBook Pro',
    description: 'Professional laptop for creators',
    price: 1999,
    rating: 4.9,
    thumbnail: 'https://dummyjson.com/image/i/products/4/thumbnail.jpg'
  },
  {
    id: 5,
    title: 'Sony WH-1000XM4',
    description: 'Premium wireless noise-canceling headphones',
    price: 349,
    rating: 4.7,
    thumbnail: 'https://dummyjson.com/image/i/products/5/thumbnail.jpg'
  },
  {
    id: 6,
    title: 'Dell XPS 13',
    description: 'Ultra-portable laptop with stunning display',
    price: 1299,
    rating: 4.6,
    thumbnail: 'https://dummyjson.com/image/i/products/6/thumbnail.jpg'
  },
  {
    id: 7,
    title: 'Apple Watch Series 8',
    description: 'Advanced smartwatch with health features',
    price: 399,
    rating: 4.5,
    thumbnail: 'https://dummyjson.com/image/i/products/7/thumbnail.jpg'
  },
  {
    id: 8,
    title: 'Nintendo Switch OLED',
    description: 'Portable gaming console with vibrant display',
    price: 349,
    rating: 4.8,
    thumbnail: 'https://dummyjson.com/image/i/products/8/thumbnail.jpg'
  },

  // Laptops
  {
    id: 9,
    title: 'ASUS ROG Strix G15',
    description: 'Gaming laptop with powerful performance',
    price: 1499,
    rating: 4.6,
    thumbnail: 'https://dummyjson.com/image/i/products/9/thumbnail.jpg'
  },
  {
    id: 10,
    title: 'HP Spectre x360',
    description: '2-in-1 laptop with premium build quality',
    price: 1399,
    rating: 4.5,
    thumbnail: 'https://dummyjson.com/image/i/products/10/thumbnail.jpg'
  },
  {
    id: 11,
    title: 'Lenovo ThinkPad X1 Carbon',
    description: 'Business laptop with legendary reliability',
    price: 1599,
    rating: 4.7,
    thumbnail: 'https://dummyjson.com/image/i/products/11/thumbnail.jpg'
  },
  {
    id: 12,
    title: 'Microsoft Surface Laptop 4',
    description: 'Sleek laptop with all-day battery life',
    price: 1199,
    rating: 4.4,
    thumbnail: 'https://dummyjson.com/image/i/products/12/thumbnail.jpg'
  },

  // Clothing & Fashion
  {
    id: 13,
    title: 'Nike Air Max 270',
    description: 'Comfortable running shoes with iconic style',
    price: 150,
    rating: 4.6,
    thumbnail: 'https://dummyjson.com/image/i/products/13/thumbnail.jpg'
  },
  {
    id: 14,
    title: 'Levi\'s 501 Original Jeans',
    description: 'Classic straight-fit jeans',
    price: 89,
    rating: 4.5,
    thumbnail: 'https://dummyjson.com/image/i/products/14/thumbnail.jpg'
  },
  {
    id: 15,
    title: 'Adidas Ultraboost 22',
    description: 'High-performance running shoes',
    price: 180,
    rating: 4.7,
    thumbnail: 'https://dummyjson.com/image/i/products/15/thumbnail.jpg'
  },
  {
    id: 16,
    title: 'H&M Cotton T-Shirt',
    description: 'Soft and comfortable basic tee',
    price: 12,
    rating: 4.2,
    thumbnail: 'https://dummyjson.com/image/i/products/16/thumbnail.jpg'
  },

  // Home & Kitchen
  {
    id: 17,
    title: 'KitchenAid Stand Mixer',
    description: 'Professional-grade mixer for baking enthusiasts',
    price: 379,
    rating: 4.8,
    thumbnail: 'https://dummyjson.com/image/i/products/17/thumbnail.jpg'
  },
  {
    id: 18,
    title: 'Dyson V8 Absolute',
    description: 'Powerful cordless vacuum cleaner',
    price: 499,
    rating: 4.6,
    thumbnail: 'https://dummyjson.com/image/i/products/18/thumbnail.jpg'
  },
  {
    id: 19,
    title: 'Instant Pot Duo 7-in-1',
    description: 'Multi-cooker for fast and easy cooking',
    price: 89,
    rating: 4.7,
    thumbnail: 'https://dummyjson.com/image/i/products/19/thumbnail.jpg'
  },
  {
    id: 20,
    title: 'Nespresso Coffee Machine',
    description: 'Premium espresso maker with milk frother',
    price: 199,
    rating: 4.5,
    thumbnail: 'https://dummyjson.com/image/i/products/20/thumbnail.jpg'
  },

  // Beauty & Personal Care
  {
    id: 21,
    title: 'Dyson Airwrap',
    description: 'Multi-styling tool for hair care',
    price: 599,
    rating: 4.4,
    thumbnail: 'https://dummyjson.com/image/i/products/21/thumbnail.jpg'
  },
  {
    id: 22,
    title: 'iRobot Roomba',
    description: 'Smart robotic vacuum for automated cleaning',
    price: 299,
    rating: 4.3,
    thumbnail: 'https://dummyjson.com/image/i/products/22/thumbnail.jpg'
  },
  {
    id: 23,
    title: 'Philips Sonicare Toothbrush',
    description: 'Electric toothbrush for superior cleaning',
    price: 89,
    rating: 4.6,
    thumbnail: 'https://dummyjson.com/image/i/products/23/thumbnail.jpg'
  },
  {
    id: 24,
    title: 'Anker PowerCore 20000',
    description: 'High-capacity portable charger',
    price: 49,
    rating: 4.5,
    thumbnail: 'https://dummyjson.com/image/i/products/24/thumbnail.jpg'
  }
])

// Get filter bar reference
const filterBarRef = ref()

// Computed filtered products
const filteredProducts = computed(() => {
  if (!filterBarRef.value) return products.value

  const { searchQuery, activeFilter } = filterBarRef.value

  return products.value.filter(product => {
    // Search filter
    const matchesSearch = !searchQuery.value ||
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.value.toLowerCase())

    // Category filter
    let matchesCategory = activeFilter.value === 'all'

    if (!matchesCategory) {
      switch (activeFilter.value) {
        case 'electronics':
          matchesCategory = [1, 2, 3, 5, 7, 8, 21, 22, 23, 24].includes(product.id)
          break
        case 'laptops':
          matchesCategory = [4, 6, 9, 10, 11, 12].includes(product.id)
          break
        case 'clothing':
          matchesCategory = [13, 14, 15, 16].includes(product.id)
          break
        case 'home':
          matchesCategory = [17, 18, 19, 20].includes(product.id)
          break
        default:
          matchesCategory = true
      }
    }

    return matchesSearch && matchesCategory
  })
})
</script>
