import { MapsWelcome } from './maps-welcome';
import LocationList from './components/LocationList';
import VueAppWrapper from './components/VueAppWrapper';
import '../styles.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column - Map and Location Data */}
          <div className="flex flex-col gap-6">
            <MapsWelcome />
          </div>
          
          {/* Right column - Location Candidates */}
          <div className="flex flex-col gap-6">
            <LocationList />
          </div>
        </div>
        
        {/* Full width section - Vue App Rankings */}
        <div className="mt-6">
          <VueAppWrapper />
        </div>
      </div>
    </div>
  );
}
