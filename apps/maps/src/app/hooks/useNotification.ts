import { useState, useEffect, useCallback } from 'react';

interface UseNotificationReturn {
  notification: string | null;
  showNotification: (message: string, duration?: number) => void;
  hideNotification: () => void;
}

/**
 * Custom hook to manage notification messages
 * @returns Object with notification state and control functions
 */
export const useNotification = (): UseNotificationReturn => {
  const [notification, setNotification] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const hideNotification = useCallback(() => {
    setNotification(null);
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  }, [timeoutId]);

  const showNotification = useCallback((message: string, duration = 3000) => {
    // Clear existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setNotification(message);
    const id = setTimeout(() => {
      setNotification(null);
      setTimeoutId(null);
    }, duration);
    setTimeoutId(id);
  }, [timeoutId]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return {
    notification,
    showNotification,
    hideNotification
  };
};
