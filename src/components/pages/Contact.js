import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    
    // Create state variables for form fields
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    
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

    // TODO: add logic to alert user that all three inputs are required
    // if (!checkPassword(password)) {
    //   setErrorMessage(
    //     `Choose a more secure password for the account: ${userName}`
    //   );
    //   return;
    // }

    // Clear input after submission
    setName('');
    setMessage('');
    setEmail('');
  };
  return (
    <div>
        <h1>Contact</h1>
      <form className="form">
        <div className="mb-3">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        </div>
        <div className="mb-3">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        </div>
        <div className="mb-3">
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        </div>
        <button type="button" onClick={handleFormSubmit}>
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