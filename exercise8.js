const calculateDiscount = (totalAmount) => {
  const rate = totalAmount > 100 ? 0.1 : 0.05;
  return totalAmount * rate;
};
