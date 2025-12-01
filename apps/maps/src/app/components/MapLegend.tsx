import { POI_ICONS, POI_LABELS } from '../constants';

export const MapLegend: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <h4 className="text-sm font-semibold text-gray-800 mb-3">Map Legend</h4>
      
      {/* POI Legend */}
      <div className="mb-4">
        <h5 className="text-xs font-medium text-gray-700 mb-2">Points of Interest (POIs)</h5>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          {Object.entries(POI_ICONS).map(([type, icon]) => (
            <div key={type} className="flex items-center">
              <span className="mr-2" role="img" aria-label={type}>{icon}</span>
              <span>{POI_LABELS[type]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Candidate Legend */}
      <div>
        <h5 className="text-xs font-medium text-gray-700 mb-2">Candidate Locations (Rent Categories)</h5>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
            <span>Low (₹50K-)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
            <span>Medium (₹50K-65K)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
            <span>Medium-High (₹65K-80K)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
            <span>High (₹80K+)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
