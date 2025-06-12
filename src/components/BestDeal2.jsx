import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { IoStar } from 'react-icons/io5'

function BestDeal2() {
  
     const products = [
    {
      name: 'iPhone 15',
      price: 999.99,
      desc: 'Apple smartphone with A16 Bionic chip.',
      image: 'https://i.pinimg.com/736x/36/a1/f7/36a1f7c0e101bab17398609447a97d65.jpg'
    },
    {
      name: 'ASUS ROG Zephyrus G14 Ryzen 9',
      price: 799.0,
      desc: '8945HS Gaming Laptop (2024 Model)',
      image: 'https://i.pinimg.com/736x/6d/ce/74/6dce7442791a3525afd2b1c3989e6a27.jpg'
    },
    {
      name: 'Samsung Galaxy Book4 Pro',
      price: 2500.0,
      desc: '360 Laptop, 16", Intel U7H, 16GB RAM',
      image: 'https://i.pinimg.com/736x/ee/cb/ce/eecbce43c10880d1ed477161ce186db6.jpg'
    },
    {
      name: 'MacBook Pro 16 inch Mockups',
      price: 2800.99,
      desc: ' Huge resolution, awesome quality.',
      image: 'https://i.pinimg.com/736x/5f/5f/d0/5f5fd0b08e19d9b1797c6b444631640a.jpg'
    }
  ]
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold" data-aos="fade-right">Today Best Deals for You!</h1>

      <div className="mt-5">
        <button className=" mr-5 mt-3 px-4 py-2 border border-black rounded-3xl cursor-pointer hover:bg-blue-900 hover:text-white" data-aos="fade-right">
                Gadgets
              </button>
               <button className=" mr-5 mt-3 px-4 py-2 border border-black rounded-3xl cursor-pointer hover:bg-blue-900 hover:text-white"data-aos="fade-left">
                Fashion
              </button>
               <button className=" mr-5 mt-3 px-4 py-2 border border-black rounded-3xl cursor-pointer hover:bg-blue-900 hover:text-white"data-aos="fade-right">
                Toys
              </button>
               <button className=" mr-5 mt-3 px-4 py-2 border border-black rounded-3xl cursor-pointer hover:bg-blue-900 hover:text-white" data-aos="fade-left">
                Education
              </button>
               <button className=" mr-5 mt-3 px-4 py-2 border border-black rounded-3xl cursor-pointer hover:bg-blue-900 hover:text-white" data-aos="fade-up">
                Beauty
              </button>
      </div>

      <div className="w-full flex flex-wrap justify-between mt-5">
        {products.map((product, index) => (
          <div key={index} className="w-1/2 sm:w-1/3 lg:w-1/4 mt-12 px-2">
            <div className="w-full h-[280px]  overflow-hidden relative">
              <button className="btn btn-circle text-2xl absolute end-1 top-1">
                <CiHeart />
              </button>
              <div className="w-full h-[220px] overflow-hidden" data-aos="zoom-out">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="py-2">
              <div className="flex justify-between">
                <p className="text-xl font-bold line-clamp-1">{product.name}</p>
                <span className="text-xl font-bold text-red-600">${product.price}</span>
              </div>

              <p className="text-sm my-2 line-clamp-2">{product.desc}</p>

              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <IoStar key={i} className="text-yellow-500" />
                ))}
                <span className="text-gray-600 text-xs ml-3">(121)</span>
              </div>

              <button className="mt-3 px-4 py-2 border border-black rounded-3xl cursor-pointer hover:bg-blue-900 hover:text-white">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BestDeal2
