import { Typography } from "@mui/material";
import { getLowestPrice, getHighestPrice } from "../../../utils";

const PriceRangeInfo = ({ priceHistory }) => {
  const minPrice = getLowestPrice(priceHistory);
  const maxPrice = getHighestPrice(priceHistory);

  return (
    <Typography>
      {minPrice === maxPrice
        ? "Ціна не змінювалась"
        : `Від ${minPrice.amount} ${minPrice.currency} до ${maxPrice.amount} ${maxPrice.currency}`}
    </Typography>
  );
};

export default PriceRangeInfo;
