<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="w-full max-w-md p-8 border rounded">
      <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>

      <form @submit.prevent="handleLogin" class="space-y-4">
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

        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded">
          Sign In
        </button>
      </form>

      <p class="text-center mt-4">
        Don't have an account?
        <router-link to="/signup" class="text-blue-500">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const handleLogin = () => {
  if (!email.value || !password.value) {
    alert('Please fill in all fields')
    return
  }

  console.log('Login attempt:', { email: email.value })
  localStorage.setItem('isLoggedIn', 'true')
  localStorage.setItem('userEmail', email.value)

  router.push('/')
}
</script>
