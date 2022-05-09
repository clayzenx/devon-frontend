<script lang="ts" setup>
import { Strapi4Response } from '@nuxtjs/strapi/dist/runtime/types';
const { inputValue, selectedCategory } = defineProps<{
  inputValue: string,
  selectedCategory: IStrapiCategory
}>()
const { locale } = useLocale()
const { find } = useStrapi4()
const { data, refresh } = await useAsyncData('search-result-locale',
  () => find<Strapi4Response<IStrapiContent>>('search-result-locale', { locale: locale.value })
)
const emit = defineEmits(['update:selectedCategory', 'update:inputValue'])
const input = () => emit('update:inputValue', inputValue)
const close = () => emit('update:selectedCategory', null)
watch(locale, refresh)

</script>

<template>
  <div flex gap-2 items-center justify-left text-right all:transition-400>
    <span v-if="selectedCategory" flex items-center gap-1 rounded px-2 py-1 text-sm bg-dark op70 cursor-pointer
      hover="bg-dark-200" light:bg-warmgray-200 light:hover="bg-warmgray-300" @click="close">
      <span>
        {{ selectedCategory?.attributes.name }}
      </span>
      <div i-ion-close-outline />
    </span>
    <input type="text" v-model="inputValue" @input="input" bg-transparent py-3 op40 text-lg focus:outline-none
      :placeholder="(data.data as any).attributes.inputSearchPlaceholder" />
  </div>
</template>
