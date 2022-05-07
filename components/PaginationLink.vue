<script setup lang="ts">
const emit = defineEmits(['click']);
const { active = false, value } = defineProps<{
  active?: boolean,
  value?: number,
}>()
const linkClick = () => {
  emit("click", value)
}
</script>

<template>
  <div cursor-pointer @click="linkClick">
    <slot>
      {{ value }}
    </slot>
  </div>
</template>
