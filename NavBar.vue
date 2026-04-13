<template>
  <header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <router-link to="/" class="flex items-center">
        <img src="/shopsphere-logo.svg" alt="ShopSphere Logo" class="h-12 w-auto">
      </router-link>

      <nav class="flex gap-6 items-center">
        <router-link to="/" class="hover:text-indigo-600 transition-colors font-medium">Home</router-link>
        <router-link to="/login" class="hover:text-indigo-600 transition-colors font-medium">Login</router-link>
        <router-link to="/signup" class="hover:text-indigo-600 transition-colors font-medium">Signup</router-link>

        <button
          type="button"
          @click="toggleTheme"
          class="rounded-full border border-gray-300 dark:border-gray-600 p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <SunIcon v-if="isDark" class="h-5 w-5" />
          <MoonIcon v-else class="h-5 w-5" />
        </button>
        
        <!-- Cart Icon -->
        <div class="relative" ref="cartRef">
          <button 
            @click="showCart = !showCart" 
            class="relative cursor-pointer flex items-center mt-1" 
            title="Shopping Cart"
          >
            <ShoppingCartIcon class="h-7 w-7 text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition-colors" />
            <span v-if="cartTotalCount > 0" class="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-popIn">
              {{ cartTotalCount }}
            </span>
          </button>

          <!-- Cart Dropdown -->
          <div 
            v-if="showCart" 
            class="absolute right-0 top-12 w-96 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 z-50 overflow-hidden"
          >
            <div class="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg flex justify-between items-center">
              <span>🛒 Your Cart</span>
              <button @click="showCart = false" class="text-white/80 hover:text-white text-xl">&times;</button>
            </div>

            <!-- Empty Cart -->
            <div v-if="cart.length === 0" class="p-8 text-center text-gray-400 dark:text-gray-500">
              <div class="text-5xl mb-3">🛒</div>
              <p class="font-semibold">Your cart is empty</p>
              <p class="text-sm mt-1">Add some products to get started!</p>
            </div>

            <!-- Cart Items -->
            <div v-else class="max-h-80 overflow-y-auto">
              <div 
                v-for="item in cart" 
                :key="item.id" 
                class="flex items-center gap-3 p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <img :src="item.thumbnail" :alt="item.title" class="w-14 h-14 object-cover rounded-lg flex-shrink-0" />
                <div class="flex-1 min-w-0">
                  <h4 class="font-semibold text-sm text-gray-800 dark:text-gray-100 truncate">{{ item.title }}</h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Qty: {{ item.quantity }}</p>
                  <p class="text-sm font-bold text-indigo-600">${{ (item.price * item.quantity).toFixed(2) }}</p>
                </div>
                <button 
                  @click="removeFromCart(item.id)" 
                  class="text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full p-1 transition-colors flex-shrink-0"
                  title="Remove item"
                >
                  <TrashIcon class="h-5 w-5" />
                </button>
              </div>
            </div>

            <!-- Cart Footer -->
            <div v-if="cart.length > 0" class="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div class="flex justify-between items-center mb-3">
                <span class="font-semibold text-gray-700 dark:text-gray-200">Total:</span>
                <span class="text-xl font-bold text-indigo-600">${{ cartTotalPrice.toFixed(2) }}</span>
              </div>
              <router-link 
                to="/checkout"
                @click="showCart = false"
                class="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-2.5 rounded-lg hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-95 text-center"
              >
                Checkout
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ShoppingCartIcon, TrashIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import { useCart } from './useCart'
import { useTheme } from './useTheme'

const { cart, cartTotalCount, cartTotalPrice, removeFromCart } = useCart()

const showCart = ref(false)
const cartRef = ref<HTMLElement | null>(null)
const { isDark, toggleTheme } = useTheme()

// Close cart when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (cartRef.value && !cartRef.value.contains(event.target as Node)) {
    showCart.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

