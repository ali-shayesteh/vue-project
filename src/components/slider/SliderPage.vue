<script setup>
import PageLayout from '../layouts/PageLayout.vue'
import SliderOne from './SliderOne.vue'
import SliderTwo from './SliderTwo.vue'
import { DocumentArrowUpIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <PageLayout title="Sliders">
    <template v-slot:Icon><DocumentArrowUpIcon class="w-6 h-6" /></template>

    <SliderOne />

    <SliderTwo />
  </PageLayout>
</template>

<style scoped></style>
