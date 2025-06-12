import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Creditcart from '../assets/Creditcard.png';
import card from '../assets/card.png';
import cart from '../assets/cart.png';

function CashBack() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-blue-300 py-20">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Text Content */}
        <div
          className="w-full md:w-1/2 mb-10 md:mb-0"
          data-aos="fade-right"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-950">
            Get up to 50% <span className="text-white">Cash Back</span>
          </h1>
          <p className="text-xl mt-4 text-blue-900">on Shopcart.com</p>
          <button className="mt-8 px-6 py-3 bg-blue-950 text-white text-lg rounded-4xl hover:bg-blue-900 transition">
            Learn More
          </button>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
          <img src={cart} alt="Cart" className="w-4/5 max-w-md" />
        </div>
      </div>
    </div>
  );
}

export default CashBack;
