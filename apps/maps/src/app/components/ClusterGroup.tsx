import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { GeoFeature, POI } from '../services/mockDataService';
import { getPOIIcon } from '../services/mockDataService';

interface ClusterGroupProps {
  features: GeoFeature[];
}

export function ClusterGroup({ features }: ClusterGroupProps) {
  const map = useMap();
  const [pluginLoaded, setPluginLoaded] = useState(false);

  // Load the plugin dynamically
  useEffect(() => {
    let mounted = true;

    const loadPlugin = async () => {
      try {
        // Dynamically import the plugin
        await import('leaflet.markercluster');
        
        // Load CSS via link tags
        const link1 = document.createElement('link');
        link1.rel = 'stylesheet';
        link1.href = 'https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css';
        document.head.appendChild(link1);

        const link2 = document.createElement('link');
        link2.rel = 'stylesheet';
        link2.href = 'https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css';
        document.head.appendChild(link2);
        
        if (mounted) {
          setPluginLoaded(true);
        }
      } catch (error) {
        console.error('Failed to load leaflet.markercluster:', error);
      }
    };

    loadPlugin();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!map || !features.length || !pluginLoaded) return;

    // Check if markerClusterGroup is available
    if (typeof L.markerClusterGroup !== 'function') {
      console.error('leaflet.markercluster is not loaded properly');
      return;
    }

    // Create marker cluster group
    const markerClusterGroup = L.markerClusterGroup({
      chunkedLoading: true,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
      maxClusterRadius: 80,
      iconCreateFunction: (cluster) => {
        const childCount = cluster.getChildCount();
        let sizeClass = 'small';
        if (childCount > 10) {
          sizeClass = 'medium';
        }
        if (childCount > 20) {
          sizeClass = 'large';
        }

        return L.divIcon({
          html: `<div style="
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: 3px solid white;
            border-radius: 50%;
            width: ${sizeClass === 'large' ? '50px' : sizeClass === 'medium' ? '40px' : '30px'};
            height: ${sizeClass === 'large' ? '50px' : sizeClass === 'medium' ? '40px' : '30px'};
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: ${sizeClass === 'large' ? '16px' : sizeClass === 'medium' ? '14px' : '12px'};
            font-weight: bold;
            color: white;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
          ">${childCount}</div>`,
          className: 'custom-cluster-icon',
          iconSize: L.point(
            sizeClass === 'large' ? 50 : sizeClass === 'medium' ? 40 : 30,
            sizeClass === 'large' ? 50 : sizeClass === 'medium' ? 40 : 30
          ),
        });
      },
    });

    // Add markers to cluster group
    features.forEach((feature) => {
      const { coordinates } = feature.geometry;
      const properties = feature.properties as POI;
      const position: L.LatLngExpression = [coordinates[1], coordinates[0]];

      // Create custom icon
      const emoji = getPOIIcon(properties.type);
      const html = `
        <div style="
          background: white; 
          border: 2px solid #3B82F6; 
          border-radius: 50%; 
          width: 30px; 
          height: 30px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 16px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        ">
          ${emoji}
        </div>
      `;

      const icon = L.divIcon({
        html,
        className: 'custom-poi-marker',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15],
      });

      const marker = L.marker(position, { icon });

      // Create popup content
      const getTypeColor = (type: string): string => {
        const colors: { [key: string]: string } = {
          cafe: '#8B5CF6',
          office: '#3B82F6',
          transit: '#10B981',
          university: '#F59E0B',
          mall: '#EF4444',
          residential: '#6B7280'
        };
        return colors[type] || '#6B7280';
      };

      const popupContent = `
        <div class="p-2">
          <div class="flex items-center mb-2">
            <span 
              class="inline-block w-3 h-3 rounded-full mr-2"
              style="background-color: ${getTypeColor(properties.type)}"
            ></span>
            <h3 class="text-lg font-semibold text-gray-800 capitalize">
              ${properties.name}
            </h3>
          </div>
          
          <div class="mb-2">
            <span 
              class="inline-block px-2 py-1 text-xs font-medium rounded text-white capitalize"
              style="background-color: ${getTypeColor(properties.type)}"
            >
              ${properties.type}
            </span>
          </div>

          <div class="space-y-1">
            ${properties.rating ? `<div class="text-sm"><span class="font-medium">Rating:</span> ${properties.rating} ⭐</div>` : ''}
            ${properties.visitors_per_day ? `<div class="text-sm"><span class="font-medium">Daily Visitors:</span> ${properties.visitors_per_day.toLocaleString()}</div>` : ''}
            ${properties.employees ? `<div class="text-sm"><span class="font-medium">Employees:</span> ${properties.employees.toLocaleString()}</div>` : ''}
            ${properties.students ? `<div class="text-sm"><span class="font-medium">Students:</span> ${properties.students.toLocaleString()}</div>` : ''}
            ${properties.households ? `<div class="text-sm"><span class="font-medium">Households:</span> ${properties.households.toLocaleString()}</div>` : ''}
            ${properties.daily_entries ? `<div class="text-sm"><span class="font-medium">Daily Entries:</span> ${properties.daily_entries.toLocaleString()}</div>` : ''}
            ${properties.mode ? `<div class="text-sm"><span class="font-medium">Mode:</span> ${properties.mode}</div>` : ''}
          </div>

          <div class="mt-2 pt-2 border-t border-gray-200">
            <div class="text-xs text-gray-500">
              Lat: ${coordinates[1].toFixed(4)}, Lng: ${coordinates[0].toFixed(4)}
            </div>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent, { maxWidth: 300 });
      markerClusterGroup.addLayer(marker);
    });

    // Add cluster group to map
    map.addLayer(markerClusterGroup);

    // Cleanup
    return () => {
      map.removeLayer(markerClusterGroup);
    };
  }, [map, features, pluginLoaded]);

  return null;
}
