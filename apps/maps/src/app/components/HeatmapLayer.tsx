import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { GeoFeature, POI } from '../services/mockDataService';

interface HeatmapLayerProps {
  features: GeoFeature[];
  intensity?: number;
  radius?: number;
  blur?: number;
}

// Extend Leaflet types for heatLayer
declare module 'leaflet' {
  function heatLayer(
    latlngs: Array<[number, number, number]>,
    options?: {
      minOpacity?: number;
      maxZoom?: number;
      max?: number;
      radius?: number;
      blur?: number;
      gradient?: { [key: number]: string };
    }
  ): L.Layer;
}

export function HeatmapLayer({ 
  features, 
  intensity = 0.5,
  radius = 25,
  blur = 15 
}: HeatmapLayerProps) {
  const map = useMap();
  const [pluginLoaded, setPluginLoaded] = useState(false);

  // Load the plugin dynamically
  useEffect(() => {
    let mounted = true;

    const loadPlugin = async () => {
      try {
        // Dynamically import the plugin
        await import('leaflet.heat');
        
        if (mounted) {
          setPluginLoaded(true);
        }
      } catch (error) {
        console.error('Failed to load leaflet.heat:', error);
      }
    };

    loadPlugin();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!map || !features.length || !pluginLoaded) return;

    // Check if heatLayer is available
    if (typeof L.heatLayer !== 'function') {
      console.error('leaflet.heat is not loaded properly');
      return;
    }

    // Convert features to heatmap data points [lat, lng, intensity]
    const heatmapData: Array<[number, number, number]> = features.map((feature) => {
      const { coordinates } = feature.geometry;
      const properties = feature.properties as POI;
      
      // Calculate intensity based on property metrics
      let intensityValue = 0.5; // default intensity
      
      if (properties.visitors_per_day) {
        intensityValue = Math.min(1, properties.visitors_per_day / 10000);
      } else if (properties.employees) {
        intensityValue = Math.min(1, properties.employees / 2000);
      } else if (properties.students) {
        intensityValue = Math.min(1, properties.students / 20000);
      } else if (properties.daily_entries) {
        intensityValue = Math.min(1, properties.daily_entries / 15000);
      } else if (properties.households) {
        intensityValue = Math.min(1, properties.households / 500);
      }

      // Boost intensity by the intensity prop
      intensityValue *= (intensity * 2);

      return [coordinates[1], coordinates[0], intensityValue];
    });

    // Create heatmap layer
    const heatmapLayer = L.heatLayer(heatmapData, {
      radius: radius,
      blur: blur,
      maxZoom: 17,
      max: 1.0,
      minOpacity: 0.3,
      gradient: {
        0.0: '#3B82F6',  // Blue
        0.2: '#10B981',  // Green
        0.4: '#F59E0B',  // Yellow
        0.6: '#F97316',  // Orange
        0.8: '#EF4444',  // Red
        1.0: '#991B1B',  // Dark Red
      },
    });

    // Add heatmap to map
    map.addLayer(heatmapLayer);

    // Cleanup
    return () => {
      map.removeLayer(heatmapLayer);
    };
  }, [map, features, intensity, radius, blur, pluginLoaded]);

  return null;
}
