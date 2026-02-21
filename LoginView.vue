<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 animate-fade-in">
    <div class="w-full max-w-md p-8 border rounded-lg shadow-2xl bg-white/90 backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
      <h1 class="text-2xl font-bold mb-6 text-center flex items-center justify-center text-purple-700">
        <UserIcon class="w-6 h-6 mr-2 text-purple-600 animate-pulse" />
        Login
      </h1>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div class="animate-slide-in-up">
          <label class="block mb-2 text-gray-700 font-medium">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full p-2 border border-purple-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            required
          />
        </div>

        <div class="animate-slide-in-up animation-delay-200">
          <label class="block mb-2 text-gray-700 font-medium">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full p-2 border border-purple-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            required
          />
        </div>

        <button type="submit" class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce-on-hover">
          <ArrowRightOnRectangleIcon class="w-5 h-5 mr-2" />
          Sign In
        </button>
      </form>

      <p class="text-center mt-4 text-gray-600">
        Don't have an account?
        <router-link to="/signup" class="text-purple-600 hover:text-purple-800 transition-colors duration-300">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { UserIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'

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

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-in-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}

.animate-slide-in-up {
  animation: slide-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animate-bounce-on-hover:hover {
  animation: bounce 0.6s ease-in-out;
}
</style>
