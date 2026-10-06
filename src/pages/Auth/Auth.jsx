import "./Auth.css"
import { useState } from "react"

import AuthBanner from "../../assets/Home Banner.png"

export default function Auth() {

    const [selectedForm, setSelectedForm] = useState("register");

    return (
        <div className="auth-wrapper test">
            <div className="auth-image-col test">
                <img src={AuthBanner}/>
            </div>
            { selectedForm == "register" ? <RegisterForm /> : <LoginForm /> }
        </div>
    )
}

function RegisterForm() {
    return (
        <form className="auth-form">
            Register
        </form>
    )
}

function LoginForm() {
    return (
        <form className="auth-form">
            Login
        </form>
    )
}