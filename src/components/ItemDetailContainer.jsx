
 import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "../App.scss";
import React from 'react';
import ProductCount from './ProductCount';



 export const ItemDetailContainer =({productData})=>{

                return (
                  
                  <div className ="main-product" key={productData}>
                 <Card className="card">
           <Link to={`/item/${productData.id}`}> <img src={productData.img} alt="#"/></Link>
              <Card.Body>
                <Card.Title>{productData.name}</Card.Title>
                <Card.Text>
                  ${productData.price}
                </Card.Text>
                <p>
                  {productData.description}
                </p>
                <Button variant="secondary">Añadir a Carrito</Button>
                <ProductCount>
        
          <strong>Stock disponible</strong>
        
</ProductCount>
              </Card.Body>
            </Card>
                </div>
                )
  }


export default ItemDetailContainer;