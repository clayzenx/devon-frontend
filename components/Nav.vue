<template>
  <div flex gap3 text-3xl font-400 pb3 pt3 all:transition-400>
    <NuxtLink to="/">Me</NuxtLink>
    <NuxtLink to="/blog">Notes</NuxtLink>
  </div>
</template>

<style scoped>
a:not(.router-link-active) {
  opacity: .3;
}

a:not(.router-link-active):hover {
  opacity: .6;
}
</style>
