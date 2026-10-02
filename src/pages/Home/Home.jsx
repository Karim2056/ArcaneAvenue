import "./Home.css"
import { NavLink } from "react-router"

export default function () {
    return (
        <>
            <section className="banner">
                <div className="cta-wrapper">
                    <NavLink to="products" className="cta">Explore Arcane Avenue</NavLink>
                </div>
            </section>
        </>
    )
}