import "./Auth.css"
import { useState } from "react"

import AuthBanner from "../../assets/Home Banner.png"

export default function Auth() {

    const [selectedForm, setSelectedForm] = useState("register");

    function swapForms() {
        if(selectedForm == "register") {
            setSelectedForm("login")
        } else {
            setSelectedForm("register")
        }
    }

    return (
        <div className="auth-wrapper test">
            <div className="auth-image-col test">
                <img src={AuthBanner} />
            </div>
            {selectedForm == "register" ? <RegisterForm toggleForm={swapForms} /> : <LoginForm toggleForm={swapForms}/>}
        </div>
    )
}

function RegisterForm({toggleForm}) {
    return (
        <form className="auth-form">
            Register

            <div className="form-actions">
                <p>Already have an account?</p>
                <button type="button" onClick={toggleForm} className="form-toggle-btn">Login</button>
            </div>
        </form>
    )
}

function LoginForm({toggleForm}) {
    return (
        <form className="auth-form">
            Login

            <div className="form-actions">
                <p>Don't have an account?</p>
                <button type="button" onClick={toggleForm} className="form-toggle-btn">Login</button>
            </div>

        </form>
    )
}