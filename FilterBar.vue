<template>
  <div class="mb-8 bg-white p-6 rounded-lg shadow-sm border">
    <div class="flex flex-col md:flex-row gap-4">
      <!-- Search Input -->
      <div class="relative flex-1">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search for products, brands, or categories..."
          class="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
        />
        <button
          v-if="searchQuery"
          @click="clearSearch"
          class="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <svg class="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Filter Buttons -->
      <div class="flex gap-2">
        <button
          @click="setFilter('all')"
          :class="['px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                   activeFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200']"
        >
          All
        </button>
        <button
          @click="setFilter('electronics')"
          :class="['px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                   activeFilter === 'electronics' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200']"
        >
          Electronics
        </button>
        <button
          @click="setFilter('laptops')"
          :class="['px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                   activeFilter === 'laptops' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200']"
        >
          Laptops
        </button>
      </div>
    </div>

    <!-- Active Filters Display -->
    <div v-if="activeFilter !== 'all'" class="mt-4 flex items-center gap-2">
      <span class="text-sm text-gray-600">Filtered by:</span>
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 capitalize">
        {{ activeFilter }}
        <button @click="setFilter('all')" class="ml-1 inline-flex items-center">
          <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
const activeFilter = ref('all')

const clearSearch = () => {
  searchQuery.value = ''
}

const setFilter = (filter: string) => {
  activeFilter.value = filter
}

// Expose reactive values for parent component
defineExpose({
  searchQuery,
  activeFilter
})
</script>
