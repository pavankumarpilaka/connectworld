import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Myappointments = () => {
  const {Influencers}=useContext(AppContext)
  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointements</p>
      <div>
       {
        Influencers.slice(0,2).map((ite,index)=>(
          <div className='grid-grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
             <div>
               <img className='w-32 bg-indigo-50' src={ite.image} alt=''/>
             </div>
             <div className='flex-1 text-sm text-zinc-600 items-center'>
              <p className='text-neural font-semibold'>{ite.name}</p>
              <p>{ite.degree}</p>
              <p>{ite.speciality}</p>
              <p className='text-sm mt-2'><span className='text-sm text-neutral-700 font-medium' >Date & Time:</span> 25, March,2025 | 8:00 PM</p>
             </div>
             <div></div>
             <div className='flex flex-col gap-2 align-items-center'><button className='text-sm text-stone-500 text-center sm-min-w-48 py-2 px-4 border rounded-full hover:bg-red-600 hover:text-black' >Cancel Appointment</button></div>

          </div>
        ))
       }
      </div>
    </div>
  )
}

export default Myappointments