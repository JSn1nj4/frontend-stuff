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
import { getUnixTime } from 'date-fns/getUnixTime'
import { pipe } from '~/library/helpers/pipes'
import { formatISO, fromUnixTime } from 'date-fns'
import type { SelectOptions } from '~/components/Form/Select.vue'

const title = ref('Date/Time Tools')
globals.pageTitle = title.value

const dateFormatter: IFieldIO<string> = new FieldIO({
  iso8601(v: string): string {
    let intstr: string = parseInt(v).toString()
    if (intstr.length === v.length) {
      return pipe(v, parseInt, fromUnixTime, formatISO)
    }

    return v
  },
  unix(v: string): string {
    // Assumed input is integer, which is already a valid Unix timestamp
    let int = parseInt(v)
    if (int.toString().length === v.length) {
      return int.toString()
    }

    // Assumed date string, which can be converted to Unix timestamp
    let unix: number = getUnixTime(new Date(v))
    if (!isNaN(unix)) {
      return unix.toString()
    }

    console.log(`Cannot parse to Unix timestamp. Result: ${unix}`)
    return v
  },
})

const dateInputTypeOptions: SelectOptions = [
  { label: 'Raw', value: 'default' },
  { label: 'Date Picker', value: 'datepicker' },
  { label: 'Dropdowns', value: 'dropdowns' },
]
const dateInputType = ref<string>('default')

const dateOutputFormatOptions: SelectOptions = [
  { label: 'Unformatted', value: 'default' },
  { label: 'ISO 8601', value: 'iso8601' },
  { label: 'Unix Timestamp', value: 'unix' },
]
const dateOutputFormat = ref<string>('default')

watch(dateOutputFormat, (format: string) => {
  console.info('new format:', format)
  dateFormatter.setFilterRaw(format)
})
</script>
