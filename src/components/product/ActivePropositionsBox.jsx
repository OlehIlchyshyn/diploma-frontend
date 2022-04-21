import { Box, Typography, Grid } from "@mui/material";
import { getHighestPrice, getLowestPrice, getAveragePrice } from "../../utils";

const ActivePropositionsBox = ({ prices }) => {
  const minPrice = getLowestPrice(prices);
  const maxPrice = getHighestPrice(prices);
  const avgPrice = getAveragePrice(prices);
  return (
    <Box>
      <Grid container>
        <Grid item xs={6}>
          <Typography p={1}>
            Від <i>{minPrice.amount}</i> {minPrice.currency} до{" "}
            <i> {maxPrice.amount}</i> {minPrice.currency}
          </Typography>
          <Typography p={1}>Всього пропозицій: {prices.length}</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ display: "grid" }}
          alignItems="center"
          alignContent="center"
        >
          <Box>
            <Typography variant="caption">Середня ціна</Typography>
            <Typography variant="h6">{avgPrice.toFixed(2)} UAH</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ActivePropositionsBox;
