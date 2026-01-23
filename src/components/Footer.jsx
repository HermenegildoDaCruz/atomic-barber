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
                    <h3 className="heading-terciary">Páginas</h3>
                    <ul className="footer-links">
                        <li>
                            <NavLink to="/" className={({isActive}) => isActive ? "footer-link link--actived" : "footer-link"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className={({isActive}) => isActive ? "footer-link link--actived" : "footer-link"}>Products</NavLink>
                        </li>
                    </ul>
                </div>
                <SocialMedia/>
                <Copyright/>
            </div>
        </footer>
    )
}