<script setup>
useHead({
  title: 'Devon_',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.light,
html.light pre {
  background: #fff !important;
}

html.dark,
html.dark pre {
  background: #000 !important;
  color: rgba(255, 255, 255, .9);
}
</style>
