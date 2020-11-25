import React, { useState } from 'react'

const Counter = (props) => {
 const {reduxState} = props
 const [counterVal, setCounterVal] = useState(0)
 const increment = () => {
  setCounterVal(prevVal => prevVal + 1)
 }
 const decrement = () => {
  setCounterVal(prevVal => prevVal - 1)
 }
 const reset = () => {
  setCounterVal(0)
 }

 return (<div className="container">
  <p className="counter">{reduxState.state.count}</p>
  <div className="buttons">
  <button type="button" onClick={increment} className="btn">increment</button>
  <button onClick={reset} className="btn">reset</button>
  <button onClick={decrement} className="btn">decrement</button>
  </div>
 </div>)
}
export default Counter