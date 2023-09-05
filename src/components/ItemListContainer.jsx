import "./ItemListContainer.css";
 import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";




  const ItemListContainer =({productsData})=>{
    return(
      
        productsData.map((item)=>{
            return (
           <Link to={`/item/${item.id}`}> <Card className="card">
              <img src={item.imagen} alt="#"/>
               
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>
                  {item.precio}
                </Card.Text>
                <Button variant="primary">Añadir a Carrito</Button>
              </Card.Body>
            </Card></Link>
            )
            })
          );
       
    
 }

export default ItemListContainer;