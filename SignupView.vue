<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="w-full max-w-md p-8 border rounded">
      <h1 class="text-2xl font-bold mb-6 text-center">Sign Up</h1>

      <form @submit.prevent="handleSignup" class="space-y-4">
        <div>
          <label class="block mb-2">Full Name</label>
          <input
            v-model="fullName"
            type="text"
            class="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label class="block mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label class="block mb-2">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full p-2 border rounded"
            required
          />
        </div>

        <button type="submit" class="w-full bg-green-500 text-white py-2 rounded">
          Create Account
        </button>
      </form>

      <p class="text-center mt-4">
        Already have an account?
        <router-link to="/login" class="text-blue-500">Sign in</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const fullName = ref('')
const email = ref('')
const password = ref('')

const handleSignup = () => {
  if (!fullName.value || !email.value || !password.value) {
    alert('Please fill in all fields')
    return
  }

  console.log('Signup attempt:', { name: fullName.value, email: email.value })
  localStorage.setItem('isLoggedIn', 'true')
  localStorage.setItem('userName', fullName.value)
  localStorage.setItem('userEmail', email.value)

  router.push('/')
}
</script>