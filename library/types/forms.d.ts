export interface FieldMessage {
  type: 'error' | 'info' | 'success' | 'warning' | 'none'
  message: string
}
