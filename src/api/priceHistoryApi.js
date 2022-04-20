import API from "./index";

const URL = "/priceHistory/product/";

export const fetchHistoryByProductId = async (productId) => {
  const res = await API.get(URL + productId);
  return res.data.priceRecords;
};
