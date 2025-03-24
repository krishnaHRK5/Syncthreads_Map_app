import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import StreetMap from './StreetMap';

const Dashboard = () => {
    const [coordOne, SetCoordOne] = useState("51.505")
    const [coordTwo, SetCoordTwo] = useState("-0.09")
    //coordOne = parseFloat(coordOne)
    console.log(typeof coordOne)
    const navigate = useNavigate()

    const logout = () => {
        navigate("/api/login")
    }

    const onSearch = () => {
        navigate("/api/map")
    }

    return (
        <div className='w-full h-full bg-sky-200 flex flex-col justify-center items-center gap-2'>
            <div>
                <p className='text-mono text-4xl'>Explore The Atlas</p>
            </div>
            <div className=''>
                view your destinations
            </div>
            <div className='text-center mt-4'>
                search the locations with coordinates
                <form className='flex gap-2'>
                    <input type='text' className='outline-none bg-white px-2 rounded-md' onChange={(e) => SetCoordOne(e.target.parseFloat(value))} value={coordOne} />
                    <input type='text' className='outline-none bg-white px-2 rounded-md' onChange={(e) => SetCoordTwo(e.target.parseFloat(value))} value={coordTwo} />
                    <input type='button' onClick={onSearch} className='rounded-md bg-white px-2' value="search" />
                </form>
            </div>
            <div className='w-30 h-10 bg-white mt-12 rounded-md text-blue-500 font-bold flex justify-center items-center'>
                <Link to="/api/map">Goto Map</Link>
            </div>
            <div>
                <button type='button' className='border-b-1 cursor-pointer' onClick={logout}>Log out</button>
            </div>
            <div className='hidden'>
                <StreetMap coordOne={coordOne} coordTwo={coordTwo} />
            </div>
        </div>
    )
}

export default Dashboard