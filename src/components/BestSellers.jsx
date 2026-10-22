import React, { useState } from 'react'

const BestSellers = (props) => {
  const { data } = props
const [likedIds, setLikedIds] = useState([])


const toggleLikes = (id) => {
  setLikedIds((prev) => {
    return prev.includes(id) ?
          prev.filter((likedId) => likedId !== id) :
          [...prev, id]
    
  })
}

  return (
    <div className='w-[92%] mb-5'>
      <h1 className='text-5xl font-medium pb-5 text-center'>Best Sellers</h1>
      <div className='grid grid-cols-3 gap-5'>
      {data.map((elem, idx) => {
        const isLiked = likedIds.includes(idx)
     return (<div key={idx} className='flex flex-col w-full bg-pink-50 rounded-2xl items-center justify-center relative'>
          <button onClick={() => toggleLikes(idx)} className='bg-white rounded-3xl shadow-lg px-4 py-3 absolute top-2 right-3 active:scale-95'><i className={`${isLiked ? 'ri-poker-hearts-fill text-red-600' : 'ri-poker-hearts-line'} text-2xl`}></i></button>
        <div className='w-60 m-3 rounded-2xl overflow-hidden'>
            <img src={elem.images[0]} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className='items-start w-full px-5 pb-5'>
          <h2>{elem.title}</h2>
          <h2 className='text-indigo-600 mb-2'>${elem.price}/-</h2>
          <span className='px-4 py-2 bg-pink-200 mb-6 rounded-xl text-sm text-pink-600'>{elem.discountPercentage}% OFF</span>
        </div>
      </div>)
      })}


        
      </div>
     
    </div>
  )
}

export default BestSellers
