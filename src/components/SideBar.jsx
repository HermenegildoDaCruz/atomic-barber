import BackDrop from "./BackDrop"
export default function SideBar({ open }){
    return (
        <>
            <BackDrop open={open} />
            <aside className="side-bar">
            <ul className="side-bar-list">
                <li className="side-bar-list-item">
                    <a href="#home">
                        Home
                    </a>
                </li>   
                <li className="side-bar-list-item">
                    <a href="#hairstyle-prices">
                        Hairstyles
                    </a>
                </li>
                <li className="side-bar-list-item">
                    <a href="#products">
                        Products
                    </a>
                </li> 
            </ul>
            <div className="social-links">
                <a href="/" target="_blank" className="social-link">
                    <ion-icon name="logo-facebook" className = "icon"></ion-icon>
                </a>
                <a href="/" target="_blank" className="social-link">
                    <ion-icon name="logo-whatsapp" className = "icon"></ion-icon>
                </a>
            </div>
        </aside>
        </>

       
    )
}