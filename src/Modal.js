import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from './redux/actions/modal'

const Modal = (props) => {
  const { isOpen,title, text } = props
  return (
    <div className={`modal-overlay ${isOpen ? 'isModalOpen' : null}`}>
      <div className='modal-container'>
  <h4>{title}</h4>
        <p>{text}</p>
        <button
          className='btn btn-primary'
          onClick={() => props.closeModal(false)}
        >
          close
        </button>
      </div>
    </div>
  )
}
Modal.defaultProps = {
  title: 'Welcome Modal',
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nihil voluptas cupiditate fuga vel non et dolor, neque, iure doloremque corporis quibusdam quam excepturi rem molestias dolorum voluptatum explicabo reiciendis.',
}
const mapStateToProps = ({ modal: { isOpen, title, text } }) => {
  return {
    isOpen,
    title,
    text,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: (val) => dispatch(closeModal(val)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
