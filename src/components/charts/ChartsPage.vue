<script setup>
import PageLayout from '../layouts/PageLayout.vue'

import { DocumentArrowUpIcon } from '@heroicons/vue/24/outline'
import StockChart from './StockChart.vue'
import ChartMain from './ChartMain.vue'
import pieChartOptions from './pieChartOptions'
import splineChartOptions from './splineChartOptions'
import barChartOptions from './barChartOptions'
</script>

<template>
  <PageLayout title="Charts">
    <template v-slot:Icon><DocumentArrowUpIcon class="w-6 h-6" /></template>
    <StockChart />
    <div class="flex-col md:flex-row flex gap-6">
      <div class="md:basis-1/2">
        <ChartMain :chartOptions="pieChartOptions" />
      </div>
      <div class="md:basis-1/2">
        <ChartMain :chartOptions="barChartOptions" />
      </div>
    </div>
    <ChartMain :chartOptions="splineChartOptions" />
  </PageLayout>
</template>

<style scoped></style>
