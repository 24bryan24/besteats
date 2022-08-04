import React, { useState } from 'react'

const TestingPurposes = ({width, height}) => {
    const [on, setOn] = useState(false)
    const handleClick = () => {
        setOn(prev => !prev)
    }

    console.log(on)

  return (
    <div className='w-full h-screen bg-blue-400 mx-auto text-2xl'>TestingPurposes
    <div className={on ? `w-${width} h-${height} rounded-full mx-auto bg-green-400 relative border-2` : `w-${width} h-${height} rounded-full mx-auto bg-gray-400 relative border-2`}>
        <div onClick={handleClick} className={on ? `translate-x-44 duration-1000 w-${width * 0.25} h-${height * 0.875} rounded-full bg-white absolute top-0.5 left-1 cursor-pointer` : `translate-x-[-44] duration-[500ms] w-${width * 0.25} h-${height * 0.875} rounded-full bg-white absolute top-0.5 left-1 cursor-pointer`}>
            </div></div></div>
  )
}

export default TestingPurposes