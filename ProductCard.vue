<template>
  <div class="border rounded p-4">
    <img v-if="product.thumbnail" :src="product.thumbnail" :alt="product.title" class="w-full h-48 object-cover mb-4" />

    <h3 class="font-bold mb-2">{{ product.title }}</h3>

    <p class="text-lg font-semibold mb-2">${{ product.price }}</p>

    <div class="space-y-2">
      <router-link :to="`/product/${product.id}`" class="block w-full text-center border rounded py-2">
        View Details
      </router-link>
      <button 
        @click="toggleSave"
        :class="[
          'w-full border rounded py-2 font-semibold transition-colors',
          isSaved 
            ? 'bg-indigo-600 text-white border-indigo-600' 
            : 'border-gray-300 hover:bg-gray-100'
        ]"
      >
        {{ isSaved ? '✓ Saved' : 'Save' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Product } from './Product'

const props = defineProps<{ product: Product }>()

const isSaved = ref(false)

const getSavedProducts = () => {
  const saved = localStorage.getItem('savedProducts')
  return saved ? JSON.parse(saved) : []
}

const toggleSave = () => {
  let savedProducts = getSavedProducts()
  
  if (isSaved.value) {
    // Remove from saved
    savedProducts = savedProducts.filter((id: number) => id !== props.product.id)
  } else {
    // Add to saved
    savedProducts.push(props.product.id)
  }
  
  localStorage.setItem('savedProducts', JSON.stringify(savedProducts))
  isSaved.value = !isSaved.value
}

onMounted(() => {
  const savedProducts = getSavedProducts()
  isSaved.value = savedProducts.includes(props.product.id)
})
</script>
