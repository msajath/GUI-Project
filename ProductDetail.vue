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
            <button @click="handleAddToCart(product)" class="btn-primary w-full py-4 text-lg transform transition active:scale-95 flex justify-center items-center gap-2">
              🛒 {{ isAdded ? 'Added!' : 'Add to Cart' }}
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
          <router-link 
            v-for="relatedProduct in relatedProducts" 
            :key="relatedProduct.id"
            :to="`/product/${relatedProduct.id}`"
            class="card-premium card-hover p-4 stagger-item group"
          >
            <img 
              :src="relatedProduct.thumbnail" 
              :alt="relatedProduct.title"
              class="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform"
            />
            <h3 class="font-bold text-gray-900 text-white mb-2 group-hover:text-indigo-600 transition-colors">
              {{ relatedProduct.title }}
            </h3>
            <p class="text-gray-600 text-gray-400 text-sm mb-4 line-clamp-2">
              {{ relatedProduct.description }}
            </p>
            <div class="flex justify-between items-center">
              <span class="text-lg font-bold text-gray-900 text-white">${{ relatedProduct.price }}</span>
              <span class="text-yellow-400">★ {{ relatedProduct.rating }}</span>
            </div>
          </router-link>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import type { Product } from './Product'
import { getProductImage } from './imageMapping'
import { useCart } from './useCart'

const route = useRoute()
const isSaved = ref(false)
const isAdded = ref(false)
const { addToCart } = useCart()

const handleAddToCart = (p: Product) => {
  addToCart(p)
  isAdded.value = true
  setTimeout(() => {
    isAdded.value = false
  }, 1500)
}

// All products data
const products: Product[] = [
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
]

// Get product based on route ID
const product = computed(() => {
  const productId = parseInt(route.params.id as string)
  return products.find(p => p.id === productId) || products[0]
})

// Get related products (4 random products excluding current)
const relatedProducts = computed(() => {
  return products
    .filter(p => p.id !== product.value.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
})

const getSavedProducts = () => {
  const saved = localStorage.getItem('savedProducts')
  return saved ? JSON.parse(saved) : []
}

const toggleSave = () => {
  let savedProducts = getSavedProducts()
  
  if (isSaved.value) {
    // Remove from saved
    savedProducts = savedProducts.filter((id: number) => id !== product.value.id)
  } else {
    // Add to saved
    savedProducts.push(product.value.id)
  }
  
  localStorage.setItem('savedProducts', JSON.stringify(savedProducts))
  isSaved.value = !isSaved.value
}

onMounted(() => {
  const savedProducts = getSavedProducts()
  isSaved.value = savedProducts.includes(product.value.id)
})
</script>
