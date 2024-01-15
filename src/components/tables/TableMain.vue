<script setup>
import { defineProps, reactive } from 'vue'
import {
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useVueTable
} from '@tanstack/vue-table'

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/vue/24/outline'

import TableFilter from './TableFilter.vue'

import { ref } from 'vue'

const props = defineProps(['defaultData', 'columns'])

const data = ref(props.defaultData)

const { columns } = props

const INITIAL_PAGE_INDEX = 0

const goToPageNumber = ref(INITIAL_PAGE_INDEX + 1)

const pageSizes = [10, 20, 30, 40, 50]

const table = useVueTable({
  get data() {
    return data.value
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getFilteredRowModel: getFilteredRowModel()
})

function handleGoToPage(e) {
  const page = e.target.value ? Number(e.target.value) - 1 : 0
  goToPageNumber.value = page + 1
  table.setPageIndex(page)
}

function handlePageSizeChange(e) {
  table.setPageSize(Number(e.target.value))
}
</script>

<template>
  <div class="border rounded-lg w-full overflow-auto">
    <table class="table w-full text-sm">
      <thead>
        <tr
          class="table-row border-b"
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <th
            class="table-cell py-1 font-bold"
            v-for="header in headerGroup.headers"
            :key="header.id"
            :colSpan="header.colSpan"
          >
            <div v-if="!header.isPlaceholder" class="font-bold">
              <FlexRender :render="header.column.columnDef.header" :props="header.getContext()" />
              <div v-if="header.column.getCanFilter()">
                <TableFilter :column="header.column" :table="table" />
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="table-row border-b odd:bg-slate-50 hover:bg-slate-100"
          v-for="row in table.getRowModel().rows"
          :key="row.id"
        >
          <td class="table-cell py-1 px-2" v-for="cell in row.getVisibleCells()" :key="cell.id">
            <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr v-for="footerGroup in table.getFooterGroups()" :key="footerGroup.id">
          <th v-for="header in footerGroup.headers" :key="header.id" :colSpan="header.colSpan">
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.footer"
              :props="header.getContext()"
            />
          </th>
        </tr>
      </tfoot>
    </table>
    <div class="flex justify-between items-center text-slate-700 p-3">
      <div class="flex items-center gap-2">
        <button
          class="border rounded p-1"
          @click="() => table.setPageIndex(0)"
          :disabled="!table.getCanPreviousPage()"
        >
          <ChevronDoubleLeftIcon
            :class="`w-5 h-5 ${!table.getCanPreviousPage() ? 'text-slate-300' : 'text-slate-700'}`"
          />
        </button>
        <button
          class="border rounded p-1"
          @click="() => table.previousPage()"
          :disabled="!table.getCanPreviousPage()"
        >
          <ChevronLeftIcon
            :class="`w-5 h-5 ${!table.getCanPreviousPage() ? 'text-slate-300' : 'text-slate-700'}`"
          />
        </button>

        <span class="flex items-center gap-1 border rounded py-1 px-2 text-sm">
          <span>
            {{ table.getState().pagination.pageIndex + 1 }} of
            {{ table.getPageCount() }}
          </span>
        </span>

        <button
          class="border rounded p-1"
          @click="() => table.nextPage()"
          :disabled="!table.getCanNextPage()"
        >
          <ChevronRightIcon
            :class="`w-5 h-5 ${!table.getCanNextPage() ? 'text-slate-300' : 'text-slate-700'}`"
          />
        </button>
        <button
          class="border rounded p-1"
          @click="() => table.setPageIndex(table.getPageCount() - 1)"
          :disabled="!table.getCanNextPage()"
        >
          <ChevronDoubleRightIcon
            :class="`w-5 h-5 ${!table.getCanNextPage() ? 'text-slate-300' : 'text-slate-700'}`"
          />
        </button>
      </div>
      <div class="flex items-center gap-2">
        <span class="flex items-center gap-1">
          Go to page:
          <input
            type="number"
            :value="goToPageNumber"
            @change="handleGoToPage"
            class="py-1 px-2 border rounded bg-white w-16"
          />
        </span>
        <select
          class="py-1 px-2 border rounded bg-white"
          :value="table.getState().pagination.pageSize"
          @change="handlePageSizeChange"
        >
          <option :key="pageSize" :value="pageSize" v-for="pageSize in pageSizes">
            Show {{ pageSize }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
