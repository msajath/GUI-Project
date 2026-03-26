import { ref, computed } from 'vue'
import type { Product } from './Product'

export interface CartItem extends Product {
  quantity: number
}

const cart = ref<CartItem[]>([])

const loadCart = () => {
  const saved = localStorage.getItem('cart')
  if (saved) {
    try {
      cart.value = JSON.parse(saved)
    } catch (e) {
      console.error('Failed to parse cart JSON', e)
    }
  }
}

const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

const addToCart = (product: Product) => {
  const existingItem = cart.value.find(item => item.id === product.id)
  if (existingItem) {
    existingItem.quantity++
  } else {
    cart.value.push({
      ...product,
      quantity: 1
    })
  }
  saveCart()
}

const removeFromCart = (id: number) => {
  cart.value = cart.value.filter(item => item.id !== id)
  saveCart()
}

const cartTotalCount = computed(() => {
  return cart.value.reduce((total, item) => total + item.quantity, 0)
})

const cartTotalPrice = computed(() => {
  return cart.value.reduce((total, item) => total + item.price * item.quantity, 0)
})

// Initialize cart state
loadCart()

export function useCart() {
  return {
    cart,
    addToCart,
    removeFromCart,
    cartTotalCount,
    cartTotalPrice
  }
}
