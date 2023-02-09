import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const styles = {
  nameForm: {

  },
  messageForm: {
    height: '100px'
  }
}

export default function Contact() {
    
    // Create state variables for form fields
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [fieldValue, setFieldValue] = useState('');
    
    // Create state variables for error handling
    const [errorMessage, setErrorMessage] = useState('');

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate email using helper and name 
    if (!validateEmail(email) || !name) {
      setErrorMessage('Please enter a name and valid email.');
      return;
    }

    // TODO: add onBlur functionality to alert user that all three inputs are required

    // Clear input after submission
    setName('');
    setMessage('');
    setEmail('');
  };
  return (
    <div className="container-fluid d-block text-center mt-5">
        <h3>Write me.</h3>
      <form className="form">
        <div className="mb-3">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          className="w-25"
        />
        </div>
        <div className="mb-3">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          className="w-25"
        />
        </div>
        <div className="mb-3">
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
          style={styles.messageForm}
          className="w-25"
        />
        </div>
        <button className="btn" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
  
  };