import React from 'react'
import Footer from '../components/Footer'

function About() {
  return (
    <div className='w-full '>
      <div className='container mx-auto p-8  bg-blue-100'>
        <h1 className='text-4xl font-bold mb-4'>About Us</h1>
        <p className='text-xl mb-6'>
          Welcome to Shopcart.com, your number one source for all things shopping. 
          We're dedicated to giving you the very best of products, with a focus on dependability, customer service, and uniqueness.
        </p>
        <p className='text-xl mb-6'>
          Founded in 2023 by JACK, Shopcart.com has come a long way from its beginnings. 
          When JACK first started out, their passion for eco-friendly products drove them to do tons of research, 
          so that Shopcart.com can offer you the world's most advanced products. We now serve customers all over the world, 
          and are thrilled that we're able to turn our passion into our own website.
        </p>
        <p className='text-xl'>
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>

      </div>
      <Footer/>
    </div>
    
  )
}


export default About
