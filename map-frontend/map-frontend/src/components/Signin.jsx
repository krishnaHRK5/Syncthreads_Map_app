import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const navigate = useNavigate()

    const submitLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3005/api/login", { email, password })
            .then(result => {
                console.log(result.data)
                if (email === "" || password === "") {
                    setErrMsg("*required")
                } else if (result.statusText === "OK") {
                    window.localStorage.setItem("token", result.data)
                    window.localStorage.setItem("userType", result.userType)
                    window.localStorage.setItem("loggedIn", true)
                    navigate("/")
                } else if (result.data = "No user existed") {
                    alert("User not Found")
                }


            })
            .catch(err => console.log(err))


    }

    return (
        <div className='w-[100vw] h-[100vh] bg-orange-300 flex justify-center items-center'>
            <div className='bg-white w-72 md:w-[25%] rounded-lg shadow-2xl p-8 '>
                <form onSubmit={submitLogin} className='flex flex-col gap-4'>
                    <h1 className='font-bold text-2xl text-orange-400'>Log in to your account</h1>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email" className='text-md font-semibold'>Email</label>
                        <input type='email' id="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} className='text-md outline-none border-1 border-gray-300 rounded-md px-2 py-[2px]' />
                        {email === "" && <span className='text-[13px] text-red-500'>{errMsg}</span>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password" className='text-md font-semibold'>Password</label>
                        <input type='password' id="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} className='text-md outline-none border-1 border-gray-300 rounded-md px-2 py-[2px]' />
                        {password === "" && <span className='text-[13px] text-red-500'>{errMsg}</span>}
                    </div>
                    <button type="submit" className='bg-orange-300 text-gray-700 font-semibold hover:bg-orange-400 px-4 py-[4px] mt-2 rounded-md cursor-pointer'
                    >Login</button>

                </form>
                <div className='flex flex-col'>
                    <span className='text-[14px]'>Don't Have an Account ?</span>
                    <Link to="/api/register" className='border-2 bg-white text-center  w-full text-gray-700 font-semibold hover:bg-gray-200 px-4 py-[4px] mt-4 rounded-md cursor-pointer'
                    >Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Signin