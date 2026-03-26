<template>
  <header class="bg-white border-b sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <router-link to="/" class="flex items-center gap-2">
        <img src="/logo.svg" alt="ShopSphere Logo" class="h-10 w-10">
        <span class="text-xl font-bold">ShopSphere</span>
      </router-link>

      <nav class="flex gap-6 items-center">
        <router-link to="/" class="hover:text-indigo-600 transition-colors font-medium">Home</router-link>
        <router-link to="/login" class="hover:text-indigo-600 transition-colors font-medium">Login</router-link>
        <router-link to="/signup" class="hover:text-indigo-600 transition-colors font-medium">Signup</router-link>
        
        <!-- Cart Icon -->
        <div class="relative cursor-pointer flex items-center mt-1" title="Shopping Cart">
          <ShoppingCartIcon class="h-7 w-7 text-gray-700 hover:text-indigo-600 transition-colors" />
          <span v-if="cartTotalCount > 0" class="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-popIn">
            {{ cartTotalCount }}
          </span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import { useCart } from './useCart'

const { cartTotalCount } = useCart()
</script>
