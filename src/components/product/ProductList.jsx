import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import API from "../../api";
import ProductTile from "./ProductTile";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    requestProductList();
  }, []);

  async function requestProductList() {
    API.get("products/").then((response) => setProductList(response.data));
  }

  return productList.length === 0 ? (
    <div>No products</div>
  ) : (
    <Container>
      {productList.map((product) => (
        <ProductTile product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default ProductList;
