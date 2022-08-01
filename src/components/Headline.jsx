import React from 'react'
import HeadlineCard from './HeadlineCard'

const Headline = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <HeadlineCard p1="Sun's Out, BOGO Out!" p2="Order Through 8/26" url="https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWdncyUyMGJlbmVkaWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
        <HeadlineCard p1="New Restaurants" p2="Added Daily" url="https://images.unsplash.com/photo-1588690793273-4d86028401f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0ZWFrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
        <HeadlineCard p1="We Deliver Desserts Too" p2="Tasty Treats" url="https://images.pexels.com/photos/7144272/pexels-photo-7144272.jpeg?auto=compress&cs=tinysrgb&w=600" />
    </div>
  )
}

export default Headline