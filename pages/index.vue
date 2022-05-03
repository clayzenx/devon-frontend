<script lang="ts" setup>
const tags: IPostTag[] = ['html', 'css', 'js', 'node']
const selectedTag = useState<IPostTag>('selectedTag')
const searchEntry = useState<string>('searchRequest')

const { find } = useStrapi4()

const { result, search } = useSearch('devon-project')

const { data: posts, refresh } = await useAsyncData('posts',
  () => find('posts', {
    pagination: { start: 0, limit: 3 },
    filters: { tags: selectedTag.value || undefined },
  }))

const searchPosts = () => search({ query: searchEntry.value })

watch(selectedTag, refresh)
watch(searchEntry, searchPosts)
</script>

<template>
  <div>
    <Logos mb-6 />
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
    <Search v-model:inputValue="searchEntry" />
    <div>{{ searchEntry }}</div>

    <Tags v-model:selected="selectedTag" :tags="tags" />

    <div v-if="result" v-for="hit in result.hits" :key="hit.id">{{ hit.attributes.Title }}</div>

  </div>
</template>
