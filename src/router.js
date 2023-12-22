import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import HelloWorld from './components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'Home page',
    component: HomePage
  },
  {
    path: '/hello',
    name: 'hello world page',
    component: HelloWorld
  }
]

const router = createRouter({ history: createWebHistory('vue-project'), routes })

export default router