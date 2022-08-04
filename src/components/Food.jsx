import React, { useState } from 'react'
import {data} from '../data/data.js'

const Food = () => {

    const [food, setFood] = useState(data)

    const filterType = (category) => {
        setFood(data.filter(item => item.category === category))
    }

    const filterPrice = (price) => {
        setFood(data.filter(item => item.price === price))
    }

    console.log(data)

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            {/* Header */}
            <div>
                <h1 className='text-4xl font-bold text-center text-orange-600'>Top Rated Menu Items</h1>
            </div>
            
            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>

            {/* Filter Type */}
            <div className='flex flex-col'>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='text-orange-600 flex justify-between flex-wrap'>
                    <button onClick={() => setFood(data)} className='m-1 border-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={() => filterType('burger')} className='m-1 border-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={() => filterType('salad')} className='m-1 border-orange-600 hover:bg-orange-600 hover:text-white'>Salad</button>
                    <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>
    
            {/* Filter Price */}
            <div>
            <p className='font-bold text-gray-700'>Filter Price</p>
            <div className='border-orange-600 text-orange-600 flex justify-between max-w-[390px] w-full'>
                <button onClick={() => filterPrice('$')} className='m-1 border-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                <button onClick={() => filterPrice('$$')} className='m-1 border-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                <button onClick={() => filterPrice('$$$')} className='m-1 border-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                <button onClick={() => filterPrice('$$$$')} className='m-1 border-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
            </div>
            </div>
            </div>

            {/* Image Grid */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 py-4'>
                {food.map((item, index) => 
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300' >
                        <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                        <div className='flex justify-between p-2 font-bold'>
                             <p>{item.name}</p>
                             <p>
                                <span className='bg-orange-600 rounded-full duration-200 hover:bg-black hover:bg-white p-1 text-white hover:text-orange-600'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                )}

            </div>
    
        </div>
      )
}

export default Food