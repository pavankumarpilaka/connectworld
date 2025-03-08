import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10' id='foot'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt=''/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>We are the company that belives "Information is health and we want every Individuals in the country should be Provided with atmost quality Information</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact US
                    </li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
                   
            <div>
                   <p className='text-xl font-medium mb-5'>Get In Touch</p>
                   <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 7659077821</li>
                    <li>pavankumarpilaka96@gmail.com</li>
                   </ul>
            </div>


            
        </div>
        <div className='w-full text-center' >
                <hr/>
                <p className='py-5 text-sm text-center'>CopyRight 2025@Prescripto - All Rights Reserved</p>
        </div>


    </div>
  )
}

export default Footer