
import React from 'react';
 import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';




const ItemListContainer =({productsData})=>{
    return (
productsData.map((products)=>{
            return (
              <div key={products.id}>
            <Card className="card">
           <Link to={`/item/${products.id}`}> <img src={products.img} alt="#"/></Link>
              <Card.Body>
                <Card.Title>{products.name}</Card.Title>
                <Card.Text>
                  ${products.price}
                </Card.Text>
                <p>
                  {products.description}
                </p>
                <Button variant="secondary">Añadir a Carrito</Button>
              </Card.Body>
            </Card>
            </div>
            )
            })
           )
          ;
       
    
 }

export default ItemListContainer;