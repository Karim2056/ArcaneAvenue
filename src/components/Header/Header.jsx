import "./Header.css"
import { NavLink } from "react-router"
import Logo from "../../assets/Logo.png";
import Star from "../../assets/Star.png";

export default function Header() {

    return (
        <header className="main-header">
            <div className="bg-paper header-top">
                <div className="header-left">
                    <img className="header-star" src={Star} />
                    <div className="header-deco">
                        <p>TRICKS</p>
                        <p>BOOKS</p>
                        <p>CURIOSITIES</p>
                    </div>
                </div>
                <div className="header-middle">
                    <NavLink to="">
                        <img className="logo" src={Logo} alt="Arcane Avenue Logo" />
                    </NavLink>
                </div>
                <div className="header-right">

                    <nav className="header-actions">
                        <NavLink to="account" className="header-btn">ACCOUNT</NavLink>
                        <NavLink to="wishlist" className="header-btn">WISHILIST</NavLink>
                        <button className="header-btn">WISHILIST</button>
                    </nav>

                    <form className="search-form">
                        <input className="simple-input" placeholder="Search magic..." />
                        <button className="search-btn">SEARCH</button>
                    </form>


                </div>
            </div>
            <nav className="category-nav">
                <NavLink to="products" className="cat-link">ALL</NavLink>
                <NavLink to="products" className="cat-link">ALL</NavLink>
                <NavLink to="products" className="cat-link">ALL</NavLink>
                <NavLink to="products" className="cat-link">ALL</NavLink>
                <NavLink to="products" className="cat-link">ALL</NavLink>
                <NavLink to="products" className="cat-link">ALL</NavLink>
                <NavLink to="products" className="cat-link">ALL</NavLink>
                <NavLink to="products" className="cat-link">ALL</NavLink>
                <NavLink to="products" className="cat-link">ALL</NavLink>
                <NavLink to="products" className="cat-link">ALL</NavLink>
                <NavLink to="products" className="cat-link">ALL</NavLink>
            </nav>
        </header>
    )
}