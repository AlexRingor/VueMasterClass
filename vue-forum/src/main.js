import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

const forumApp = createApp(App)

forumApp.use(router)
forumApp.mount('#app')
