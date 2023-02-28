<template>
  <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
    <Head>
      <Title>{{title}}</Title>
      <Meta name="description" content="A collection of mini Vue projects" />
    </Head>
    <PageTitle />
    <div class="mt-8 bg-white dark:bg-slate-700 overflow-hidden shadow sm:rounded-lg p-6">
      <TextHeading type="h2" class="text-teal-900 dark:text-teal-100">
        A collection of front-end mini projects built in Nuxt
      </TextHeading>
      <p class="mt-3 text-gray-600 dark:text-gray-300">
        Have a look around! If something is broken or you have a suggestion, feel free to open an
        <TextLink href="https://github.com/JSn1nj4/frontend-stuff/issues" target="_blank">issue</TextLink>
        or submit a
        <TextLink href="https://github.com/JSn1nj4/frontend-stuff/pulls" target="_blank">pull request</TextLink>.
      </p>
      <div class="block sm:grid sm:grid-cols-3 gap-10 dark:text-white mt-4 pt-4 border-t-2 border-t-emerald-500 border-dashed">
        <div class="mt-0.5 mb-4 sm:mb-0 col-span-3">
          <TextHeading type="h3">
            <TextLink href="/text-tools">Text Tools</TextLink>
          </TextHeading>
          <p class="text">Simple text-formatting tools to help transform content</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center pt-4 space-x-2">
      <IconsGithubIcon />
      <IconsTwitterIcon />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "#imports";

const title = ref('Home')
</script>
