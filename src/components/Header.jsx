import React from 'react'
import group_pic from '../assets/group_profiles.png'
import arrow_icon from '../assets/arrow_icon.svg'
import header_image from '../assets/header_img.png'
const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
          <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg-leading-tight'>Connect With Your <br/> Favotite And Trusted Influencer</p>
          <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img src={group_pic} alt=''/>
          <p>Simply Browse through extensive list of Best Influencers,<br/> schedule the meet right away</p>
          </div>
          <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-grey-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
            Book Appointment <img src={arrow_icon} alt=''/>
          </a>
        </div>
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={header_image} alt=''/>
        </div>
    </div>
  )
}

export default Header


