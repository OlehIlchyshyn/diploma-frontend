const PriceProvider = (props) => {
  const { provider } = props;

  return <div>Store: {provider.name}</div>;
};

export default PriceProvider;
