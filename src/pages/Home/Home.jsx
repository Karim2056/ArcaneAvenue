import "./Home.css"
import { NavLink } from "react-router"
import SectionDivider from "../../components/SectionDivider/SectionDivider"
import Product from "../../components/Product/Product"

import ProductBook from "../../assets/Product_Book.png"
import ProductCards from "../../assets/Product _Cards.png"
import ProductCups from "../../assets/Product_Cups.png"
import ProductBook2 from "../../assets/Produc_Book2.png"
import ProductCoin from "../../assets/Product_Coin.png"


export default function () {
    return (
        <>
            <section className="banner">
                <div className="cta-wrapper">
                    <NavLink to="products" className="cta">Explore Arcane Avenue</NavLink>
                </div>
            </section>
            <SectionDivider text="featured products" />
            <div className="product-cards">
                <Product image={ProductBook} name="Book for Gooners Vol 1" price="£48.00" link="/" />
                <Product image={ProductCards} name="Nomad Playing Cards" price="£1400" link="/" />
                <Product image={ProductCups} name="Cups and Balls" price="£68.99" link="/" />
                <Product image={ProductBook2} name="Book for Gooners Vol 2" price="£48.00" link="/" />
                <Product image={ProductCoin} name="Counterfeit Coins" price="£1.00" link="/" />
            </div>
            <SectionDivider text="latest listings" link="https://orteil.dashnet.org/cookieclicker/" />
            <div className="product-cards">
                <Product image={ProductBook} name="Book for Gooners Vol 1" price="£48.00" link="/" />
                <Product image={ProductCards} name="Nomad Playing Cards" price="£1400" link="/" />
                <Product image={ProductCups} name="Cups and Balls" price="£68.99" link="/" />
                <Product image={ProductBook2} name="Book for Gooners Vol 2" price="£48.00" link="/" />
                <Product image={ProductCoin} name="Counterfeit Coins" price="£1.00" link="/" />
            </div>


        </>
    )
}