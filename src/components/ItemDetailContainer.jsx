import "./ItemListContainer.css";
 import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
import { Link,useParams } from "react-router-dom";
import { productsData } from "../json/ProductsData";




  const ItemDetailContainer =()=>{
    const {itemId}= useParams();
    const productFilter= productsData.filter((item)=>item.id=== parseInt(itemId));
    
            return (
          
              productFilter.map((item)=>{
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
            )
          
       
    
 }

export default ItemDetailContainer;