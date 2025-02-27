<template>
  <div class="input-group mb-4 last:mb-0">
    <label :for="id">
      <TextHeading type="h4">
        <slot />
      </TextHeading>
    </label>
    <div :class="contextWrapperClasses">
      <textarea
        v-if="type === 'textarea'"
        @input="changed"
        :class="classes"
        :disabled="disabled"
        :id="id"
        :name="name"
        :value="modelValue"
      />
      <input
        v-else
        @input="changed"
        :class="classes"
        :disabled="disabled"
        :id="id"
        :name="name"
        :type="type"
        :value="modelValue"
      />
      <p v-if="!!message">
        {{ message.message }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComputedRef, Ref } from '@vue/reactivity'
import type { FieldMessage } from '~/library/types/forms'

type TextField = 'email' | 'number' | 'password' | 'tel' | 'text' | 'textarea'

interface StringGroups {
  [key: string]: string[]
}

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    id?: string
    name?: string
    type?: TextField
    modelValue?: ComputedRef | Ref | string
    value?: ComputedRef | Ref | string
    message?: FieldMessage
  }>(),
  {
    disabled: false,
    type: 'text',
    message: { type: 'none', message: '' },
  }
)

const emit = defineEmits(['update:modelValue'])

function changed(e: Event) {
  console.log(`Changed: ${e.currentTarget}`)

  emit('update:modelValue', (e.currentTarget as HTMLInputElement).value)
}

const contextWrapperClasses = computed(() => {
  const message: StringGroups = {
    none: [''],
    error: [
      'transition-colors',
      'bg-red-300',
      'dark:bg-red-700',
      'outline',
      'outline-2',
      'outline-red-700',
      'dark:outline-red-300',
      'rounded',
    ],
  }

  return [...message[props.message.type]].join(' ')
})

const classes = computed(() => {
  // Classes all input fields should share
  const base = [
    'w-full',
    'border-2',
    'border-solid',
    'rounded p-2',
    'transition-colors',
    'duration-300',
  ]

  const textarea = ['h-36']

  // Disabled field classes
  const disabled = [
    'border-slate-200',
    'dark:border-slate-600',
    'bg-slate-100',
    'dark:bg-slate-700',
    'text-slate-500',
    'dark:text-slate-400',
  ]

  const message: StringGroups = {
    none: [
      'border-slate-300',
      'dark:border-slate-500',
      'hover:border-slate-800',
      'dark:hover:border-slate-400',
      'bg-slate-100',
      'dark:bg-slate-600',
    ],
    error: [
      'bg-red-300',
      'dark:bg-red-700',
      'border-red-700',
      'dark:border-red-300',
    ],
  }

  // Build class string
  return [
    ...base,
    ...(props.disabled ? disabled : message[props.message.type]),
    ...(props.type === 'textarea' ? textarea : []),
  ].join(' ')
})
</script>
