import React from 'react'
import Hero from '../components/Hero'
import ShopCategory from '../components/ShopCategory'
import BestDeal from '../components/BestDeal'
import Getdiscount from '../components/Getdiscount'
import PopularProduct from '../components/PopularProduct'
import Hero2 from '../components/Hero2'
import BestDeal2 from '../components/BestDeal2'
import CashBack from '../components/CashBack'
import Trending from '../components/Trending'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Hero/>
      <ShopCategory/>
      <BestDeal/>
      <Getdiscount/>
      <PopularProduct/>
      <Hero2/>
      <BestDeal2/>
      <CashBack/>
      <Trending/>
      <Footer/>
    </div>
  )
}

export default Home
