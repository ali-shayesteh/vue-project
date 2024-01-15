<script setup>
defineProps(['chartOptions'])
</script>

<template>
  <highcharts :options="chartOptions" />
</template>
