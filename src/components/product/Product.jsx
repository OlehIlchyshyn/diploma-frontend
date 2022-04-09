import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import ProductPrice from "./ProductPrice";

const Product = (props) => {
  const [productDetails, setProductDetails] = useState();
  let params = useParams();
  
  useEffect(() => {
    console.log("useEffect");
    let id = params.productId;
    console.log(id);
    requestProductDetails(id);
  }, [params.productId]); 

  async function requestProductDetails(id) {
    const res = await fetch(`http://localhost:8080/api/products/${id}`);
    const json = await res.json();

    console.log(json);

    setProductDetails(json.productDetails);
  }

  return productDetails === undefined ? (
    <LinearProgress />
  ) : (
    <div>
      <h1>{productDetails.title}</h1>
      <ProductPrice
        priceProvider={{ name: "Example", href: "http://localhost:3000/" }}
        price={productDetails.price}
      />
    </div>
  );
};

export default Product;
