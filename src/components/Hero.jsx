import React from 'react'

function Hero() {
  return (
    <div className='w-full h-[80vh] bg-black bg-image'>

    
      <div className=' container h-full mx-auto flex items-center'>
        <div className='w-auto md:px-4 md:w-[70%] lg:w-[40%] text-white'>
         <h1 className='text-4xl md:text-3xl lg:text-5xl font-bold '>
            Shopping and
            Department Store
         </h1>
          
          <p className='mt-3 lg:mt-16 text-xl '>
            Shopping is a bit of a 
            relaxing hobby for me, which is sometime troubling for the back balance.
          </p>

          <button className=' bg-white mt-16 px-7 py-3 rounded-4xl text-black text-2xl cursor-pointer  '>
            Learn More
          </button>
        </div>
       
      </div>
    </div>
  )
}

export default Hero
