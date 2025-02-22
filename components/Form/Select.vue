<script setup lang="ts">
export type SelectOptions = { label: string; value: string }[]

const model = defineModel()

const props = withDefaults(
  defineProps<{
    id?: string
    name: string
    label?: string
    options: SelectOptions
    placeholder: string
  }>(),
  {
    id: undefined,
    name: 'unnamed-select',
    label: undefined,
    options: [],
    placeholder: '...',
  }
)

import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { Label } from '~/components/ui/label'
</script>

<template>
  <div>
    <Label v-if="!!label" :for="id">{{ label }}</Label>
    <Select v-model="model" :id="id" :name="name">
      <SelectTrigger>
        <SelectValue :placeholder="placeholder" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          v-for="(option, index) in options"
          :key="`${name}-${index}`"
          :value="option.value"
          >{{ option.label }}
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
