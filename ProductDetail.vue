<template>
  <main class="min-h-screen py-12">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Breadcrumb Navigation -->
      <div class="mb-8 animate-fadeInUp">
        <router-link to="/" class="text-indigo-600 hover:text-indigo-700 font-semibold">
          ← Back to Products
        </router-link>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Image Section -->
        <div class="animate-fadeInUp">
          <div class="card-premium p-4 sticky top-24">
            <img 
              :src="product.thumbnail" 
              :alt="product.title"
              class="w-full h-96 object-cover rounded-xl"
            />
            
            <!-- Image Info -->
            <div class="mt-6 grid grid-cols-4 gap-2">
              <button class="h-16 bg-gray-200 bg-gray-700 rounded-lg hover:ring-2 hover:ring-indigo-600 transition-all transform hover:scale-105">
                <img :src="product.thumbnail" class="w-full h-full object-cover rounded" />
              </button>
              <button class="h-16 bg-gray-200 bg-gray-700 rounded-lg hover:ring-2 hover:ring-indigo-600 transition-all transform hover:scale-105">
                <img :src="product.thumbnail" class="w-full h-full object-cover rounded" />
              </button>
              <button class="h-16 bg-gray-200 bg-gray-700 rounded-lg hover:ring-2 hover:ring-indigo-600 transition-all transform hover:scale-105">
                <img :src="product.thumbnail" class="w-full h-full object-cover rounded" />
              </button>
              <button class="h-16 bg-gray-200 bg-gray-700 rounded-lg hover:ring-2 hover:ring-indigo-600 transition-all transform hover:scale-105">
                <img :src="product.thumbnail" class="w-full h-full object-cover rounded" />
              </button>
            </div>
          </div>
        </div>

        <!-- Details Section -->
        <div class="space-y-8 animate-slideInLeft">
          <!-- Title and Rating -->
          <div>
            <div class="inline-block px-4 py-1 bg-indigo-100 bg-indigo-900/30 text-indigo-600 text-indigo-400 rounded-full text-sm font-semibold mb-4">
              ⭐ Featured Product
            </div>
            
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 text-white mb-4">
              {{ product.title }}
            </h1>

            <!-- Rating Stars -->
            <div class="flex items-center gap-4 mb-6">
              <div class="flex text-yellow-400 text-lg">
                <span v-for="i in 5" :key="i">
                  {{ i <= Math.floor(product.rating) ? '★' : '☆' }}
                </span>
              </div>
              <span class="text-lg font-semibold text-gray-700 text-gray-300">
                {{ product.rating }} / 5
              </span>
              <span class="px-3 py-1 bg-green-100 bg-green-900/30 text-green-700 text-green-400 rounded-full text-sm">
                In Stock
              </span>
            </div>
          </div>

          <!-- Price Section -->
          <div class="card-premium p-6">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="text-5xl font-bold text-gradient">
                ${{ product.price }}
              </span>
              <span class="text-2xl text-gray-400 line-through">
                ${{ Math.round(product.price * 1.2) }}
              </span>
              <span class="ml-auto px-4 py-2 bg-red-100 bg-red-900/30 text-red-700 text-red-400 rounded-lg font-bold">
                Save {{ Math.round((1 - product.price / (product.price * 1.2)) * 100) }}%
              </span>
            </div>
            
            <!-- Shipping Info -->
            <div class="space-y-2 text-sm text-gray-600 text-gray-400 border-t border-gray-200 border-gray-700 pt-4">
              <div class="flex items-center gap-2">
                <span>🚚</span> Free shipping on orders over $50
              </div>
              <div class="flex items-center gap-2">
                <span>✓</span> Delivered in 3-5 business days
              </div>
            </div>
          </div>

          <!-- Description -->
          <div>
            <h3 class="text-xl font-bold text-gray-900 text-white mb-3">
              About this product
            </h3>
            <p class="text-gray-700 text-gray-300 leading-relaxed text-lg">
              {{ product.description }}
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="space-y-3 pt-4">
            <button class="btn-primary w-full py-4 text-lg">
              🛒 Add to Cart
            </button>
            <button 
              @click="toggleSave"
              :class="[
                'w-full py-4 border-2 rounded-lg font-bold transition-colors duration-200',
                isSaved
                  ? 'bg-red-600 border-red-600 text-white'
                  : 'border-indigo-600 text-indigo-600 text-indigo-400 hover:bg-indigo-50 hover:bg-gray-700'
              ]"
            >
              {{ isSaved ? '❤️ Saved to Wishlist' : '♡ Add to Wishlist' }}
            </button>
            <button class="w-full py-3 border-2 border-gray-300 border-gray-600 text-gray-700 text-gray-300 rounded-lg font-semibold hover:bg-gray-100 hover:bg-gray-700 transition-colors duration-200">
              💬 Ask a Question
            </button>
          </div>

          <!-- Trust Badges -->
          <div class="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 border-gray-700">
            <div class="text-center">
              <div class="text-3xl mb-2">🔒</div>
              <p class="text-sm font-semibold text-gray-700 text-gray-300">Secure</p>
            </div>
            <div class="text-center">
              <div class="text-3xl mb-2">↩️</div>
              <p class="text-sm font-semibold text-gray-700 text-gray-300">30-day Return</p>
            </div>
            <div class="text-center">
              <div class="text-3xl mb-2">⚡</div>
              <p class="text-sm font-semibold text-gray-700 text-gray-300">Fast Delivery</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products Section -->
      <section class="mt-20 pt-12 border-t border-gray-200 border-gray-700">
        <h2 class="text-3xl font-bold text-gray-900 text-white mb-8">
          You Might Also Like
        </h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div v-for="i in 4" :key="i" class="card-premium card-hover p-4 stagger-item">
            <div class="bg-gray-300 bg-gray-700 h-48 rounded-lg mb-4 animate-pulse"></div>
            <div class="h-4 bg-gray-300 bg-gray-700 rounded mb-2 animate-pulse"></div>
            <div class="h-4 bg-gray-300 bg-gray-700 rounded w-2/3 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Product } from './Product'

const isSaved = ref(false)

const product: Product = {
  id: 1,
  title: 'iPhone 14 Pro Max',
  description: 'Experience the ultimate iPhone with the stunning 6.7-inch all-screen display, powerful A16 Bionic chip, and revolutionary camera system. Perfect for photography enthusiasts and professionals.',
  price: 999,
  rating: 4.8,
  thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg'
}

const getSavedProducts = () => {
  const saved = localStorage.getItem('savedProducts')
  return saved ? JSON.parse(saved) : []
}

const toggleSave = () => {
  let savedProducts = getSavedProducts()
  
  if (isSaved.value) {
    // Remove from saved
    savedProducts = savedProducts.filter((id: number) => id !== product.id)
  } else {
    // Add to saved
    savedProducts.push(product.id)
  }
  
  localStorage.setItem('savedProducts', JSON.stringify(savedProducts))
  isSaved.value = !isSaved.value
}

onMounted(() => {
  const savedProducts = getSavedProducts()
  isSaved.value = savedProducts.includes(product.id)
})
</script>
