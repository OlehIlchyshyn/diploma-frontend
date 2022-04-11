import Price from "./Price";
import PriceProvider from "./PriceProvider";

const PriceList = (props) => {
  const { prices } = props;

  return prices.map((price) => (
    <div key={price.id}>
      <PriceProvider provider={price.priceProvider} />
      <Price price={price} />
    </div>
  ));
};

export default PriceList;
