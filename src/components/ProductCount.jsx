import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

export const ProductCount = () => {
 const [Contador, setContador]= useState(0);
  const {CartProducts, setCartProducts}= useContext(CartContext);

  const sumarProductos=()=>{
    setCartProducts(CartProducts+1);
    setContador(Contador+1);
  }
  const restarProductos=()=>{
    if (CartProducts > 0) {
      setCartProducts(CartProducts- 1);
      setContador(Contador - 1);
    }

  }
  
  return (
    <div>
      <button onClick={restarProductos} className='button-remove'>-</button>
      <label>{Contador}</label>
      <button onClick={sumarProductos} className='button-add'>+</button>

    </div>
  )
}

export default ProductCount