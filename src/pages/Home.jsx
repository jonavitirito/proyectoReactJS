
import { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import LoaderComponent from '../components/LoaderComponent';
import UseCollection from '../hooks/UseCollection';






const Home = () => {
//   const [products, setProducts]= useState([]);
//   const [loading, setLoading]= useState([]);
// useEffect(()=>{
//   const db = getFirestore();
//   const productsCollection= collection(db, "products");

//   getDocs(productsCollection).then((snapshot)=>{
// setProducts(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
//   }).catch((error)=> console.log(error)).finally(()=> setLoading(false));
// }, []);
const {products, loading}= UseCollection("products");

  return ( 
    <div className='main'>
   { loading ? <LoaderComponent/> : <ItemListContainer productsData={products} className="main"/> }
    
      </div>
     
)
    
  
}

export default Home