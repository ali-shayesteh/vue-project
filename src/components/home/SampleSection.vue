<script setup>
import { TEXT_SAMPLE } from '../../constants/texts'
import ChartMain from '../charts/ChartMain.vue'
import Stockchart from '../charts/StockChart.vue'
import SliderOne from '../slider/SliderOne.vue'
import TableOne from '../tables/TableOne.vue'
import HeadingTwo from '../typography/HeadingTwo.vue'

import pieChartOptions from '../charts/pieChartOptions'
import splineChartOptions from '../charts/splineChartOptions'
import barChartOptions from '../charts/barChartOptions'
</script>

<template>
  <div className="flex gap-6 flex-col mt-6">
    <HeadingTwo :title="TEXT_SAMPLE.slider" />
    <SliderOne />
    <HeadingTwo :title="TEXT_SAMPLE.chart" />
    <div class="flex-col md:flex-row flex gap-6">
      <div class="md:basis-1/2">
        <ChartMain :chartOptions="pieChartOptions" />
      </div>
      <div class="md:basis-1/2">
        <ChartMain :chartOptions="barChartOptions" />
      </div>
    </div>

    <Stockchart />

    <HeadingTwo :title="TEXT_SAMPLE.table" />
    <TableOne />

    <ChartMain :chartOptions="splineChartOptions" />
  </div>
</template>

<style scoped></style>
