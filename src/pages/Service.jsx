import React from 'react'
import { IoLocation } from 'react-icons/io5'
import Footer from '../components/Footer'

function Service() {
  return (
    <div className=''>
      <div className='w-full h-[80vh] bg-black bg-image'>
        <div className='container h-full mx-auto flex items-center'>
          <div className='w-auto md:px-4 md:w-[70%] lg:w-[80%] text-white'>
            <h1 className='text-4xl md:text-3xl lg:text-5xl font-bold '>
              Our Services
            </h1>
            <p className='mt-3 lg:mt-16 text-xl '>
              We offer a wide range of services to cater to your shopping needs.
            </p>
            <div className='flex justify-between mt-8'>
              <div className='flex '>
                <IoLocation className=' text-3xl text-blue-900 ' data-aos="zoom-out"/>
                <span className=' text-white text-xl font-bold'data-aos="zoom-in">No. 405-407E0, Kampuchea Krom Blvd. (ST.128) Sangkat Phsar Depor 3, Khan Toul Kork, Phnom Penh, Cambodia.</span>
              </div>
              
            </div>
           
           
            <button className=' bg-white mt-16 px-7 py-3 rounded-4xl text-black text-2xl cursor-pointer  '>
              Learn More
            </button>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Service
