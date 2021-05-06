import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import LoginForm from "../auth/LoginForm"
import SignUpForm from "../auth/SignUpForm"
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
        <>
            <div className="homeParent"/>
            <div >
                <button onClick={e => loginForm(e)}>Login</button>
                <button onClick={e => signUpForm(e)}>Signup</button>
            </div>
            {login === true ?
                <LoginForm />
            : <SignUpForm />}
        </>
    )
}
 export default Home
