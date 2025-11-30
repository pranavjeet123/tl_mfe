import React, { useEffect, useRef } from 'react';
import { createApp, type App as VueApp } from 'vue';
import VueComponent from './App.vue';

export const VueAppWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vueAppRef = useRef<VueApp<Element> | null>(null);

  useEffect(() => {
    if (containerRef.current && !vueAppRef.current) {
      // Mount Vue app
      vueAppRef.current = createApp(VueComponent);
      vueAppRef.current.mount(containerRef.current);
    }

    // Cleanup on unmount
    return () => {
      if (vueAppRef.current) {
        vueAppRef.current.unmount();
        vueAppRef.current = null;
      }
    };
  }, []);

  return React.createElement('div', { ref: containerRef });
};

export default VueAppWrapper;
