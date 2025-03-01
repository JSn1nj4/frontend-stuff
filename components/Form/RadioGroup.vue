<template>
  <div class="form-radio-group">
    <FormRadioButton
      v-for="(radio, index) in list"
      key="index"
      :class="{
        [textSize]: !!textSize,
        [spacing]: !!spacing,
        'last:mb-0': list.length > 1 && index === list.length - 1,
      }"
      :id="radio.id"
      :name="name"
      :value="radio.value"
      :checked="radio.value === model"
      @change="changed"
    >
      {{ radio.label }}
    </FormRadioButton>
  </div>
</template>

<script setup lang="ts">
import { type BorderBottom } from '~/library/types/spacing'
import { type TextSize } from '~/library/types/typography'

const model = defineModel()
const emit = defineEmits(['update:modelValue'])

function changed(e: Event): void {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

interface RadioList {
  checked?: boolean
  label: string
  id: string
  value: string
}

const props = withDefaults(
  defineProps<{
    list: RadioList[]
    name: string
    spacing?: BorderBottom
    textSize?: TextSize
  }>(),
  {
    spacing: 'mb-1',
    textSize: 'text-md',
  }
)
</script>
