<script setup>
import { DocumentIcon } from '@heroicons/vue/24/outline'
defineProps(['title'])
</script>

<template>
  <h2 class="text-slate-600 text-xl flex gap-1 items-center">
    <DocumentIcon class="w-5 h-5 text-slate-400 mt-1" /> {{ title }}
  </h2>
</template>

<style scoped></style>
