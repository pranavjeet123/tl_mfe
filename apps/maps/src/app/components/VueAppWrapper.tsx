import { useEffect, useRef } from 'react';

export default function VueAppWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const vueAppRef = useRef<any>(null);

  useEffect(() => {
    const loadVueApp = async () => {
      try {
        // Dynamically import the Vue app from the remote
        const { default: VueApp } = await import('vue-app/Module');
        const { createApp } = await import('vue');
        
        if (containerRef.current && !vueAppRef.current) {
          vueAppRef.current = createApp(VueApp);
          vueAppRef.current.mount(containerRef.current);
        }
      } catch (error) {
        console.error('Failed to load Vue microfrontend:', error);
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p class="font-bold">Error loading Vue Microfrontend</p>
            </div>
          `;
        }
      }
    };

    loadVueApp();

    return () => {
      if (vueAppRef.current) {
        vueAppRef.current.unmount();
        vueAppRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
}
