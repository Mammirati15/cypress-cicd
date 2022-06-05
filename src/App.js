import './App.css';
import React, { useState } from "react"
import ReactDOM  from 'react-dom';

function App() {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ]

  const errors = {
    uname: "Invalid Username",
    pword: "Invalid Password"
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    var {uname , pword} = document.forms[0]

    const userData = database.find((user) => user.username === uname.value)

    if(userData) {
      if(userData !== pword.value){
        setErrorMessages({name: "pword", message: errors.pword})
      } else {
        setIsSubmitted(true)
      }
    } else {
      setErrorMessages({name: "uname", message: errors.uname})
    }
  }

  const renderErrorMessages = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    )

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label>Username: </label>
          <input className="uname-input" type="text" name="uname" required />
          {renderErrorMessages("uname")}
        </div>
        <div className="inputContainer">
          <label>Password: </label>
          <input className="pword-input" type="text" name="pword" required />
          {renderErrorMessages("pname")}
        </div>
        <div className="buttonContainer">
          <input className="submit-button" type="submit" />
        </div>
      </form>
    </div>
  )


  return (
    <div className="App">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div> User is Successfully Logged In</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
