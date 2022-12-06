import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarTitle" src="https://cdn.fstoppers.com/styles/full/s3/media/2021/06/04/dsc_5515-pano-2jj.jpg" alt=""/>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
             <ul className="sidebarList">
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Fashion</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Film</li>
                <li className="sidebarListItem">Hobby</li>
             </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
        </div>


    </div>
  )
}
