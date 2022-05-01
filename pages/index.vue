<script lang="ts" setup>
const { find } = useStrapi4()

const { data: posts } = await useAsyncData('posts',
  () => find('posts', { pagination: { start: 0, limit: 2 } }))

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
    <pre>{{ posts }}</pre>
  </div>
</template>
