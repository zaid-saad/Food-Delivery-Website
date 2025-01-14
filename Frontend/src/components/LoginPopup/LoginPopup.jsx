import React, { useState, useContext } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
const LoginPopup = ({ setshowLogin }) => {

    const { url, setToken } = useContext(StoreContext)

    const [currentState, setcurrentState] = useState("Login")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (e) => {
        e.preventDefault();
        let newurl = url;
        if (currentState === "Login") {
            newurl += "/api/user/login"
        }
        else {
            newurl += "/api/user/register"
        }

        const response = await axios.post(newurl, data);

        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token', response.data.token)
            setshowLogin(false)
        }
        else{
            alert(response.data.message)
        }
    }



    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currentState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your E-mail' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Your Password' required />
                </div>
                <button type='submit'>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className='login-popup-condition'>
                    <input type="checkbox" required />
                    <p>By Continuing, I agree to the terms of use &  Privacy Policy.</p>
                </div>
                {currentState === "Login"
                    ? <p>Create a new Account? <span onClick={() => setcurrentState("Sign Up")}>Click Here</span></p> :
                    <p>Already have an Account?<span onClick={() => setcurrentState("Login")}>Login Here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
