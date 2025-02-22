import { type FunctionCollection } from '~/library/types/basic-constructs'

export interface IFieldIO<T> {
  input: Ref<T>
  output: ComputedRef<T>
  filters: FunctionCollection
  filter: Ref<Function>
  setFilter: (e: Event) => void
  setValue: (e: Event) => void
}

export class FieldIO implements IFieldIO<string> {
  input: Ref<string>
  filters: FunctionCollection
  filter: Ref<Function>
  readonly output: ComputedRef<string>

  constructor(filters: any = {}) {
    this.input = ref('')
    this.filters = {
      default: (v: string) => v,
      ...filters,
    }
    console.log(`Filters: '${Object.keys(this.filters).join("','")}'`)
    this.filter = ref<Function>(this.filters.default)
    this.output = computed((): string => this.filter.value(this.input.value))
  }

  setFilter(e: Event) {
    const filter = (e.target as HTMLInputElement).value

    if (!this.filters?.[filter]) {
      console.log(`Filter '${filter}' does not exist in filters list.`)
      return
    }

    this.filter.value = this.filters[filter]
  }

  setValue(e: Event): void {
    this.input.value = (e.target as HTMLInputElement).value
  }
}
