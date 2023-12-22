<script setup>
import { ref } from 'vue'
const items = ref([
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Hello',
    path: '/hello',
  },
  // {
  //   title: 'Charts',
  //   path: '/charts',
  // },
  // {
  //   title: 'Table',
  //   path: '/table',
  //   active: false
  // }
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
      <div class="flex items-center gap-2">
        <!-- <img src={reactIcon} /> -->
        Vuejs
      </div>
    </div>
  </header>
</template>
