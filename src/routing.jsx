import {Routes, Route} from "react-router";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/Wishlist/Wishlist"
import Auth from "./pages/Auth/Auth";

export default function Pages() {

    return(
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="wishlist" element={<Wishlist/>}/>
            <Route path="auth" element={<Auth/>}/>
        </Routes>
    )
}