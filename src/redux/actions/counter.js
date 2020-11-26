import * as type from './types'

export const increment = () => {
  return {
    type: type.INC,
  }
}
export const decrement = () => {
  return {
    type: type.DEC,
  }
}
export const reset = () => {
  return {
    type: type.RESET,
  }
}
