/**
 * Formats a number as Indian Rupee currency
 * @param amount - The amount to format
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

/**
 * Formats coordinates to a fixed decimal place
 * @param coordinate - The coordinate value
 * @param decimals - Number of decimal places (default: 4)
 * @returns Formatted coordinate string
 */
export const formatCoordinate = (coordinate: number, decimals = 4): string => {
  return coordinate.toFixed(decimals);
};

/**
 * Formats coordinates as a display string
 * @param longitude - Longitude value
 * @param latitude - Latitude value
 * @returns Formatted coordinate string
 */
export const formatCoordinates = (longitude: number, latitude: number): string => {
  return `[${formatCoordinate(latitude)}, ${formatCoordinate(longitude)}]`;
};
