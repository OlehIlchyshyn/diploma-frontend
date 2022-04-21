import { Typography } from "@mui/material";
import { getLowestPrice, getHighestPrice } from "../../../utils";

const PriceRangeInfo = ({ priceHistory }) => {
  const minPrice = getLowestPrice(priceHistory);
  const maxPrice = getHighestPrice(priceHistory);

  return (
    <Typography>
      {minPrice === maxPrice
        ? "Ціна не змінювалась"
        : `Від ${minPrice}грн до ${maxPrice}грн`}
    </Typography>
  );
};

export default PriceRangeInfo;
