<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div class="absolute top-32 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div class="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full"></div>
        <div class="absolute bottom-32 right-1/3 w-24 h-24 bg-white rounded-full"></div>
      </div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-5xl font-bold mb-4">Welcome to ShopSphere</h1>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Discover amazing products at unbeatable prices. Shop from our curated collection
          of electronics, fashion, home goods, and more with fast shipping and excellent service.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
          <button class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
            View Categories
          </button>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">24+</div>
            <div class="text-indigo-200">Products</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">10</div>
            <div class="text-indigo-200">Categories</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">4.8★</div>
            <div class="text-indigo-200">Avg Rating</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">24/7</div>
            <div class="text-indigo-200">Support</div>
          </div>
        </div>
      </div>
    </section>

    <main class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Products</h1>

      <FilterBar ref="filterBarRef" />

      <ProductGrid :products="filteredProducts" />

      <!-- Featured Categories -->
      <section class="mt-16 bg-white py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div class="text-center group cursor-pointer">
              <div class="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg mb-4 group-hover:shadow-lg transition-shadow">
                <svg class="h-12 w-12 mx-auto text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-800">Electronics</h3>
            </div>

            <div class="text-center group cursor-pointer">
              <div class="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg mb-4 group-hover:shadow-lg transition-shadow">
                <svg class="h-12 w-12 mx-auto text-green-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-800">Laptops</h3>
            </div>

            <div class="text-center group cursor-pointer">
              <div class="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg mb-4 group-hover:shadow-lg transition-shadow">
                <svg class="h-12 w-12 mx-auto text-purple-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-800">Fashion</h3>
            </div>

            <div class="text-center group cursor-pointer">
              <div class="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-lg mb-4 group-hover:shadow-lg transition-shadow">
                <svg class="h-12 w-12 mx-auto text-orange-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-800">Home</h3>
            </div>

            <div class="text-center group cursor-pointer">
              <div class="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-lg mb-4 group-hover:shadow-lg transition-shadow">
                <svg class="h-12 w-12 mx-auto text-pink-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-800">Beauty</h3>
            </div>

            <div class="text-center group cursor-pointer">
              <div class="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-lg mb-4 group-hover:shadow-lg transition-shadow">
                <svg class="h-12 w-12 mx-auto text-red-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-800">Sports</h3>
            </div>

            <div class="text-center group cursor-pointer">
              <div class="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-lg mb-4 group-hover:shadow-lg transition-shadow">
                <svg class="h-12 w-12 mx-auto text-yellow-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-800">Books</h3>
            </div>

            <div class="text-center group cursor-pointer">
              <div class="bg-gradient-to-br from-indigo-100 to-indigo-200 p-6 rounded-lg mb-4 group-hover:shadow-lg transition-shadow">
                <svg class="h-12 w-12 mx-auto text-indigo-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-800">Toys</h3>
            </div>

            <div class="text-center group cursor-pointer">
              <div class="bg-gradient-to-br from-teal-100 to-teal-200 p-6 rounded-lg mb-4 group-hover:shadow-lg transition-shadow">
                <svg class="h-12 w-12 mx-auto text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-9"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-800">Fitness</h3>
            </div>

            <div class="text-center group cursor-pointer">
              <div class="bg-gradient-to-br from-cyan-100 to-cyan-200 p-6 rounded-lg mb-4 group-hover:shadow-lg transition-shadow">
                <svg class="h-12 w-12 mx-auto text-cyan-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-800">Accessories</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import FilterBar from './FilterBar.vue'
import ProductGrid from './ProductGrid.vue'
import type { Product } from './Product'
import { getProductImage } from './imageMapping'

const products = ref<Product[]>([
  // Electronics
  {
    id: 1,
    title: 'iPhone 14 Pro',
    description: 'Latest Apple phone with advanced camera system',
    price: 999,
    rating: 4.8,
    thumbnail: getProductImage('iPhone 14 Pro')
  },
  {
    id: 2,
    title: 'Samsung Galaxy S23',
    description: 'Premium Android device with stunning display',
    price: 899,
    rating: 4.7,
    thumbnail: getProductImage('Samsung Galaxy S23')
  },
  {
    id: 3,
    title: 'iPad Air',
    description: 'Powerful tablet device for work and play',
    price: 599,
    rating: 4.6,
    thumbnail: getProductImage('iPad Air')
  },
  {
    id: 4,
    title: 'MacBook Pro',
    description: 'Professional laptop for creators',
    price: 1999,
    rating: 4.9,
    thumbnail: getProductImage('MacBook Pro')
  },
  {
    id: 5,
    title: 'Sony WH-1000XM4',
    description: 'Premium wireless noise-canceling headphones',
    price: 349,
    rating: 4.7,
    thumbnail: getProductImage('Sony WH-1000XM4')
  },
  {
    id: 6,
    title: 'Dell XPS 13',
    description: 'Ultra-portable laptop with stunning display',
    price: 1299,
    rating: 4.6,
    thumbnail: getProductImage('Dell XPS 13')
  },
  {
    id: 7,
    title: 'Apple Watch Series 8',
    description: 'Advanced smartwatch with health features',
    price: 399,
    rating: 4.5,
    thumbnail: getProductImage('Apple Watch Series 8')
  },
  {
    id: 8,
    title: 'Nintendo Switch OLED',
    description: 'Portable gaming console with vibrant display',
    price: 349,
    rating: 4.8,
    thumbnail: getProductImage('Nintendo Switch OLED')
  },

  // Laptops
  {
    id: 9,
    title: 'ASUS ROG Strix G15',
    description: 'Gaming laptop with powerful performance',
    price: 1499,
    rating: 4.6,
    thumbnail: getProductImage('ASUS ROG Strix G15')
  },
  {
    id: 10,
    title: 'HP Spectre x360',
    description: '2-in-1 laptop with premium build quality',
    price: 1399,
    rating: 4.5,
    thumbnail: getProductImage('HP Spectre x360')
  },
  {
    id: 11,
    title: 'Lenovo ThinkPad X1 Carbon',
    description: 'Business laptop with legendary reliability',
    price: 1599,
    rating: 4.7,
    thumbnail: getProductImage('Lenovo ThinkPad X1 Carbon')
  },
  {
    id: 12,
    title: 'Microsoft Surface Laptop 4',
    description: 'Sleek laptop with all-day battery life',
    price: 1199,
    rating: 4.4,
    thumbnail: getProductImage('Microsoft Surface Laptop 4')
  },

  // Clothing & Fashion
  {
    id: 13,
    title: 'Nike Air Max 270',
    description: 'Comfortable running shoes with iconic style',
    price: 150,
    rating: 4.6,
    thumbnail: getProductImage('Nike Air Max 270')
  },
  {
    id: 14,
    title: 'Levi\'s 501 Original Jeans',
    description: 'Classic straight-fit jeans',
    price: 89,
    rating: 4.5,
    thumbnail: getProductImage('Levi\'s 501 Original Jeans')
  },
  {
    id: 15,
    title: 'Adidas Ultraboost 22',
    description: 'High-performance running shoes',
    price: 180,
    rating: 4.7,
    thumbnail: getProductImage('Adidas Ultraboost 22')
  },
  {
    id: 16,
    title: 'H&M Cotton T-Shirt',
    description: 'Soft and comfortable basic tee',
    price: 12,
    rating: 4.2,
    thumbnail: getProductImage('H&M Cotton T-Shirt')
  },

  // Home & Kitchen
  {
    id: 17,
    title: 'KitchenAid Stand Mixer',
    description: 'Professional-grade mixer for baking enthusiasts',
    price: 379,
    rating: 4.8,
    thumbnail: getProductImage('KitchenAid Stand Mixer')
  },
  {
    id: 18,
    title: 'Dyson V8 Absolute',
    description: 'Powerful cordless vacuum cleaner',
    price: 499,
    rating: 4.6,
    thumbnail: getProductImage('Dyson V8 Absolute')
  },
  {
    id: 19,
    title: 'Instant Pot Duo 7-in-1',
    description: 'Multi-cooker for fast and easy cooking',
    price: 89,
    rating: 4.7,
    thumbnail: getProductImage('Instant Pot Duo 7-in-1')
  },
  {
    id: 20,
    title: 'Nespresso Coffee Machine',
    description: 'Premium espresso maker with milk frother',
    price: 199,
    rating: 4.5,
    thumbnail: getProductImage('Nespresso Coffee Machine')
  },

  // Beauty & Personal Care
  {
    id: 21,
    title: 'Dyson Airwrap',
    description: 'Multi-styling tool for hair care',
    price: 599,
    rating: 4.4,
    thumbnail: getProductImage('Dyson Airwrap')
  },
  {
    id: 22,
    title: 'iRobot Roomba',
    description: 'Smart robotic vacuum for automated cleaning',
    price: 299,
    rating: 4.3,
    thumbnail: getProductImage('iRobot Roomba')
  },
  {
    id: 23,
    title: 'Philips Sonicare Toothbrush',
    description: 'Electric toothbrush for superior cleaning',
    price: 89,
    rating: 4.6,
    thumbnail: getProductImage('Philips Sonicare Toothbrush')
  },
  {
    id: 24,
    title: 'Anker PowerCore 20000',
    description: 'High-capacity portable charger',
    price: 49,
    rating: 4.5,
    thumbnail: getProductImage('Anker PowerCore 20000')
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
