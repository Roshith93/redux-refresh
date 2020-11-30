import * as type from './types'

export const closeModal = (payload) => {
  return {
    type: type.CLOSE_MODAL,
    payload,
  }
}

export const openModal = (payload) => {
  return {
    type: type.OPEN_MODAL,
    payload,
  }
}
