import { createApp } from 'vue'
import App from './App.vue'
import PageHome from '@/components/PageHome'
import * as VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: PageHome
  }
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes // short for `routes: routes`
})

const forumApp = createApp(App)

forumApp.mount('#app')
forumApp.use(router)
