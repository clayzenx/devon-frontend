<script lang="ts" setup>
import { Strapi4Response } from '@nuxtjs/strapi/dist/runtime/types';
const { locale } = useLocale()
const { find } = useStrapi4()

const { data: loc, refresh } = await useAsyncData('about-me',
  () => find<Strapi4Response<IStrapiContent>>('about-me', { locale: locale.value })
)

const downloadText = computed(() => locale.value === 'ru' ? 'Скачать резюме' : 'Download cv')

watch(locale, refresh)
</script>

<template>
  <div relative>
    <a href="https://drive.google.com/file/d/1-Yf-YLS-fUoJO5Ryduw0mlmFUw5kS7cW/view" absolute right-0 top--10 flex
      items-center>
      <div i-ion-attach></div>
      <p>{{ downloadText }}</p>
    </a>
    <p>
      {{ (loc.data as any).attributes.about }}
    </p>
  </div>
</template>
