<script setup lang="ts">
import { Strapi4Response } from '@nuxtjs/strapi/dist/runtime/types';
const { locale, allLocales } = useLocale()
const { params } = useRoute()
const { push } = useRouter()
const { findOne } = useStrapi4()
definePageMeta({ layout: "article" })
useHead({ titleTemplate: `${params.id}` })
let postID: any = null
const { data: article } = await useAsyncData(`article-${params.id}`,
  () => findOne<Strapi4Response<IStrapiPost>>('articles', +postID?.value || +params.id)
)
postID = computed(() => {
  const currentID = allLocales.findIndex(loc => loc === ((article.value.data as IStrapiLocales).attributes as IStrapiPost).locale)
  const redirectID = allLocales.findIndex(loc => loc === locale.value)
  return +params.id - (currentID - redirectID)
});
watch(locale, () => push('/blog/' + postID.value))

</script>

<template>
  <div>
    <p>{{ article.data.attributes.title }}</p>
    <div>
      {{ $route.params.id }}
    </div>

  </div>
</template>
