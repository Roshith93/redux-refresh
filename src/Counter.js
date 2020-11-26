import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement, reset} from './redux/actions/counter'

const Counter = (props) => {

 return (<div className="container">
  <h3>{props.name}</h3>
  <p className="counter">{props.count}</p>
  <div className="buttons">
  <button type="button" onClick={props.increment} className="btn">increment</button>
  <button onClick={props.reset} className="btn">reset</button>
  <button onClick={props.decrement} className="btn">decrement</button>
  </div>
 </div>)
}
const mapStateToProps = state => {
 return{
  count: state.counter.count,
  name: state.counter.name
 }
}
const mapDispatchToProps = dispatch => {
 return {
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset()),
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)