import React, { useState } from 'react'
import {AiOutlineMenu as Menu} from 'react-icons/ai'
import { BiSearch as Search } from "react-icons/bi";
import { AiOutlineShoppingCart as ShoppingCart, AiOutlineClose as Close, AiFillTag as Promotion } from "react-icons/ai";
import { TbTruckDelivery as Truck } from "react-icons/tb"
import { MdFavorite as Favorite, MdHelp as Help } from "react-icons/md"
import { FaWallet as Wallet, FaUserFriends as Friends } from "react-icons/fa"
import { BsFillSaveFill as Save } from "react-icons/bs"

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)

    const handleSidebar = () => {
        setSidebar(prev => !prev)
    }

    console.log(sidebar)

  return (
    <div className='max-w-[1640] mx-auto flex justify-between items-center p-4'>
        {/* Left Side */}
        <div className='flex items-center'>
            <div className='cursor-pointer'>
            <Menu onClick={handleSidebar} className="mt-1.5" size={30}/>
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
       
        {/* Overlay */} 
        {sidebar && (
        <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
        )}

        {/* Sidedrawer Menu */}
        <div className={sidebar ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <Close onClick={handleSidebar} className="absolute top-4 right-4 cursor-pointer" size={20}/>
            <h2 className='text-2xl p-2'>Best <span className='font-bold'>Eats</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='flex text-xl py-4'><Truck size={25} className="mr-4" />Order</li>
                    <li className='flex text-xl py-4'><Favorite size={25} className="mr-4" />Favorites</li>
                    <li className='flex text-xl py-4'><Wallet size={25} className="mr-4" />Wallet</li>
                    <li className='flex text-xl py-4'><Help size={25} className="mr-4" />Help</li>
                    <li className='flex text-xl py-4'><Promotion size={25} className="mr-4" />Promotions</li>
                    <li className='flex text-xl py-4'><Save size={25} className="mr-4" />Best One</li>
                    <li className='flex text-xl py-4'><Friends size={25} className="mr-4" />Invite Friends</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar