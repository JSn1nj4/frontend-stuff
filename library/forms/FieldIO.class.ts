import { type FunctionCollection } from '~/library/types/basic-constructs'

export interface IFieldIO<T> {
  input: Ref<T>
  output: ComputedRef<T>
  filters: FunctionCollection
  filter: Ref<Function>
  setFilter: (e: Event) => void
  setFilterRaw: (filter: string) => void
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

    this.filter = ref<Function>(this.filters.default)
    this.output = computed(() => {
      let filter = this.filter.value

      return filter(this.input.value)
    })
  }

  setFilter(e: Event) {
    const filter = (e.target as HTMLInputElement).value

    this.setFilterRaw(filter)
  }

  setFilterRaw(filter: string) {
    if (!this.filters?.[filter]) {
      return
    }

    this.filter.value = this.filters[filter]
  }

  setValue(e: Event): void {
    this.input.value = (e.target as HTMLInputElement).value
  }
}
