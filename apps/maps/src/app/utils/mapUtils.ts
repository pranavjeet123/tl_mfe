import { GeoFeature, POI, MockDataResponse } from '../services/mockDataService';

/**
 * Get POI features from mock data
 * @param mockData - The mock data response
 * @returns Array of POI features
 */
export const getPOIFeatures = (mockData: MockDataResponse | null): GeoFeature[] => {
  if (!mockData) return [];
  return mockData.features.filter(
    (feature): feature is GeoFeature => feature.properties.type !== 'candidate'
  );
};

/**
 * Get candidate features from mock data
 * @param mockData - The mock data response
 * @returns Array of candidate features
 */
export const getCandidateFeatures = (mockData: MockDataResponse | null): GeoFeature[] => {
  if (!mockData) return [];
  return mockData.features.filter(
    (feature): feature is GeoFeature => feature.properties.type === 'candidate'
  );
};

/**
 * Calculate POI type statistics
 * @param poiFeatures - Array of POI features
 * @returns Object with POI type counts
 */
export const calculatePOIStats = (poiFeatures: GeoFeature[]): Record<string, number> => {
  const stats: Record<string, number> = {};
  poiFeatures.forEach(feature => {
    const properties = feature.properties as POI;
    const type = properties.type;
    stats[type] = (stats[type] || 0) + 1;
  });
  return stats;
};

/**
 * Filter features by favorites
 * @param features - Array of features
 * @param favoriteIds - Set of favorite IDs
 * @returns Filtered array of favorite features
 */
export const filterFavoriteFeatures = (
  features: GeoFeature[],
  favoriteIds: Set<string>
): GeoFeature[] => {
  return features.filter(feature => favoriteIds.has(feature.properties.id));
};
