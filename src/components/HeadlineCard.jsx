import React from 'react'

const HeadlineCards = ({p1, p2, url}) => {
  return (
    // {/* Cards */}
    <div className='rounded-xl relative'>
    {/* Overlay */}
    <div className='absolute w-full h-full text-white bg-black/50 rounded-xl'>
        <p className='font-bold text-2xl px-2 pt-4'>{p1}</p>
        <p className='px-2'>{p2}</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
    </div>
    <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={url} alt='/' />
</div>
  )
}

export default HeadlineCards