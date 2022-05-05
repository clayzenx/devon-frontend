<script setup lang="ts">
const { categories } = defineProps<{
  categories: IStrapiCategory[],
  selected: IStrapiCategory
}>()

const emit = defineEmits(['update:selected'])
const select = (id: number) => emit('update:selected', categories.find(category => category.id === id))

</script>

<template>
  <div flex gap-2 items-center justify-start>
    <Category v-for="category in categories" :key="category.id" :category="category"
      @click="() => select(category.id)" />
  </div>
</template>
