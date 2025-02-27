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
      Tools for working with date/time strings and timestamps
    </TextHeading>
    <div
      class="block sm:grid sm:grid-cols-2 gap-10 text-slate-800 dark:text-white mt-4 pt-4 border-t-2 border-t-emerald-500 border-dashed"
    >
      <div class="col-span-2">
        <TextHeading type="h3" class="text-slate-900 dark:text-slate-50">
          Format Conversion
        </TextHeading>
      </div>
      <div>
        <FormSelect
          id="date-type-input"
          name="date-type-input"
          label="Date Selector Type"
          placeholder="Choose how to select a date/time"
          class="mb-2"
          :options="dateInputTypeOptions"
          v-model="dateInputType"
        />
        <FormInputGroup
          id="date-formatter-input"
          name="date-formatter-input"
          v-model="dateFormatter.input.value"
        >
          Input
        </FormInputGroup>
      </div>
      <div>
        <FormSelect
          id="date-type-output"
          name="date-type-output"
          label="Output Format Selector"
          placeholder="Choose how to format date/time output"
          class="mb-2"
          :options="dateOutputFormatOptions"
          v-model="dateOutputFormat"
        />
        <FormInputGroup
          disabled
          id="date-formatter-output"
          name="date-formatter-output"
          v-model="dateFormatter.output.value"
        >
          Output
        </FormInputGroup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { globals } from '~/library/stores/globals'
import { FieldIO, type IFieldIO } from '~/library/forms/FieldIO.class'
import { formatISO, getUnixTime } from 'date-fns'
import type { SelectOptions } from '~/components/Form/Select.vue'
import { formatIso8601Zulu, toHumanReadable } from '~/library/helpers/dates'

const title = ref('Date/Time Tools')
globals.pageTitle = title.value

function maybeGetDateFrom(input: number | string | Date): Date {
  return input instanceof Date ? input : new Date(input)
}

const dateFormatter: IFieldIO<string> = new FieldIO({
  friendly(v: string): string {
    let parsed = maybeGetDateFrom(v)

    if (isNaN(parsed.valueOf())) {
      console.error("Couldn't parse input into usable date.")
      return ''
    }

    return toHumanReadable(parsed)
  },

  iso8601(v: string): string {
    let parsed = maybeGetDateFrom(v)

    if (isNaN(parsed.valueOf())) {
      console.error("Couldn't parse input into usable date.")
      return ''
    }

    return formatISO(parsed)
  },

  iso8601zulu(v: string): string {
    let parsed = maybeGetDateFrom(v)

    if (isNaN(parsed.valueOf())) {
      console.error("Couldn't parse input into usable date.")
      return ''
    }

    return formatIso8601Zulu(parsed)
  },

  unix(v: string): string {
    let parsed = maybeGetDateFrom(v)

    if (isNaN(parsed.valueOf())) {
      console.error("Couldn't parse input into usable date.")
      return ''
    }

    return getUnixTime(parsed).toString()
  },
})

const dateInputTypeOptions: SelectOptions = [
  { label: 'Raw', value: 'default' },
  { label: 'Date Picker (TBA)', value: 'datepicker' },
  { label: 'Dropdowns (TBA)', value: 'dropdowns' },
]
const dateInputType = ref<string>('default')

const dateOutputFormatOptions: SelectOptions = [
  { label: 'Unformatted', value: 'default' },
  { label: 'Human Readable', value: 'friendly' },
  { label: 'ISO 8601 (local offset)', value: 'iso8601' },
  { label: 'ISO 8601 (Zulu)', value: 'iso8601zulu' },
  { label: 'Unix Timestamp', value: 'unix' },
]
const dateOutputFormat = ref<string>('default')

watch(dateOutputFormat, (format: string) => {
  console.info('new format:', format)
  dateFormatter.setFilterRaw(format)
})
</script>
