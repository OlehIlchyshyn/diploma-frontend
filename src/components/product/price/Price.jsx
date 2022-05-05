const Price = (props) => {
  const { amount, currency } = props.price;

  return <span>{amount.toFixed(2) + " " + currency}</span>;
};

export default Price;
