<template>
  <div class="mt-8">
    <h3 class="text-xl font-semibold mb-6">Delivery Addresses</h3>

    <!-- Saved Addresses -->
    <div v-if="getAllAddresses.length > 0" class="mb-8">
      <h4 class="font-semibold text-lg mb-4">Your Addresses</h4>
      <div class="space-y-3">
        <div
          v-for="address in getAllAddresses"
          :key="address.id"
          class="border border-gray-200 rounded-lg p-4"
          :class="{ 'border-indigo-500 bg-indigo-50': address.isDefault }"
        >
          <div class="flex justify-between items-start mb-2">
            <div>
              <p class="font-semibold">{{ address.fullName }}</p>
              <p class="text-sm text-gray-600">
                {{ address.street }}, {{ address.city }}, {{ address.state }} {{ address.zipCode }}
              </p>
              <p class="text-sm text-gray-600">{{ address.country }}</p>
              <p class="text-sm text-gray-600">{{ address.email }} | {{ address.phone }}</p>
            </div>
            <div class="flex gap-2">
              <button
                v-if="!address.isDefault"
                @click="setDefaultAddress(address.id)"
                class="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Set Default
              </button>
              <span v-else class="text-sm px-3 py-1 bg-green-500 text-white rounded">
                Default
              </span>
              <button
                @click="deleteAddress(address.id)"
                class="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add New Address Form -->
    <div class="border border-gray-200 rounded-lg p-6 bg-white">
      <h4 class="font-semibold text-lg mb-4">Add New Address</h4>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            v-model="form.fullName"
            type="text"
            placeholder="Full Name"
            required
            class="border border-gray-300 rounded px-4 py-2"
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            required
            class="border border-gray-300 rounded px-4 py-2"
          />
          <input
            v-model="form.phone"
            type="tel"
            placeholder="Phone Number"
            required
            class="border border-gray-300 rounded px-4 py-2"
          />
          <input
            v-model="form.country"
            type="text"
            placeholder="Country"
            required
            class="border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <input
          v-model="form.street"
          type="text"
          placeholder="Street Address"
          required
          class="w-full border border-gray-300 rounded px-4 py-2"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            v-model="form.city"
            type="text"
            placeholder="City"
            required
            class="border border-gray-300 rounded px-4 py-2"
          />
          <input
            v-model="form.state"
            type="text"
            placeholder="State/Province"
            required
            class="border border-gray-300 rounded px-4 py-2"
          />
          <input
            v-model="form.zipCode"
            type="text"
            placeholder="Zip/Postal Code"
            required
            class="border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <label class="flex items-center gap-2">
          <input
            v-model="form.isDefault"
            type="checkbox"
            class="w-4 h-4"
          />
          <span class="text-gray-700">Set as default address</span>
        </label>

        <button
          type="submit"
          class="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
        >
          Add Address
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useDeliveryAddress, type DeliveryAddress } from './useDeliveryAddress'

const { addAddress, deleteAddress, setDefaultAddress, getAllAddresses } = useDeliveryAddress()

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  country: 'USA',
  isDefault: false
})

const handleSubmit = () => {
  addAddress({
    fullName: form.fullName,
    email: form.email,
    phone: form.phone,
    street: form.street,
    city: form.city,
    state: form.state,
    zipCode: form.zipCode,
    country: form.country,
    isDefault: form.isDefault
  })

  // Reset form
  form.fullName = ''
  form.email = ''
  form.phone = ''
  form.street = ''
  form.city = ''
  form.state = ''
  form.zipCode = ''
  form.country = 'USA'
  form.isDefault = false
}
</script>
