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
postID = computed(() => {
  const currentID = allLocales.findIndex(loc => loc === ((article.value.data as IStrapiContent).attributes as IStrapiPost).locale)
  const redirectID = allLocales.findIndex(loc => loc === locale.value)
  return +params.id - (currentID - redirectID)
});

const getPostBody = () =>
  addIcons(
    app.$mdit.render(((article.value.data as IStrapiContent).attributes as IStrapiPost).content)
  )

const copy = (e: Event) => {
  const source = ref((e.target as HTMLElement)?.closest('code')?.innerText)
  useClipboard({ source: source.value }).copy()
}

onMounted(() => {
  const copyIcons = document.querySelectorAll('.copy-icon')
  copyIcons.forEach(node => (node as HTMLElement).onclick = copy)
})

watch(locale, () => push('/blog/' + postID.value))
useHead({ titleTemplate: ((article.value.data as IStrapiContent).attributes as IStrapiPost).title })
</script>

<template>
  <div class="post">
    <div class="content" v-html="getPostBody()" />

    <div class="hidden">
      <div class="i-simple-icons-typescript"></div>
      <div class="i-simple-icons-vuedotjs"></div>
      <div class="i-simple-icons-javascript"></div>
      <div class="i-simple-icons-html5"></div>
      <div class="i-simple-icons-css3"></div>
      <div class="i-simple-icons-gnubash"></div>
      <div class="i-simple-icons-svelte"></div>
      <div class="i-ion-copy-outline"></div>
    </div>

  </div>
</template>

<style>
.post pre {
  position: relative;
  padding: 1em;
  border-radius: 1em;
  width: 100%;
}

.post .copy-icon {
  opacity: .3;
}

.post .copy-icon {
  display: none;
}

pre:hover .copy-icon {
  display: block;
}


.post ul {
  list-style-type: disc;
  padding-left: 2em;
}

.post a {
  text-decoration: underline;
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

.content blockquote,
.content h1,
.content h2,
.content h3,
.content ul {
  margin: .75em 0;
}

.content pre {
  margin-bottom: 1em;
}

.light .content h1,
.light .content h2,
.light .content h3 {
  color: #000;
}

.content h1,
.content h2,
.content h3 {
  color: #fff;
}

.content strong {
  color: #fff;
}

.light .content strong {
  color: #000;
}
</style>
