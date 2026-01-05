export default function Nav(){
    return (
        <nav className="main-nav container">
            <ul className="main-nav-list">
                <li className="nav-list-item">
                    <button>
                        <ion-icon name="bookmark-outline" className = "icon"></ion-icon>
                    <p>guardados</p>
                        </button>
                </li>
                <li className="nav-list-item menu-btn">
                    <button><ion-icon name="reorder-two-outline" className = "icon"></ion-icon></button>
                </li>
            </ul>
        </nav>
    )
}