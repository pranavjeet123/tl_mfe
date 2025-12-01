import { GeoFeature, Candidate } from '../services/mockDataService';
import { getRentColor, formatCurrency, formatCoordinate } from '../utils';

interface FavoritesPanelProps {
  favoriteCandidates: GeoFeature[];
  favoritesCount: number;
  onClose: () => void;
  onToggleFavorite: (id: string) => void;
}

export const FavoritesPanel: React.FC<FavoritesPanelProps> = ({
  favoriteCandidates,
  favoritesCount,
  onClose,
  onToggleFavorite
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-lg font-semibold text-gray-800">
          Favorite Candidates ({favoritesCount})
        </h4>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          title="Close favorites panel"
        >
          ✕
        </button>
      </div>
      
      {favoritesCount === 0 ? (
        <div className="text-center py-8">
          <span 
            className="text-4xl mb-2 block"
            role="img"
            aria-label="No favorites"
          >
            💔
          </span>
          <p className="text-gray-500">No favorite candidates selected yet.</p>
          <p className="text-sm text-gray-400 mt-1">
            Click the heart icon on candidate markers to add them to favorites.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {favoriteCandidates.map((candidate) => {
            const props = candidate.properties as Candidate;
            
            return (
              <div key={props.id} className="border rounded-lg p-3 bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span 
                      className="inline-block w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: getRentColor(props.estimated_rent) }}
                    ></span>
                    <span className="font-medium text-gray-800">{props.id}</span>
                  </div>
                  <button
                    onClick={() => onToggleFavorite(props.id)}
                    className="text-red-500 hover:text-red-600"
                    title="Remove from favorites"
                  >
                    <span 
                      role="img"
                      aria-label="Remove from favorites"
                    >
                      ❤️
                    </span>
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">
                    {formatCurrency(props.estimated_rent)}/month
                  </div>
                  <div className="mt-1 italic">{props.notes}</div>
                  <div className="mt-1 text-xs">
                    Lat: {formatCoordinate(candidate.geometry.coordinates[1])}, 
                    Lng: {formatCoordinate(candidate.geometry.coordinates[0])}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
