export const formatPrice = (price: number) => {
  // return new Intl.NumberFormat('ru-RU', {
  //   style: 'currency',
  //   currency: 'RUB',
  // }).format(price);
  return price.toLocaleString('ru-RU') + ' \u20BD';
};
