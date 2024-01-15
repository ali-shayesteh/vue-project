import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/home/HomePage.vue'
import SliderPage from './components/slider/SliderPage.vue'
import ChartsPage from './components/charts/ChartsPage.vue'
import TablePage from './components/tables/TablePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home page',
    component: HomePage
  },
  {
    path: '/sliders',
    name: 'Slider page',
    component: SliderPage
  },
  {
    path: '/charts',
    name: 'Charts page',
    component: ChartsPage
  },
  {
    path: '/tables',
    name: 'Tables page',
    component: TablePage
  }
]

const router = createRouter({ history: createWebHistory('vue-project'), routes })

export default router
