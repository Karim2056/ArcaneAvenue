import "./Footer.css"
import Wand from "../../assets/Magic Want.png";
import Note from "../../assets/Footer Note.png";
import { NavLink } from "react-router";

export default function Footer() {

    return (
        <footer className="main-footer ">
            <div className="footer-left ">
                <img src={Wand} />
            </div>
            <div className="footer-middle ">
                <div className="footer-heading">
                    <div className="line"/>
                    <h3 className="footer-title">Magic In More Hands</h3>
                    <div className="line"/>
                </div>
                <nav className="footer-links">
                    <NavLink to="/" className="f-link">ToS</NavLink>
                    <div className="circle">•</div>
                    <NavLink to="/" className="f-link">Privacy Policy</NavLink>
                    <div className="circle">•</div>
                    <NavLink to="/" className="f-link">Inquiries</NavLink>
                </nav>
            </div>
            <div className="footer-right ">
                <img src={Note}/>
            </div>
        </footer>
    )
}