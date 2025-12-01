interface ErrorStateProps {
  error: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  return (
    <div className="h-96 w-full rounded-lg bg-red-50 flex items-center justify-center">
      <div className="text-center text-red-600">
        <p className="font-medium">Error loading map data</p>
        <p className="text-sm">{error}</p>
      </div>
    </div>
  );
};
