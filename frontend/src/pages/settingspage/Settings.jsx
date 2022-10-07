
import { Link } from "react-router-dom"
import SideBar from "../../components/sidebar/SideBar"
import { useState } from "react"
import "./settings.css"

export default function Settings() {

const handleDelete = () => {
    fetch('http://localhost:3000/delete_account', {
        method: "DELETE",
        headers: {
            'token': localStorage.getItem('jwt')        
        }
    }).then(res => res.json())
    .then(() => localStorage.clear())
}

let handleLogout = (e) => {
    if(e)
    localStorage.clear()
}

const [updateInfo, setUpdateInfo] = useState({
    username: "",
    password: ""
})

const handleUpdate = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/profile", {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('jwt')
        },
        body: JSON.stringify(updateInfo),
    }).then(res => res.json())
    .then(data => {
        console.log(data)
        if(data["user"]){
            localStorage.setItem('jwt', data.token)
            setUpdateInfo({
                username: data.user.username,
                password: data.user.password
            })
        }
    })
}


let handleUpdateFormChange = (e) => {
setUpdateInfo({
    ...updateInfo,
[e.target.name]: e.target.value
    })
}


return (
<div className="settings">
    <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <button onClick={handleDelete}className="settingsDeleteTitle">Delete Your Account</button>

        </div>
        <form onSubmit={handleUpdate}className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtGiLEPbCu6cHJvrg9-Yf7Vr0MNzVJP6TnAA&usqp=CAU" 
                alt="" 
                />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>   
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
            </div>
            <label>Username</label>
            <input onChange={handleUpdateFormChange} name="username" type="text" placeholder="6-10 characters" />
            <label>Password</label>
            <input name="password" type="password" />
            <button onChange={handleUpdateFormChange} className="settingsSubmit">Update</button>
        </form>
        <Link to="/login">
        <button onClick={handleLogout}>Logout</button>
        </Link>
    </div>
    <SideBar />
</div>
)
}
                

