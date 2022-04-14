import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getMinPrice } from "../../utils";

const ProductTile = (props) => {
  const { product } = props;
  const minPrice = getMinPrice(product.priceList);

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
        sx={{ minWidth: 275 }}
      >
        <CardMedia
          component="img"
          style={{
            width: "auto",
            margin: "auto",
            maxHeight: "200px",
          }}
          image={product.imageUrl}
          alt={product.fullName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description.includes("</") ||
            product.description.includes("/>")
              ? ""
              : product.description}
          </Typography>
        </CardContent>
        <CardActions style={{ marginTop: "auto" }}>
          <Grid container paddingX={5} paddingBottom={1}>
            <Grid item marginY="auto">
              <Typography>
                від <b>{minPrice.amount}</b> {minPrice.currency}
              </Typography>
            </Grid>
            <Grid item marginLeft="auto">
              <Grid container direction="row-reverse">
                <Grid item>
                  <Link
                    to={`/products/${product.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button size="medium" variant="contained">
                      Дізнатись більше
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductTile;
