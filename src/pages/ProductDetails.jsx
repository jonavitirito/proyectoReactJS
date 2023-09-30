
import ItemDetailContainer from '../components/ItemDetailContainer';
import { useParams } from 'react-router-dom';
import React from 'react';
import { useItemCollection } from '../hooks/UseItemCollection';
import LoaderComponent from '../components/LoaderComponent';


const ProductDetails = () => {

  const {itemId} = useParams();

  const {product, loading} = useItemCollection("products", itemId);

return loading ? <LoaderComponent /> : <ItemDetailContainer productData={product} />
}


export default ProductDetails;