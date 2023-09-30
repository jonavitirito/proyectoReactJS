import React from "react";
import { useParams } from "react-router-dom";
import { UseCollection } from "../hooks/UseCollection";
import LoaderComponent from "../components/LoaderComponent";
import ItemListContainer from "../components/ItemListContainer";
import "../App.scss";

const Category = () => {
  const [productsFiltered, setProductsFiltered] = React.useState([]);

  const { categoryName } = useParams();
  const { products, loading } = UseCollection("products");

  React.useEffect(() => {
    const productsFiltered = products.filter((product) => {
      return product.category === categoryName;
    });
    setProductsFiltered(productsFiltered);
  }, [products, categoryName]);

  return (<div className="card-container"> { loading ? ( 
    <LoaderComponent />
  ) : (
    <ItemListContainer productsData={productsFiltered} />)}
  </div>);
};

export default Category;