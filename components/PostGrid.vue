<script setup lang="ts">import { Strapi4Response } from '@nuxtjs/strapi/dist/runtime/types';
const { articles } = defineProps<{
  articles: Pick<Strapi4Response<IStrapiPost>, keyof Strapi4Response<IStrapiPost>>
}>()

</script>

<template>
  <div flex flex-col gap-4 py-4>
    <Post v-for="post in articles.data" :post="(post as any).attributes as IStrapiPost"
      :key="(post as any).attributes.id" />

    <Pagination :page="5" :pages="25" />
  </div>
</template>
