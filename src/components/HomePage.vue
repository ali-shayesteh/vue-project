<script setup>
import { ref } from 'vue'
const texts = ref({
  title: 'Implementation, comparison and performance analysis of Reactjs and Vuejs frameworks',
  description:
    'Comparing performance and implementation of web pages using modern JavaScript libraries by implementing the same pages including different web elements (sliders, charts, etc.) in reactjs and vuejs.',

  date: 'December 2023',
  university: 'Shiraz university, Faulty of e-learning',
  professor: 'Professor koorush ziarati',
  name: 'Ali Shayesteh Sadafian',
  myTitle: 'Bachelor\'s student in software engineering'
})
</script>

<template>
  <div class="flex-col md:flex-row flex gap-10 text-slate-700">
    <div class="basis-2/3">
      <h1 class="text-3xl w-5/6">
        {{ texts.title }}
      </h1>
      <p class="text-slate-400 text-sm my-4 w-5/6">{{ texts.description }}</p>
      <div>{{ texts.date }}</div>
      <div class="w-24 border-t border-slate-300 mt-2 mb-6" />
      <div class="flex gap-6 items-center">
        <div>
          <img src='../assets/img/shiraz-university-logo.png' />
        </div>
        <div>
          <h3 class="text-xl">{{ texts.university }}</h3>
          <h3 class="text-xl">{{ texts.professor }}</h3>
        </div>
      </div>
    </div>
    <div class="basis-1/3 flex gap-3">
      <div
        class="rounded-full border-slate-200 w-12 h-12 border-2 flex justify-center items-center"
      >
        <img class="rounded-full" src="../assets/img/avatar1.png" />
      </div>
      <div>
        <div>
          <h3 class="text-lg">{{ texts.name }}</h3>
          <div class="text-sm text-slate-400">{{ texts.myTitle }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
