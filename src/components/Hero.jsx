import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            <div className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            <h1>The <span className='text-orange-600'>Best</span></h1>
            <h1><span className='text-orange-600'>Foods </span>Delivered</h1>
            </div>
        </div>
        <img className='w-full max-h-[500px] object-cover' src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='/' />
        </div>
    </div>
  )
}

export default Hero