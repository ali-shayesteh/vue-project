<script setup>
import HeaderLayout from './HeaderLayout.vue'
import FooterLayout from './FooterLayout.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <HeaderLayout />
    <main class="main-container bg-white flex-grow py-12 px-10">
      <slot />
    </main>
    <FooterLayout />
  </div>
</template>
