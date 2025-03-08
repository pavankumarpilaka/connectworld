import React from 'react'
import { assets } from '../assets/assets'
import { Navigate, useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate=useNavigate()
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:5xl font-semibold text-white'>
                <p>Book Appointent</p>
                <p className='mt-2 text-sm'>With 100+ Trusted Influencers </p>
            </div>
            <div className='w-30 h-15 mt-5'>
            <button onClick={()=>{navigate('/login');scrollTo(0,0)}} className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-grey-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>Create Account</button>
            </div>
        </div>
        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative '>
          <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt=''/>
        </div>
    </div>
  )
}

export default Banner