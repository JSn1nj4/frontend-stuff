/**
 * @param value
 * @param steps
 *
 * Basic piping function. Takes a value and any number of functions to pass it through.
 */
export function pipe(value: any, ...steps: Function[]) {
  return steps.reduce((val, fn) => fn(val), value)
}

/**
 * More advanced piping
 * - IPipe<T>: basic interface to define a Pipe class's structure
 * - Pipe<T>: basic pipe class to define steps in a pipeline
 * - Pipeline<T>: for constructing a pipeline from multiple Pipe<T> instances or implementations
 */
export interface IPipe<T> {
  constructor: Function
  handle: (data: T, next: (data: T) => T) => T
}

export class Pipe<T> implements IPipe<T>{
  constructor() {

  }

  handle(data: T, next: (data: T) => T) {
    return next(data)
  }
}

/**
 * Based on: https://gist.github.com/JSn1nj4/d31e03c1b446ec61a8651436b5dc0a11
 */
export class Pipeline<T> {
  handler: string = 'handle'
  steps: IterableIterator<IPipe<T>>

  constructor(...steps: IPipe<T>[]) {
    this.steps = steps[Symbol.iterator]();
  }

  setHandler(handler: string = 'handle'): void {
    this.handler = handler;
  }

  next(data: any): any {
    let { value: step, done } = this.steps.next();
    try {
      return done ? data : step[this.handler](data, this.next.bind(this));
    } catch(e) {
      console.log('Unable to run next step in pipeline.')
      console.table(e.message)
      console.table({ step })
    }
  }
}
