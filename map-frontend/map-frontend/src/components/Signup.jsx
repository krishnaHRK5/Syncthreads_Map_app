import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"


const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const navigate = useNavigate()

    const submitRegister = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3005/api/register", { name, email, password })
            .then(result => {
                console.log(result)

                if (result.data === "User already Exists") {
                    alert("User already Exists")
                }
            }

            )
            .catch(err => console.log(err))
        if (name === "" || email === "" || password === "") {
            setErrMsg("*required")
        } else {
            navigate("/api/login")
        }


    }

    return (
        <div className='w-[100vw] h-[100vh] bg-orange-300 flex justify-center items-center'>
            <div className='bg-white w-72 md:w-[25%] rounded-lg shadow-2xl p-8 '>
                <form onSubmit={submitRegister} className='flex flex-col gap-3'>
                    <h1 className=' font-bold text-2xl text-orange-400'>Create your account</h1>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="username" className='text-md font-semibold'>Name</label>
                        <input type='text' id="username" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Name' className='text-md outline-none border-1 border-gray-300 rounded-md px-2 py-[2px]' />
                        {name === "" && <span className='text-[13px] text-red-500'>{errMsg}</span>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email" className='text-md font-semibold'>Email</label>
                        <input type='email' id="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} className='text-md outline-none border-1 border-gray-300 rounded-md px-2 py-[2px]' />
                        {email === "" && <span className='text-[13px] text-red-500'>{errMsg}</span>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password" className='text-md font-semibold'>Password</label>
                        <input type='password' id="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} className='text-md outline-none border-1 border-gray-300 rounded-md px-2 py-[2px]' />
                        {password === "" && <span className='text-[13px] text-red-500'>{errMsg}</span>}</div>
                    <button type="submit" className='bg-orange-300 text-gray-700 font-semibold hover:bg-orange-400 px-4 py-[4px] mt-2 rounded-md cursor-pointer'
                    >Register</button>
                </form>
                <div className='flex flex-col'>
                    <span className='text-[12px] mt-1'>Already Have an Account ?</span>
                    <Link to="/api/login" className='border-2 bg-white text-center  w-full text-gray-700 font-semibold hover:bg-gray-200 px-4 py-[4px] mt-4 rounded-md cursor-pointer'
                    >Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup