const ProductPrice = (props) => {
  const { priceProvider, price } = props;
  return (
    <div>
      <a href={priceProvider.href}>
        <div>
          <img src="" alt="Store logo" />
          <h2>{priceProvider.name}</h2>
        </div>
        <div>{price}UAH</div>
      </a>
    </div>
  );
};

export default ProductPrice;
