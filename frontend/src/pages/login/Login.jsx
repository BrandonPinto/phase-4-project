import "./login.css"
import { useState, useEffect } from "react"

export default function Login() {

const [user, setUser] = useState({ name: "" })
const [form, setForm] = useState({})

let updateForm = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
};

let handleSubmit = (e) => {
  e.preventDefault();
  console.log(form);
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("jwt", data.token);
      setUser({
        name: data.user
      });
    }, []);
};
useEffect(() => {
  let token = localStorage.getItem("jwt");
  if (token && !user.username) {
    fetch(`http://localhost:3000/me`, {
      method: "GET",
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser({
          name: data.username,
        });
      });
  }
}, [user.username]);
  

  return (
    
    <div className="login">
        <span className="loginTitle">Login</span>
        <form onSubmit={handleSubmit} className="loginForm">
            <label>Username</label>
            <input type="text" name="username" className="loginInput" placeholder="Enter Your Username..." onChange={updateForm}/>
            <label>Password</label>
            <input type="password" name="password" className="loginInput" placeholder="Enter Your Password..." onChange={updateForm}/>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginButton" onClick={() => {
            localStorage.clear();
            setUser({
              name: "",
            });
          }}>LOGOUT</button>
        <button className="loginRegisterButton">Register</button>

    </div>
  )
}

// 