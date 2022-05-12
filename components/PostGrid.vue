<script setup lang="ts">
import { Strapi4Response } from '@nuxtjs/strapi/dist/runtime/types';
const { articles } = defineProps<{
  articles: Pick<Strapi4Response<IStrapiPost>, keyof Strapi4Response<IStrapiPost>>
}>()

// filter by published date
const posts = computed(() =>
  (articles.data as IStrapiArticle[])
    .sort((p1: IStrapiArticle, p2: IStrapiArticle) =>
      +new Date(p2.attributes.publishedAt) - +new Date(p1.attributes.publishedAt)
    ))

console.log(articles)

</script>

<template>
  <div flex flex-col gap-4 py-4>
    <Post v-for="post in posts" :post="{ id: (post as any).id, ...(post as any).attributes } as IStrapiPost"
      :key="(post as any).attributes.id" />

    <Pagination :page="5" :pages="25" />
  </div>
</template>
