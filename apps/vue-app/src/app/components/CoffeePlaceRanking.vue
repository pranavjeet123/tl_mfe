<template>
  <div class="coffee-ranking-wrapper">
    <div class="header">
      <h2 class="title">☕ Top Coffee Shop Locations</h2>
      <p class="subtitle">Top 9 ranked locations based on AI analysis</p>
    </div>

    <div class="cards-grid">
      <div
        v-for="(location, index) in topLocations"
        :key="location.id"
        class="ranking-card"
        :class="getRankClass(index)"
      >
        <div class="rank-badge" :class="getBadgeClass(index)">
          <span class="rank-number">#{{ index + 1 }}</span>
        </div>

        <div class="card-content">
          <h3 class="location-name">{{ location.name }}</h3>
          
          <div class="score-section">
            <div class="score-display">
              <span class="score-value">{{ location.overallScore }}</span>
              <span class="score-max">/100</span>
            </div>
            <div class="score-bar">
              <div
                class="score-fill"
                :style="{ width: location.overallScore + '%' }"
              ></div>
            </div>
          </div>

          <div class="metrics-compact">
            <div class="metric-row">
              <span class="metric-icon">👥</span>
              <span class="metric-text">{{ location.footTraffic }}/10</span>
            </div>
            <div class="metric-row">
              <span class="metric-icon">💰</span>
              <span class="metric-text">{{ location.rentCost }}/10</span>
            </div>
            <div class="metric-row">
              <span class="metric-icon">🏪</span>
              <span class="metric-text">{{ location.competition }}/10</span>
            </div>
            <div class="metric-row">
              <span class="metric-icon">🚇</span>
              <span class="metric-text">{{ location.accessibility }}/10</span>
            </div>
          </div>

          <div class="rent-info">
            <span class="rent-amount">₹{{ (location.estimatedRent / 1000).toFixed(0) }}K/mo</span>
          </div>

          <div class="tags-compact">
            <span
              v-for="tag in location.tags.slice(0, 2)"
              :key="tag"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

interface POI {
  type: string;
  properties: {
    id: string;
    type: string;
    name?: string;
    rating?: number;
    visitors_per_day?: number;
    employees?: number;
    students?: number;
    daily_entries?: number;
    households?: number;
    tags: string[];
    estimated_rent?: number;
    notes?: string;
  };
  geometry: {
    type: string;
    coordinates: [number, number];
  };
}

interface ScoredLocation {
  id: string;
  name: string;
  address: string;
  overallScore: number;
  footTraffic: number;
  rentCost: number;
  competition: number;
  accessibility: number;
  tags: string[];
  coordinates: [number, number];
  estimatedRent: number;
  nearbyPOIs: string[];
}

const locations = ref<ScoredLocation[]>([]);

// Calculate distance between two points using Haversine formula (in km)
function calculateDistance(
  coord1: [number, number],
  coord2: [number, number]
): number {
  const R = 6371;
  const lat1 = (coord1[1] * Math.PI) / 180;
  const lat2 = (coord2[1] * Math.PI) / 180;
  const deltaLat = ((coord2[1] - coord1[1]) * Math.PI) / 180;
  const deltaLon = ((coord2[0] - coord1[0]) * Math.PI) / 180;

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function calculateLocationScores(candidates: POI[], pois: POI[]): ScoredLocation[] {
  const maxRent = Math.max(...candidates.map((c) => c.properties.estimated_rent || 0));
  const minRent = Math.min(...candidates.map((c) => c.properties.estimated_rent || 0));

  return candidates.map((candidate) => {
    const coords = candidate.geometry.coordinates;
    const searchRadius = 0.5; // 500 meters

    // Find nearby POIs
    const nearbyPOIs = pois
      .map((poi) => ({
        poi,
        distance: calculateDistance(coords, poi.geometry.coordinates),
      }))
      .filter(({ distance }) => distance <= searchRadius)
      .sort((a, b) => a.distance - b.distance);

    // Calculate foot traffic score (0-10)
    let footTrafficScore = 0;
    nearbyPOIs.forEach(({ poi, distance }) => {
      const proximityFactor = Math.max(0, 1 - distance / searchRadius);
      
      if (poi.properties.type === 'office') {
        footTrafficScore += (poi.properties.employees || 0) * 0.005 * proximityFactor;
      } else if (poi.properties.type === 'transit') {
        footTrafficScore += (poi.properties.daily_entries || 0) * 0.001 * proximityFactor;
      } else if (poi.properties.type === 'university') {
        footTrafficScore += (poi.properties.students || 0) * 0.003 * proximityFactor;
      } else if (poi.properties.type === 'mall') {
        footTrafficScore += (poi.properties.visitors_per_day || 0) * 0.002 * proximityFactor;
      } else if (poi.properties.type === 'residential') {
        footTrafficScore += (poi.properties.households || 0) * 0.01 * proximityFactor;
      }
    });
    footTrafficScore = Math.min(10, Math.round(footTrafficScore));

    // Calculate rent cost score (0-10, higher is better = lower rent)
    const rentNormalized = (candidate.properties.estimated_rent! - minRent) / (maxRent - minRent);
    const rentCostScore = Math.round((1 - rentNormalized) * 10);

    // Calculate competition score (0-10, lower competition is better)
    const nearbyCafes = nearbyPOIs.filter(({ poi }) => poi.properties.type === 'cafe').length;
    const competitionScore = Math.max(0, 10 - nearbyCafes * 3);

    // Calculate accessibility score (0-10)
    const nearbyTransit = nearbyPOIs.filter(({ poi }) => poi.properties.type === 'transit');
    let accessibilityScore = 3;
    nearbyTransit.forEach(({ distance }) => {
      if (distance <= 0.15) accessibilityScore += 4;
      else if (distance <= 0.3) accessibilityScore += 2;
      else if (distance <= 0.5) accessibilityScore += 1;
    });
    accessibilityScore = Math.min(10, accessibilityScore);

    // Calculate overall score (0-100)
    const overallScore = Math.round(
      (footTrafficScore * 0.35 +
        rentCostScore * 0.25 +
        competitionScore * 0.25 +
        accessibilityScore * 0.15) * 10
    );

    // Generate tags
    const tags: string[] = [];
    const hasOffices = nearbyPOIs.some(({ poi }) => poi.properties.type === 'office');
    const hasTransit = nearbyPOIs.some(({ poi }) => poi.properties.type === 'transit');
    const hasUniversity = nearbyPOIs.some(({ poi }) => poi.properties.type === 'university');
    const hasMall = nearbyPOIs.some(({ poi }) => poi.properties.type === 'mall');
    const hasResidential = nearbyPOIs.some(({ poi }) => poi.properties.type === 'residential');

    if (hasOffices) tags.push('Office Workers');
    if (hasTransit) tags.push('Transit Hub');
    if (hasUniversity) tags.push('Students');
    if (hasMall) tags.push('Retail District');
    if (hasResidential) tags.push('Residential Area');
    if (rentCostScore >= 7) tags.push('Affordable');
    if (footTrafficScore >= 7) tags.push('High Traffic');
    if (competitionScore >= 7) tags.push('Low Competition');

    // Get nearby POI names
    const nearbyPOINames = nearbyPOIs
      .filter(({ poi }) => poi.properties.name)
      .slice(0, 5)
      .map(({ poi }) => poi.properties.name!);

    return {
      id: candidate.properties.id,
      name: `Location ${candidate.properties.id.replace('cand-', '')}`,
      address: candidate.properties.notes || 'Prime location for coffee shop',
      overallScore,
      footTraffic: footTrafficScore,
      rentCost: rentCostScore,
      competition: competitionScore,
      accessibility: accessibilityScore,
      tags,
      coordinates: coords,
      estimatedRent: candidate.properties.estimated_rent || 0,
      nearbyPOIs: nearbyPOINames,
    };
  });
}

const topLocations = computed(() => {
  return [...locations.value]
    .sort((a, b) => b.overallScore - a.overallScore)
    .slice(0, 9);
});

const getRankClass = (index: number) => {
  if (index === 0) return 'rank-gold';
  if (index === 1) return 'rank-silver';
  if (index === 2) return 'rank-bronze';
  if (index <= 5) return 'rank-good';
  return 'rank-normal';
};

const getBadgeClass = (index: number) => {
  if (index === 0) return 'badge-gold';
  if (index === 1) return 'badge-silver';
  if (index === 2) return 'badge-bronze';
  return 'badge-normal';
};

onMounted(async () => {
  try {
    // Fetch mock data
    const response = await fetch('http://localhost:4201/assets/mock-data.json');
    const data = await response.json();
    
    const candidates = data.features.filter(
      (f: POI) => f.properties.type === 'candidate'
    );
    const pois = data.features.filter(
      (f: POI) => f.properties.type !== 'candidate'
    );

    locations.value = calculateLocationScores(candidates, pois);
  } catch (error) {
    console.error('Error loading data:', error);
  }
});
</script>

<style scoped>
.coffee-ranking-wrapper {
  padding: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}

.ranking-card {
  background: white;
  border-radius: 0.875rem;
  padding: 1.25rem;
  box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.25);
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 3px solid transparent;
  min-height: 280px;
}

.ranking-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 16px 32px -4px rgba(0, 0, 0, 0.35);
}

.rank-gold {
  border-color: #fbbf24;
  background: linear-gradient(135deg, #fef3c7 0%, #ffffff 100%);
  box-shadow: 0 8px 20px -4px rgba(251, 191, 36, 0.4);
}

.rank-silver {
  border-color: #9ca3af;
  background: linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%);
  box-shadow: 0 8px 20px -4px rgba(156, 163, 175, 0.4);
}

.rank-bronze {
  border-color: #f97316;
  background: linear-gradient(135deg, #fed7aa 0%, #ffffff 100%);
  box-shadow: 0 8px 20px -4px rgba(249, 115, 22, 0.4);
}

.rank-good {
  border-color: #10b981;
  background: linear-gradient(135deg, #d1fae5 0%, #ffffff 100%);
  box-shadow: 0 8px 20px -4px rgba(16, 185, 129, 0.3);
}

.rank-normal {
  border-color: #e5e7eb;
  background: white;
}

.rank-badge {
  position: absolute;
  top: -10px;
  right: 15px;
  color: white;
  padding: 0.35rem 0.9rem;
  border-radius: 1.5rem;
  font-weight: bold;
  font-size: 0.9rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}

.badge-gold {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
}

.badge-silver {
  background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);
}

.badge-bronze {
  background: linear-gradient(135deg, #f97316 0%, #d97706 100%);
}

.badge-normal {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
}

.card-content {
  margin-top: 0.75rem;
}

.location-name {
  font-size: 1.1rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.75rem;
  text-align: center;
}

.score-section {
  margin-bottom: 1rem;
}

.score-display {
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 0.5rem;
  gap: 0.25rem;
}

.score-value {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.score-max {
  font-size: 1rem;
  color: #9ca3af;
  font-weight: 600;
}

.score-bar {
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.score-fill {
  height: 100%;
  background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 4px;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.metrics-compact {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 0.875rem;
}

.metric-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: #f9fafb;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}

.metric-icon {
  font-size: 1.25rem;
}

.metric-text {
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
}

.rent-info {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem;
  background: linear-gradient(135deg, #fef3c7 0%, #fef9c3 100%);
  border-radius: 0.5rem;
  margin-bottom: 0.875rem;
  border: 2px solid #fde047;
}

.rent-amount {
  font-size: 1rem;
  font-weight: bold;
  color: #92400e;
}

.tags-compact {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  justify-content: center;
}

.tag {
  padding: 0.25rem 0.625rem;
  background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
  color: #6366f1;
  border-radius: 0.75rem;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid #c4b5fd;
  white-space: nowrap;
}
</style>
