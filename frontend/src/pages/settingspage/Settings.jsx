
import { Link } from "react-router-dom"
import SideBar from "../../components/sidebar/SideBar"
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

return (
<div className="settings">
    <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <button onClick={handleDelete}className="settingsDeleteTitle">Delete Your Account</button>

        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src="" 
                alt="" 
                />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>   
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="6-10 characters" />
            <label>Email</label>
            <input type="email" placeholder="Your email" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
        <Link to="/login">
        <button onClick={handleLogout}>Logout</button>
        </Link>
    </div>
    <SideBar />
</div>
)
}
                

