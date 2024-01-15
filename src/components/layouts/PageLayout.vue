<script setup>
import { DocumentIcon } from '@heroicons/vue/24/outline'
defineProps(['title', 'Icon'])
</script>
<template>
  <h1 class="text-3xl text-slate-700 mb-4 flex items-center gap-2">
    <span class="rounded-full bg-slate-200 p-2">
      <slot name="Icon">
        <DocumentIcon class="w-6 h-6" />
      </slot>
    </span>
    {{ ' ' }}{{ title }}
  </h1>
  <div class="border border-slate-300 rounded-xl p-8 mt-4 flex flex-col gap-6">
    <slot />
  </div>
</template>
