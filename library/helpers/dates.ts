import { addMinutes, format } from 'date-fns'

export const dateStringFormats = {
  humanReadable: "MMMM d, yyyy 'at' h:mm a",
  iso8601zulu: "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
}

export function toUTCDate(date: Date | string): Date {
  if (typeof date === 'string') {
    date = new Date(date)
  }

  console.info(typeof date)

  return addMinutes(date, date.getTimezoneOffset())
}

export function formatIso8601Zulu(date: Date | string): string {
  return format(date, dateStringFormats.iso8601zulu)
}

export function toHumanReadable(date: Date | string): string {
  if (typeof date === 'string') {
    date = new Date(date)
  }

  return format(date, dateStringFormats.humanReadable)
}
