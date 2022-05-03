<script setup lang="ts">
const { tags } = defineProps<{
  tags: IPostTag[]
  selected: IPostTag
}>()

const emit = defineEmits(['update:selected'])
const select = (index: number) => emit('update:selected', tags[index])

</script>

<template>
  <div flex gap-2 items-center justify-center>
    <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" @click="() => select(index)" />
  </div>
</template>
