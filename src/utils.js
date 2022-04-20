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
  console.log(object);
  return Object.keys(object).map(function (key) {
    // Getting first element of price records for given time,
    // but there is possibility of two records retrieved at the same time
    let arrayItem = object[key][0];
    arrayItem["date"] = key;
    return arrayItem;
  });
}
