export function capitalize(v: string): string {
  return v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()
}

export function uppercase(v: string): string {
  return v.toUpperCase()
}

export function lowercase(v: string): string {
  return v.toLowerCase()
}

export function titlecase(v: string): string {
  return v.split(' ').map(capitalize).join(' ')
}

export function urlencode(v: string): string {
  return encodeURIComponent(v)
}

export function urldecode(v: string): string {
  return decodeURIComponent(v)
}
