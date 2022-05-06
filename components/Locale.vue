<script lang="ts" setup>
const { locale, set, locales } = useLocale()
const showLocales = ref(false)
const drop = () => showLocales.value = !showLocales.value
const change = (loc: ILocale) => (set(loc), showLocales.value = false)
</script>

<template>
  <div>
    <button @click="drop" cursor-pointer outline-none op80 hover:op100>
      {{ locale }}
    </button>

    <ul v-if="showLocales" absolute>
      <li v-for="locale in locales" @click="() => change(locale)" cursor-pointer op50 hover:op70>{{ locale }}</li>
    </ul>
  </div>
</template>
