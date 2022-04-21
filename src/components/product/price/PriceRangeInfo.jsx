import { Typography } from "@mui/material";

function getLowestPrice(prices) {
  console.log(prices);
  return prices.reduce((prev, curr) =>
    prev.amount < curr.amount ? prev : curr
  );
}

function getHighestPrice(prices) {
  return prices.reduce((prev, curr) =>
    prev.amount < curr.amount ? prev : curr
  );
}

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
