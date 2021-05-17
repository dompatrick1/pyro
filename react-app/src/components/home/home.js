import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import LoginForm from "../auth/LoginForm"
import SignUpForm from "../auth/SignUpForm"
import record from "./flame_record.png"
import collage from "./loginCollage.png"
import "./home.css"

function Home() {
    const dispatch = useDispatch()
    const [login, setLogin] = useState(true)

    const loginForm = (e) => {
        e.preventDefault()
        setLogin(true)
    }

    const signUpForm = (e) => {
        e.preventDefault()
        setLogin(false)
    }

    return (
        <div className="homeParent">
            <div className="logoDiv">
                <h1>PYR<img className="flameRecordLogin" src={record} alt={record}></img></h1>
                <h4>Put Your Records On</h4>
            </div>
            <div className="collage">
                <img src={collage} alt={collage}></img>
            </div>
            <div className="loginSignupContainer">
                <div className="loginSignupButtonsDiv">
                <button className="loginSignupButtons" onClick={e => loginForm(e)}>Login</button>
                <button className="loginSignupButtons" onClick={e => signUpForm(e)}>Signup</button>
                </div>
                {login === true ?
                    <LoginForm />
                : <SignUpForm />}
            </div>
        </div>
    )
}
 export default Home
