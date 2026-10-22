import React, { useEffect, useState } from 'react'
import Category from './components/Category'
import BestSellers from './components/BestSellers'
import axios from "axios"

const App = () => {

const categories = [
  { name: "Electronics", image: "https://images.unsplash.com/photo-1542208961-cd097c7b05e3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", prodUrl: "https://dummyjson.com/products/category/laptops", category: "laptops" },
  { name: "Men", image: "https://plus.unsplash.com/premium_photo-1727942419945-1908baae3c8e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", prodUrl: "https://dummyjson.com/products/category/mens-shirts", category: "mens-shirts"  },
  { name: "Women", image: "https://media.istockphoto.com/id/618432992/photo/woman-enjoying-the-weekend-in-the-shopping-mall.webp?a=1&b=1&s=612x612&w=0&k=20&c=7QfjvN8ZUrxnJagqOBzyac5K852d0J-KE7H6nQ_SQ9c=", prodUrl: "https://dummyjson.com/products/category/womens-dresses", category: "womens-dresses" },
  { name: "Shoes", image: "https://images.unsplash.com/photo-1761330461729-6e5aacbf11b8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", prodUrl: "https://dummyjson.com/products/category/womens-shoes", category: "womens-shoes" },
  { name: "Watches", image: "https://images.unsplash.com/photo-1773755060442-6d128b70dd20?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", prodUrl: "https://dummyjson.com/products/category/womens-watches", category: "womens-watches" },
  { name: "Bags", image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", prodUrl: "https://dummyjson.com/products/category/womens-bags", category: "womens-bags" },
  { name: "Beauty", image: "https://images.unsplash.com/photo-1649005203762-8bbd673468dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", prodUrl: "https://dummyjson.com/products/category/beauty", category: "beauty" },

]



const [categoryVal, setCategoryVal] = useState(['womens-bags'])
const [product, setProduct] = useState([])
const getData = async () => {
 try{
let response = await axios.get(`https://dummyjson.com/products/category/${categoryVal}`);
setProduct(response.data.products)
  
 } catch(err){
  console.log(err);
 }
}

useEffect(function(){
getData()

}, [categoryVal])

  return (
    <div className='max-w-full flex flex-col justify-center items-center min-h-screen'>
      <Category data={categories} setCategoryVal={setCategoryVal} />
      <BestSellers data={product} />
    </div>
  )
}

export default App
