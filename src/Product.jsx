import { useEffect, useState } from "react";
import ProductPrice from "./ProductPrice";

const Product = (props) => {
  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    console.log("useEffect");
    setProductDetails({ title: "Title", price: 3456 });
  }, []);

  return productDetails === undefined ? (
    <div>loading...</div>
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
