// Utility functions for formatting values
export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const formatQuantity = (quantity: number): string => {
  return quantity.toString().padStart(2, '0');
};