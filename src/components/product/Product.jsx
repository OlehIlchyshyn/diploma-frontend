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
import { fetchProductById } from "../../api/productApi";
import PriceTable from "./price/PriceTable";

const Product = (props) => {
  const [product, setProduct] = useState();
  let params = useParams();

  useEffect(() => {
    let id = params.productId;
    requestProductDetails(id);
  }, [params.productId]);

  async function requestProductDetails(id) {
    fetchProductById(id).then((product) => setProduct(product));
  }

  return product === undefined ? (
    <LinearProgress />
  ) : (
    <Container>
      <Box mb={2}>
        <Typography variant="h5" align="left">
          {product.fullName}
        </Typography>
      </Box>
      <Divider margin={5} />
      <Grid container mt={2}>
        <Grid item xs={6}>
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
        <Grid item xs={6}>
          <Box>Ціни</Box>
          <Box>Характеристики</Box>
          <Box>Опис</Box>
        </Grid>
      </Grid>
      <PriceTable prices={product.priceList} />
    </Container>
  );
};

export default Product;
