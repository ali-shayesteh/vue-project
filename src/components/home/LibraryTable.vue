<script setup>
import { TEXT_HOME as TEXT, HOME_TABLE } from '../../constants/texts'
import HeadingTwo from '../typography/HeadingTwo.vue'
</script>

<template>
  <div className="border-t border-slate-300 pt-8 mt-8">
    <HeadingTwo :title="TEXT.tableTitle" />

    <div class="mt-6 border rounded-lg overflow-hidden">
      <table class="lib-table">
        <tbody>
          <tr class="bg-slate-50">
            <td></td>
            <td><img src="../../assets/react.svg" class="w-8 h-8" /></td>
            <td><img src="../../assets/logo.svg" class="w-8 h-8" /></td>
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
