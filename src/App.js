import './App.css';
import Counter from './Counter'
import {createStore} from 'redux'

const initialState = {
  count: 10,
  name: "rosh"
}

// * Reducer
const reducer = (state = initialState, action) =>{
  return {
    state
  }
}
const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <Counter reduxState={store.getState()}/>
    </div>
  );
}

export default App;
