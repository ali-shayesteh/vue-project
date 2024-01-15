<script setup>
import PageLayout from '../layouts/PageLayout.vue'
import { DocumentArrowUpIcon } from '@heroicons/vue/24/outline'
import TableOne from './TableOne.vue'
</script>

<template>
  <PageLayout title="Tables">
    <template v-slot:Icon><DocumentArrowUpIcon class="w-6 h-6" /></template>

    <TableOne />
  </PageLayout>
</template>

<style scoped></style>
