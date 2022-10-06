import "./login.css"
import { useState } from "react"

export default function Login() {

const [user, setUser] = useState({})

const [username, setUsername] = useState("")

const [password, setPassword] = useState("")

const handleLogin = (user) => {
  setUser(user)
}

  const handleUsernameChange = (e) => {
      setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
      setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      fetch(`http://localhost:3000/login`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({
            username:username, 
            password:password
          })
        })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem("token", data.jwt)
            handleLogin(data.user)
      })
    }


  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form onSubmit={handleSubmit} className="loginForm">
            <label>Username</label>
            <input type="text" name="username" className="loginInput" placeholder="Enter Your Username..." onChange={handleUsernameChange}/>
            <label>Password</label>
            <input type="password" name="password" className="loginInput" placeholder="Enter Your Password..." onChange={handlePasswordChange}/>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">Register</button>

    </div>
  )
}
