<script setup>
const props = defineProps(['column', 'table'])

const firstValue = props.table.getPreFilteredRowModel().flatRows[0]?.getValue(props.column.id)

const columnFilterValue = props.column.getFilterValue()
</script>

<template>
  <div v-if="typeof firstValue === 'number'" class="flex space-x-1">
    <input
      type="number"
      :value="columnFilterValue?.[0] ?? ''"
      @input="(e) => column.setFilterValue((old) => [e.target.value, old?.[1]])"
      placeholder="Min"
      class="w-16 px-2 py-1 border rounded"
    />
    <input
      type="number"
      :value="columnFilterValue?.[0] ?? ''"
      @input="(e) => column.setFilterValue((old) => [old?.[0], e.target.value])"
      placeholder="Max"
      class="w-16 px-2 py-1 border rounded"
    />
  </div>
  <div v-else>
    <input
      type="text"
      :value="columnFilterValue ?? ''"
      @input="(e) => column.setFilterValue(e.target.value)"
      placeholder="Search..."
      class="w-full px-2 py-1 border rounded"
    />
  </div>
</template>
