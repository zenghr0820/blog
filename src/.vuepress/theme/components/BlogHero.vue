<!-- .vuepress/components/BlogHero.vue -->
<script setup lang="ts">
  import BlogHero from "vuepress-theme-hope/blog/components/BlogHero.js";
  import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
</script>

<template>
    <BlogHero>
        <template #heroInfo="heroInfo">
            <HitokotoBlogHero v-bind="heroInfo"/>
        </template>
    </BlogHero>
</template>