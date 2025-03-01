export interface IObject<T> {
  [key: string]: T
}

export interface FunctionCollection extends IObject<Function> {}
