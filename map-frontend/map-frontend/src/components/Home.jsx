import React from 'react'
import { Link } from 'react-router-dom';
import { GiWorld } from "react-icons/gi";


const Home = () => {

    return (
        <div className='bg-orange-200 w-full h-full  p-12'>

            <div className='w-full h-30 flex items-center justify-center gap-2'>
                <GiWorld size="110" className='text-blue-300' />
                <div className='flex flex-col'>
                    <h1 className='text-center text-8xl text-blue-900 font-bold'>ATLAS</h1>
                    <span className='text-[12px] ml-4 text-gray-700 font-semibold font-serif'>Open Street Map Explorer: Your Map, Your Way</span>
                </div>
            </div>
            <div className='flex justify-center mt-20'>
                <p className='text-center w-[60%] font-[Open_Sans] text-base/8'>A map view refers to the visual representation of geographic information displayed on a map interface. It allows users to explore and interact with geographical locations, landmarks, streets, and regions, often offering features such as zoom, panning, and layers to customize the view.</p>
            </div>

            <div className='flex flex-col justify-center items-center mt-12 font-serif font-semibold text-blue-900'>
                <span>Please go to the dashboard to explore and find your way</span>
                <button className='bg-orange-300 rounded-lg w-30 h-10 mt-5 hover:bg-orange-100 hover:border-2 hover:border-orange-400'>
                    <Link to="/api/dashboard">Dashboard</Link>
                </button>
            </div>
        </div>

    )
}

export default Home