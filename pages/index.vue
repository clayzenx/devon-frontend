<script lang="ts" setup>
import { Strapi4Response } from '@nuxtjs/strapi/dist/runtime/types';
const selectedCategory = useState<IStrapiCategory>('selectedCategory')
const searchEntry = useState<string>('searchEntry')
const { find } = useStrapi4()
const { result, search } = useSearch('production_api::article.article')
const { data: categories } = await useAsyncData('categories', () => find<Strapi4Response<IStrapiCategory>>('categories'))
const searchPosts = () => search({ query: searchEntry.value })
const searchHits = computed(() =>
  selectedCategory.value ? result.value.hits.filter(hit => hit.category.id === selectedCategory.value.id) : result.value.hits
)
onMounted(() => search({}))
watch(searchEntry, searchPosts)
</script>

<template>
  <div>
    <Search v-model:inputValue="searchEntry" v-model:selectedCategory="selectedCategory" />
    <Categories v-model:selected="selectedCategory" :categories="categories.data as Array<IStrapiCategory>" />
    <pre v-if="result">{{ searchHits }}</pre>
  </div>
</template>
