import React, {useState} from 'react';
import '../../App.css';
import {db} from '../../firebase/firebaseConfig'
import {GrClose} from 'react-icons/gr'

// db.collection('emails').add({
//   name: 'Tokyo',
//   email: 'cyanes@correo.unimet.edu.ve',
//   message:'mymessage'
// }).then(ref => {
//   // console.log('Added document with ID: ', ref.id);
// });

const Contact = (props)=>{

  
  const [formName, setName] = useState('');
  const [formEmail, setEmail] = useState('');
  const [formMessage, setMessage] = useState('');

  const handleChangeName = (event)=>{
    setName(event.target.value)
  }

  const handleChangeEmail = (event)=>{
    setEmail(event.target.value)
  }

  const handleChangeMessage = (event)=>{
    setMessage(event.target.value)
  }

  const handleSubmit = ()=>{
    if(formName !== '' && formEmail !=='' && formMessage !==''){
      let data = {
        name: formName,
        email: formEmail,
        message: formMessage
      }
      db.collection('emails').add(data).then(ref => {
        // console.log('Added document with ID: ', ref.id);
        props.onRequestClose('holaa')
      });
          console.log(formName, formEmail, formMessage)
    }
    else{
      console.log('not valid')
      return
    }

  }
  return(
    <div className="Form" id="form_id">
      <input
        type="text"
        name="name"
        placeholder="Name"
        autoComplete="chrome-off"
        value={formName}
        onChange={handleChangeName}
        required
      // onChange={updateInput}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="chrome-off"
        value={formEmail}
        onChange={handleChangeEmail}
        required
      // onChange={updateInput}
      />
      <textarea
        type="text"
        name="message"
        placeholder="Message"
        rows="10"
        value={formMessage}
        onChange={handleChangeMessage}
        required
      // onChange={updateInput}
      ></textarea>
      <div onClick={handleSubmit} className="Contact2">SEND</div>
      <GrClose size={'2em'} className="XButton" onClick={props.onRequestClose} />
    </div>
  )
}

export default Contact;