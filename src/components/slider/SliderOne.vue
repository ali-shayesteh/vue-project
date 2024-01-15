<script setup>
import { ref } from 'vue'
import { register } from 'swiper/element/bundle'

import slideOne from '../../assets/img/slider2/slider1.jpg'
import slideTwo from '../../assets/img/slider2/slider2.jpg'
import slideThree from '../../assets/img/slider2/slider3.jpg'

const slides = ref([slideOne, slideTwo, slideThree])
const settings = ref({
  'slides-per-view': 1,
  'space-between': 10,
  'centered-slides': true,
  autoplay: {
    delay: 2000
  },
  pagination: true
})

register()
</script>

<template>
  <swiper-container v-bind="settings">
    <swiper-slide v-for="background in slides" :key="background">
      <div
        :style="{
          background: `url(${background}) center center no-repeat`,
          backgroundSize: 'cover'
        }"
        class="h-96 w-full rounded"
      />
    </swiper-slide>
  </swiper-container>
</template>
