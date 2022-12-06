import "./register.css"
import { useState } from "react"
import { Navigate, NavLink, useNavigate } from "react-router-dom"
export default function Register() {

const nav = useNavigate()
const [formData, setFormData] = useState({
  username: "",
  password: "",
  email: ""
})

const [profileData, setProfileData] = useState({
  first_name: "",
  last_name: "",
  image: ""
})

const profileChange = (e) => {
setProfileData({
  ...profileData,
  [e.target.name]: e.target.value
})
}

const formChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = (e) => {
  e.preventDefault()

  const createUser =  async () => {
    let req = await fetch('http://localhost:3000/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    let res = await req.json()
    // console.log(res)
    createProfile(res)
  }
  const createProfile = async (data) => {
    let req = await fetch('http://localhost:3000/profile', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: data.id,
        first_name: profileData.first_name,
        last_name: profileData.last_name,
        image: profileData.image
      })
    })
    let res = await req.json()
    console.log(res)
  }
  createUser()
  .then(window.alert('Account created!'))
  .then(nav("/Login"))
}

  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form onSubmit={handleSubmit} className="registerForm">
        <label>First Name</label>
            <input onChange={profileChange} type="text" className="registerInput" placeholder="First Name..." name="first_name"/>
            <label>Last Name</label>
            <input onChange={profileChange} type="text" className="registerInput" placeholder="Last Name..." name="last_name"/>
            <label>Email</label>
            <input onChange={formChange} type="text" className="registerInput" placeholder="Email" name="email"/>
            <label>Profile Image</label>
            <input onChange={profileChange} type="text" className="registerInput" placeholder="Image URL" name="image"/>
            
            <label>Username</label>
            <input onChange={formChange} type="text" className="registerInput" placeholder="Username" name="username"/>
            
            <label>Password</label>
            <input onChange={formChange} type="password" className="registerInput" placeholder="Password" name="password"/>
            <button className="registerButton">Register</button>
        </form>
        <NavLink to="/Login"><button className="registerLoginButton">Login</button></NavLink>

    </div>
  )
}
