import "./Auth.css"
import { useState } from "react"

import AuthBanner from "../../assets/Home Banner.png"
import SectionDivider from "../../components/SectionDivider/SectionDivider"
import Star from "../../assets/Star.png"

export default function Auth() {

    const [selectedForm, setSelectedForm] = useState("register");

    function swapForms() {
        if (selectedForm == "register") {
            setSelectedForm("login")
        } else {
            setSelectedForm("register")
        }
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-image-col">
                <img src={AuthBanner} />
            </div>
            {selectedForm == "register" ? <RegisterForm toggleForm={swapForms} /> : <LoginForm toggleForm={swapForms} />}
        </div>
    )
}

function RegisterForm({ toggleForm }) {
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

function LoginForm({ toggleForm }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        alert("form submitted")
    }

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <div className="star-row">
                <img className="auth-star" src={Star} />
            </div>
            <SectionDivider text="login" />

                <label className="form-input">
                    <p>Email: </p>
                    <input type="email" placeholder="example@gmail.com" required value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label className="form-input">
                    <p>Password: </p>
                    <input type="password" placeholder="password" required value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </label>

                <button type="submit" className="auth-btn">Login</button>

            <div className="form-actions">
                <p>Don't have an account?</p>
                <button type="button" onClick={toggleForm} className="form-toggle-btn">Login</button>
            </div>

        </form>
    )
}