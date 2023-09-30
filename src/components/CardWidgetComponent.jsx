import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";




const CardWidget = ()=>{
    const {CartProducts}=useContext(CartContext);
    
    
    return <div className="carrito"><FontAwesomeIcon icon={faCartShopping} size="2xl"/> <small>{CartProducts}</small></div> } 

export default CardWidget;

