<script setup lang="ts">
import { Strapi4Response } from '@nuxtjs/strapi/dist/runtime/types'
import 'highlight.js/styles/base16/grayscale-dark.css'
const app = useNuxtApp()
const { locale, allLocales } = useLocale()
const { params } = useRoute()
const { push } = useRouter()
const { findOne } = useStrapi4()
definePageMeta({ layout: "article" })

let postID: any = null
const { data: article } = await useAsyncData(`article-${params.id}`,
  () => findOne<Strapi4Response<IStrapiPost>>('articles', +postID?.value || +params.id)
)
useHead({ titleTemplate: ((article.value.data as IStrapiContent).attributes as IStrapiPost).title })
postID = computed(() => {
  const currentID = allLocales.findIndex(loc => loc === ((article.value.data as IStrapiContent).attributes as IStrapiPost).locale)
  const redirectID = allLocales.findIndex(loc => loc === locale.value)
  return +params.id - (currentID - redirectID)
});

const getPostBody = () =>
  addIcons(
    app.$mdit.render(((article.value.data as IStrapiContent).attributes as IStrapiPost).content)
  )

watch(locale, () => push('/blog/' + postID.value))
</script>

<template>
  <div class="post">
    <div v-html="getPostBody()" />

    <div class="hidden">
      <div class="i-simple-icons-typescript"></div>
      <div class="i-simple-icons-vuedotjs"></div>
      <div class="i-simple-icons-javascript"></div>
      <div class="i-simple-icons-html5"></div>
      <div class="i-simple-icons-css3"></div>
      <div class="i-simple-icons-gnubash"></div>
      <div class="i-simple-icons-svelte"></div>
    </div>
  </div>
</template>

<style>
.post pre {
  padding: 15px;
  border-radius: 1em;
  width: 100%;
}

.dark .post pre {
  border: .5px solid #1f1f1f;
}

.light .post pre {
  border: .5px solid #e5e5e5;
}

.hidden {
  display: none;
}
</style>
