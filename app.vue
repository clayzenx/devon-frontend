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
  font-size: 16px;
  line-height: 28px;
}

html.light,
html.light pre {
  background: #fff !important;
}

html.dark,
html.dark pre {
  background: #000 !important;
  color: rgba(255, 255, 255, .7);
}

html.dark a {
  color: rgba(255, 255, 255, 1);
  text-decoration-color: rgba(255, 255, 255, .5);
  transition: all .3s ease-in;
}

html.dark a:hover {
  text-decoration-color: rgba(255, 255, 255, 1);
}

h1 {
  font-size: 1.75rem;
  font-weight: 600;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
}

h3 {
  font-size: 1.25rem;
  font-weight: 500;
}

blockquote {
  padding: 5px 10px;
  border-left: 4px solid rgba(255, 255, 255, .1);
}

code {
  white-space: break-spaces;
}
</style>
