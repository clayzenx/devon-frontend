<script lang="ts" setup>
const { tag } = defineProps<{
  tag: IPostTag
}>()
</script>

<template>
  <span border rounded border-dashed border-white border-op20 px-5 py-1 op70 cursor-pointer hover="bg-dark"
    all:transition-400>
    {{ tag }}
  </span>
</template>
