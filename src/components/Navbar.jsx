import React from 'react'
import {AiOutlineMenu as Menu} from 'react-icons/ai'
import { BiSearch as Search } from "react-icons/bi";
import { AiOutlineShoppingCart as ShoppingCart } from "react-icons/ai";


const Navbar = () => {
  return (
    <div className='max-w-[1640] mx-auto flex justify-between items-center p-4'>
        {/* Left Side */}
        <div className='flex items-center'>
            <div className='cursor-pointer'>
            <Menu className="mt-1.5" size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best<span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black rounded-full p-2 text-white'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>

        {/* Search Input */}
        <div className=' flex rounded-full bg-gray-200 items-center px-2 w-[300px] sm:w-[400px] lg:w-[500px]'>
            <Search className='cursor-pointer mx-2 my-2' size={22}/>
            <input type="text" className='cursor-pointer bg-transparent focus:outline-none focus:cursor-text' placeholder='Search foods...'/>
        </div>

        {/* Cart Button */}
        <button className='hidden md:flex rounded-full bg-black text-white items-center mx-2'>
            <ShoppingCart className='mx-1 my-1.5' size={22}/>
            <p className='mx-1 text-[14px]'>Cart</p>
        </button>

        {/* Mobile Menu */}

    </div>
  )
}

export default Navbar