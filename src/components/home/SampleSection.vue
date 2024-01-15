<script setup>
import { TEXT_SAMPLE } from '../../constants/texts'
import Stockchart from '../charts/stockchart.vue'
import SliderOne from '../slider/SliderOne.vue'
import TableOne from '../tables/TableOne.vue'
import HeadingTwo from '../typography/HeadingTwo.vue'
</script>

<template>
  <div className="flex gap-6 flex-col mt-6">
    <HeadingTwo :title="TEXT_SAMPLE.slider" />
    <SliderOne />
    <HeadingTwo :title="TEXT_SAMPLE.chart" />
    <Stockchart />
    <HeadingTwo :title="TEXT_SAMPLE.table" />
    <TableOne />
  </div>
</template>

<style scoped></style>
