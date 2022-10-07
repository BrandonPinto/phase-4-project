import "./topbar.css"
import { NavLink } from "react-router-dom"

export default function TopBar() {





return (
<div className="topbar">
    <div className="topLeft">
        <h1 className="yoki">YOKI</h1>
    <i className="topIcon fa-brands fa-facebook"></i>
    <i className="topIcon fa-brands fa-twitter"></i>
    <i className="topIcon fa-brands fa-instagram"></i>
    </div>
    <div className="topCenter">
        <ul className="topList">
            <NavLink to= '/' className="topListItem">HOME</NavLink>
            <NavLink to='/profile' className="topListItem">PROFILE</NavLink>
            <NavLink to='/login' className="topListItem">LOGIN</NavLink>
            <NavLink to='/write'className="topListItem">WRITE</NavLink>
            <NavLink to='/register'className="topListItem">REGISTER</NavLink>
        </ul>
    </div>

    <div className="topRight">
        <img 
        className="topImg"
        src="https://i.pinimg.com/originals/9d/40/2f/9d402fafb8d634e8b4235631c5436f86.jpg"
        alt=""
        />
        {/* this is the magnifying glass for the search */}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> 
        
    </div>
</div>

)
}