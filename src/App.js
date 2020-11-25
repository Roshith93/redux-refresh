import './App.css';
import Counter from './Counter'
import {createStore} from 'redux'

const initialState = {
  count: 10,
  name: "rosh"
}

// * Reducer
const reducer = (state = initialState, action) =>{
  switch(action.type){
    case "DEC":
      return {...state, count: state.count - 1}
    case "INC":
      return {...state, count: state.count + 1}
    case "RESET":
      return {...state, count: 0}
      default:
        return state
      }
}
// * actions

const store = createStore(reducer)
store.dispatch({type: "RESET"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "INC"})
function App() {
  return (
    <div className="App">
      <Counter reduxState={store.getState()} />
    </div>
  );
}

export default App;
