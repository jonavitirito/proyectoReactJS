import { createContext, useState } from "react";



export const CartContext= createContext();


export const CartProvider = ({children})=>{
    const [CartProducts, setCartProducts] = useState (0);
return(
    <CartContext.Provider value={{CartProducts , setCartProducts}}>
{children}
        </CartContext.Provider>
)

}