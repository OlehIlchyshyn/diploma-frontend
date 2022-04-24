import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  LinearProgress,
  Container,
  Grid,
  Typography,
  CardMedia,
  Divider,
  Box,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import { fetchProductById } from "../../api/productApi";
import { fetchHistoryByProductId } from "../../api/priceHistoryApi";
import PriceTable from "./price/PriceTable";
import TechSpecsTable from "./TechSpecsTable";
import ActivePropositionsBox from "./ActivePropositionsBox";
import ProductDescriptionBox from "./ProductDescriptionBox";

const Product = (props) => {
  const [product, setProduct] = useState();
  const [priceHistory, setPriceHistory] = useState();
  let params = useParams();

  useEffect(() => {
    let id = params.productId;
    requestProductDetails(id);
    requestProductPriceHistory(id);
  }, [params.productId]);

  async function requestProductDetails(id) {
    fetchProductById(id).then((product) => setProduct(product));
  }

  async function requestProductPriceHistory(id) {
    fetchHistoryByProductId(id).then((priceHistory) => {
      setPriceHistory(priceHistory);
    });
  }

  return product === undefined || priceHistory === undefined ? (
    <LinearProgress />
  ) : (
    <>
      <Helmet>
        <title>{product.fullName}</title>
      </Helmet>
      <Container>
        <Box mb={2}>
          <Typography variant="h5" align="left">
            {product.fullName}
          </Typography>
        </Box>
        <Divider margin={5} />
        <Grid container mt={2}>
          <Grid item xs={12} lg={6}>
            <CardMedia
              component="img"
              style={{
                width: "auto",
                margin: "auto",
              }}
              image={product.imageUrl}
              alt={product.fullName}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Divider textAlign="center">
              <Typography variant="body1">Ціни</Typography>
            </Divider>
            <ActivePropositionsBox prices={product.priceList} />
            <br />
            <ProductDescriptionBox product={product} />
          </Grid>
        </Grid>
        <PriceTable
          prices={product.priceList}
          priceHistory={priceHistory}
          id="priceList"
        />
        <TechSpecsTable id="techSpecs" techSpecs={product.techSpecs} />
      </Container>
    </>
  );
};

export default Product;
