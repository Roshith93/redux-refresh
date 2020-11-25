import React, { useState } from 'react'

const Counter = (props) => {
 const {reduxState, inc, dec, reset} = props
 console.log(props)
 console.log(reduxState)
 // const [counterVal, setCounterVal] = useState(0)
 // const increment = () => {
 //  setCounterVal(prevVal => prevVal + 1)
 // }
 // const decrement = () => {
 //  setCounterVal(prevVal => prevVal - 1)
 // }
 // const reset = () => {
 //  setCounterVal(0)
 // }

 return (<div className="container">
  <p className="counter">{reduxState.count}</p>
  {/* <div className="buttons">
  <button type="button" onClick={()=>inc} className="btn">increment</button>
  <button onClick={reset} className="btn">reset</button>
  <button onClick={dec} className="btn">decrement</button>
  </div> */}
 </div>)
}
export default Counter