<script lang="ts" setup>
const { post } = defineProps<{
  post: IStrapiPost
}>()

const dateFormating = (dateStr: string) =>
  (new Date(dateStr)).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })

</script>

<template>
  <article op60 hover:op100 cursor-pointer p2>
    <span flex gap-3 items-center>
      <h3 text-lg> {{ post.title }}</h3>
      <span op70>{{ post.description }}</span>
    </span>
    <span text-sm relative top--1 op50 flex gap-3 font-300>
      <span>{{ dateFormating(post.publishedAt) }}</span>
      <span op50>by {{ post?.author?.name }}</span>
    </span>
  </article>
</template>
