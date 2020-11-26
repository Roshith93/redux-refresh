import * as type from '../actions/types'

const initialState = {
 count: 10,
 name: "Counter"
}

const counterReducer = (state = initialState, action) =>{
 switch(action.type){
   case type.DEC:
     return {...state, count: state.count - 1}
   case type.INC:
     return {...state, count: state.count + 1}
   case type.RESET:
     return {...state, count: 0}
     default:
       return state
     }
}
export default counterReducer;