<template>
  <div
    class="mt-4 bg-white dark:bg-slate-700 overflow-hidden shadow sm:rounded-lg p-6"
  >
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" content="A collection of mini Vue projects" />
    </Head>
    <TextHeading
      type="h2"
      class="text-slate-900 dark:text-slate-50 mb-3 font-normal"
    >
      Simple text-formatting tools to help transform content
    </TextHeading>
    <div
      class="block sm:grid sm:grid-cols-3 gap-10 text-slate-800 dark:text-white mt-4 pt-4 border-t-2 border-t-emerald-500 border-dashed"
    >
      <div class="mt-0.5 mb-4 sm:mb-0">
        <FormRadioGroup
          :list="radioList"
          name="transform"
          text-size="text-lg"
          v-model="textOutputFormat"
        />
      </div>
      <div class="col-span-2">
        <FormInputGroup
          id="text-formatter-input"
          name="text-formatter-input"
          type="textarea"
          v-model="textFormatters.input.value"
        >
          Input
        </FormInputGroup>
        <FormInputGroup
          disabled
          id="text-formatter-output"
          name="text-formatter-output"
          type="textarea"
          v-model="textFormatters.output.value"
        >
          Output
        </FormInputGroup>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { globals } from '~/library/stores/globals'
import type { IFieldIO } from '~/library/forms/FieldIO.class'
import { FieldIO } from '~/library/forms/FieldIO.class'
import {
  capitalize,
  lowercase,
  titlecase,
  uppercase,
  urldecode,
  urlencode,
} from '~/library/helpers/formatters/string'

const title = ref('Text Tools')

globals.pageTitle = title.value

const textFormatters: IFieldIO<string> = new FieldIO({
  capitalize,
  uppercase,
  lowercase,
  titlecase,
  urlencode,
  urldecode,
})

const radioList = [
  { label: 'Input', id: 'default', value: 'default' },
  { label: 'Capitalize', id: 'capitalize', value: 'capitalize' },
  { label: 'UPPERCASE', id: 'uppercase', value: 'uppercase' },
  { label: 'lowercase', id: 'lowercase', value: 'lowercase' },
  { label: 'Title Case', id: 'titlecase', value: 'titlecase' },
  { label: 'URL-encode', id: 'urlencode', value: 'urlencode' },
  { label: 'URL-decoded', id: 'urldecode', value: 'urldecode' },
]
const textOutputFormat = ref<string>('default')
watch(textOutputFormat, (format) => {
  textFormatters.setFilterRaw(format)
})
</script>
