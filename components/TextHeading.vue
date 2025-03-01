<template>
  <component
    :is="type"
    class="leading-7"
    :class="{
      [fontSizeClass]: !!fontSizeClass,
      [weight]: !!weight,
    }"
  >
    <slot />
  </component >
</template>

<script setup lang="ts">
import {defineProps} from "@vue/runtime-core";
import {FontWeight, TextSize} from "~/library/types/typography";
import {ComputedRef} from "@vue/reactivity";

const props = withDefaults(defineProps<{
  type?: string
  fontSize?: TextSize,
  weight?: FontWeight,
}>(), {
  type: 'h1',
  weight: "font-semibold",
})

const typeClasses: object = {
  h1: 'text-4xl',
  h2: 'text-2xl',
  h3: 'text-xl',
}

const fontSizeClass: ComputedRef<TextSize | null> = computed(() => props.fontSize ?? typeClasses?.[props.type])
</script>
