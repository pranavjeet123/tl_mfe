export const LoadingState: React.FC = () => {
  return (
    <div className="h-96 w-full rounded-lg bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
        <p className="text-gray-600">Loading POI data...</p>
      </div>
    </div>
  );
};
