import React from 'react'
import payment from '../assets/payment.png'
function Footer() {
  return (
    <div className='container mx-auto p-4'>
  <div className='flex flex-wrap lg:flex-nowrap justify-between gap-4'>
    {/* E-Shop Info */}
    <div className='w-full lg:w-[30%] md:w-[60%] sm:w-[50%] p-4' data-aos="fade-down-left">
      <div className='flex items-center'>
        <img
          src="https://png.pngtree.com/png-clipart/20220213/original/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_7265997.png"
          alt=""
          className='w-10 md:w-[15%]'
        />
        <span className='ml-2 text-3xl md:text-4xl font-semibold text-blue-950'>E-Shop</span>
      </div>
      <p className='mt-4 p-2  text-sm md:text-base'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
      </p>
      <p className='p-2 mt-5 text-lg md:text-2xl font-bold'>Accepted Payments</p>
      <img src={payment} alt="Payments" className='p-2 w-full' />
    </div>

    {/* Columns */}
    <div className=' sm:w-[48%]  lg:w-[17%] md:w-[30%] p-4'data-aos="fade-up-right">
      <h1 className='font-bold text-lg md:text-xl'>Department</h1>
      <div className='mt-4 space-y-1 text-sm md:text-base'>
        <p>Work</p>
        <p>Education</p>
        <p>Editor</p>
        <p>Photography</p>
        <p>Company</p>
        <p>Gaming</p>
        <p>Architecture</p>
        <p>Engineering</p>
        <p>Programming</p>
        <p>Design</p>
      </div>
    </div>

    <div className=' sm:w-[48%]  lg:w-[17%] md:w-[30%] p-4' data-aos="fade-down-right">
      <h1 className='font-bold text-lg md:text-xl'>About Us</h1>
      <div className='mt-4 space-y-1 text-sm md:text-base'>
        <p>About E-Shop</p>
        <p>Careers</p>
        <p>News & Blog</p>
        <p>Help</p>
        <p>Press Center</p>
        <p>Shop By Location</p>
        <p>Ideas & Guides</p>
      </div>
    </div>

    <div className=' sm:w-[48%]  lg:w-[17%] md:w-[20%] p-4'data-aos="fade-down-right">
      <h1 className='font-bold text-lg md:text-xl'>Services</h1>
      <div className='mt-4 space-y-1 text-sm md:text-base'>
        <p>Gift Card</p>
        <p>Mobile App</p>
        <p>Shipping & Delivery</p>
        <p>Order Pickup</p>
        <p>Account Signup</p>
      </div>
    </div>

    <div className='sm:w-[48%]  lg:w-[17%] md:w-[20%] p-4'data-aos="fade-down-left">
      <h1 className='font-bold text-lg md:text-xl'>Help</h1>
      <div className='mt-4 space-y-1 text-sm md:text-base'>
        <p>Shopcard Help</p>
        <p>Returns</p>
        <p>Track Orders</p>
        <p>Contact Us</p>
        <p>Feedback</p>
        <p>Security & Fraud</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer
