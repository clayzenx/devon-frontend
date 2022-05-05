<script lang="ts" setup>
const { inputValue, selectedCategory } = defineProps<{
  inputValue: string,
  selectedCategory: IStrapiCategory
}>()

const emit = defineEmits(['update:selectedCategory', 'update:inputValue'])
const input = () => emit('update:inputValue', inputValue)
const close = () => emit('update:selectedCategory', null)

</script>

<template>
  <div flex gap-2 items-center justify-left text-right all:transition-400>
    <span v-if="selectedCategory" flex items-center gap-1 rounded py-1 px-2 text-sm bg-dark op70 cursor-pointer
      hover="bg-dark-200" light:bg-warmgray-200 light:hover="bg-warmgray-300" @click="close">
      <span>
        {{ selectedCategory?.attributes.name }}
      </span>
      <div i-ion-close-outline />
    </span>
    <input type="text" v-model="inputValue" @input="input" bg-transparent p-2 text-lg focus:outline-none
      placeholder="Search something..." />
  </div>
</template>
