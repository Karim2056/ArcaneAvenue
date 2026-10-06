import "./Product.css"
import { NavLink } from "react-router"

export default function Product({image, name, price, link}) {

    return (
        
        <NavLink className="card" to={link}>
            <img className="product-image" src={image}/>
            <p>{name}</p>
            <h1>{price}</h1>
        </NavLink>
    )
}