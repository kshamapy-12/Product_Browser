import React from 'react'
import CategoryList from './CategoryList'


const Category = (props) => {
  const { data, setCategoryVal } = props
  return (
    <div className='bg-pink-200 m-20 rounded-2xl p-20 w-[92%] flex flex-col items-center gap-5'>
      <h1 className='text-3xl font-semibold text-slate-600 bg-slate-50 w-[40%] text-center px-7 py-2 rounded-2xl shadow-lg mb-5'>Shop By Category</h1>
      <div className='w-full max-w-4xl overflow-x-auto scrollbar-none'>
          <div className='flex w-max gap-7'>
    {data.map(function(elem, idx){
       return <div key={idx}>
          <CategoryList elem={elem} setCategoryVal={setCategoryVal}/>
       </div>
    })     
    }
    </div>
      </div>
  
      
    </div>
  )
}

export default Category
