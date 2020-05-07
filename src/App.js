import React from 'react';
import './App.css';
import ContactForm from './contact'
import { FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{fontFamily:'Raleway'}}>
          Edit <code>src/App.js</code> and save to reload. This will be my website
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <p>THIS WILL BE MY WEBSITE</p> */}
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
      <div className="Contact">CONTACT</div>
      <ContactForm />
      <div className="Footer">
        {/* <FontAwesomeIcon icon="coffee" />a */}
        <FaInstagram/>
        <FaLinkedin/>
        <FaHeart/>
      </div>

    </div>
  );
}

export default App;
