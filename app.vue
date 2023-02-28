<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import {useHead} from "#head";

useHead({
  titleTemplate: '%s - Frontend Stuff',
})
</script>
