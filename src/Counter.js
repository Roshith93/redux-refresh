import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from './redux/actions/counter'
import { openModal } from './redux/actions/modal'

const Counter = (props) => {
  return (
    <div className='container'>
      <h3>{props.name}</h3>
      <p className='counter'>{props.count}</p>
      <div className='buttons'>
        <button type='button' onClick={props.increment} className='btn'>
          increment
        </button>
        <button
          onClick={() => {
            props.reset()
            props.openModal(true)
          }}
          className='btn'
        >
          reset
        </button>
        <button onClick={props.decrement} className='btn'>
          decrement
        </button>
      </div>
    </div>
  )
}
const mapStateToProps = ({ counter: { count, name } }) => {
  return {
    count,
    name,
  }
}
const mapDispatchToProps = {
  increment,
  decrement,
  reset,
  openModal,
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     reset: (val) => {
//       dispatch(openModal(val))
//       dispatch(reset())
//     },
//   }
// }
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
