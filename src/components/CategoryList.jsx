import React from 'react'

const CategoryList = (props) => {
    const { elem, setCategoryVal } = props
  return (
   <div className='flex flex-col items-center justify-center gap-3 mb-5 shrink-0'>
      <div className='w-50 h-50 rounded-full overflow-hidden'>
        <img src={elem.image} alt="" className='w-full h-full object-cover'/>
      </div>
      <h2 className='text-xl font-bold'>{elem.name}</h2>
      <button onClick={() => setCategoryVal(elem.category)} className='text-sm px-3 py-2 bg-white rounded-full shadow-lg active:scale-95 font-semibold'>Shop Now <i className="ri-arrow-right-long-line"></i></button>
    </div>
 
  )
}

export default CategoryList
