import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../api";
import ProductTile from "./ProductTile";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  let params = useParams();

  useEffect(() => {
    let categoryId = params.categoryId;
    if (categoryId === undefined) {
      requestProductList();
    } else {
      requestProductListByCategory(categoryId);
    }
  }, [params.categoryId]);

  async function requestProductListByCategory(categoryId) {
    API.get(`products/categories/${categoryId}`).then((response) =>
      setProductList(response.data)
    );
  }

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
