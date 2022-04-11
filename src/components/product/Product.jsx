import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import PriceList from "./PriceList";
import API from "../../api";

const Product = (props) => {
  const [productDetails, setProductDetails] = useState();
  let params = useParams();

  useEffect(() => {
    let id = params.productId;
    requestProductDetails(id);
  }, [params.productId]);

  async function requestProductDetails(id) {
    API.get(`products/${id}`).then((response) => {
      setProductDetails(response.data);
    });
  }
  return productDetails === undefined ? (
    <LinearProgress />
  ) : (
    <div>
      <h3>{productDetails.fullName}</h3>
      <PriceList prices={productDetails.priceList} />
    </div>
  );
};

export default Product;
