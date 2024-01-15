<script setup>
import { createColumnHelper } from '@tanstack/vue-table'
import TableMain from './TableMain.vue'
import { makeData } from './makeData'

const defaultData = makeData(100)

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.group({
    header: 'Name',
    columns: [
      columnHelper.accessor('firstName', {
        cell: (info) => info.getValue(),
        header: () => 'First Name'
      }),
      columnHelper.accessor((row) => row.lastName, {
        id: 'lastName',
        cell: (info) => info.getValue(),
        header: () => 'Last Name'
      })
    ]
  }),
  columnHelper.group({
    header: 'Info',
    columns: [
      columnHelper.accessor('age', {
        header: () => 'Age'
      }),
      columnHelper.group({
        header: 'More Info',
        columns: [
          columnHelper.accessor('visits', {
            header: () => 'Visits'
          }),
          columnHelper.accessor('status', {
            header: 'Status'
          }),
          columnHelper.accessor('progress', {
            header: 'Profile Progress'
          })
        ]
      })
    ]
  })
]
</script>

<template>
  <TableMain :columns="columns" :defaultData="defaultData" />
</template>
