<script lang="ts" setup>
const { inputValue } = defineProps<{
  inputTag: IPostTag
  inputValue: string
}>()

const emit = defineEmits(['update:inputTag', 'update:inputValue'])
const input = () => emit('update:inputValue', inputValue)

const removeTag = () => emit('update:inputTag', '')

</script>

<template>
  <div flex gap-2 p-2 items-center justify-left text-right>
    <input type="text" v-model="inputValue" @input="input" bg-transparent p-2 text-lg focus:outline-none
      placeholder="Search something..." />
    <span @click="removeTag" text-lg w-15 justify-self-end cursor-pointer>{{ inputTag ? `#${inputTag}` : '' }}</span>

  </div>
</template>
