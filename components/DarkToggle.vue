<script setup lang="ts">
const color = useColorMode()

const toggleDark = () => {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button outline-none @click="toggleDark">
    <div dark:i-carbon-moon i-carbon-sun />
  </button>
</template>
