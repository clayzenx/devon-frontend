<script lang="ts" setup>
const { inputValue } = defineProps<{
  inputValue: string
}>()

const emit = defineEmits(['update:inputValue'])
const input = () => emit('update:inputValue', inputValue)

</script>

<template>
  <div flex gap-2 p-2 items-center justify-left text-right>
    <input type="text" v-model="inputValue" @input="input" bg-transparent p-2 text-lg focus:outline-none
      placeholder="Search something..." />
  </div>
</template>
