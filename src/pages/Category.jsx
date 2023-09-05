import React from 'react'
import { useParams } from 'react-router-dom'
import { productsData } from '../json/ProductsData'
import ItemListContainer from '../components/ItemListContainer'

const Category = () => {
const { categoryId }= useParams();
const filter=productsData.filter((item)=>item.category===categoryId);
  return (
    <div>
     <ItemListContainer productsData={filter}/>


    </div>
  )
}

export default Category