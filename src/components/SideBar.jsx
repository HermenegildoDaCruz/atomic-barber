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
                {/* <li className="side-bar-list-item">
                    <div className="social-links">
                        <a href="https://www.facebook.com/profile.php?id=100090123456789" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="logo-facebook" className = "icon"></ion-icon>
                        </a>
                    </div>
                </li> */}
             
            </ul>
        </aside>
        </>

       
    )
}