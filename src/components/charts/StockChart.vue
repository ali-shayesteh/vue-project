<script setup>
import { ref } from 'vue'

import { useFetch } from '../../composable/fetch'

const { data, error } = useFetch('https://demo-live-data.highcharts.com/aapl-ohlc.json')

const chartOptions = ref({
  chart: {
    type: 'candlestick'
  },

  credits: {
    enabled: false
  },

  title: {
    text: 'Sample stock chart'
  },
  series: [
    {
      data: data
    }
  ]
})
</script>

<template>
  <highcharts :constructor-type="'stockChart'" :options="chartOptions" />
</template>
