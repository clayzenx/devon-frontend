<script lang="ts" setup>
import { Strapi4Response } from '@nuxtjs/strapi/dist/runtime/types';
const { hits } = defineProps<{
  hits: IStrapiPost[]
}>()

const { locale } = useLocale()
const { find } = useStrapi4()
const { data, refresh } = await useAsyncData('search-result-locale',
  () => find<Strapi4Response<IStrapiContent>>('search-result-locale', { locale: locale.value })
)
const { justNow, today, yesterday, lastWeek, later, noEntry } = (data.value.data as any).attributes

const posts = computed(() =>
  breakData(hits.map(hit => ({ ...hit, date: hit.publishedAt })))
)
watch(locale, refresh)

</script>

<template>
  <div mt-3 flex flex-col gap-3>
    <span v-if="!hits.length" op30 font-500>{{ noEntry }}</span>
    <section flex flex-col gap-4 v-if="posts.justNow.length">
      <h3 op30 font-500>{{ justNow }}</h3>
      <Post v-for="post in posts.justNow" :post="post" :key="post.id" />
    </section>
    <section flex flex-col gap-4 v-if="posts.today.length">
      <h3 op30 font-500>{{ today }}</h3>
      <Post v-for="post in posts.today" :post="post" :key="post.id" />
    </section>
    <section flex flex-col gap-4 v-if="posts.yesterday.length">
      <h3 op30 font-500>{{ yesterday }}</h3>
      <Post v-for="post in posts.yesterday" :post="post" :key="post.id" />
    </section>
    <section flex flex-col gap-4 v-if="posts.lastWeek.length">
      <h3 op30 font-500>{{ lastWeek }}</h3>
      <Post v-for="post in posts.lastWeek" :post="post" :key="post.id" />
    </section>
    <section flex flex-col gap-4 v-if="posts.later.length">
      <h3 op30 font-500>{{ later }}</h3>
      <Post v-for="post in posts.later" :post="post" :key="post.id" />
    </section>
  </div>
</template>
