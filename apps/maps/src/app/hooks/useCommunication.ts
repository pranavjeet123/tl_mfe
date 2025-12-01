import { useState, useEffect } from 'react';
import { Feature } from '../../types';
import { getCommunicationService } from '../../services/communication';

interface UseCommunicationReturn {
  favorites: Feature[];
  sendMessage: (type: string, data: unknown) => void;
}

/**
 * Custom hook to manage communication service for favorites
 * @returns Object with favorites state and sendMessage function
 */
export const useCommunication = (): UseCommunicationReturn => {
  const [favorites, setFavorites] = useState<Feature[]>([]);

  useEffect(() => {
    const communication = getCommunicationService();
    const favoritesSubscription = communication.favoriteCandidates$.subscribe(setFavorites);

    return () => {
      favoritesSubscription.unsubscribe();
    };
  }, []);

  const sendMessage = (type: string, data: unknown) => {
    const communication = getCommunicationService();
    communication.sendMessage(type, data, 'maps');
  };

  return {
    favorites,
    sendMessage
  };
};
