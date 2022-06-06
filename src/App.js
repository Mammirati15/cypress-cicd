import './App.css';
import React, { useState } from 'react';

function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const goodUsername = 'hermanmuenster@gmail.com'
  const goodPassword = 'pass1234'

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userName) {
      setErrorMessage('Username is Required');
    } else if (!password) {
      setErrorMessage('Password is Required');
    } else if (password.length < 8) {
      setErrorMessage('Password is too short');
    } else if (userName !== goodUsername || password !== goodPassword) {
      setErrorMessage('Invalid Username or Password')
    }
  };



  return (
    <div className="App">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
          <div>{errorMessage}</div>
          <form onSubmit={handleSubmit}>
            <div className="inputContainer">
              <label>Username: </label>
              <input
                className="uname-input"
                type="text"
                name="uname"
                value={userName}
                onChange={(e) => {
                  e.preventDefault();
                  console.log(e.target.value);
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="inputContainer">
              <label>Password: </label>
              <input
                className="pword-input"
                type="text"
                name="pword"
                value={password}
                onChange={(e) => {
                  e.preventDefault();
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="buttonContainer">
              <input className="submit-button" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
