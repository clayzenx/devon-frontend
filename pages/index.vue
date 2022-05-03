<script lang="ts" setup>
const { find } = useStrapi4()
const tags: IPostTag[] = ['html', 'css', 'js', 'node']
const selectedTag = useState<IPostTag>('selectedTag')
const searchRequest = useState<string>('searchRequest')

const { data: posts, refresh } = await useAsyncData('posts',
  () => find('posts', {
    pagination: { start: 0, limit: 3 },
    filters: {
      tags: selectedTag.value || undefined,
      title: searchRequest.value || undefined,
    },
  }))

watch(selectedTag, refresh)
watch(searchRequest, refresh)
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
    <Search v-model:inputValue="searchRequest" v-model:inputTag="selectedTag" />
    <div>{{ searchRequest }}</div>

    <Tags v-model:selected="selectedTag" :tags="tags" />

    <pre>{{ posts }}</pre>
  </div>
</template>
