interface MapOverviewProps {
  poiStats: Record<string, number>;
  poiCount: number;
  candidateCount: number;
  showPOIs: boolean;
  showCandidates: boolean;
  favoritesCount: number;
  onTogglePOIs: () => void;
  onToggleCandidates: () => void;
  onToggleFavoritesPanel: () => void;
}

export const MapOverview: React.FC<MapOverviewProps> = ({
  poiStats,
  poiCount,
  candidateCount,
  showPOIs,
  showCandidates,
  favoritesCount,
  onTogglePOIs,
  onToggleCandidates,
  onToggleFavoritesPanel
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800">Map Overview</h3>
        <div className="flex items-center space-x-4">
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              checked={showPOIs}
              onChange={onTogglePOIs}
              className="mr-2"
            />
            Show POIs ({poiCount})
          </label>
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              checked={showCandidates}
              onChange={onToggleCandidates}
              className="mr-2"
            />
            Show Candidates ({candidateCount})
          </label>
          <button
            onClick={onToggleFavoritesPanel}
            className="flex items-center space-x-2 px-3 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition-colors"
            title="View Favorite Candidates"
          >
            <span 
              className="text-lg"
              role="img"
              aria-label="Favorites"
            >
              ❤️
            </span>
            <span className="text-sm font-medium">Favorites ({favoritesCount})</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {Object.entries(poiStats).map(([type, count]) => (
          <span 
            key={type} 
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
          >
            <span className="capitalize">{type}</span>
            <span className="ml-1 bg-blue-200 text-blue-800 rounded-full px-2 py-0.5 text-xs">
              {count}
            </span>
          </span>
        ))}
        {candidateCount > 0 && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <span>Candidates</span>
            <span className="ml-1 bg-green-200 text-green-800 rounded-full px-2 py-0.5 text-xs">
              {candidateCount}
            </span>
          </span>
        )}
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Click on markers for detailed information | Use checkboxes to toggle layers
      </p>
    </div>
  );
};
