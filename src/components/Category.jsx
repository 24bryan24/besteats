import React from 'react'
import {categories} from '../data/data.js'

const Category = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
            {/* Header */}
            <div>
                <h1 className='text-4xl font-bold text-center text-orange-600'>Top Rated Menu Items</h1>
            </div>
            
            {/* Category Items */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
                {categories.map((item, index) => 
                    <div key={index} className='rounded-lg hover:scale-105 duration-300 bg-gray-200' >
                        <div className='flex justify-between py-2 px-6 sm:px-10 md:px-4 font-bold'>
                             <h1 className='pt-3'>{item.name}</h1>
                            <img className='w-[50px]' src={item.image} alt={item.name} />
                        </div>
                    </div>
                )}

            </div>

    </div>
  )
}

export default Category