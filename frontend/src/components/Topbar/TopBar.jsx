import "./topbar.css"

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
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                    

                </ul>
            </div>
            <div className="topRight">
                <img 
                className="topImg"
                src=""
                alt=""
                />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>


            </div>
        </div>

    )
}