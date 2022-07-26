<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import {useHead} from "#head";

useHead({
  titleTemplate: '%s - Frontend Stuff',
  link: [
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png?v=1" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png?v=1" },
    { rel: "manifest", href: "/site.webmanifest?v=1" },
    { rel: "mask-icon", href: "/safari-pinned-tab.svg?v=1", color: "#059669" },
    { rel: "shortcut icon", href: "/favicon.ico?v=1" },
  ],
  meta: [
    { name: "msapplication-TileColor", content: "#059669" },
    { name: "theme-color", content: "#f1f5f9" },
  ],
})
</script>
