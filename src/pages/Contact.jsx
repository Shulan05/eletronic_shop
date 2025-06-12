import React from 'react'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div className='w-full h-[100vh] bg-black bg-image'>
      <div className='container h-full mx-auto flex items-center justify-center'>
        <div className='w-auto text-white p-10 md:w-[70%] lg:w-[40%]'>
          {/* <h1 className='text-4xl md:text-3xl lg:text-5xl font-bold mb-4'>Contact Us</h1> */}
          <p className='text-xl mb-6'>We would love to hear from you! Please fill out the form below to get in touch.</p>

          <p className='text-xl mb-6 font-bold'>No. 405-407E0, Kampuchea Krom Blvd. (ST.128) Sangkat Phsar Depor 3, Khan Toul Kork, Phnom Penh, Cambodia.</p>
          <form className='space-y-4'>
            <input type='text' placeholder='Your Name' className='w-full p-3 rounded-lg bg-blue-900 text-white outline-0'  data-aos="fade-right"/>
            <input type='email' placeholder='Your Email' className='w-full p-3 rounded-lg bg-blue-900 text-white outline-0'data-aos="fade-left" />
            <textarea placeholder='Your Message' className='w-full p-3 rounded-lg bg-blue-900 text-white h-32 outline-0' data-aos="fade-up-right"></textarea>
            <button type='submit' className='bg-white px-8  py-4 rounded-4xl text-black text-xl cursor-pointer'>Send Message</button>
          </form>
        </div>
        <div className='text-center'>
          
        </div>
      </div>
       <Footer/>
    </div>
   
  )
}

export default Contact
