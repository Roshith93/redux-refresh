import React from 'react'
import {connect} from 'react-redux'

const Modal = ({isOpen}) => {
 return(
  <div className={`modal-overlay ${isOpen ? 'isModalOpen' : null}`}>
   <div className="modal-container">
    <h4>somerandom name</h4>
    <p>some random text</p>
    <button className="btn btn-primary">close</button>
   </div>
  </div>
 )
}
const mapStateToProps = state => {
 return{
  isOpen: state.modal.isOpen
 }
}
export default connect(mapStateToProps)(Modal);