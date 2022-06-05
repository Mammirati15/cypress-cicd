import './App.css';
import React, { useState } from "react"


function App() {
  // const [errorMessages, setErrorMessages] = useState({})
  // const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  // const database = [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   }
  // ]

  // const errors = {
  //   uname: "Invalid Username",
  //   pword: "Invalid Password"
  // }

  const handleSubmit = (event) => {
    event.preventDefault()

    if(!userName) {
      setErrorMessage('Username is Required')
    } else if (!password) {
      setErrorMessage('Password is Required')
    } else if (password.length < 8) {
      setErrorMessage('Password is too short')
    }

    // var {uname , pword} = document.forms[0]

    // const userData = database.find((user) => user.username === uname.value)

    // if(userData) {
    //   if(userData !== pword.value){
    //     setErrorMessages({name: "pword", message: errors.pword})
    //   } else {
    //     setIsSubmitted(true)
    //   }
    // } else {
    //   setErrorMessages({name: "uname", message: errors.uname})
    // }
  }

  // const renderErrorMessages = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   )


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
            onChange={e => {
              e.preventDefault()
              console.log(e.target.value)
              setUserName(e.target.value)
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
            onChange={e => {
              e.preventDefault()
              setPassword(e.target.value)
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


  )





}

export default App;
