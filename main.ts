import { createApp } from 'vue'
import App from './App.vue'
import router from './index.ts'
import './style.css'
import { initializeTheme } from './useTheme'

initializeTheme()

createApp(App).use(router).mount('#app')
