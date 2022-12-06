import "./topbar.css"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useEffect } from "react"

export default function TopBar() {

    const [user, setUser] = useState({ name: "" })

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
                    console.log(data)
                    setUser({
                        name: data.username,
                    });
                });
        }
    }, [user.username]);



    return (
        <>
        { user.username ?
            <div className="topbar">
                <div className="topLeft">
                    <h1 className="yoki">YOKI</h1>
                    <i className="topIcon fa-brands fa-facebook"></i>
                    <i className="topIcon fa-brands fa-twitter"></i>
                    <i className="topIcon fa-brands fa-instagram"></i>
                </div>
                <div className="topCenter">
                    <ul className="topList">
                        <NavLink to='/' className="topListItem">HOME</NavLink>
                        <NavLink to='/profile' className="topListItem">PROFILE</NavLink>
                        <NavLink to='/write' className="topListItem">WRITE</NavLink>
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
            : 
            <div className="topbar">
            <div className="topLeft">
                <h1 className="yoki">YOKI</h1>
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <NavLink to='/' className="topListItem">HOME</NavLink>
                    <NavLink to='/login' className="topListItem">LOGIN</NavLink>
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
}
        </>
    )
}