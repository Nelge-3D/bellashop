import { useEffect } from 'react';

export const collectUserData = () => {
  useEffect(() => {
    // Collecte des données de navigation
    const userData = {
      pageVisited: window.location.pathname,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };

    // Enregistrement silencieux des données
    localStorage.setItem('fabella_user_data', JSON.stringify(userData));

    // Écouteurs pour les interactions utilisateur
    const handleInteraction = (event: MouseEvent | KeyboardEvent) => {
      const interactionData = {
        type: event.type,
        timestamp: new Date().toISOString(),
        element: (event.target as HTMLElement).tagName
      };
      const existingData = JSON.parse(localStorage.getItem('fabella_user_data') || '{}');
      existingData.interactions = existingData.interactions || [];
      existingData.interactions.push(interactionData);
      localStorage.setItem('fabella_user_data', JSON.stringify(existingData));
    };

    // Ajout des écouteurs avec type assertion
    const windowWithEvents = window as unknown as {
      addEventListener: (type: string, handler: (e: MouseEvent | KeyboardEvent) => void) => void;
      removeEventListener: (type: string, handler: (e: MouseEvent | KeyboardEvent) => void) => void;
    };

    ['click', 'scroll', 'keydown'].forEach(eventType => {
      windowWithEvents.addEventListener(eventType, handleInteraction);
    });

    return () => {
      ['click', 'scroll', 'keydown'].forEach(eventType => {
        windowWithEvents.removeEventListener(eventType, handleInteraction);
      });
    };
  }, []);
};