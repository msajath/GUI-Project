<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8">Checkout</h1>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Checkout Content -->
      <div class="lg:col-span-2">
        <!-- Cart Items Review -->
        <section class="bg-white p-6 rounded-lg border border-gray-200 mb-8">
          <h2 class="text-2xl font-semibold mb-6">Order Review</h2>
          
          <div v-if="cart.length > 0" class="space-y-4 mb-6">
            <div
              v-for="item in cart"
              :key="item.id"
              class="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
            >
              <div class="flex-1">
                <p class="font-semibold">{{ item.title }}</p>
                <p class="text-sm text-gray-600">Quantity: {{ item.quantity }}</p>
              </div>
              <div class="text-right">
                <p class="font-semibold">${{ (item.price * item.quantity).toFixed(2) }}</p>
              </div>
            </div>
          </div>

          <div v-else class="text-center py-8">
            <p class="text-gray-600 mb-4">Your cart is empty</p>
            <router-link
              to="/"
              class="inline-block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              Continue Shopping
            </router-link>
          </div>
        </section>

        <!-- Delivery Address Selection -->
        <section class="bg-white p-6 rounded-lg border border-gray-200 mb-8">
          <h2 class="text-2xl font-semibold mb-6">Delivery Address</h2>

          <!-- Saved Addresses -->
          <div v-if="getAllAddresses.length > 0" class="mb-6">
            <p class="font-semibold mb-4">Select from saved addresses:</p>
            <div class="space-y-3 mb-6">
              <label
                v-for="address in getAllAddresses"
                :key="address.id"
                class="flex items-start gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-indigo-600"
                :class="{ 'border-indigo-600 bg-indigo-50': selectedAddressId === address.id }"
              >
                <input
                  v-model="selectedAddressId"
                  :value="address.id"
                  type="radio"
                  name="address"
                  class="mt-1"
                />
                <div class="flex-1">
                  <p class="font-semibold">{{ address.fullName }}</p>
                  <p class="text-sm text-gray-600">{{ address.street }}</p>
                  <p class="text-sm text-gray-600">
                    {{ address.city }}, {{ address.state }} {{ address.zipCode }}
                  </p>
                  <p class="text-sm text-gray-600">{{ address.country }}</p>
                  <p class="text-xs text-blue-600 mt-1">{{ address.phone }}</p>
                </div>
              </label>
            </div>
          </div>

          <!-- Add New Address -->
          <div class="border-t pt-6">
            <p class="font-semibold mb-4">Add new delivery address:</p>
            <form @submit.prevent="handleAddAddress" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  v-model="newAddress.fullName"
                  type="text"
                  placeholder="Full Name"
                  required
                  class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-600"
                />
                <input
                  v-model="newAddress.email"
                  type="email"
                  placeholder="Email"
                  required
                  class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-600"
                />
                <input
                  v-model="newAddress.phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-600"
                />
                <input
                  v-model="newAddress.country"
                  type="text"
                  placeholder="Country"
                  required
                  class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-600"
                />
              </div>

              <input
                v-model="newAddress.street"
                type="text"
                placeholder="Street Address"
                required
                class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-600"
              />

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  v-model="newAddress.city"
                  type="text"
                  placeholder="City"
                  required
                  class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-600"
                />
                <input
                  v-model="newAddress.state"
                  type="text"
                  placeholder="State/Province"
                  required
                  class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-600"
                />
                <input
                  v-model="newAddress.zipCode"
                  type="text"
                  placeholder="Zip/Postal Code"
                  required
                  class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-600"
                />
              </div>

              <label class="flex items-center gap-2">
                <input
                  v-model="newAddress.isDefault"
                  type="checkbox"
                  class="w-4 h-4"
                />
                <span class="text-gray-700">Use as delivery address</span>
              </label>

              <button
                type="submit"
                class="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Add Address
              </button>
            </form>
          </div>
        </section>

        <!-- Shipping Method -->
        <section class="bg-white p-6 rounded-lg border border-gray-200 mb-8">
          <h2 class="text-2xl font-semibold mb-6">Shipping Method</h2>

          <div class="space-y-3">
            <label class="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-indigo-600"
              :class="{ 'border-indigo-600 bg-indigo-50': shippingMethod === 'standard' }"
            >
              <input
                v-model="shippingMethod"
                value="standard"
                type="radio"
                name="shipping"
                class="w-4 h-4"
              />
              <div class="flex-1">
                <p class="font-semibold">Standard Shipping</p>
                <p class="text-sm text-gray-600">5-7 business days</p>
              </div>
              <p class="font-semibold">FREE</p>
            </label>

            <label class="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-indigo-600"
              :class="{ 'border-indigo-600 bg-indigo-50': shippingMethod === 'express' }"
            >
              <input
                v-model="shippingMethod"
                value="express"
                type="radio"
                name="shipping"
                class="w-4 h-4"
              />
              <div class="flex-1">
                <p class="font-semibold">Express Shipping</p>
                <p class="text-sm text-gray-600">2-3 business days</p>
              </div>
              <p class="font-semibold">$19.99</p>
            </label>

            <label class="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-indigo-600"
              :class="{ 'border-indigo-600 bg-indigo-50': shippingMethod === 'overnight' }"
            >
              <input
                v-model="shippingMethod"
                value="overnight"
                type="radio"
                name="shipping"
                class="w-4 h-4"
              />
              <div class="flex-1">
                <p class="font-semibold">Overnight Shipping</p>
                <p class="text-sm text-gray-600">Next business day</p>
              </div>
              <p class="font-semibold">$39.99</p>
            </label>
          </div>
        </section>
      </div>

      <!-- Order Summary Sidebar -->
      <aside class="lg:col-span-1">
        <div class="bg-white p-6 rounded-lg border border-gray-200 sticky top-24">
          <h3 class="text-xl font-semibold mb-6">Order Summary</h3>

          <div class="space-y-4 mb-6 pb-6 border-b">
            <div class="flex justify-between">
              <span class="text-gray-600">Subtotal:</span>
              <span class="font-semibold">${{ cartTotalPrice.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Shipping:</span>
              <span class="font-semibold">${{ shippingCost.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Tax (estimated):</span>
              <span class="font-semibold">${{ estimatedTax.toFixed(2) }}</span>
            </div>
          </div>

          <div class="flex justify-between items-center mb-6 text-lg">
            <span class="font-semibold">Total:</span>
            <span class="font-bold text-indigo-600">${{ orderTotal.toFixed(2) }}</span>
          </div>

          <button
            @click="placeOrder"
            :disabled="!isCheckoutValid"
            class="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {{ isCheckoutValid ? 'Place Order' : 'Select Address & Items' }}
          </button>

          <router-link
            to="/"
            class="block text-center mt-4 text-indigo-600 hover:text-indigo-700"
          >
            Continue Shopping
          </router-link>
        </div>
      </aside>
    </div>

    <!-- Order Success Modal -->
    <div v-if="orderPlaced" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg p-8 max-w-md text-center">
        <div class="text-5xl mb-4">✓</div>
        <h2 class="text-2xl font-bold mb-2">Order Placed Successfully!</h2>
        <p class="text-gray-600 mb-2">Order ID: {{ orderId }}</p>
        <p class="text-gray-600 mb-6">You'll receive a confirmation email shortly.</p>
        <router-link
          to="/"
          class="inline-block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          Continue Shopping
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useCart } from './useCart'
import { useDeliveryAddress } from './useDeliveryAddress'

const { cart, cartTotalPrice } = useCart()
const { addAddress, getAllAddresses } = useDeliveryAddress()

const selectedAddressId = ref<string>('')
const shippingMethod = ref<'standard' | 'express' | 'overnight'>('standard')
const orderPlaced = ref(false)
const orderId = ref('')

const newAddress = reactive({
  fullName: '',
  email: '',
  phone: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  country: 'USA',
  isDefault: true
})

const shippingCosts: Record<string, number> = {
  standard: 0,
  express: 19.99,
  overnight: 39.99
}

const shippingCost = computed(() => {
  return shippingCosts[shippingMethod.value] || 0
})

const estimatedTax = computed(() => {
  return cartTotalPrice.value * 0.08 // 8% tax
})

const orderTotal = computed(() => {
  return cartTotalPrice.value + shippingCost.value + estimatedTax.value
})

const isCheckoutValid = computed(() => {
  return cart.length > 0 && (selectedAddressId.value || newAddress.fullName)
})

const handleAddAddress = () => {
  const addressId = addAddress({
    fullName: newAddress.fullName,
    email: newAddress.email,
    phone: newAddress.phone,
    street: newAddress.street,
    city: newAddress.city,
    state: newAddress.state,
    zipCode: newAddress.zipCode,
    country: newAddress.country,
    isDefault: newAddress.isDefault
  }).id

  selectedAddressId.value = addressId

  // Reset form
  newAddress.fullName = ''
  newAddress.email = ''
  newAddress.phone = ''
  newAddress.street = ''
  newAddress.city = ''
  newAddress.state = ''
  newAddress.zipCode = ''
  newAddress.country = 'USA'
  newAddress.isDefault = true
}

const placeOrder = () => {
  if (!isCheckoutValid.value) return

  // Generate order ID
  orderId.value = `ORD-${Date.now()}`

  // Here you would typically send the order to a backend
  console.log({
    orderId: orderId.value,
    items: cart,
    addressId: selectedAddressId.value,
    shippingMethod: shippingMethod.value,
    total: orderTotal.value
  })

  orderPlaced.value = true

  // Redirect after 3 seconds
  setTimeout(() => {
    // Clear cart and redirect
    window.location.href = '/'
  }, 3000)
}
</script>
