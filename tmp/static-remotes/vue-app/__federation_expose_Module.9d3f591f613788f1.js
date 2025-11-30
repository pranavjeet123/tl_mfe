"use strict";(self.webpackChunkvue_app=self.webpackChunkvue_app||[]).push([["145"],{67:function(e,n,t){t.d(n,{A:()=>s});var r=t(182),a=t.n(r),o=t(806),i=t.n(o)()(a());i.push([e.id,`
.coffee-ranking-wrapper[data-v-3b266974] {
  padding: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}
.header[data-v-3b266974] {
  text-align: center;
  margin-bottom: 2rem;
}
.title[data-v-3b266974] {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
.subtitle[data-v-3b266974] {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1rem;
}
.cards-grid[data-v-3b266974] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  max-width: 1200px;
  margin: 0 auto;
}
@media (max-width: 1024px) {
.cards-grid[data-v-3b266974] {
    grid-template-columns: repeat(2, 1fr);
}
}
@media (max-width: 640px) {
.cards-grid[data-v-3b266974] {
    grid-template-columns: 1fr;
}
}
.ranking-card[data-v-3b266974] {
  background: white;
  border-radius: 0.875rem;
  padding: 1.25rem;
  box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.25);
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 3px solid transparent;
  min-height: 280px;
}
.ranking-card[data-v-3b266974]:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 16px 32px -4px rgba(0, 0, 0, 0.35);
}
.rank-gold[data-v-3b266974] {
  border-color: #fbbf24;
  background: linear-gradient(135deg, #fef3c7 0%, #ffffff 100%);
  box-shadow: 0 8px 20px -4px rgba(251, 191, 36, 0.4);
}
.rank-silver[data-v-3b266974] {
  border-color: #9ca3af;
  background: linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%);
  box-shadow: 0 8px 20px -4px rgba(156, 163, 175, 0.4);
}
.rank-bronze[data-v-3b266974] {
  border-color: #f97316;
  background: linear-gradient(135deg, #fed7aa 0%, #ffffff 100%);
  box-shadow: 0 8px 20px -4px rgba(249, 115, 22, 0.4);
}
.rank-good[data-v-3b266974] {
  border-color: #10b981;
  background: linear-gradient(135deg, #d1fae5 0%, #ffffff 100%);
  box-shadow: 0 8px 20px -4px rgba(16, 185, 129, 0.3);
}
.rank-normal[data-v-3b266974] {
  border-color: #e5e7eb;
  background: white;
}
.rank-badge[data-v-3b266974] {
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
.badge-gold[data-v-3b266974] {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
}
.badge-silver[data-v-3b266974] {
  background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);
}
.badge-bronze[data-v-3b266974] {
  background: linear-gradient(135deg, #f97316 0%, #d97706 100%);
}
.badge-normal[data-v-3b266974] {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
}
.card-content[data-v-3b266974] {
  margin-top: 0.75rem;
}
.location-name[data-v-3b266974] {
  font-size: 1.1rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.75rem;
  text-align: center;
}
.score-section[data-v-3b266974] {
  margin-bottom: 1rem;
}
.score-display[data-v-3b266974] {
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 0.5rem;
  gap: 0.25rem;
}
.score-value[data-v-3b266974] {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}
.score-max[data-v-3b266974] {
  font-size: 1rem;
  color: #9ca3af;
  font-weight: 600;
}
.score-bar[data-v-3b266974] {
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}
.score-fill[data-v-3b266974] {
  height: 100%;
  background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 4px;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.metrics-compact[data-v-3b266974] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 0.875rem;
}
.metric-row[data-v-3b266974] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: #f9fafb;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}
.metric-icon[data-v-3b266974] {
  font-size: 1.25rem;
}
.metric-text[data-v-3b266974] {
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
}
.rent-info[data-v-3b266974] {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem;
  background: linear-gradient(135deg, #fef3c7 0%, #fef9c3 100%);
  border-radius: 0.5rem;
  margin-bottom: 0.875rem;
  border: 2px solid #fde047;
}
.rent-amount[data-v-3b266974] {
  font-size: 1rem;
  font-weight: bold;
  color: #92400e;
}
.tags-compact[data-v-3b266974] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  justify-content: center;
}
.tag[data-v-3b266974] {
  padding: 0.25rem 0.625rem;
  background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
  color: #6366f1;
  border-radius: 0.75rem;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid #c4b5fd;
  white-space: nowrap;
}
`,"",{version:3,sources:["webpack://./apps/vue-app/src/app/components/CoffeePlaceRanking.vue"],names:[],mappings:";AAqRA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,6DAA6D;EAC7D,iBAAiB;AACnB;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,qBAAqB;EACrB,2CAA2C;AAC7C;AAEA;EACE,gCAAgC;EAChC,eAAe;AACjB;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,YAAY;EACZ,iBAAiB;EACjB,cAAc;AAChB;AAEA;AACE;IACE,qCAAqC;AACvC;AACF;AAEA;AACE;IACE,0BAA0B;AAC5B;AACF;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,gBAAgB;EAChB,+CAA+C;EAC/C,kBAAkB;EAClB,iDAAiD;EACjD,6BAA6B;EAC7B,iBAAiB;AACnB;AAEA;EACE,uCAAuC;EACvC,gDAAgD;AAClD;AAEA;EACE,qBAAqB;EACrB,6DAA6D;EAC7D,mDAAmD;AACrD;AAEA;EACE,qBAAqB;EACrB,6DAA6D;EAC7D,oDAAoD;AACtD;AAEA;EACE,qBAAqB;EACrB,6DAA6D;EAC7D,mDAAmD;AACrD;AAEA;EACE,qBAAqB;EACrB,6DAA6D;EAC7D,mDAAmD;AACrD;AAEA;EACE,qBAAqB;EACrB,iBAAiB;AACnB;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,qBAAqB;EACrB,iBAAiB;EACjB,iBAAiB;EACjB,yCAAyC;AAC3C;AAEA;EACE,6DAA6D;AAC/D;AAEA;EACE,6DAA6D;AAC/D;AAEA;EACE,6DAA6D;AAC/D;AAEA;EACE,6DAA6D;AAC/D;AAEA;EACE,mBAAmB;AACrB;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;EACd,sBAAsB;EACtB,kBAAkB;AACpB;AAEA;EACE,mBAAmB;AACrB;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,qBAAqB;EACrB,YAAY;AACd;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,6DAA6D;EAC7D,6BAA6B;EAC7B,oCAAoC;EACpC,qBAAqB;EACrB,cAAc;AAChB;AAEA;EACE,eAAe;EACf,cAAc;EACd,gBAAgB;AAClB;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;AAClB;AAEA;EACE,YAAY;EACZ,4DAA4D;EAC5D,kBAAkB;EAClB,mDAAmD;AACrD;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,WAAW;EACX,uBAAuB;AACzB;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;AAC3B;AAEA;EACE,kBAAkB;AACpB;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,cAAc;AAChB;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,6DAA6D;EAC7D,qBAAqB;EACrB,uBAAuB;EACvB,yBAAyB;AAC3B;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;AAEA;EACE,aAAa;EACb,eAAe;EACf,aAAa;EACb,uBAAuB;AACzB;AAEA;EACE,yBAAyB;EACzB,6DAA6D;EAC7D,cAAc;EACd,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;EACzB,mBAAmB;AACrB",sourcesContent:['<template>\n  <div class="coffee-ranking-wrapper">\n    <div class="header">\n      <h2 class="title">\u2615 Top Coffee Shop Locations</h2>\n      <p class="subtitle">Top 9 ranked locations based on AI analysis</p>\n    </div>\n\n    <div class="cards-grid">\n      <div\n        v-for="(location, index) in topLocations"\n        :key="location.id"\n        class="ranking-card"\n        :class="getRankClass(index)"\n      >\n        <div class="rank-badge" :class="getBadgeClass(index)">\n          <span class="rank-number">#{{ index + 1 }}</span>\n        </div>\n\n        <div class="card-content">\n          <h3 class="location-name">{{ location.name }}</h3>\n          \n          <div class="score-section">\n            <div class="score-display">\n              <span class="score-value">{{ location.overallScore }}</span>\n              <span class="score-max">/100</span>\n            </div>\n            <div class="score-bar">\n              <div\n                class="score-fill"\n                :style="{ width: location.overallScore + \'%\' }"\n              ></div>\n            </div>\n          </div>\n\n          <div class="metrics-compact">\n            <div class="metric-row">\n              <span class="metric-icon">\uD83D\uDC65</span>\n              <span class="metric-text">{{ location.footTraffic }}/10</span>\n            </div>\n            <div class="metric-row">\n              <span class="metric-icon">\uD83D\uDCB0</span>\n              <span class="metric-text">{{ location.rentCost }}/10</span>\n            </div>\n            <div class="metric-row">\n              <span class="metric-icon">\uD83C\uDFEA</span>\n              <span class="metric-text">{{ location.competition }}/10</span>\n            </div>\n            <div class="metric-row">\n              <span class="metric-icon">\uD83D\uDE87</span>\n              <span class="metric-text">{{ location.accessibility }}/10</span>\n            </div>\n          </div>\n\n          <div class="rent-info">\n            <span class="rent-amount">\u20B9{{ (location.estimatedRent / 1000).toFixed(0) }}K/mo</span>\n          </div>\n\n          <div class="tags-compact">\n            <span\n              v-for="tag in location.tags.slice(0, 2)"\n              :key="tag"\n              class="tag"\n            >\n              {{ tag }}\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref, onMounted, computed } from \'vue\';\n\ninterface POI {\n  type: string;\n  properties: {\n    id: string;\n    type: string;\n    name?: string;\n    rating?: number;\n    visitors_per_day?: number;\n    employees?: number;\n    students?: number;\n    daily_entries?: number;\n    households?: number;\n    tags: string[];\n    estimated_rent?: number;\n    notes?: string;\n  };\n  geometry: {\n    type: string;\n    coordinates: [number, number];\n  };\n}\n\ninterface ScoredLocation {\n  id: string;\n  name: string;\n  address: string;\n  overallScore: number;\n  footTraffic: number;\n  rentCost: number;\n  competition: number;\n  accessibility: number;\n  tags: string[];\n  coordinates: [number, number];\n  estimatedRent: number;\n  nearbyPOIs: string[];\n}\n\nconst locations = ref<ScoredLocation[]>([]);\n\n// Calculate distance between two points using Haversine formula (in km)\nfunction calculateDistance(\n  coord1: [number, number],\n  coord2: [number, number]\n): number {\n  const R = 6371;\n  const lat1 = (coord1[1] * Math.PI) / 180;\n  const lat2 = (coord2[1] * Math.PI) / 180;\n  const deltaLat = ((coord2[1] - coord1[1]) * Math.PI) / 180;\n  const deltaLon = ((coord2[0] - coord1[0]) * Math.PI) / 180;\n\n  const a =\n    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +\n    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);\n\n  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));\n  return R * c;\n}\n\nfunction calculateLocationScores(candidates: POI[], pois: POI[]): ScoredLocation[] {\n  const maxRent = Math.max(...candidates.map((c) => c.properties.estimated_rent || 0));\n  const minRent = Math.min(...candidates.map((c) => c.properties.estimated_rent || 0));\n\n  return candidates.map((candidate) => {\n    const coords = candidate.geometry.coordinates;\n    const searchRadius = 0.5; // 500 meters\n\n    // Find nearby POIs\n    const nearbyPOIs = pois\n      .map((poi) => ({\n        poi,\n        distance: calculateDistance(coords, poi.geometry.coordinates),\n      }))\n      .filter(({ distance }) => distance <= searchRadius)\n      .sort((a, b) => a.distance - b.distance);\n\n    // Calculate foot traffic score (0-10)\n    let footTrafficScore = 0;\n    nearbyPOIs.forEach(({ poi, distance }) => {\n      const proximityFactor = Math.max(0, 1 - distance / searchRadius);\n      \n      if (poi.properties.type === \'office\') {\n        footTrafficScore += (poi.properties.employees || 0) * 0.005 * proximityFactor;\n      } else if (poi.properties.type === \'transit\') {\n        footTrafficScore += (poi.properties.daily_entries || 0) * 0.001 * proximityFactor;\n      } else if (poi.properties.type === \'university\') {\n        footTrafficScore += (poi.properties.students || 0) * 0.003 * proximityFactor;\n      } else if (poi.properties.type === \'mall\') {\n        footTrafficScore += (poi.properties.visitors_per_day || 0) * 0.002 * proximityFactor;\n      } else if (poi.properties.type === \'residential\') {\n        footTrafficScore += (poi.properties.households || 0) * 0.01 * proximityFactor;\n      }\n    });\n    footTrafficScore = Math.min(10, Math.round(footTrafficScore));\n\n    // Calculate rent cost score (0-10, higher is better = lower rent)\n    const rentNormalized = (candidate.properties.estimated_rent! - minRent) / (maxRent - minRent);\n    const rentCostScore = Math.round((1 - rentNormalized) * 10);\n\n    // Calculate competition score (0-10, lower competition is better)\n    const nearbyCafes = nearbyPOIs.filter(({ poi }) => poi.properties.type === \'cafe\').length;\n    const competitionScore = Math.max(0, 10 - nearbyCafes * 3);\n\n    // Calculate accessibility score (0-10)\n    const nearbyTransit = nearbyPOIs.filter(({ poi }) => poi.properties.type === \'transit\');\n    let accessibilityScore = 3;\n    nearbyTransit.forEach(({ distance }) => {\n      if (distance <= 0.15) accessibilityScore += 4;\n      else if (distance <= 0.3) accessibilityScore += 2;\n      else if (distance <= 0.5) accessibilityScore += 1;\n    });\n    accessibilityScore = Math.min(10, accessibilityScore);\n\n    // Calculate overall score (0-100)\n    const overallScore = Math.round(\n      (footTrafficScore * 0.35 +\n        rentCostScore * 0.25 +\n        competitionScore * 0.25 +\n        accessibilityScore * 0.15) * 10\n    );\n\n    // Generate tags\n    const tags: string[] = [];\n    const hasOffices = nearbyPOIs.some(({ poi }) => poi.properties.type === \'office\');\n    const hasTransit = nearbyPOIs.some(({ poi }) => poi.properties.type === \'transit\');\n    const hasUniversity = nearbyPOIs.some(({ poi }) => poi.properties.type === \'university\');\n    const hasMall = nearbyPOIs.some(({ poi }) => poi.properties.type === \'mall\');\n    const hasResidential = nearbyPOIs.some(({ poi }) => poi.properties.type === \'residential\');\n\n    if (hasOffices) tags.push(\'Office Workers\');\n    if (hasTransit) tags.push(\'Transit Hub\');\n    if (hasUniversity) tags.push(\'Students\');\n    if (hasMall) tags.push(\'Retail District\');\n    if (hasResidential) tags.push(\'Residential Area\');\n    if (rentCostScore >= 7) tags.push(\'Affordable\');\n    if (footTrafficScore >= 7) tags.push(\'High Traffic\');\n    if (competitionScore >= 7) tags.push(\'Low Competition\');\n\n    // Get nearby POI names\n    const nearbyPOINames = nearbyPOIs\n      .filter(({ poi }) => poi.properties.name)\n      .slice(0, 5)\n      .map(({ poi }) => poi.properties.name!);\n\n    return {\n      id: candidate.properties.id,\n      name: `Location ${candidate.properties.id.replace(\'cand-\', \'\')}`,\n      address: candidate.properties.notes || \'Prime location for coffee shop\',\n      overallScore,\n      footTraffic: footTrafficScore,\n      rentCost: rentCostScore,\n      competition: competitionScore,\n      accessibility: accessibilityScore,\n      tags,\n      coordinates: coords,\n      estimatedRent: candidate.properties.estimated_rent || 0,\n      nearbyPOIs: nearbyPOINames,\n    };\n  });\n}\n\nconst topLocations = computed(() => {\n  return [...locations.value]\n    .sort((a, b) => b.overallScore - a.overallScore)\n    .slice(0, 9);\n});\n\nconst getRankClass = (index: number) => {\n  if (index === 0) return \'rank-gold\';\n  if (index === 1) return \'rank-silver\';\n  if (index === 2) return \'rank-bronze\';\n  if (index <= 5) return \'rank-good\';\n  return \'rank-normal\';\n};\n\nconst getBadgeClass = (index: number) => {\n  if (index === 0) return \'badge-gold\';\n  if (index === 1) return \'badge-silver\';\n  if (index === 2) return \'badge-bronze\';\n  return \'badge-normal\';\n};\n\nonMounted(async () => {\n  try {\n    // Fetch mock data\n    const response = await fetch(\'http://localhost:4201/assets/mock-data.json\');\n    const data = await response.json();\n    \n    const candidates = data.features.filter(\n      (f: POI) => f.properties.type === \'candidate\'\n    );\n    const pois = data.features.filter(\n      (f: POI) => f.properties.type !== \'candidate\'\n    );\n\n    locations.value = calculateLocationScores(candidates, pois);\n  } catch (error) {\n    console.error(\'Error loading data:\', error);\n  }\n});\n<\/script>\n\n<style scoped>\n.coffee-ranking-wrapper {\n  padding: 1.5rem;\n  max-width: 1400px;\n  margin: 0 auto;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  min-height: 100vh;\n}\n\n.header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.title {\n  font-size: 2rem;\n  font-weight: bold;\n  color: white;\n  margin-bottom: 0.5rem;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n}\n\n.subtitle {\n  color: rgba(255, 255, 255, 0.95);\n  font-size: 1rem;\n}\n\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n@media (max-width: 1024px) {\n  .cards-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (max-width: 640px) {\n  .cards-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n.ranking-card {\n  background: white;\n  border-radius: 0.875rem;\n  padding: 1.25rem;\n  box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.25);\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: 3px solid transparent;\n  min-height: 280px;\n}\n\n.ranking-card:hover {\n  transform: translateY(-6px) scale(1.03);\n  box-shadow: 0 16px 32px -4px rgba(0, 0, 0, 0.35);\n}\n\n.rank-gold {\n  border-color: #fbbf24;\n  background: linear-gradient(135deg, #fef3c7 0%, #ffffff 100%);\n  box-shadow: 0 8px 20px -4px rgba(251, 191, 36, 0.4);\n}\n\n.rank-silver {\n  border-color: #9ca3af;\n  background: linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%);\n  box-shadow: 0 8px 20px -4px rgba(156, 163, 175, 0.4);\n}\n\n.rank-bronze {\n  border-color: #f97316;\n  background: linear-gradient(135deg, #fed7aa 0%, #ffffff 100%);\n  box-shadow: 0 8px 20px -4px rgba(249, 115, 22, 0.4);\n}\n\n.rank-good {\n  border-color: #10b981;\n  background: linear-gradient(135deg, #d1fae5 0%, #ffffff 100%);\n  box-shadow: 0 8px 20px -4px rgba(16, 185, 129, 0.3);\n}\n\n.rank-normal {\n  border-color: #e5e7eb;\n  background: white;\n}\n\n.rank-badge {\n  position: absolute;\n  top: -10px;\n  right: 15px;\n  color: white;\n  padding: 0.35rem 0.9rem;\n  border-radius: 1.5rem;\n  font-weight: bold;\n  font-size: 0.9rem;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);\n}\n\n.badge-gold {\n  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);\n}\n\n.badge-silver {\n  background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);\n}\n\n.badge-bronze {\n  background: linear-gradient(135deg, #f97316 0%, #d97706 100%);\n}\n\n.badge-normal {\n  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);\n}\n\n.card-content {\n  margin-top: 0.75rem;\n}\n\n.location-name {\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #1f2937;\n  margin-bottom: 0.75rem;\n  text-align: center;\n}\n\n.score-section {\n  margin-bottom: 1rem;\n}\n\n.score-display {\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  margin-bottom: 0.5rem;\n  gap: 0.25rem;\n}\n\n.score-value {\n  font-size: 2.5rem;\n  font-weight: bold;\n  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1;\n}\n\n.score-max {\n  font-size: 1rem;\n  color: #9ca3af;\n  font-weight: 600;\n}\n\n.score-bar {\n  height: 8px;\n  background: #e5e7eb;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.score-fill {\n  height: 100%;\n  background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);\n  border-radius: 4px;\n  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.metrics-compact {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.5rem;\n  margin-bottom: 0.875rem;\n}\n\n.metric-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  background: #f9fafb;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n\n.metric-icon {\n  font-size: 1.25rem;\n}\n\n.metric-text {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n}\n\n.rent-info {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.625rem;\n  background: linear-gradient(135deg, #fef3c7 0%, #fef9c3 100%);\n  border-radius: 0.5rem;\n  margin-bottom: 0.875rem;\n  border: 2px solid #fde047;\n}\n\n.rent-amount {\n  font-size: 1rem;\n  font-weight: bold;\n  color: #92400e;\n}\n\n.tags-compact {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.375rem;\n  justify-content: center;\n}\n\n.tag {\n  padding: 0.25rem 0.625rem;\n  background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);\n  color: #6366f1;\n  border-radius: 0.75rem;\n  font-size: 0.7rem;\n  font-weight: 600;\n  border: 1px solid #c4b5fd;\n  white-space: nowrap;\n}\n</style>\n'],sourceRoot:""}]);let s=i},806:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t}).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]&&(l[1]="@media ".concat(l[2]," {").concat(l[1],"}")),l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},182:function(e){e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t))));return[n].concat(["/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r)," */")]).join("\n")}return[n].join("\n")}},604:function(e){var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},o=[],i=0;i<e.length;i++){var s=e[i],c=r.base?s[0]+r.base:s[0],d=a[c]||0,l="".concat(c," ").concat(d);a[c]=d+1;var p=t(l),A={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(A);else{var f=function(e,n){var t=n.domAPI(n);return t.update(e),function(n){n?(n.css!==e.css||n.media!==e.media||n.sourceMap!==e.sourceMap||n.supports!==e.supports||n.layer!==e.layer)&&t.update(e=n):t.remove()}}(A,r);r.byIndex=i,n.splice(i,0,{identifier:l,updater:f,references:1})}o.push(l)}return o}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var c=r(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},863:function(e){var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},896:function(e){e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},124:function(e,n,t){e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},101:function(e){e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){var r,a,o;r="",t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {")),(a=void 0!==t.layer)&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}"),(o=t.sourceMap)&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)},remove:function(){var e;null===(e=n).parentNode||e.parentNode.removeChild(e)}}}},917:function(e){e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},714:function(e,n){n.default=(e,n)=>{let t=e.__vccOpts||e;for(let[e,r]of n)t[e]=r;return t}},405:function(e,n,t){var r=t(604),a=t.n(r),o=t(101),i=t.n(o),s=t(863),c=t.n(s),d=t(124),l=t.n(d),p=t(896),A=t.n(p),f=t(917),m=t.n(f),u=t(67),b={};b.styleTagTransform=m(),b.setAttributes=l(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=A(),a()(u.A,b),u.A&&u.A.locals&&u.A.locals},98:function(e,n,t){t.r(n),t.d(n,{default:()=>a});var r=t(432);t(295);let a=(0,t(714).default)(r.A,[["__scopeId","data-v-3b266974"]])},295:function(e,n,t){t(405)},432:function(e,n,t){t.d(n,{A:()=>r.A});var r=t(10)},10:function(e,n,t){t.d(n,{A:()=>S});var r=t(810);function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){t(e);return}s.done?n(c):Promise.resolve(c).then(r,a)}function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return a(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s={class:"coffee-ranking-wrapper"},c={class:"cards-grid"},d={class:"rank-number"},l={class:"card-content"},p={class:"location-name"},A={class:"score-section"},f={class:"score-display"},m={class:"score-value"},u={class:"score-bar"},b={class:"metrics-compact"},g={class:"metric-row"},h={class:"metric-text"},E={class:"metric-row"},C={class:"metric-text"},v={class:"metric-row"},B={class:"metric-text"},y={class:"metric-row"},x={class:"metric-text"},k={class:"rent-info"},w={class:"rent-amount"},D={class:"tags-compact"};let S=(0,r.defineComponent)({__name:"CoffeePlaceRanking",setup:function(e){var n=(0,r.ref)([]),t=(0,r.computed)(function(){return i(n.value).sort(function(e,n){return n.overallScore-e.overallScore}).slice(0,9)});return(0,r.onMounted)(function(){var e;return(e=function(){var e,t,r;return function(e,n){var t,r,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=s(0),i.throw=s(1),i.return=s(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){var d=[s,c];if(t)throw TypeError("Generator is already executing.");for(;i&&(i=0,d[0]&&(o=0)),o;)try{if(t=1,r&&(a=2&d[0]?r.return:d[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,d[1])).done)return a;switch(r=0,a&&(d=[2&d[0],a.value]),d[0]){case 0:case 1:a=d;break;case 4:return o.label++,{value:d[1],done:!1};case 5:o.label++,r=d[1],d=[0];continue;case 7:d=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===d[0]||2===d[0])){o=0;continue}if(3===d[0]&&(!a||d[1]>a[0]&&d[1]<a[3])){o.label=d[1];break}if(6===d[0]&&o.label<a[1]){o.label=a[1],a=d;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(d);break}a[2]&&o.ops.pop(),o.trys.pop();continue}d=n.call(e,o)}catch(e){d=[6,e],r=0}finally{t=a=0}if(5&d[0])throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}}}(this,function(a){switch(a.label){case 0:return a.trys.push([0,3,,4]),[4,fetch("http://localhost:4201/assets/mock-data.json")];case 1:return[4,a.sent().json()];case 2:var o,s,c,d;return t=(e=a.sent()).features.filter(function(e){return"candidate"===e.properties.type}),r=e.features.filter(function(e){return"candidate"!==e.properties.type}),c=(o=Math).max.apply(o,i(t.map(function(e){return e.properties.estimated_rent||0}))),d=(s=Math).min.apply(s,i(t.map(function(e){return e.properties.estimated_rent||0}))),n.value=t.map(function(e){var n=e.geometry.coordinates,t=r.map(function(e){var t,r,a,o,i,s;return{poi:e,distance:(t=e.geometry.coordinates,r=n[1]*Math.PI/180,a=t[1]*Math.PI/180,6371*(2*Math.atan2(Math.sqrt(s=Math.sin((o=(t[1]-n[1])*Math.PI/180)/2)*Math.sin(o/2)+Math.cos(r)*Math.cos(a)*Math.sin((i=(t[0]-n[0])*Math.PI/180)/2)*Math.sin(i/2)),Math.sqrt(1-s))))}}).filter(function(e){return e.distance<=.5}).sort(function(e,n){return e.distance-n.distance}),a=0;t.forEach(function(e){var n=e.poi,t=Math.max(0,1-e.distance/.5);"office"===n.properties.type?a+=.005*(n.properties.employees||0)*t:"transit"===n.properties.type?a+=.001*(n.properties.daily_entries||0)*t:"university"===n.properties.type?a+=.003*(n.properties.students||0)*t:"mall"===n.properties.type?a+=.002*(n.properties.visitors_per_day||0)*t:"residential"===n.properties.type&&(a+=.01*(n.properties.households||0)*t)}),a=Math.min(10,Math.round(a));var o=Math.round((1-(e.properties.estimated_rent-d)/(c-d))*10),i=Math.max(0,10-3*t.filter(function(e){return"cafe"===e.poi.properties.type}).length),s=t.filter(function(e){return"transit"===e.poi.properties.type}),l=3;s.forEach(function(e){var n=e.distance;n<=.15?l+=4:n<=.3?l+=2:n<=.5&&(l+=1)});var p=Math.round((.35*a+.25*o+.25*i+.15*(l=Math.min(10,l)))*10),A=[],f=t.some(function(e){return"office"===e.poi.properties.type}),m=t.some(function(e){return"transit"===e.poi.properties.type}),u=t.some(function(e){return"university"===e.poi.properties.type}),b=t.some(function(e){return"mall"===e.poi.properties.type}),g=t.some(function(e){return"residential"===e.poi.properties.type});f&&A.push("Office Workers"),m&&A.push("Transit Hub"),u&&A.push("Students"),b&&A.push("Retail District"),g&&A.push("Residential Area"),o>=7&&A.push("Affordable"),a>=7&&A.push("High Traffic"),i>=7&&A.push("Low Competition");var h=t.filter(function(e){return e.poi.properties.name}).slice(0,5).map(function(e){return e.poi.properties.name});return{id:e.properties.id,name:"Location ".concat(e.properties.id.replace("cand-","")),address:e.properties.notes||"Prime location for coffee shop",overallScore:p,footTraffic:a,rentCost:o,competition:i,accessibility:l,tags:A,coordinates:n,estimatedRent:e.properties.estimated_rent||0,nearbyPOIs:h}}),[3,4];case 3:return console.error("Error loading data:",a.sent()),[3,4];case 4:return[2]}})},function(){var n=this,t=arguments;return new Promise(function(r,a){var i=e.apply(n,t);function s(e){o(i,r,a,s,c,"next",e)}function c(e){o(i,r,a,s,c,"throw",e)}s(void 0)})})()}),function(e,n){return(0,r.openBlock)(),(0,r.createElementBlock)("div",s,[n[5]||(n[5]=(0,r.createElementVNode)("div",{class:"header"},[(0,r.createElementVNode)("h2",{class:"title"},"\u2615 Top Coffee Shop Locations"),(0,r.createElementVNode)("p",{class:"subtitle"},"Top 9 ranked locations based on AI analysis")],-1)),(0,r.createElementVNode)("div",c,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(t.value,function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{key:e.id,class:(0,r.normalizeClass)(["ranking-card",0===t?"rank-gold":1===t?"rank-silver":2===t?"rank-bronze":t<=5?"rank-good":"rank-normal"])},[(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(["rank-badge",0===t?"badge-gold":1===t?"badge-silver":2===t?"badge-bronze":"badge-normal"])},[(0,r.createElementVNode)("span",d,"#"+(0,r.toDisplayString)(t+1),1)],2),(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("h3",p,(0,r.toDisplayString)(e.name),1),(0,r.createElementVNode)("div",A,[(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("span",m,(0,r.toDisplayString)(e.overallScore),1),n[0]||(n[0]=(0,r.createElementVNode)("span",{class:"score-max"},"/100",-1))]),(0,r.createElementVNode)("div",u,[(0,r.createElementVNode)("div",{class:"score-fill",style:(0,r.normalizeStyle)({width:e.overallScore+"%"})},null,4)])]),(0,r.createElementVNode)("div",b,[(0,r.createElementVNode)("div",g,[n[1]||(n[1]=(0,r.createElementVNode)("span",{class:"metric-icon"},"\uD83D\uDC65",-1)),(0,r.createElementVNode)("span",h,(0,r.toDisplayString)(e.footTraffic)+"/10",1)]),(0,r.createElementVNode)("div",E,[n[2]||(n[2]=(0,r.createElementVNode)("span",{class:"metric-icon"},"\uD83D\uDCB0",-1)),(0,r.createElementVNode)("span",C,(0,r.toDisplayString)(e.rentCost)+"/10",1)]),(0,r.createElementVNode)("div",v,[n[3]||(n[3]=(0,r.createElementVNode)("span",{class:"metric-icon"},"\uD83C\uDFEA",-1)),(0,r.createElementVNode)("span",B,(0,r.toDisplayString)(e.competition)+"/10",1)]),(0,r.createElementVNode)("div",y,[n[4]||(n[4]=(0,r.createElementVNode)("span",{class:"metric-icon"},"\uD83D\uDE87",-1)),(0,r.createElementVNode)("span",x,(0,r.toDisplayString)(e.accessibility)+"/10",1)])]),(0,r.createElementVNode)("div",k,[(0,r.createElementVNode)("span",w,"\u20B9"+(0,r.toDisplayString)((e.estimatedRent/1e3).toFixed(0))+"K/mo",1)]),(0,r.createElementVNode)("div",D,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.tags.slice(0,2),function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("span",{key:e,class:"tag"},(0,r.toDisplayString)(e),1)}),128))])])],2)}),128))])])}}})}}]);
//# sourceMappingURL=__federation_expose_Module.9d3f591f613788f1.js.map