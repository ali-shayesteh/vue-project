<script setup>
import { ref } from 'vue'
import { register } from 'swiper/element/bundle'

import abstract01 from '../../assets/img/slider1/abstract01.jpg'
import abstract02 from '../../assets/img/slider1/abstract02.jpg'
import abstract03 from '../../assets/img/slider1/abstract03.jpg'
import abstract04 from '../../assets/img/slider1/abstract04.jpg'

const slides = ref([abstract01, abstract02, abstract03, abstract04])

const settings = ref({
  'slides-per-view': 2,
  'space-between': 10,
  'centered-slides': false,
  autoplay: {
    delay: 2000
  },
  navigation: true,
  pagination: true
})

register()
</script>

<template>
  <div className="border rounded-lg p-10 bg-slate-200">
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
  </div>
</template>
