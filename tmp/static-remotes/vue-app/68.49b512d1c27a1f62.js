"use strict";(self.webpackChunkvue_app=self.webpackChunkvue_app||[]).push([["68"],{118:function(e,n,t){t.d(n,{A:()=>s});var r=t(182),a=t.n(r),o=t(806),i=t.n(o)()(a());i.push([e.id,`// extracted by css-extract-rspack-plugin
export {};`,"",{version:3,sources:["webpack://./apps/vue-app/src/styles.css"],names:[],mappings:"AAAA;QACQ,CAAA",sourcesContent:["// extracted by css-extract-rspack-plugin\nexport {};"],sourceRoot:""}]);let s=i},580:function(e,n,t){t.d(n,{A:()=>s});var r=t(182),a=t.n(r),o=t(806),i=t.n(o)()(a());i.push([e.id,`
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}
`,"",{version:3,sources:["webpack://./apps/vue-app/src/app/App.vue"],names:[],mappings:";AAmBA;EACE,iDAAiD;EACjD,mCAAmC;EACnC,kCAAkC;EAClC,6DAA6D;EAC7D,iBAAiB;AACnB",sourcesContent:["<template>\n  <div id=\"app\">\n    <CoffeePlaceRanking />\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport { defineComponent } from 'vue';\nimport CoffeePlaceRanking from './components/CoffeePlaceRanking.vue';\n\nexport default defineComponent({\n  name: 'App',\n  components: {\n    CoffeePlaceRanking,\n  },\n});\n<\/script>\n\n<style>\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  min-height: 100vh;\n}\n</style>\n"],sourceRoot:""}]);let s=i},426:function(e,n,t){t.d(n,{A:()=>s});var r=t(182),a=t.n(r),o=t(806),i=t.n(o)()(a());i.push([e.id,`
.coffee-ranking-container[data-v-0331c3dc] {
  padding: 1.5rem;
  max-width: 1600px;
  margin: 0 auto;
}
.header[data-v-0331c3dc] {
  text-align: center;
  margin-bottom: 2rem;
}
.title[data-v-0331c3dc] {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
.subtitle[data-v-0331c3dc] {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
}
.cards-grid[data-v-0331c3dc] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 1.5rem;
}
.ranking-card[data-v-0331c3dc] {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}
.ranking-card[data-v-0331c3dc]:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 35px -5px rgba(0, 0, 0, 0.3);
}
.rank-gold[data-v-0331c3dc] {
  border-color: #fbbf24;
  background: linear-gradient(135deg, #fffbeb 0%, #ffffff 100%);
}
.rank-silver[data-v-0331c3dc] {
  border-color: #9ca3af;
  background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
}
.rank-bronze[data-v-0331c3dc] {
  border-color: #f97316;
  background: linear-gradient(135deg, #fef3c7 0%, #ffffff 100%);
}
.rank-badge[data-v-0331c3dc] {
  position: absolute;
  top: -12px;
  right: 20px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 2rem;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
  font-size: 1.1rem;
}
.rank-gold .rank-badge[data-v-0331c3dc] {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgba(251, 191, 36, 0.5);
}
.rank-silver .rank-badge[data-v-0331c3dc] {
  background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);
  box-shadow: 0 4px 12px rgba(156, 163, 175, 0.5);
}
.rank-bronze .rank-badge[data-v-0331c3dc] {
  background: linear-gradient(135deg, #f97316 0%, #d97706 100%);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.5);
}
.card-content[data-v-0331c3dc] {
  margin-top: 0.5rem;
}
.location-name[data-v-0331c3dc] {
  font-size: 1.4rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.25rem;
}
.location-address[data-v-0331c3dc] {
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
  font-style: italic;
}
.score-section[data-v-0331c3dc] {
  margin-bottom: 1.5rem;
}
.overall-score[data-v-0331c3dc] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.score-label[data-v-0331c3dc] {
  font-weight: 600;
  color: #374151;
  font-size: 0.95rem;
}
.score-value[data-v-0331c3dc] {
  font-size: 1.75rem;
  font-weight: bold;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.score-bar[data-v-0331c3dc] {
  height: 10px;
  background: #e5e7eb;
  border-radius: 5px;
  overflow: hidden;
}
.score-fill[data-v-0331c3dc] {
  height: 100%;
  background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 5px;
  transition: width 0.5s ease;
}
.metrics-grid[data-v-0331c3dc] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.metric[data-v-0331c3dc] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem;
  background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}
.metric-icon[data-v-0331c3dc] {
  font-size: 1.75rem;
}
.metric-info[data-v-0331c3dc] {
  display: flex;
  flex-direction: column;
}
.metric-label[data-v-0331c3dc] {
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.metric-value[data-v-0331c3dc] {
  font-size: 1rem;
  font-weight: bold;
  color: #1f2937;
}
.rent-info[data-v-0331c3dc] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: linear-gradient(135deg, #fef3c7 0%, #fef9c3 100%);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #fde047;
}
.rent-label[data-v-0331c3dc] {
  font-size: 0.85rem;
  color: #92400e;
  font-weight: 600;
}
.rent-amount[data-v-0331c3dc] {
  font-size: 1.1rem;
  font-weight: bold;
  color: #92400e;
}
.tags[data-v-0331c3dc] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.tag[data-v-0331c3dc] {
  padding: 0.35rem 0.85rem;
  background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
  color: #6366f1;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid #c4b5fd;
}
.nearby-pois[data-v-0331c3dc] {
  background: #f3f4f6;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}
.nearby-title[data-v-0331c3dc] {
  font-size: 0.85rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
}
.poi-list[data-v-0331c3dc] {
  list-style: none;
  padding: 0;
  margin: 0;
}
.poi-list li[data-v-0331c3dc] {
  font-size: 0.8rem;
  color: #6b7280;
  padding: 0.25rem 0;
  padding-left: 1rem;
  position: relative;
}
.poi-list li[data-v-0331c3dc]::before {
  content: '\u{1F4CD}';
  position: absolute;
  left: 0;
}
`,"",{version:3,sources:["webpack://./apps/vue-app/src/app/components/CoffeePlaceRanking.vue"],names:[],mappings:"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",sourcesContent:['<template>\n  <div class="coffee-ranking-container">\n    <div class="header">\n      <h2 class="title">\u2615 Best Places to Open a Coffee Shop</h2>\n      <p class="subtitle">AI-powered rankings based on real location data</p>\n    </div>\n\n    <div class="cards-grid">\n      <div\n        v-for="(location, index) in topLocations"\n        :key="location.id"\n        class="ranking-card"\n        :class="getRankClass(index)"\n      >\n        <div class="rank-badge">\n          <span class="rank-number">#{{ index + 1 }}</span>\n        </div>\n\n        <div class="card-content">\n          <h3 class="location-name">{{ location.name }}</h3>\n          <p class="location-address">{{ location.address }}</p>\n\n          <div class="score-section">\n            <div class="overall-score">\n              <span class="score-label">Overall Score</span>\n              <span class="score-value">{{ location.overallScore }}/100</span>\n            </div>\n            <div class="score-bar">\n              <div\n                class="score-fill"\n                :style="{ width: location.overallScore + \'%\' }"\n              ></div>\n            </div>\n          </div>\n\n          <div class="metrics-grid">\n            <div class="metric">\n              <span class="metric-icon">\uD83D\uDC65</span>\n              <div class="metric-info">\n                <span class="metric-label">Foot Traffic</span>\n                <span class="metric-value">{{ location.footTraffic }}/10</span>\n              </div>\n            </div>\n\n            <div class="metric">\n              <span class="metric-icon">\uD83D\uDCB0</span>\n              <div class="metric-info">\n                <span class="metric-label">Rent Value</span>\n                <span class="metric-value">{{ location.rentCost }}/10</span>\n              </div>\n            </div>\n\n            <div class="metric">\n              <span class="metric-icon">\uD83C\uDFEA</span>\n              <div class="metric-info">\n                <span class="metric-label">Low Competition</span>\n                <span class="metric-value">{{ location.competition }}/10</span>\n              </div>\n            </div>\n\n            <div class="metric">\n              <span class="metric-icon">\uD83D\uDE87</span>\n              <div class="metric-info">\n                <span class="metric-label">Accessibility</span>\n                <span class="metric-value">{{ location.accessibility }}/10</span>\n              </div>\n            </div>\n          </div>\n\n          <div class="rent-info">\n            <span class="rent-label">Estimated Monthly Rent:</span>\n            <span class="rent-amount">\u20B9{{ location.estimatedRent.toLocaleString() }}</span>\n          </div>\n\n          <div class="tags">\n            <span\n              v-for="tag in location.tags"\n              :key="tag"\n              class="tag"\n            >\n              {{ tag }}\n            </span>\n          </div>\n\n          <div class="nearby-pois">\n            <p class="nearby-title">Nearby Attractions:</p>\n            <ul class="poi-list">\n              <li v-for="poi in location.nearbyPOIs.slice(0, 3)" :key="poi">\n                {{ poi }}\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref, onMounted, computed } from \'vue\';\n\ninterface POI {\n  type: string;\n  properties: {\n    id: string;\n    type: string;\n    name?: string;\n    rating?: number;\n    visitors_per_day?: number;\n    employees?: number;\n    students?: number;\n    daily_entries?: number;\n    households?: number;\n    tags: string[];\n    estimated_rent?: number;\n    notes?: string;\n  };\n  geometry: {\n    type: string;\n    coordinates: [number, number];\n  };\n}\n\ninterface ScoredLocation {\n  id: string;\n  name: string;\n  address: string;\n  overallScore: number;\n  footTraffic: number;\n  rentCost: number;\n  competition: number;\n  accessibility: number;\n  tags: string[];\n  coordinates: [number, number];\n  estimatedRent: number;\n  nearbyPOIs: string[];\n}\n\nconst locations = ref<ScoredLocation[]>([]);\n\n// Calculate distance between two points using Haversine formula (in km)\nfunction calculateDistance(\n  coord1: [number, number],\n  coord2: [number, number]\n): number {\n  const R = 6371;\n  const lat1 = (coord1[1] * Math.PI) / 180;\n  const lat2 = (coord2[1] * Math.PI) / 180;\n  const deltaLat = ((coord2[1] - coord1[1]) * Math.PI) / 180;\n  const deltaLon = ((coord2[0] - coord1[0]) * Math.PI) / 180;\n\n  const a =\n    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +\n    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);\n\n  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));\n  return R * c;\n}\n\nfunction calculateLocationScores(candidates: POI[], pois: POI[]): ScoredLocation[] {\n  const maxRent = Math.max(...candidates.map((c) => c.properties.estimated_rent || 0));\n  const minRent = Math.min(...candidates.map((c) => c.properties.estimated_rent || 0));\n\n  return candidates.map((candidate) => {\n    const coords = candidate.geometry.coordinates;\n    const searchRadius = 0.5; // 500 meters\n\n    // Find nearby POIs\n    const nearbyPOIs = pois\n      .map((poi) => ({\n        poi,\n        distance: calculateDistance(coords, poi.geometry.coordinates),\n      }))\n      .filter(({ distance }) => distance <= searchRadius)\n      .sort((a, b) => a.distance - b.distance);\n\n    // Calculate foot traffic score (0-10)\n    let footTrafficScore = 0;\n    nearbyPOIs.forEach(({ poi, distance }) => {\n      const proximityFactor = Math.max(0, 1 - distance / searchRadius);\n      \n      if (poi.properties.type === \'office\') {\n        footTrafficScore += (poi.properties.employees || 0) * 0.005 * proximityFactor;\n      } else if (poi.properties.type === \'transit\') {\n        footTrafficScore += (poi.properties.daily_entries || 0) * 0.001 * proximityFactor;\n      } else if (poi.properties.type === \'university\') {\n        footTrafficScore += (poi.properties.students || 0) * 0.003 * proximityFactor;\n      } else if (poi.properties.type === \'mall\') {\n        footTrafficScore += (poi.properties.visitors_per_day || 0) * 0.002 * proximityFactor;\n      } else if (poi.properties.type === \'residential\') {\n        footTrafficScore += (poi.properties.households || 0) * 0.01 * proximityFactor;\n      }\n    });\n    footTrafficScore = Math.min(10, Math.round(footTrafficScore));\n\n    // Calculate rent cost score (0-10, higher is better = lower rent)\n    const rentNormalized = (candidate.properties.estimated_rent! - minRent) / (maxRent - minRent);\n    const rentCostScore = Math.round((1 - rentNormalized) * 10);\n\n    // Calculate competition score (0-10, lower competition is better)\n    const nearbyCafes = nearbyPOIs.filter(({ poi }) => poi.properties.type === \'cafe\').length;\n    const competitionScore = Math.max(0, 10 - nearbyCafes * 3);\n\n    // Calculate accessibility score (0-10)\n    const nearbyTransit = nearbyPOIs.filter(({ poi }) => poi.properties.type === \'transit\');\n    let accessibilityScore = 3;\n    nearbyTransit.forEach(({ distance }) => {\n      if (distance <= 0.15) accessibilityScore += 4;\n      else if (distance <= 0.3) accessibilityScore += 2;\n      else if (distance <= 0.5) accessibilityScore += 1;\n    });\n    accessibilityScore = Math.min(10, accessibilityScore);\n\n    // Calculate overall score (0-100)\n    const overallScore = Math.round(\n      (footTrafficScore * 0.35 +\n        rentCostScore * 0.25 +\n        competitionScore * 0.25 +\n        accessibilityScore * 0.15) * 10\n    );\n\n    // Generate tags\n    const tags: string[] = [];\n    const hasOffices = nearbyPOIs.some(({ poi }) => poi.properties.type === \'office\');\n    const hasTransit = nearbyPOIs.some(({ poi }) => poi.properties.type === \'transit\');\n    const hasUniversity = nearbyPOIs.some(({ poi }) => poi.properties.type === \'university\');\n    const hasMall = nearbyPOIs.some(({ poi }) => poi.properties.type === \'mall\');\n    const hasResidential = nearbyPOIs.some(({ poi }) => poi.properties.type === \'residential\');\n\n    if (hasOffices) tags.push(\'Office Workers\');\n    if (hasTransit) tags.push(\'Transit Hub\');\n    if (hasUniversity) tags.push(\'Students\');\n    if (hasMall) tags.push(\'Retail District\');\n    if (hasResidential) tags.push(\'Residential Area\');\n    if (rentCostScore >= 7) tags.push(\'Affordable\');\n    if (footTrafficScore >= 7) tags.push(\'High Traffic\');\n    if (competitionScore >= 7) tags.push(\'Low Competition\');\n\n    // Get nearby POI names\n    const nearbyPOINames = nearbyPOIs\n      .filter(({ poi }) => poi.properties.name)\n      .slice(0, 5)\n      .map(({ poi }) => poi.properties.name!);\n\n    return {\n      id: candidate.properties.id,\n      name: `Location ${candidate.properties.id.replace(\'cand-\', \'\')}`,\n      address: candidate.properties.notes || \'Prime location for coffee shop\',\n      overallScore,\n      footTraffic: footTrafficScore,\n      rentCost: rentCostScore,\n      competition: competitionScore,\n      accessibility: accessibilityScore,\n      tags,\n      coordinates: coords,\n      estimatedRent: candidate.properties.estimated_rent || 0,\n      nearbyPOIs: nearbyPOINames,\n    };\n  });\n}\n\nconst topLocations = computed(() => {\n  return [...locations.value]\n    .sort((a, b) => b.overallScore - a.overallScore)\n    .slice(0, 8);\n});\n\nconst getRankClass = (index: number) => {\n  if (index === 0) return \'rank-gold\';\n  if (index === 1) return \'rank-silver\';\n  if (index === 2) return \'rank-bronze\';\n  return \'\';\n};\n\nonMounted(async () => {\n  try {\n    // Fetch mock data\n    const response = await fetch(\'http://localhost:4201/assets/mock-data.json\');\n    const data = await response.json();\n    \n    const candidates = data.features.filter(\n      (f: POI) => f.properties.type === \'candidate\'\n    );\n    const pois = data.features.filter(\n      (f: POI) => f.properties.type !== \'candidate\'\n    );\n\n    locations.value = calculateLocationScores(candidates, pois);\n  } catch (error) {\n    console.error(\'Error loading data:\', error);\n  }\n});\n<\/script>\n\n<style scoped>\n.coffee-ranking-container {\n  padding: 1.5rem;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\n.header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.title {\n  font-size: 2.5rem;\n  font-weight: bold;\n  color: white;\n  margin-bottom: 0.5rem;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.subtitle {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 1.1rem;\n}\n\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\n  gap: 1.5rem;\n}\n\n.ranking-card {\n  background: white;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);\n  position: relative;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n}\n\n.ranking-card:hover {\n  transform: translateY(-8px) scale(1.02);\n  box-shadow: 0 20px 35px -5px rgba(0, 0, 0, 0.3);\n}\n\n.rank-gold {\n  border-color: #fbbf24;\n  background: linear-gradient(135deg, #fffbeb 0%, #ffffff 100%);\n}\n\n.rank-silver {\n  border-color: #9ca3af;\n  background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);\n}\n\n.rank-bronze {\n  border-color: #f97316;\n  background: linear-gradient(135deg, #fef3c7 0%, #ffffff 100%);\n}\n\n.rank-badge {\n  position: absolute;\n  top: -12px;\n  right: 20px;\n  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);\n  color: white;\n  padding: 0.5rem 1.25rem;\n  border-radius: 2rem;\n  font-weight: bold;\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);\n  font-size: 1.1rem;\n}\n\n.rank-gold .rank-badge {\n  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);\n  box-shadow: 0 4px 12px rgba(251, 191, 36, 0.5);\n}\n\n.rank-silver .rank-badge {\n  background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);\n  box-shadow: 0 4px 12px rgba(156, 163, 175, 0.5);\n}\n\n.rank-bronze .rank-badge {\n  background: linear-gradient(135deg, #f97316 0%, #d97706 100%);\n  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.5);\n}\n\n.card-content {\n  margin-top: 0.5rem;\n}\n\n.location-name {\n  font-size: 1.4rem;\n  font-weight: bold;\n  color: #1f2937;\n  margin-bottom: 0.25rem;\n}\n\n.location-address {\n  color: #6b7280;\n  font-size: 0.9rem;\n  margin-bottom: 1.25rem;\n  font-style: italic;\n}\n\n.score-section {\n  margin-bottom: 1.5rem;\n}\n\n.overall-score {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.score-label {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.95rem;\n}\n\n.score-value {\n  font-size: 1.75rem;\n  font-weight: bold;\n  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.score-bar {\n  height: 10px;\n  background: #e5e7eb;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.score-fill {\n  height: 100%;\n  background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);\n  border-radius: 5px;\n  transition: width 0.5s ease;\n}\n\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n\n.metric {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem;\n  background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n}\n\n.metric-icon {\n  font-size: 1.75rem;\n}\n\n.metric-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.metric-label {\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.metric-value {\n  font-size: 1rem;\n  font-weight: bold;\n  color: #1f2937;\n}\n\n.rent-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  background: linear-gradient(135deg, #fef3c7 0%, #fef9c3 100%);\n  border-radius: 0.5rem;\n  margin-bottom: 1rem;\n  border: 1px solid #fde047;\n}\n\n.rent-label {\n  font-size: 0.85rem;\n  color: #92400e;\n  font-weight: 600;\n}\n\n.rent-amount {\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #92400e;\n}\n\n.tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.tag {\n  padding: 0.35rem 0.85rem;\n  background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);\n  color: #6366f1;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border: 1px solid #c4b5fd;\n}\n\n.nearby-pois {\n  background: #f3f4f6;\n  padding: 0.75rem;\n  border-radius: 0.5rem;\n  margin-top: 1rem;\n}\n\n.nearby-title {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n\n.poi-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.poi-list li {\n  font-size: 0.8rem;\n  color: #6b7280;\n  padding: 0.25rem 0;\n  padding-left: 1rem;\n  position: relative;\n}\n\n.poi-list li::before {\n  content: \'\uD83D\uDCCD\';\n  position: absolute;\n  left: 0;\n}\n</style>\n'],sourceRoot:""}]);let s=i},806:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t}).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]&&(d[1]="@media ".concat(d[2]," {").concat(d[1],"}")),d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},182:function(e){e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t))));return[n].concat(["/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r)," */")]).join("\n")}return[n].join("\n")}},604:function(e){var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},o=[],i=0;i<e.length;i++){var s=e[i],c=r.base?s[0]+r.base:s[0],l=a[c]||0,d="".concat(c," ").concat(l);a[c]=l+1;var p=t(d),A={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(A);else{var f=function(e,n){var t=n.domAPI(n);return t.update(e),function(n){n?(n.css!==e.css||n.media!==e.media||n.sourceMap!==e.sourceMap||n.supports!==e.supports||n.layer!==e.layer)&&t.update(e=n):t.remove()}}(A,r);r.byIndex=i,n.splice(i,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var c=r(e,a),l=0;l<o.length;l++){var d=t(o[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=c}}},863:function(e){var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},896:function(e){e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},124:function(e,n,t){e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},101:function(e){e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){var r,a,o;r="",t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {")),(a=void 0!==t.layer)&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}"),(o=t.sourceMap)&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)},remove:function(){var e;null===(e=n).parentNode||e.parentNode.removeChild(e)}}}},917:function(e){e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},714:function(e,n){n.default=(e,n)=>{let t=e.__vccOpts||e;for(let[e,r]of n)t[e]=r;return t}},903:function(e,n,t){var r=t(810),a={id:"app"};function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){t(e);return}s.done?n(c):Promise.resolve(c).then(r,a)}function s(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return o(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c={class:"coffee-ranking-container"},l={class:"cards-grid"},d={class:"rank-badge"},p={class:"rank-number"},A={class:"card-content"},f={class:"location-name"},m={class:"location-address"},u={class:"score-section"},g={class:"overall-score"},b={class:"score-value"},E={class:"score-bar"},v={class:"metrics-grid"},B={class:"metric"},C={class:"metric-info"},h={class:"metric-value"},y={class:"metric"},k={class:"metric-info"},x={class:"metric-value"},w={class:"metric"},S={class:"metric-info"},D={class:"metric-value"},M={class:"metric"},N={class:"metric-info"},P={class:"metric-value"},I={class:"rent-info"},V={class:"rent-amount"},z={class:"tags"},R={class:"nearby-pois"},T={class:"poi-list"};let O=(0,r.defineComponent)({__name:"CoffeePlaceRanking",setup:function(e){var n=(0,r.ref)([]),t=(0,r.computed)(function(){return s(n.value).sort(function(e,n){return n.overallScore-e.overallScore}).slice(0,8)});return(0,r.onMounted)(function(){var e;return(e=function(){var e,t,r;return function(e,n){var t,r,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=s(0),i.throw=s(1),i.return=s(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){var l=[s,c];if(t)throw TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(t=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=n.call(e,o)}catch(e){l=[6,e],r=0}finally{t=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}}(this,function(a){switch(a.label){case 0:return a.trys.push([0,3,,4]),[4,fetch("http://localhost:4201/assets/mock-data.json")];case 1:return[4,a.sent().json()];case 2:var o,i,c,l;return t=(e=a.sent()).features.filter(function(e){return"candidate"===e.properties.type}),r=e.features.filter(function(e){return"candidate"!==e.properties.type}),c=(o=Math).max.apply(o,s(t.map(function(e){return e.properties.estimated_rent||0}))),l=(i=Math).min.apply(i,s(t.map(function(e){return e.properties.estimated_rent||0}))),n.value=t.map(function(e){var n=e.geometry.coordinates,t=r.map(function(e){var t,r,a,o,i,s;return{poi:e,distance:(t=e.geometry.coordinates,r=n[1]*Math.PI/180,a=t[1]*Math.PI/180,6371*(2*Math.atan2(Math.sqrt(s=Math.sin((o=(t[1]-n[1])*Math.PI/180)/2)*Math.sin(o/2)+Math.cos(r)*Math.cos(a)*Math.sin((i=(t[0]-n[0])*Math.PI/180)/2)*Math.sin(i/2)),Math.sqrt(1-s))))}}).filter(function(e){return e.distance<=.5}).sort(function(e,n){return e.distance-n.distance}),a=0;t.forEach(function(e){var n=e.poi,t=Math.max(0,1-e.distance/.5);"office"===n.properties.type?a+=.005*(n.properties.employees||0)*t:"transit"===n.properties.type?a+=.001*(n.properties.daily_entries||0)*t:"university"===n.properties.type?a+=.003*(n.properties.students||0)*t:"mall"===n.properties.type?a+=.002*(n.properties.visitors_per_day||0)*t:"residential"===n.properties.type&&(a+=.01*(n.properties.households||0)*t)}),a=Math.min(10,Math.round(a));var o=Math.round((1-(e.properties.estimated_rent-l)/(c-l))*10),i=Math.max(0,10-3*t.filter(function(e){return"cafe"===e.poi.properties.type}).length),s=t.filter(function(e){return"transit"===e.poi.properties.type}),d=3;s.forEach(function(e){var n=e.distance;n<=.15?d+=4:n<=.3?d+=2:n<=.5&&(d+=1)});var p=Math.round((.35*a+.25*o+.25*i+.15*(d=Math.min(10,d)))*10),A=[],f=t.some(function(e){return"office"===e.poi.properties.type}),m=t.some(function(e){return"transit"===e.poi.properties.type}),u=t.some(function(e){return"university"===e.poi.properties.type}),g=t.some(function(e){return"mall"===e.poi.properties.type}),b=t.some(function(e){return"residential"===e.poi.properties.type});f&&A.push("Office Workers"),m&&A.push("Transit Hub"),u&&A.push("Students"),g&&A.push("Retail District"),b&&A.push("Residential Area"),o>=7&&A.push("Affordable"),a>=7&&A.push("High Traffic"),i>=7&&A.push("Low Competition");var E=t.filter(function(e){return e.poi.properties.name}).slice(0,5).map(function(e){return e.poi.properties.name});return{id:e.properties.id,name:"Location ".concat(e.properties.id.replace("cand-","")),address:e.properties.notes||"Prime location for coffee shop",overallScore:p,footTraffic:a,rentCost:o,competition:i,accessibility:d,tags:A,coordinates:n,estimatedRent:e.properties.estimated_rent||0,nearbyPOIs:E}}),[3,4];case 3:return console.error("Error loading data:",a.sent()),[3,4];case 4:return[2]}})},function(){var n=this,t=arguments;return new Promise(function(r,a){var o=e.apply(n,t);function s(e){i(o,r,a,s,c,"next",e)}function c(e){i(o,r,a,s,c,"throw",e)}s(void 0)})})()}),function(e,n){return(0,r.openBlock)(),(0,r.createElementBlock)("div",c,[n[11]||(n[11]=(0,r.createElementVNode)("div",{class:"header"},[(0,r.createElementVNode)("h2",{class:"title"},"\u2615 Best Places to Open a Coffee Shop"),(0,r.createElementVNode)("p",{class:"subtitle"},"AI-powered rankings based on real location data")],-1)),(0,r.createElementVNode)("div",l,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(t.value,function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{key:e.id,class:(0,r.normalizeClass)(["ranking-card",0===t?"rank-gold":1===t?"rank-silver":2===t?"rank-bronze":""])},[(0,r.createElementVNode)("div",d,[(0,r.createElementVNode)("span",p,"#"+(0,r.toDisplayString)(t+1),1)]),(0,r.createElementVNode)("div",A,[(0,r.createElementVNode)("h3",f,(0,r.toDisplayString)(e.name),1),(0,r.createElementVNode)("p",m,(0,r.toDisplayString)(e.address),1),(0,r.createElementVNode)("div",u,[(0,r.createElementVNode)("div",g,[n[0]||(n[0]=(0,r.createElementVNode)("span",{class:"score-label"},"Overall Score",-1)),(0,r.createElementVNode)("span",b,(0,r.toDisplayString)(e.overallScore)+"/100",1)]),(0,r.createElementVNode)("div",E,[(0,r.createElementVNode)("div",{class:"score-fill",style:(0,r.normalizeStyle)({width:e.overallScore+"%"})},null,4)])]),(0,r.createElementVNode)("div",v,[(0,r.createElementVNode)("div",B,[n[2]||(n[2]=(0,r.createElementVNode)("span",{class:"metric-icon"},"\uD83D\uDC65",-1)),(0,r.createElementVNode)("div",C,[n[1]||(n[1]=(0,r.createElementVNode)("span",{class:"metric-label"},"Foot Traffic",-1)),(0,r.createElementVNode)("span",h,(0,r.toDisplayString)(e.footTraffic)+"/10",1)])]),(0,r.createElementVNode)("div",y,[n[4]||(n[4]=(0,r.createElementVNode)("span",{class:"metric-icon"},"\uD83D\uDCB0",-1)),(0,r.createElementVNode)("div",k,[n[3]||(n[3]=(0,r.createElementVNode)("span",{class:"metric-label"},"Rent Value",-1)),(0,r.createElementVNode)("span",x,(0,r.toDisplayString)(e.rentCost)+"/10",1)])]),(0,r.createElementVNode)("div",w,[n[6]||(n[6]=(0,r.createElementVNode)("span",{class:"metric-icon"},"\uD83C\uDFEA",-1)),(0,r.createElementVNode)("div",S,[n[5]||(n[5]=(0,r.createElementVNode)("span",{class:"metric-label"},"Low Competition",-1)),(0,r.createElementVNode)("span",D,(0,r.toDisplayString)(e.competition)+"/10",1)])]),(0,r.createElementVNode)("div",M,[n[8]||(n[8]=(0,r.createElementVNode)("span",{class:"metric-icon"},"\uD83D\uDE87",-1)),(0,r.createElementVNode)("div",N,[n[7]||(n[7]=(0,r.createElementVNode)("span",{class:"metric-label"},"Accessibility",-1)),(0,r.createElementVNode)("span",P,(0,r.toDisplayString)(e.accessibility)+"/10",1)])])]),(0,r.createElementVNode)("div",I,[n[9]||(n[9]=(0,r.createElementVNode)("span",{class:"rent-label"},"Estimated Monthly Rent:",-1)),(0,r.createElementVNode)("span",V,"\u20B9"+(0,r.toDisplayString)(e.estimatedRent.toLocaleString()),1)]),(0,r.createElementVNode)("div",z,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.tags,function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("span",{key:e,class:"tag"},(0,r.toDisplayString)(e),1)}),128))]),(0,r.createElementVNode)("div",R,[n[10]||(n[10]=(0,r.createElementVNode)("p",{class:"nearby-title"},"Nearby Attractions:",-1)),(0,r.createElementVNode)("ul",T,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.nearbyPOIs.slice(0,3),function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("li",{key:e},(0,r.toDisplayString)(e),1)}),128))])])])],2)}),128))])])}}});var j=t(604),q=t.n(j),L=t(101),_=t.n(L),F=t(863),Y=t.n(F),U=t(124),H=t.n(U),W=t(896),Z=t.n(W),G=t(917),X=t.n(G),J=t(426),Q={};Q.styleTagTransform=X(),Q.setAttributes=H(),Q.insert=Y().bind(null,"head"),Q.domAPI=_(),Q.insertStyleElement=Z(),q()(J.A,Q),J.A&&J.A.locals&&J.A.locals;var $=t(714);let K=(0,$.default)(O,[["__scopeId","data-v-0331c3dc"]]),ee=(0,r.defineComponent)({name:"App",components:{CoffeePlaceRanking:K}});var en=t(580),et={};et.styleTagTransform=X(),et.setAttributes=H(),et.insert=Y().bind(null,"head"),et.domAPI=_(),et.insertStyleElement=Z(),q()(en.A,et),en.A&&en.A.locals&&en.A.locals;let er=(0,$.default)(ee,[["render",function(e,n,t,o,i,s){var c=(0,r.resolveComponent)("CoffeePlaceRanking");return(0,r.openBlock)(),(0,r.createElementBlock)("div",a,[(0,r.createVNode)(c)])}]]);var ea=t(118),eo={};eo.styleTagTransform=X(),eo.setAttributes=H(),eo.insert=Y().bind(null,"head"),eo.domAPI=_(),eo.insertStyleElement=Z(),q()(ea.A,eo),ea.A&&ea.A.locals&&ea.A.locals,(0,r.createApp)(er).mount("#app")}}]);
//# sourceMappingURL=68.49b512d1c27a1f62.js.map