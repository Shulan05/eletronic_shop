import React from 'react'

function Trending() {
  return (
    <div>
      <div className='container mx-auto mt-10 '>
        <p className='text-4xl font-bold mb-9 '>Treding Products For You !</p>
        <div className='flex flex-wrap justify-between'>
            <div className=' p-4 lg:w-[49%] md:w-[49%] sm:w-[100%] rounded-2xl 'data-aos="fade-down-right">
            <div className=' bg-gray-600 rounded-2xl '>
                <img src="https://rog.asus.com/media/1704422071559.jpg" alt="" className='w-full overflow-hidden object-contain rounded-t-2xl '/>
            </div>
            <div className='bg-gray-200 h-45 container mx-auto  p-5 rounded-b-2xl'>
                <p className='text-2xl font-bold'>Laptop New Arrival</p>
                <p className='text-50 mt-2'>Delivery with 24 hours</p>
               <button className="mt-5 px-6 py-2 bg-blue-950 text-white text-lg rounded-4xl hover:bg-blue-900 transition cursor-pointer">
            Shop Now
          </button>

            </div>
            
        </div>
         <div className=' p-4 lg:w-[49%] md:w-[49%] sm:w-[100%] rounded-2xl 'data-aos="fade-down-left">
            <div className=' bg-gray-600 rounded-2xl'>
                <img src="https://dlcdnrog.asus.com/rog/media/1672804078911.webp" alt="" className='w-full overflow-hidden object-contain rounded-t-2xl '/>
            </div>
            <div className='h-45 bg-gray-200 container mx-auto  p-5 rounded-b-2xl '>
                <p className='text-2xl font-bold'>Laptop New Arrival</p>
                <p className='text-50 mt-2'>Delivery with 24 hours</p>
                <button className="mt-5 px-6 py-2 bg-blue-950 text-white text-lg rounded-4xl hover:bg-blue-900 transition cursor-pointer">
            Shop Now
          </button>

            </div>
            
        </div>
        </div>
        
     {/*    <div className='h-screen  mt-7 items-center justify-center p-4'>
       <div className='w-12/12 h-px bg-gray-300 shadow-sm '></div>
      </div> */}

      </div>
      
     
    </div>
    

  )
}

export default Trending
