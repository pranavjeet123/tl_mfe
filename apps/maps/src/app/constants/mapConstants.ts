/**
 * Default map center coordinates (Bangalore)
 */
export const DEFAULT_MAP_CENTER: [number, number] = [12.9716, 77.5946];

/**
 * Default map zoom level
 */
export const DEFAULT_MAP_ZOOM = 13;

/**
 * Default notification duration in milliseconds
 */
export const DEFAULT_NOTIFICATION_DURATION = 3000;

/**
 * Map tile layer configuration
 */
export const MAP_TILE_CONFIG = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
};

/**
 * POI emoji icons by type
 */
export const POI_ICONS: Record<string, string> = {
  cafe: '☕',
  office: '🏢',
  transit: '🚇',
  university: '🎓',
  mall: '🛒',
  residential: '🏠'
};

/**
 * POI type labels
 */
export const POI_LABELS: Record<string, string> = {
  cafe: 'Cafes',
  office: 'Offices',
  transit: 'Transit',
  university: 'University',
  mall: 'Mall',
  residential: 'Residential'
};
