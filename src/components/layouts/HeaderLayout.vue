<script setup>
import { ref } from 'vue'
const items = ref([
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Tables',
    path: '/tables'
  },
  {
    title: 'Sliders',
    path: '/sliders'
  },
  {
    title: 'Charts',
    path: '/charts'
  }
])
</script>

<template>
  <header class="bg-slate-800 py-3">
    <div class="main-container px-6 flex justify-between text-white">
      <nav>
        <ul class="flex gap-8 items-center">
          <li v-for="item in items" :key="item.path">
            <router-link
              class="text-sm underline-offset-4"
              :class="{ underline: $route.path === item.path }"
              :to="item.path"
              >{{ item.title }}</router-link
            >
          </li>
        </ul>
      </nav>
      <a href="https://vuejs.org/">
        <div class="flex items-center gap-2">
          <img class="w-6 h-6" src="../../assets/logo.svg" />
          Vuejs
        </div>
      </a>
    </div>
  </header>
</template>
