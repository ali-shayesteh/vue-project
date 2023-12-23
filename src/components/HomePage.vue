<script setup>
import { DocumentIcon } from '@heroicons/vue/24/outline'
import { TEXT_HOME as TEXT, HOME_TABLE } from '../constants/texts/home'
</script>

<template>
  <div class="flex-col md:flex-row flex gap-10 text-slate-700">
    <div class="basis-2/3">
      <h1 class="text-3xl w-5/6">
        {{ TEXT.title }}
      </h1>
      <p class="text-slate-400 text-sm my-4 w-5/6">{{ TEXT.description }}</p>
      <div class="text-base">{{ TEXT.date }}</div>
      <div class="w-24 border-t border-slate-300 mt-2 mb-6" />
      <div class="flex gap-6 items-center">
        <div>
          <img src="../assets/img/shiraz-university-logo.png" />
        </div>
        <div>
          <h3 class="text-xl">{{ TEXT.university }}</h3>
          <h3 class="text-xl">{{ TEXT.professor }}</h3>
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
          <h3 class="text-lg">{{ TEXT.name }}</h3>
          <div class="text-sm text-slate-400">{{ TEXT.myTitle }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="border border-slate-300 rounded-xl p-8 mt-8">
    <h2 class="text-slate-500 text-lg flex gap-1 items-center">
      <DocumentIcon class="w-5 h-5 text-slate-400" /> {{ TEXT.tableTitle }}
    </h2>
    <div class="mt-6 border rounded-lg overflow-hidden">
      <table class="lib-table">
        <tbody>
          <tr class="bg-slate-50">
            <td></td>
            <td><img src="../assets/react.svg" class="w-8 h-8" /></td>
            <td><img src="../assets/logo.svg" class="w-8 h-8" /></td>
          </tr>
          <tr v-for="row in HOME_TABLE" :key="row.heading">
            <th>{{ row.heading }}</th>
            <td v-for="item in row.values" :key="item.link">
              <a target="_blank" :href="item.link" class="text-fuchsia-700 flex items-center gap-1"
                >{{ item.name }}
              </a>
              <span class="text-sm text-slate-500">{{ item.npm }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
