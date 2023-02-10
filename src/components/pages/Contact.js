import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const styles = {
  messageForm: {
    height: '100px'
  },
  error: {
    color: 'red',
  },
}

export default function Contact() {
    
    // Create state variables for form fields
    const [formState, setFormState] = useState({
      name: '',
      email: '',
      message:''
    })
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    
    // Create state variables for error handling
    const [errorMessage, setErrorMessage] = useState('');

    // Function to handle input
    const handleInputChange = (e) => {

    // Get value and name of input
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Conditional logic to set the state of either name, email or message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Function to handle blur
  const handleBlur = (e) => {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`)
      } else {
        setErrorMessage("");
      }
      
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.value]: e.target.value });
      }
    };
  

  // Function to handle submit button
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate email using helper and name 
    if (!validateEmail(email) || !name) {
      setErrorMessage('Please enter a name and valid email.');
      return;
    }

    // Clear input after submission
    setName('');
    setMessage('');
    setEmail('');
  };
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-sm-4"> 
        <h3 className="text-center">Write me</h3>
      <form className="form" action="mailto:amaryahwolf@gmail.com." method="get">
          <p className="mb-0">name:</p>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          onBlur={handleBlur}
          className="w-100 mb-1"
        />
        <p className="mb-0">email:</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          onBlur={handleBlur}
          className="w-100 mb-1"
        />
        <div className="">
        <p className="mb-0">message:</p>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          onBlur={handleBlur}
          style={styles.messageForm}
          className="w-100 mb-1"
        />
        </div>
        <button className="btn" type="button" onClick={handleFormSubmit}>
          submit
        </button>
      </form>
      <div style={styles.error}>
      {errorMessage && (
        
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
    </div>
    </div>
  );
  
  };