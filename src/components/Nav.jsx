import logo from "../assets/logo.png"
export default function Nav({onToggleSideBar, isSideBarOpen}) {
    return (
        <nav className="main-nav container">
            <ul className="main-nav-list">
                <img src={logo} alt="Logo" className="logo"/>
                <li className="nav-list-item toggle-menu-btn">
                    <button onClick={onToggleSideBar}>
                        {
                            isSideBarOpen ? <ion-icon name="close-outline" className = "icon"></ion-icon>:<ion-icon name="reorder-two-outline" className = "icon"></ion-icon>
                        }
                    </button>
                </li >
            </ul>
        </nav>
    )
}