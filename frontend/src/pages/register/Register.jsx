import "./register.css"
import { useState } from "react"

export default function Register() {

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
console.log(formData)
console.log(profileData)
  const createUser =  async () => {
    let req = await fetch('http://localhost:3000/signup', {
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
    console.log(data)
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
  // fetch(`http://localhost:3000/signup`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(formData),
  //   }).then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     console.log(profileData)
      
  //     if (data) {
  //       const makeProfile = async () => {
  //         let res = await fetch('http://localhost:3000/profile', {
  //           method: 'POST',
  //           headers: {
  //             "Content-Type": "application/json"
  //           }),
  //       }}
  //         let req
        // fetch(`http://localhost:3000/profile`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(profileData),
        // }).then(res => res.json())
        // .then(data => {
        //   console.log(data)
        //   setProfileData(data)
        // })
      // }
    // })
}

  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form onSubmit={handleSubmit} className="registerForm">
        <label>First Name</label>
            <input onChange={profileChange} type="text" className="registerInput" placeholder="Enter Your First Name..." name="first_name"/>
            <label>Last Name</label>
            <input onChange={profileChange} type="text" className="registerInput" placeholder="Enter Your Last Name..." name="last_name"/>
            <label>Email</label>
            <input onChange={formChange} type="text" className="registerInput" placeholder="Enter Your Email..." name="email"/>
            <label>Profile Image</label>
            <input onChange={profileChange} type="text" className="registerInput" placeholder="Enter Your Email..." name="image"/>
            
            <label>Username</label>
            <input onChange={formChange} type="text" className="registerInput" placeholder="Enter Your Username..." name="username"/>
            
            <label>Password</label>
            <input onChange={formChange} type="password" className="registerInput" placeholder="Enter Your Password..." name="password"/>
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>

    </div>
  )
}
