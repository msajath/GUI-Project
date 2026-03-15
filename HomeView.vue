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
          <button
            type="button"
            @click="scrollToSection(productsSection)"
            class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </button>
          <button
            type="button"
            @click="scrollToSection(categoriesSection)"
            class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
          >
            View Categories
          </button>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">{{ products.length }}</div>
            <div class="text-indigo-200">Products</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">{{ categories.length }}</div>
            <div class="text-indigo-200">Categories</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">{{ averageRating }}★</div>
            <div class="text-indigo-200">Avg Rating</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">24/7</div>
            <div class="text-indigo-200">Support</div>
          </div>
        </div>
      </div>
    </section>

    <main ref="productsSection" class="container mx-auto px-4 py-8 scroll-mt-24">
      <h1 class="text-3xl font-bold mb-8">Products</h1>

      <FilterBar
        :categories="categories"
        :active-filter="activeFilter"
        @update:search="onSearchUpdate"
        @update:filter="onFilterUpdate"
      />

      <ProductGrid :products="filteredProducts" />

      <!-- Featured Categories -->
      <section ref="categoriesSection" class="mt-16 bg-white py-16 scroll-mt-24">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <button
              v-for="category in categories"
              :key="category.id"
              type="button"
              :aria-pressed="activeFilter === category.id"
              @click="selectCategory(category.id)"
              :class="[
                'group rounded-2xl border p-6 text-left transition-all',
                activeFilter === category.id
                  ? 'border-indigo-500 ring-2 ring-indigo-100 shadow-lg'
                  : 'border-gray-200 hover:-translate-y-1 hover:shadow-lg'
              ]"
            >
              <div :class="['inline-flex rounded-2xl p-4 mb-4 transition-transform group-hover:scale-105', category.cardClass]">
                <svg :class="['h-10 w-10', category.iconClass]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.iconPath"></path>
                </svg>
              </div>
              <div class="flex items-start justify-between gap-3 mb-2">
                <h3 class="font-semibold text-gray-800">{{ category.label }}</h3>
                <span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                  {{ getCategoryCount(category.id) }} items
                </span>
              </div>
              <p class="text-sm text-gray-500">{{ category.description }}</p>
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import FilterBar from './FilterBar.vue'
import ProductGrid from './ProductGrid.vue'
import type { Product } from './Product'
import { getProductImage } from './imageMapping'

type CategoryId = 'electronics' | 'laptops' | 'fashion' | 'home' | 'beauty' | 'audio' | 'accessories'

interface Category {
  id: CategoryId
  label: string
  description: string
  cardClass: string
  iconClass: string
  iconPath: string
}

type CatalogProduct = Product & {
  category: CategoryId
}

const categories: Category[] = [
  {
    id: 'electronics',
    label: 'Electronics',
    description: 'Phones, tablets, and entertainment devices.',
    cardClass: 'bg-gradient-to-br from-blue-100 to-blue-200',
    iconClass: 'text-blue-600',
    iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    id: 'laptops',
    label: 'Laptops',
    description: 'Portable power for work, gaming, and travel.',
    cardClass: 'bg-gradient-to-br from-green-100 to-green-200',
    iconClass: 'text-green-600',
    iconPath: 'M4 6h16v10H4zM2 18h20'
  },
  {
    id: 'fashion',
    label: 'Fashion',
    description: 'Daily wear essentials with clean, modern style.',
    cardClass: 'bg-gradient-to-br from-purple-100 to-purple-200',
    iconClass: 'text-purple-600',
    iconPath: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
  },
  {
    id: 'home',
    label: 'Home',
    description: 'Kitchen tools and smart upgrades for every room.',
    cardClass: 'bg-gradient-to-br from-orange-100 to-orange-200',
    iconClass: 'text-orange-600',
    iconPath: 'M3 12l9-9 9 9M5 10v10h14V10'
  },
  {
    id: 'beauty',
    label: 'Beauty',
    description: 'Personal care and grooming picks that last.',
    cardClass: 'bg-gradient-to-br from-pink-100 to-pink-200',
    iconClass: 'text-pink-600',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    id: 'audio',
    label: 'Audio',
    description: 'Immersive sound gear for calls, music, and focus.',
    cardClass: 'bg-gradient-to-br from-red-100 to-red-200',
    iconClass: 'text-red-600',
    iconPath: 'M9 18V5l12-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zm12-2a3 3 0 11-6 0 3 3 0 016 0z'
  },
  {
    id: 'accessories',
    label: 'Accessories',
    description: 'Wearables and travel-ready add-ons for daily use.',
    cardClass: 'bg-gradient-to-br from-cyan-100 to-cyan-200',
    iconClass: 'text-cyan-600',
    iconPath: 'M12 6V4m0 16v-2m8-6h-2M6 12H4m11.314 5.314-1.414-1.414M8.1 8.1 6.686 6.686m8.628 0L13.9 8.1M8.1 15.9l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z'
  }
]

const categoryLabelById = Object.fromEntries(
  categories.map((category) => [category.id, category.label.toLowerCase()])
) as Record<CategoryId, string>

const productsSection = ref<HTMLElement | null>(null)
const categoriesSection = ref<HTMLElement | null>(null)

const products = ref<CatalogProduct[]>([
  // Electronics
  {
    id: 1,
    title: 'iPhone 14 Pro',
    description: 'Latest Apple phone with advanced camera system',
    price: 999,
    rating: 4.8,
    category: 'electronics',
    thumbnail: getProductImage('iPhone 14 Pro')
  },
  {
    id: 2,
    title: 'Samsung Galaxy S23',
    description: 'Premium Android device with stunning display',
    price: 899,
    rating: 4.7,
    category: 'electronics',
    thumbnail: getProductImage('Samsung Galaxy S23')
  },
  {
    id: 3,
    title: 'iPad Air',
    description: 'Powerful tablet device for work and play',
    price: 599,
    rating: 4.6,
    category: 'electronics',
    thumbnail: getProductImage('iPad Air')
  },
  {
    id: 4,
    title: 'MacBook Pro',
    description: 'Professional laptop for creators',
    price: 1999,
    rating: 4.9,
    category: 'laptops',
    thumbnail: getProductImage('MacBook Pro')
  },
  {
    id: 5,
    title: 'Sony WH-1000XM4',
    description: 'Premium wireless noise-canceling headphones',
    price: 349,
    rating: 4.7,
    category: 'audio',
    thumbnail: getProductImage('Sony WH-1000XM4')
  },
  {
    id: 6,
    title: 'Dell XPS 13',
    description: 'Ultra-portable laptop with stunning display',
    price: 1299,
    rating: 4.6,
    category: 'laptops',
    thumbnail: getProductImage('Dell XPS 13')
  },
  {
    id: 7,
    title: 'Apple Watch Series 8',
    description: 'Advanced smartwatch with health features',
    price: 399,
    rating: 4.5,
    category: 'accessories',
    thumbnail: getProductImage('Apple Watch Series 8')
  },
  {
    id: 8,
    title: 'Nintendo Switch OLED',
    description: 'Portable gaming console with vibrant display',
    price: 349,
    rating: 4.8,
    category: 'electronics',
    thumbnail: getProductImage('Nintendo Switch OLED')
  },

  // Laptops
  {
    id: 9,
    title: 'ASUS ROG Strix G15',
    description: 'Gaming laptop with powerful performance',
    price: 1499,
    rating: 4.6,
    category: 'laptops',
    thumbnail: getProductImage('ASUS ROG Strix G15')
  },
  {
    id: 10,
    title: 'HP Spectre x360',
    description: '2-in-1 laptop with premium build quality',
    price: 1399,
    rating: 4.5,
    category: 'laptops',
    thumbnail: getProductImage('HP Spectre x360')
  },
  {
    id: 11,
    title: 'Lenovo ThinkPad X1 Carbon',
    description: 'Business laptop with legendary reliability',
    price: 1599,
    rating: 4.7,
    category: 'laptops',
    thumbnail: getProductImage('Lenovo ThinkPad X1 Carbon')
  },
  {
    id: 12,
    title: 'Microsoft Surface Laptop 4',
    description: 'Sleek laptop with all-day battery life',
    price: 1199,
    rating: 4.4,
    category: 'laptops',
    thumbnail: getProductImage('Microsoft Surface Laptop 4')
  },

  // Fashion
  {
    id: 13,
    title: 'Nike Air Max 270',
    description: 'Comfortable running shoes with iconic style',
    price: 150,
    rating: 4.6,
    category: 'fashion',
    thumbnail: getProductImage('Nike Air Max 270')
  },
  {
    id: 14,
    title: 'Levi\'s 501 Original Jeans',
    description: 'Classic straight-fit jeans',
    price: 89,
    rating: 4.5,
    category: 'fashion',
    thumbnail: getProductImage('Levi\'s 501 Original Jeans')
  },
  {
    id: 15,
    title: 'Adidas Ultraboost 22',
    description: 'High-performance running shoes',
    price: 180,
    rating: 4.7,
    category: 'fashion',
    thumbnail: getProductImage('Adidas Ultraboost 22')
  },
  {
    id: 16,
    title: 'H&M Cotton T-Shirt',
    description: 'Soft and comfortable basic tee',
    price: 12,
    rating: 4.2,
    category: 'fashion',
    thumbnail: getProductImage('H&M Cotton T-Shirt')
  },

  // Home
  {
    id: 17,
    title: 'KitchenAid Stand Mixer',
    description: 'Professional-grade mixer for baking enthusiasts',
    price: 379,
    rating: 4.8,
    category: 'home',
    thumbnail: getProductImage('KitchenAid Stand Mixer')
  },
  {
    id: 18,
    title: 'Dyson V8 Absolute',
    description: 'Powerful cordless vacuum cleaner',
    price: 499,
    rating: 4.6,
    category: 'home',
    thumbnail: getProductImage('Dyson V8 Absolute')
  },
  {
    id: 19,
    title: 'Instant Pot Duo 7-in-1',
    description: 'Multi-cooker for fast and easy cooking',
    price: 89,
    rating: 4.7,
    category: 'home',
    thumbnail: getProductImage('Instant Pot Duo 7-in-1')
  },
  {
    id: 20,
    title: 'Nespresso Coffee Machine',
    description: 'Premium espresso maker with milk frother',
    price: 199,
    rating: 4.5,
    category: 'home',
    thumbnail: getProductImage('Nespresso Coffee Machine')
  },

  // Beauty, Home, and Accessories
  {
    id: 21,
    title: 'Dyson Airwrap',
    description: 'Multi-styling tool for hair care',
    price: 599,
    rating: 4.4,
    category: 'beauty',
    thumbnail: getProductImage('Dyson Airwrap')
  },
  {
    id: 22,
    title: 'iRobot Roomba',
    description: 'Smart robotic vacuum for automated cleaning',
    price: 299,
    rating: 4.3,
    category: 'home',
    thumbnail: getProductImage('iRobot Roomba')
  },
  {
    id: 23,
    title: 'Philips Sonicare Toothbrush',
    description: 'Electric toothbrush for superior cleaning',
    price: 89,
    rating: 4.6,
    category: 'beauty',
    thumbnail: getProductImage('Philips Sonicare Toothbrush')
  },
  {
    id: 24,
    title: 'Anker PowerCore 20000',
    description: 'High-capacity portable charger',
    price: 49,
    rating: 4.5,
    category: 'accessories',
    thumbnail: getProductImage('Anker PowerCore 20000')
  }
])

const searchQuery = ref('')
const activeFilter = ref<CategoryId | 'all'>('all')

const averageRating = computed(() => {
  if (!products.value.length) {
    return '0.0'
  }

  const total = products.value.reduce((sum, product) => sum + product.rating, 0)
  return (total / products.value.length).toFixed(1)
})

const onSearchUpdate = (val: string) => {
  searchQuery.value = val
}

const onFilterUpdate = (val: string) => {
  if (val === 'all' || categories.some((category) => category.id === val)) {
    activeFilter.value = val as CategoryId | 'all'
  }
}

const scrollToSection = (section: HTMLElement | null) => {
  section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const selectCategory = (categoryId: CategoryId) => {
  activeFilter.value = categoryId
  scrollToSection(productsSection.value)
}

const getCategoryCount = (categoryId: CategoryId) => {
  return products.value.filter((product) => product.category === categoryId).length
}

const filteredProducts = computed(() => {
  const normalizedQuery = searchQuery.value.trim().toLowerCase()

  return products.value.filter((product) => {
    const matchesSearch =
      !normalizedQuery ||
      product.title.toLowerCase().includes(normalizedQuery) ||
      product.description.toLowerCase().includes(normalizedQuery) ||
      categoryLabelById[product.category].includes(normalizedQuery)

    const matchesCategory =
      activeFilter.value === 'all' || product.category === activeFilter.value

    return matchesSearch && matchesCategory
  })
})
</script>
