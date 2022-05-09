<script lang="ts" setup>
import { Strapi4Response } from '@nuxtjs/strapi/dist/runtime/types';
const selectedCategory = useState<IStrapiCategory>('selectedCategory')
const searchEntry = useState<string>('searchEntry')
const { locale } = useLocale()
const { find } = useStrapi4()
const { result, search } = useSearch('production_api::article.article')
const { data: categories } = await useAsyncData('categories', () => find<Strapi4Response<IStrapiCategory>>('categories'))
const { data: articles, refresh } = await useAsyncData(`articles-${locale}`,
  () => find<Strapi4Response<IStrapiPost>>('articles', { locale: locale.value }))
const searchPosts = () => search({ query: searchEntry.value })
const searchHits = computed(() => {
  if (!searchEntry.value) return []
  return selectedCategory.value ? result.value.hits.filter(hit => hit.category.id === selectedCategory.value.id) : result.value.hits
})
refresh()
watch(searchEntry, searchPosts)
watch(locale, refresh)
</script>

<template>
  <div>
    <Search v-model:inputValue="searchEntry" v-model:selectedCategory="selectedCategory" />
    <Categories v-model:selected="selectedCategory" :categories="categories.data as Array<IStrapiCategory>" />
    <SearchResult v-if="result && searchEntry" v-model:hits="searchHits" />
    <PostGrid :articles="articles" v-else />
  </div>
</template>
