<template>
  <div
    class="relative flex flex-col justify-center bg-gray-100 dark:bg-gray-900 min-h-screen items-start sm:items-center"
  >
    <div class="max-w-4xl w-full mx-auto sm:px-6 lg:px-8 pb-4 flex relative gap-2 sm:gap-8 justify-between">
      <Logo />
      <div class="flex sm:hidden mr-4 pt-4 justify-end">
        <label for="menu-toggle" class="flex items-center text-emerald-900 hover:text-emerald-600 focus:text-emerald-900 dark:text-emerald-500 dark:hover:text-white dark:focus:emerald-500 transition-colors duration-300">
          <svg class="fill-current h-8 w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
        </label>
      </div>
      <input type="checkbox" id="menu-toggle" name="menu-toggle" class="absolute hidden top-0 left-0 -z-50">
      <nav class="mobile-menu absolute sm:relative block sm:flex flex-row gap-8 justify-center md:justify-end top-full sm:mt-8 md:mt-0 bg-gray-100 dark:bg-gray-900 sm:bg-transparent w-full sm:w-auto h-auto text-slate-70 dark:text-slate-300 text-center sm:text-right transition-opacity duration-300">
        <NuxtLink v-for="(link, index) in links" :key="`link-${index}`" :href="link.href" :target="link.target" class="flex flex-col justify-end my-4 sm:my-0 h-full text-2xl hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">{{ link.name }}</NuxtLink>
        <IconsGithubIcon href="https://github.com/JSn1nj4/nuxtstuff" title="GitHub Repository" class="my-4 sm:my-0 h-full flex sm:flex-col flex-row justify-center sm:justify-end hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300" />
      </nav>
    </div>
    <div class="mx-auto w-full max-w-4xl sm:px-6 lg:px-8">
      <PageTitle v-if="pageTitle">{{ pageTitle }}</PageTitle>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import {globals} from "~/components/_stores/globals";
import type {Target} from "~/components/_types/html-attributes";

interface NavLink {
  name: string
  href: string
  target?: Target
}

const links: NavLink[] = [
  // { name: 'About', href: '/about', },
  { name: 'Developer', href: 'https://elliotderhay.com', target: "_blank", },
]

const pageTitle: ComputedRef<string | null> = computed(() => {
  if(!globals.pageTitle) return null

  if(globals.pageTitle.length < 1) return null

  return globals.pageTitle
})
</script>

<style lang="pcss">
.mobile-menu {
  opacity: 0;
  visibility: hidden;
}

#menu-toggle:checked + nav.mobile-menu {
  opacity: 1;
  visibility: visible;
}

@screen sm {
  nav.mobile-menu {
    opacity: 1;
    visibility: visible;
  }
}
</style>
