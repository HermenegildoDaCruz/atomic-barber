export default function Nav({onToggleSideBar, isSideBarOpen}) {
    return (
        <nav className="main-nav container">
            <ul className="main-nav-list">
                {/* <li className="nav-list-item">
                    <button>
                        <ion-icon name="cut" className = "icon"></ion-icon>
                        </button>
                </li>
                <li>
                     <button>
                        <ion-icon name="cart" className = "icon"></ion-icon>
                        </button> 
                </li> */}
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