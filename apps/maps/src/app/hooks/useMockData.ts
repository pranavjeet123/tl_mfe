import { useState, useEffect } from 'react';
import { MockDataResponse, fetchMockData } from '../services/mockDataService';

interface UseMockDataReturn {
  mockData: MockDataResponse | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Custom hook to fetch and manage mock data
 * @returns Object containing mockData, isLoading state, and error
 */
export const useMockData = (): UseMockDataReturn => {
  const [mockData, setMockData] = useState<MockDataResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMockData();
        setMockData(data);
        setError(null);
      } catch (err) {
        setError('Failed to load POI data');
        console.error('Error loading mock data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return { mockData, isLoading, error };
};
