interface ViewControlsProps {
  viewMode: 'default' | 'cluster' | 'heatmap';
  onViewModeChange: (mode: 'default' | 'cluster' | 'heatmap') => void;
  showCandidates: boolean;
  onToggleCandidates: () => void;
}

export function ViewControls({
  viewMode,
  onViewModeChange,
  showCandidates,
  onToggleCandidates,
}: ViewControlsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        <span role="img" aria-label="Chart">📊</span> Map Visualization Controls
      </h3>
      
      <div className="space-y-4">
        {/* View Mode Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            POI Display Mode
          </label>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => onViewModeChange('default')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'default'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span role="img" aria-label="Pin">📍</span> Default Markers
            </button>
            <button
              onClick={() => onViewModeChange('cluster')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'cluster'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span role="img" aria-label="Circle">🔵</span> Cluster View
            </button>
            <button
              onClick={() => onViewModeChange('heatmap')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'heatmap'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span role="img" aria-label="Fire">🔥</span> Heatmap View
            </button>
          </div>
        </div>

        {/* View Mode Description */}
        <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
          {viewMode === 'default' && (
            <p>
              <strong>Default Mode:</strong> Individual markers for each POI location with detailed popups.
            </p>
          )}
          {viewMode === 'cluster' && (
            <p>
              <strong>Cluster Mode:</strong> POIs are grouped together when zoomed out. Click clusters to zoom in and explore.
            </p>
          )}
          {viewMode === 'heatmap' && (
            <p>
              <strong>Heatmap Mode:</strong> Visualizes POI density and activity intensity across the area.
            </p>
          )}
        </div>

        {/* Candidate Toggle */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
          <label className="text-sm font-medium text-gray-700">
            Show Candidate Locations
          </label>
          <button
            onClick={onToggleCandidates}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              showCandidates ? 'bg-green-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                showCandidates ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
