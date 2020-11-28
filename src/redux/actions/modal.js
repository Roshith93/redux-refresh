import * as type from './types'

export const closeModal = (val) => {
  return {
    type: type.CLOSE_MODAL,
    val,
  }
}

export const openModal = (val) => {
  return {
    type: type.OPEN_MODAL,
    val,
  }
}
