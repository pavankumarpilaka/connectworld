import React, { useState } from 'react'
import {assets} from '../assets/assets'

const Myprofile = () => {
  const [isedit,setisiedit] =useState(false)
  const [userdata,setuserdata]=useState({
    name:'pavan kumar pilaka',
    image: assets.profile_pic,
    email:'pavankumarpilaka96@gmail.com',
    phone:'+91 7659077821',
    Adress:{
      line1:'Bhimavaram',
      line2:'Andhrapradesh'
    },
    gender:'male',
    dob:'2005-05-08'
  })
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
        <img className='w-36 rounded' src={userdata.image} alt=''/>
        {
          isedit?
          <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type='text' value={userdata.name} onChange={e=>setuserdata(prev=>({...prev,name:e.target.value}))} />
          :<p className='font-medium text-3xl text-neutral-800 mt-4'>{userdata.name}</p>
        }
        <hr className='bg-zinc-400 h-[1px] border-none'/>
        <div>
          <p className='text-neutral-500 underline mt-3'>Contact Information</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3'>
            <p className='font-medium'>Email Id:</p>
            <p className='text-blue-500'>{userdata.email}</p>
            <p className='font-medium'>Phone:</p>
            {
          isedit?
          <input className='bg-gray-100 max-w-52' type='text' value={userdata.phone} onChange={e=>setuserdata(prev=>({...prev,phone:e.target.value}))} />
          :<p className='text-blue-400'>{userdata.phone}</p>
        }
        <p className='font-medium '>Adress:</p>
        {
          isedit?
          <p>
            <input className='bg-gray-50' type="text" onChange={(e)=>setuserdata(prev=>({...prev,Adress:{...prev.Adress,line1:e.target.value}}))} value={userdata.Adress.line1} /> <br/>
            <input className='bg-gray-50' type="text" onChange={(e)=>setuserdata(prev=>({...prev,Adress:{...prev.Adress,line2:e.target.value}}))} value={userdata.Adress.line2} />
          </p>:
          <p className='text-gray-500'>{userdata.Adress.line1}<br/>{userdata.Adress.line2}</p>
        }
          </div>
        </div>
        <div>
          <p className='text-neutral-500 underline mt-3'>Basic Information</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>Gender:</p>
            {
          isedit?
          <select className='max-w-20 bg-gray-100' onChange={(e)=>setuserdata(prev=>({...prev,gender:e.target.value}))} value={userdata.gender}><option value="Male">Male</option><option value={"Female"}>Female</option></select>
          :<p className='text-gray-400'>{userdata.gender}</p>
        }
         <p className='font-medium'>BirthDate</p>
            {isedit?<input className='max-w-28 bg-gray-100' type='date' onChange={(e)=>setuserdata(prev=>({...prev,dob:e.target.value}))} value={userdata.dob}/>:<p className='text-gray-40'>{userdata.dob}</p>}
          </div>
        </div>
        <div className='mt-10 '>
          {
          isedit?<button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setisiedit(false)}>Save Changes</button>:
          <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setisiedit(true)}>Edit</button>}
        </div>
    </div>
  )
}

export default Myprofile