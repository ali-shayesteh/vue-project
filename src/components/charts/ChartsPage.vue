<script setup>
import PageLayout from '../layouts/PageLayout.vue'

import { DocumentArrowUpIcon } from '@heroicons/vue/24/outline'
import StockChart from './StockChart.vue'
</script>

<template>
  <PageLayout title="Charts">
    <template v-slot:Icon><DocumentArrowUpIcon class="w-6 h-6" /></template>
    <StockChart />
  </PageLayout>
</template>

<style scoped></style>
