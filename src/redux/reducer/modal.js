import * as type from '../actions/types'
const intialState = {
  isOpen: false,
  title: null,
  text: null,
}

const modalReducer = (state = intialState, action) => {
  switch (action.type) {
    case type.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        title: action.payload.title,
        text: action.payload.text,
      }
    case type.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        title: null,
        text: null,
      }
    default:
      return state
  }
}

export default modalReducer
