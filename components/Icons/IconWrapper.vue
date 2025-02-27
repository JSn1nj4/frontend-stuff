<template>
  <a :href="href" :target="target">
    <svg
      class="w-8 h-8 transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:dark:text-emerald-500"
      :class="typeClass"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width="32"
      height="32"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <slot></slot>
    </svg>
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  href: string,
  target?: string,
  type?: string
}>(), {
  href: '',
  target: '_blank',
  type: '',
})

const typeClass = computed((): string => {
  const classes: object = {
    github: 'button--github',
  };

  if(classes[props.type] === undefined) return '';

  return ' ' + classes[props.type];
});
</script>
