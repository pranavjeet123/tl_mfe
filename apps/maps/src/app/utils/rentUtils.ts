/**
 * Get color based on rent amount
 * @param rent - The rent amount
 * @returns Hex color code
 */
export const getRentColor = (rent: number): string => {
  if (rent >= 80000) return '#EF4444'; // red-500
  if (rent >= 65000) return '#F59E0B'; // orange-500
  if (rent >= 50000) return '#10B981'; // green-500
  return '#3B82F6'; // blue-500
};

/**
 * Get rent category based on amount
 * @param rent - The rent amount
 * @returns Category label
 */
export const getRentCategory = (rent: number): string => {
  if (rent >= 80000) return 'High';
  if (rent >= 65000) return 'Medium-High';
  if (rent >= 50000) return 'Medium';
  return 'Low';
};

/**
 * Get rent category with range
 * @param rent - The rent amount
 * @returns Category with range string
 */
export const getRentCategoryWithRange = (rent: number): string => {
  if (rent >= 80000) return 'High (₹80K+)';
  if (rent >= 65000) return 'Medium-High (₹65K-80K)';
  if (rent >= 50000) return 'Medium (₹50K-65K)';
  return 'Low (₹50K-)';
};
