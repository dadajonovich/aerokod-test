export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price);
  // return price.toLocaleString('ru-RU') + ' \u20BD';
  // return price.toLocaleString('ru-RU');
};
