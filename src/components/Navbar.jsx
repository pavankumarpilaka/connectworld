import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import profile_pic from '../assets/profile_pic.png'
import dd_icon from '../assets/dropdown_icon.svg'
import { useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'


const Navbar = () => {
  const navigate=useNavigate();
  const [showmenu,setshowmenu]=useState(false);
  const { token, settoken } = useContext(AppContext)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400'>
        <img onClick={()=>{navigate('/')}} className='w-44 cursor-pointer' src={logo} alt="Logo" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>Home</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/Influencers'>
                <li className='py-1'>Influencers</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <a href='#foot'>
                <li className='py-1'>About Us</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </a>
            <a href="#foot">
                <li className='py-1'>Contact</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </a>
        </ul>
        <div className='flex item-center gap-4'>
            {token?<div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={profile_pic} alt='' />
                <img className='w-2.5' src={dd_icon} alt='' />
                <div className='absolute top-0 right-0 pt-14 text-base font-mediun text-gray-600 z-20 hidden group-hover:block '>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={()=>{settoken(false),navigate('/')}} className='hover:text-black cursor-pointer' >Logout</p>
                    </div>
                </div>
            </div>:<button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>}
            <img onClick={()=>setshowmenu(true)} className='w-6 md:hidden ' src={assets.menu_icon} alt=''/>
            <div className={`${showmenu?'fixed w-full':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex items-center justify-between px-5 py-6'>
                    <img className=''w-36 src={assets.logo} alt=''/>
                    <img className='w-7' onClick={()=>setshowmenu(false)} src={assets.cross_icon} alt=''/>
                </div>
                <ul className='flex flex-col items-center font-medium gap-2 px-5 text-lg'>
                    <NavLink className='px-4 py-2 rounded inline-block' to='/' onClick={()=>setshowmenu(false)}>Home</NavLink>
                    <NavLink className='px-4 py-2 rounded inline-block' to='/Influencers' onClick={()=>setshowmenu(false)}>Influencers</NavLink>
                    <a className='px-4 py-2 rounded inline-block' href="#foot" onClick={()=>setshowmenu(false)}>About</a>
                    <a className='px-4 py-2 rounded inline-block' href="#foot" onClick={()=>setshowmenu(false)}>Contact Us</a>
                    {
                        token?<p></p>:<button onClick={()=>{navigate('/login'),setshowmenu(false)}} className='text-green-500'>Create Account</button>
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar