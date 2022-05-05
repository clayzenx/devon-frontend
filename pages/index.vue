<script lang="ts" setup>
const selectedCategory = useState<IStrapiCategory>('selectedCategory')
const searchEntry = useState<string>('searchEntry')
const { find } = useStrapi4()
const { result, search } = useSearch('production_api::article.article')
const { data: categories } = await useAsyncData('categories', () => find('categories'))
const searchPosts = () => search({ query: searchEntry.value })
const searchHits = computed(() =>
  selectedCategory.value ? result.value.hits.filter(hit => hit.category.id === selectedCategory.value.id) : result.value.hits
)
watch(searchEntry, searchPosts)
</script>

<template>
  <div>
    <Search v-model:inputValue="searchEntry" />
    <div>{{ selectedCategory?.attributes.name }}</div>

    <Categories v-model:selected="selectedCategory" :categories="categories.data" />
    <pre v-if="result">{{ searchHits }}</pre>

  </div>
</template>
