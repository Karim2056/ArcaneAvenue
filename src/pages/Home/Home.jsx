import "./Home.css"
import { NavLink } from "react-router"
import SectionDivider from "../../components/SectionDivider/SectionDivider"

export default function () {
    return (
        <>
            <section className="banner">
                <div className="cta-wrapper">
                    <NavLink to="products" className="cta">Explore Arcane Avenue</NavLink>
                </div>
            </section>
            <SectionDivider text="featured products" />
            <SectionDivider text="latest listings" link="https://orteil.dashnet.org/cookieclicker/"/>

        </>
    )
}