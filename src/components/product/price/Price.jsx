const Price = (props) => {
  const { amount, currency } = props.price;

  return <span>{amount + " " + currency}</span>;
};

export default Price;
