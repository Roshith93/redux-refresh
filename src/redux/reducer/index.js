import { combineReducers } from 'redux'
import counterReducer from './counter'
import modalReducer from './modal'

export const rootReducer = combineReducers({
  counter:counterReducer,
  modal: modalReducer,
})
