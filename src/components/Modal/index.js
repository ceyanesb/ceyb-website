import React from 'react';
import Modal from 'react-modal';
import '../../App.css'
import {GrClose} from 'react-icons/gr'

const MyModal = (props)=>{
  Modal.setAppElement(document.getElementById('root'));

  return(
    <Modal
      isOpen={props.isOpen}
      contentLabel="onRequestClose Example"
      onRequestClose={props.onRequestClose}
      shouldCloseOnOverlayClick={props.shouldCloseOnOverlayClick}
      className="ModalTest"
      overlayClassName="Overlay"
    >
      {props.children}
    </Modal>
  )
}

export default MyModal;