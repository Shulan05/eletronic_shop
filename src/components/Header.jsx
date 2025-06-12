import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoCallOutline, IoSearch, IoClose, IoCart } from 'react-icons/io5';
import { IoIosMenu } from 'react-icons/io';
import { IoMdPerson } from 'react-icons/io';

function Header() {
  const [isOpen, setiopen] = useState(false);

  return (
    <nav>
      {/* Top bar */}
      <div className='bg-blue-950 px-3 py-1 lg:px-0'>
        <div className='container flex mx-auto justify-between text-white'>
          <div className='flex items-center'>
            <IoCallOutline className='me-1' />
            <span style={{ fontSize: '14px' }}>+855 10 234 567</span>
          </div>
          <div className='hidden lg:flex'>
            <span style={{ fontSize: '14px' }}>Get 50% Off on Selected Items &emsp; | &emsp; Shop Now</span>
          </div>
          <div>
            <select className='outline-0 me-4'>
              <option style={{ fontSize: '14px' }}>EN</option>
              <option style={{ fontSize: '14px', color: 'black' }}>KH</option>
            </select>
            <select className='outline-0'>
              <option style={{ fontSize: '14px' }}>Cambodia</option>
              <option style={{ fontSize: '14px', color: 'black' }}>Thailand</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className='py-4 px-3 lg:px-0 shadow-lg relative'>
        <div className='container flex mx-auto justify-between items-center'>

          {/* Logo */}
          <div className='text-2xl font-bold w-[38%]'>
            <img
          src="https://png.pngtree.com/png-clipart/20220213/original/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_7265997.png"
          alt=""
          className='w-10 md:w-[15%]'
        />
          </div>

          {/* Desktop Menu */}
          <div className='hidden lg:flex w-[60%] items-center justify-evenly'>
            <NavLink to="/" className="text-black hover:text-blue-900 text-xl">Home</NavLink>
            <NavLink to="/about" className="text-black hover:text-blue-900 text-xl">About</NavLink>
            <NavLink to="/service" className="text-black hover:text-blue-900 text-xl">Service</NavLink>
            <NavLink to="/contact" className="text-black hover:text-blue-900 text-xl">Contact</NavLink>

            <form className="flex items-center border border-gray-300 rounded-full px-3 py-1 w-[40%]">
              <input
                type="text"
                placeholder="Search..."
                className="outline-0 w-full border-0 px-2"
              />
              <button type="submit" className="text-gray-500"><IoSearch /></button>
            </form>
          </div>

          {/* Account & Cart */}
          <div className='hidden lg:flex items-center w-[20%] justify-end gap-6'>
            <div className='flex items-center'>
              <IoMdPerson className='me-2' />
              <NavLink to="#">Account</NavLink>
            </div>
            <div className='flex items-center'>
              <IoCart className='me-2 text-xl' />
              <NavLink to="#">Cart</NavLink>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className='block lg:hidden' onClick={() => setiopen(!isOpen)}>
            {isOpen ? <IoClose className='text-2xl' /> : <IoIosMenu className='text-2xl' />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute z-50 left-0 right-0 mx-auto mt-4 bg-white border rounded-lg p-4 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <ul className='mb-4'>
            <li className='pb-3 mb-3 text-xl border-b'>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className='pb-3 mb-3 text-xl border-b'>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className='pb-3 mb-3 text-xl border-b'>
              <NavLink to="/service">Service</NavLink>
            </li>
            <li className='pb-3 mb-3 text-xl border-b'>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <form className='flex items-center border border-gray-300 rounded-full p-2 pe-3'>
            <input type="text" placeholder='Search...' className='border-0 w-full outline-0 px-3' />
            <button type="submit"><IoSearch /></button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
