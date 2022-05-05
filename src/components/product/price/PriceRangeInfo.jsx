import { Typography } from "@mui/material";
import { getLowestPrice, getHighestPrice } from "../../../utils";

const PriceRangeInfo = ({ priceHistory }) => {
  const minPrice = getLowestPrice(priceHistory);
  const maxPrice = getHighestPrice(priceHistory);

  return (
    <Typography>
      {minPrice === maxPrice
        ? "Ціна не змінювалась"
        : `Від ${minPrice.amount.toFixed(2)} ${minPrice.currency} до ${maxPrice.amount.toFixed(2)} ${maxPrice.currency}`}
    </Typography>
  );
};

export default PriceRangeInfo;
