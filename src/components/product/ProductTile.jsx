import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Grid,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { getMinPrice } from "../../utils";

const ProductTile = (props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
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
            <Grid item xs={12} md={6} marginY="auto">
              <Typography
                variant="body1"
                fontWeight={1}
                fontSize={20}
                textAlign={isSmallScreen ? "center" : "left"}
                paddingRight={"auto"}
              >
                від <b>{minPrice.amount}</b> {minPrice.currency}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} marginLeft="auto">
              <Box
                textAlign={isSmallScreen ? "center" : "right"}
                paddingTop={isSmallScreen ? 1 : 0}
              >
                <Link
                  to={`/products/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button size="medium" variant="contained">
                    Дізнатись більше
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductTile;
