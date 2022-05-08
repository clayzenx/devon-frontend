<script setup lang="ts">
import { Strapi4Response } from '@nuxtjs/strapi/dist/runtime/types';
const { locale, allLocales } = useLocale()
const { params } = useRoute()
const { push } = useRouter()
const { findOne } = useStrapi4()
definePageMeta({ layout: "article" })
useHead({ titleTemplate: `${params.id}` })

const { data: article } = await useAsyncData(`article-${params.id}`,
  () => findOne<Strapi4Response<IStrapiPost>>('articles', +params.id)
)
console.log(article)
const postID = computed(() => {
  const currentID = allLocales.findIndex(loc => loc === ((article.value.data as IStrapiLocales).attributes as IStrapiPost).locale)
  const redirectID = allLocales.findIndex(loc => loc === locale.value)
  let r = +params.id - (currentID - redirectID)
  return r
});
watch(locale, () => {
  push(`/blog/${postID.value}`)
})

</script>

<template>
  <p>{{ locale }}</p>
  <div>
    {{ $route.params.id }}
  </div>
</template>
