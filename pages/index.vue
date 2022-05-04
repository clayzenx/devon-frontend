<script lang="ts" setup>
const tags: IPostTag[] = ['html', 'css', 'js', 'node']
const selectedTag = useState<IPostTag>('selectedTag')
const searchEntry = useState<string>('searchEntry')

const { find } = useStrapi4()

const { result, search } = useSearch('devon-project')

const { data: posts, refresh } = await useAsyncData('posts',
  () => find('posts', {
    pagination: { start: 0, limit: 5 },
    filters: { tags: selectedTag.value || undefined },
  }))

const searchPosts = () => search({ query: searchEntry.value, requestOptions: { filters: 'objectID:e61a05e4541ba_dashboard_generated_id' } })

watch(selectedTag, refresh)
watch(searchEntry, searchPosts)
</script>

<template>
  <div>
    <Search v-model:inputValue="searchEntry" />
    <div>{{ selectedTag }}</div>

    <Tags v-model:selected="selectedTag" :tags="tags" />
    <pre>{{ result }}</pre>

  </div>
</template>
