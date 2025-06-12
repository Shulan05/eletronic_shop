import React from 'react'

function Getdiscount() {
  return (
    <div className='container mx-auto pt-16 p-4'>
        <h1 className='text-4xl font-bold'>Get up to 70% off</h1>
        
        <div className='flex flex-wrap justify-between mt-5'>
           
            <div className='w-full sm:w-[49%] lg:w-[24%] bg-yellow-200 rounded-lg overflow-hidden' data-aos="flip-left">
                <div className='p-10'>
                    <p className='text-3xl font-bold pb-3'>Save</p>
                    <p className='text-6xl font-bold mb-4 text-yellow-500'><sup>$</sup>80</p>
                    <p className='text-xl font-medium'>Explore Our Furniture & Home Furture Range</p>

                </div>
                <div className='w-full h-[220px] overflow-hidden'>
                    <img src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/w1600h900crop_wm_brb/public/field/image/2020/06/dell-xps-15-9500-review-hero3.jpg" alt=""  className='w-full h-full object-cover hover:scale-105 duration-400'/>

                </div>
            </div>
            <div className='w-full sm:w-[49%] lg:w-[24%] bg-red-200 rounded-100 overflow-hidden'data-aos="flip-right">
                  <div className='p-10'>
                    <p className='text-3xl font-bold pb-3'>Save</p>
                    <p className='text-6xl font-bold mb-4 text-yellow-500'><sup>$</sup>20</p>
                    <p className='text-xl font-medium'>Explore Our Furniture & Home Furture Range</p>

                </div>
                <div className='w-full h-[220px] overflow-hidden'>
                    <img src="https://images.idgesg.net/images/article/2017/06/dell_xps_1-100726619-orig.jpg" alt=""  className='w-full h-full object-cover hover:scale-105 duration-400'/>

                </div>

            </div>
            <div className='w-full sm:w-[49%] lg:w-[24%] bg-yellow-200 rounded-100 overflow-hidden'data-aos="flip-left">
                  <div className='p-10'>
                    <p className='text-3xl font-bold pb-3'>Save</p>
                    <p className='text-6xl font-bold mb-4 text-yellow-500'><sup>$</sup>30</p>
                    <p className='text-xl font-medium'>Explore Our Furniture & Home Furture Range</p>

                </div>
                <div className='w-full h-[220px] overflow-hidden'>
                    <img src="https://news.thewindowsclub.com/wp-content/uploads/2016/09/Dell-XPS-3-scaled.jpg" alt=""  className='w-full h-full object-cover hover:scale-105 duration-400'/>

                </div>
            </div>
            <div className='w-full sm:w-[49%] lg:w-[24%] bg-red-200 rounded-100 overflow-hidden'data-aos="flip-left">
                  <div className='p-10'>
                    <p className='text-3xl font-bold pb-3'>Save</p>
                    <p className='text-6xl font-bold mb-4 text-yellow-500'><sup>$</sup>20</p>
                    <p className='text-xl font-medium'>Explore Our Furniture & Home Furture Range</p>

                </div>
                <div className='w-full h-[220px] overflow-hidden'>
                    <img src="https://sm.pcmag.com/t/pcmag_au/review/d/dell-xps-1/dell-xps-15-9530-2023_6h7m.1920.jpg" alt=""  className='w-full h-full object-cover hover:scale-105 duration-400'/>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Getdiscount
