import React from 'react'
/* import data from '../data/category' */

function ShopCategory() {

  const data =[
    {
      text:"Laptop",
      image:"https://i.pinimg.com/736x/fe/f7/b3/fef7b3cbaeb59afc974ab04dd20741e6.jpg"
    },
    {
      text:"Phone",
      image:"https://i.pinimg.com/736x/7f/4d/56/7f4d56f60828be1b30f8214ad3a64604.jpg"
    },
    {
      text:"AirConditioner",
      image:"https://i.pinimg.com/736x/f6/37/45/f637458e79e2e9bb222cbb5805810c2f.jpg"
    },
    {
      text:"Refrigerator",
      image:"https://i.pinimg.com/736x/36/60/30/3660305247fbee93032363a7d3c50e22.jpg"
    },
    {
      text:"Washing Machine",
      image:"https://i.pinimg.com/736x/e9/81/83/e981836ece4874ce10fe11be32df20fb.jpg"
    },
    {
      text:"Desktop",
      image:"https://thegadgetflow.com/wp-content/uploads/2022/10/Microsoft-Surface-Studio-2-All-in-One-Computer-01-1200x900.jpeg"
    },
    
    
  ]
  return (
    <div className='container mx-auto py-16 p-4 '>
        <h1 className='text-4xl font-bold'>Shop Our Categories</h1>
        <div className='flex flex-wrap mt-3 justify-between'>
            {
                data.map((item,i)=>{
                  return(
                    <div key ={i}
                    className='w-[49%] h-[220px] md:w-32.3% md:h-[350px] lg:w-[15.9%] lg:h-[300px]
                     bg-blue-800 rounded-xl overflow-hidden relative my-1' data-aos="zoom-in">

                      <h1 className='text-center absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 text-xl font-bold text-white'>
                      {item.text}</h1>
                      <img src={item.image} alt="" className='w-full h-full object-cover hover:scale-105 duration-400' />
                  </div>
                  )
                    
                })
            }
        </div>
        
    </div>
  )
}

export default ShopCategory
