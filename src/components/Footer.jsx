import SignupNewsletter from "./SignupNewsletter"
import Copyright from "./Copyright"
import SocialMedia from "./SocialMedia"
import { NavLink } from "react-router-dom"

export default function Footer(){
    return (
        <footer className="footer container grid grid-2">
            <SignupNewsletter/>
            <div className="footer-content-box">
                <div>
                    <h3 className="heading-terciary">Ir para secão:</h3>
                    <ul className="footer-links">
                        <li> 
                            <a href="#products" className="footer-link">Hairstyles</a>
                        </li>
                        <li>
                            <a href="#products" className="footer-link">Products</a>
                        </li>
                    </ul>
                </div>
                <SocialMedia/>
                <Copyright/>
            </div>
        </footer>
    )
}

