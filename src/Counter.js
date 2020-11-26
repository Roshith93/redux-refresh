import React from 'react'
import {connect} from 'react-redux'

const Counter = (props) => {

 return (<div className="container">
  <h3>{props.name}</h3>
  <p className="counter">{props.count}</p>
  {/* <div className="buttons">
  <button type="button" onClick={()=>inc} className="btn">increment</button>
  <button onClick={reset} className="btn">reset</button>
  <button onClick={dec} className="btn">decrement</button>
  </div> */}
 </div>)
}
const mapStateToProps = state => {
 return{
  count: state.counter.count,
  name: state.counter.name
 }
}
export default connect(mapStateToProps)(Counter)