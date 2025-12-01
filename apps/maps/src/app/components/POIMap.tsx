import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useMockData, useFavorites, useToggle } from '../hooks';
import { getPOIFeatures, getCandidateFeatures, calculatePOIStats, filterFavoriteFeatures } from '../utils';
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM, MAP_TILE_CONFIG } from '../constants';
import { POIMarker } from './POIMarker';
import { CandidateMarker } from './CandidateMarker';
import { MapOverview } from './MapOverview';
import { MapLegend } from './MapLegend';
import { FavoritesPanel } from './FavoritesPanel';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';

// Fix for default markers in React Leaflet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export function POIMap() {
  const { mockData, isLoading, error } = useMockData();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const showCandidates = useToggle(true);
  const showPOIs = useToggle(true);
  const showFavoritesPanel = useToggle(false);

  const poiFeatures = getPOIFeatures(mockData);
  const candidateFeatures = getCandidateFeatures(mockData);
  const poiStats = calculatePOIStats(poiFeatures);
  const favoriteCandidates = filterFavoriteFeatures(candidateFeatures, favorites);

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  return (
    <div className="space-y-4">
      {/* POI Statistics */}
      <MapOverview
        poiStats={poiStats}
        poiCount={poiFeatures.length}
        candidateCount={candidateFeatures.length}
        showPOIs={showPOIs.value}
        showCandidates={showCandidates.value}
        favoritesCount={favorites.size}
        onTogglePOIs={showPOIs.toggle}
        onToggleCandidates={showCandidates.toggle}
        onToggleFavoritesPanel={showFavoritesPanel.toggle}
      />

      {/* Interactive Map */}
      <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg border">
        <MapContainer 
          center={DEFAULT_MAP_CENTER} 
          zoom={DEFAULT_MAP_ZOOM} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url={MAP_TILE_CONFIG.url}
            attribution={MAP_TILE_CONFIG.attribution}
          />
          
          {/* Render POI markers */}
          {showPOIs.value && poiFeatures.map((feature) => (
            <POIMarker 
              key={feature.properties.id} 
              feature={feature} 
            />
          ))}
          
          {/* Render candidate markers */}
          {showCandidates.value && candidateFeatures.map((feature) => (
            <CandidateMarker 
              key={feature.properties.id} 
              feature={feature}
              isFavorite={isFavorite(feature.properties.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </MapContainer>
      </div>

      {/* Legend */}
      <MapLegend />

      {/* Favorites Panel */}
      {showFavoritesPanel.value && (
        <FavoritesPanel
          favoriteCandidates={favoriteCandidates}
          favoritesCount={favorites.size}
          onClose={showFavoritesPanel.setFalse}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}
