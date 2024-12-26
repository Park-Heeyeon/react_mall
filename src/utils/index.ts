// 할인율 계산 함수
export const discountPercentage = (
  originalPrice: number,
  discountedPrice: number
): number => {
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
};

// 가격 표시 함수
export const formatPrice = (price: number) => `${price.toLocaleString()}원`;
