<template>
  <div class="bg-white dark:bg-slate-700 overflow-hidden shadow sm:rounded-lg p-6">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" content="A collection of mini Vue projects" />
    </Head>
    <TextHeading type="h2" class="text-teal-900 dark:text-teal-100 font-normal">
      A collection of mini front-end projects built in Nuxt
    </TextHeading>
    <p class="mt-3 text-gray-600 dark:text-gray-300">
      Have a look around! If something is broken or you have a suggestion, feel free to open an
      <TextLink href="https://github.com/JSn1nj4/frontend-stuff/issues" target="_blank">issue</TextLink>
      or submit a
      <TextLink href="https://github.com/JSn1nj4/frontend-stuff/pulls" target="_blank">pull request</TextLink>.
    </p>
    <div class="block sm:grid sm:grid-cols-3 gap-10 dark:text-white mt-4 pt-4 border-t-2 border-t-emerald-500 border-dashed">
      <div v-for="project in projects" class="mt-0.5 mb-4 sm:mb-0">
        <TextHeading type="h3">
          <TextLink :href="project.href">{{ project.name }}</TextLink>
        </TextHeading>
        <p class="text">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "#imports";
import {globals} from "~/library/stores/globals";

const title = ref('Home')

globals.pageTitle = undefined

interface Project {
  name: string
  href: string
  description: string
}

const projects: Project[] = [
  { name: 'Text Tools', href: '/text-tools', description: 'Simple text-formatting tools to help transform content', },
  { name: 'Date/Time Tools', href: '/datetime-tools', description: 'Tools for working with date/time strings and timestamps', },
]
</script>
