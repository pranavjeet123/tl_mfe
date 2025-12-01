import { useState } from 'react';

interface UseFavoritesReturn {
  favorites: Set<string>;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  getFavoritesList: () => string[];
}

/**
 * Custom hook to manage favorite items
 * @returns Object with favorites state and management functions
 */
export const useFavorites = (): UseFavoritesReturn => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const isFavorite = (id: string): boolean => {
    return favorites.has(id);
  };

  const getFavoritesList = (): string[] => {
    return Array.from(favorites);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    getFavoritesList
  };
};
