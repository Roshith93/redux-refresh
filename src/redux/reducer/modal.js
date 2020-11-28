import * as type from '../actions/types'
const intialState = {
  isOpen: true,
}

const modalReducer = (state = intialState, action) => {
  switch (action.type) {
    case type.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      }
    case type.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      }
    default:
      return state
  }
}

export default modalReducer
