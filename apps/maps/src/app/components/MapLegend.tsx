import { POI_ICONS, POI_LABELS } from '../constants';

interface MapLegendProps {
  viewMode?: 'default' | 'cluster' | 'heatmap';
}

export const MapLegend: React.FC<MapLegendProps> = ({ viewMode = 'default' }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <h4 className="text-sm font-semibold text-gray-800 mb-3">Map Legend</h4>
      
      {/* POI Legend */}
      <div className="mb-4">
        <h5 className="text-xs font-medium text-gray-700 mb-2">
          Points of Interest (POIs) - {viewMode === 'default' ? 'Individual Markers' : viewMode === 'cluster' ? 'Clustered View' : 'Heatmap Density'}
        </h5>
        {viewMode === 'heatmap' ? (
          <div className="space-y-2">
            <div className="text-xs text-gray-600 mb-2">
              Heatmap intensity based on visitor/employee density
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-4 rounded" style={{ 
                background: 'linear-gradient(to right, #3B82F6, #10B981, #F59E0B, #F97316, #EF4444, #991B1B)' 
              }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>
        ) : viewMode === 'cluster' ? (
          <div className="text-xs text-gray-600">
            POIs are grouped into clusters. Numbers indicate count. Click to zoom and explore.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {Object.entries(POI_ICONS).map(([type, icon]) => (
              <div key={type} className="flex items-center">
                <span className="mr-2" role="img" aria-label={type}>{icon}</span>
                <span>{POI_LABELS[type]}</span>
              </div>
            ))}
          </div>
        )}
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
