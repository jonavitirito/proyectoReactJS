import ItemListContainer from '../components/ItemListContainer'
import { productsData } from '../json/ProductsData';
import React, { useEffect, useState } from 'react'



const Home = () => {
  const [products, setProducts]=useState([]);
  useEffect(()=>{
  }, [])
  return (
    

    <div className="main">
      
      <ItemListContainer productsData={productsData} className="main"></ItemListContainer>

    </div>
  )
}

export default Home