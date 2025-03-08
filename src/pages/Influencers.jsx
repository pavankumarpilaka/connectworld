import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Influencers = () => {
  const {speciality} =useParams()
  const {Influencers}=useContext(AppContext)
  const [Filterdoc,setFilterdoc]=useState([])
  const navigate=useNavigate()
   
  const applyfilter = () => {
    if(speciality){
      setFilterdoc(Influencers.filter(doc=>doc.speciality===speciality))
    }else{
      setFilterdoc(Influencers)
    }
  }

  useEffect(()=>{
    applyfilter()
  },[Influencers,speciality])
  return (
    <div>
      <p className='text-gray-600'>Browse Through the Influecers and Experises By Speciality</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
      <div className="flex-col gap-4 text-sm text-gray-600">
  <p
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-2 ${
      speciality === "Travel" ? "bg-indigo-100 text-black" : ""
    }`}
    onClick={() => navigate("/Influencers/Travel")}
  >
    Travelling
  </p>
  <p
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-2 ${
      speciality === "Tech" ? "bg-indigo-100 text-black" : ""
    }`}
    onClick={() => navigate("/Influencers/Tech")}
  >
    Technology
  </p>
  <p
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-2 ${
      speciality === "Finance" ? "bg-indigo-100 text-black" : ""
    }`}
    onClick={() => navigate("/Influencers/Finance")}
  >
    Finance
  </p>
  <p
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-2 ${
      speciality === "AutoMobiles" ? "bg-indigo-100 text-black" : ""
    }`}
    onClick={() => navigate("/Influencers/AutoMobiles")}
  >
    AutoMobiles
  </p>
  <p
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-2 ${
      speciality === "Fashion" ? "bg-indigo-100 text-black" : ""
    }`}
    onClick={() => navigate("/Influencers/Fashion")}
  >
    Fashion
  </p>
  <p
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-2 ${
      speciality === "EnterPrenuership" ? "bg-indigo-100 text-black" : ""
    }`}
    onClick={() => navigate("/Influencers/EnterPrenuership")}
  >
    Enterprenuership
  </p>
</div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            Filterdoc.map((item,index)=>(
              <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                <img className='bg-blue-50 h-60 w-full' src={item.image} alt=''/>
                <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                       <p className='w-2 h-2 rounded-full bg-green-500'></p>
                       <p>Available</p>
                    </div>
                    <p className='text-grey-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-grey-600 text-sm'>{item.speciality}</p>
                </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Influencers