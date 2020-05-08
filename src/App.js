import React from 'react';
import './App.css';
import ContactForm from './components/Contact'
import { FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";
// import Modal from 'react-modal';
import MyModal from './components/Modal'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  

  render(){
    return (
      <div className="App">
        <div className="Title">Carlos Yanes</div>
        <hr style={{width:'10%'}}></hr>
        <div className="Subtitle">coming soon</div>
        <div className="Develop">
          <div className="Items">Web Apps</div>
          <div className="Items">Mobile Apps</div>
          <div className="Items">E-Commerce</div>
          <div className="Items">Landing Pages</div>
          <div className="Items">Consulting</div>
        </div>
        <div onClick={this.handleOpenModal} className="Contact">CONTACT</div>
        <MyModal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
        >
          <ContactForm onRequestClose={this.handleCloseModal} />
        </MyModal>
        {/* <Modal/> */}


        <div className="Footer">
          <FaInstagram/>
          <FaLinkedin/>
          <FaHeart/>
        </div>
  
      </div>
    );
  }
}

export default App;
