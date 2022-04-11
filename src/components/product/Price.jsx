const Price = (props) => {
  const { amount, currency, availabilityStatus } = props.price;

  return availabilityStatus === "AVAILABLE" ? (
    <span>{amount + currency}</span>
  ) : (
    <span>Not available</span>
  );
};

export default Price;
