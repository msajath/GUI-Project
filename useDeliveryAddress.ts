import { ref, computed } from 'vue'

export interface DeliveryAddress {
  id: string
  fullName: string
  email: string
  phone: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  isDefault: boolean
  createdAt: Date
}

const deliveryAddresses = ref<DeliveryAddress[]>([])
const defaultAddressId = ref<string | null>(null)

const loadAddresses = () => {
  const saved = localStorage.getItem('deliveryAddresses')
  const defaultId = localStorage.getItem('defaultAddressId')
  
  if (saved) {
    try {
      deliveryAddresses.value = JSON.parse(saved)
      defaultAddressId.value = defaultId
    } catch (e) {
      console.error('Failed to parse delivery addresses', e)
    }
  }
}

const saveAddresses = () => {
  localStorage.setItem('deliveryAddresses', JSON.stringify(deliveryAddresses.value))
  localStorage.setItem('defaultAddressId', defaultAddressId.value || '')
}

const addAddress = (address: Omit<DeliveryAddress, 'id' | 'createdAt'>) => {
  const newAddress: DeliveryAddress = {
    ...address,
    id: `addr_${Date.now()}`,
    createdAt: new Date()
  }
  
  // If this is the first address or marked as default, set it as default
  if (deliveryAddresses.value.length === 0 || address.isDefault) {
    defaultAddressId.value = newAddress.id
    deliveryAddresses.value.forEach(addr => {
      addr.isDefault = false
    })
    newAddress.isDefault = true
  }
  
  deliveryAddresses.value.push(newAddress)
  saveAddresses()
  return newAddress
}

const updateAddress = (id: string, updates: Partial<DeliveryAddress>) => {
  const address = deliveryAddresses.value.find(a => a.id === id)
  if (address) {
    Object.assign(address, updates)
    if (updates.isDefault) {
      defaultAddressId.value = id
      deliveryAddresses.value.forEach(addr => {
        if (addr.id !== id) addr.isDefault = false
      })
    }
    saveAddresses()
  }
  return address
}

const deleteAddress = (id: string) => {
  deliveryAddresses.value = deliveryAddresses.value.filter(a => a.id !== id)
  if (defaultAddressId.value === id) {
    defaultAddressId.value = deliveryAddresses.value.length > 0 ? deliveryAddresses.value[0].id : null
  }
  saveAddresses()
}

const setDefaultAddress = (id: string) => {
  const address = deliveryAddresses.value.find(a => a.id === id)
  if (address) {
    deliveryAddresses.value.forEach(a => {
      a.isDefault = false
    })
    address.isDefault = true
    defaultAddressId.value = id
    saveAddresses()
  }
}

const getDefaultAddress = computed(() => {
  return deliveryAddresses.value.find(a => a.id === defaultAddressId.value) || null
})

const getAllAddresses = computed(() => {
  return deliveryAddresses.value
})

// Initialize addresses on load
loadAddresses()

export function useDeliveryAddress() {
  return {
    deliveryAddresses,
    defaultAddressId,
    addAddress,
    updateAddress,
    deleteAddress,
    setDefaultAddress,
    getDefaultAddress,
    getAllAddresses,
    loadAddresses,
    saveAddresses
  }
}
