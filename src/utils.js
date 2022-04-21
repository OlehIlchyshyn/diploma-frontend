export function hasChildren(item) {
  const { items: children } = item;

  if (children === undefined) {
    return false;
  }

  if (children.constructor !== Array) {
    return false;
  }

  if (children.length === 0) {
    return false;
  }

  return true;
}

export function getMinPrice(priceList) {
  return priceList.reduce(function (prev, curr) {
    return prev.amount < curr.amount ? prev : curr;
  });
}

export function priceHistoryObjectToArray(object) {
  return Object.keys(object)
    .map(function (key) {
      let arrayItem = object[key];
      arrayItem.forEach((item) => (item["date"] = key));
      return arrayItem;
    })
    .flat();
}

export function getLowestPrice(prices) {
  return prices.reduce((prev, curr) =>
    prev.amount < curr.amount ? prev : curr
  );
}

export function getHighestPrice(prices) {
  return prices.reduce((prev, curr) =>
    prev.amount > curr.amount ? prev : curr
  );
}

export function getAveragePrice(prices) {
  return prices.reduce((acc, price) => acc + price.amount, 0) / prices.length;
}
