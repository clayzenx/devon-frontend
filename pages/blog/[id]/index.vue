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

const dateFormating = (dateStr: string) =>
  (new Date(dateStr)).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })

watch(locale, () => push('/blog/' + postID.value))
useHead({ titleTemplate: ((article.value.data as IStrapiContent).attributes as IStrapiPost).title })
</script>

<template>
  <div class="post">
    <h1>{{ ((article.data as IStrapiContent).attributes as IStrapiPost).title }}</h1>
    <span>{{ dateFormating(((article.data as IStrapiContent).attributes as IStrapiPost).publishedAt)
    }}</span>
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

.post>span {
  opacity: .5;
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

.post em {
  background: #1c1c1e;
  padding: .3em;
  border-radius: .3em;
  font-style: normal;
}

.post .date {
  margin-bottom: .5em;
}

.light .post em {
  background: #f1f3f5;
  color: #000;
}

.post blockquote,
.post h1,
.post h2,
.post h3,
.post ul {
  margin: .75em 0;
}

.post pre {
  margin-bottom: 1em;
}

.post .content>div {
  margin-top: .5em;
}

.light .post h1,
.light .post h2,
.light .post h3 {
  color: #000;
}

.post h1,
.post h2,
.post h3 {
  color: #fff;
}

.post strong {
  color: #fff;
}

.light .post strong {
  color: #000;
}

.post>.content {
  padding: 20px 0;
}
</style>
