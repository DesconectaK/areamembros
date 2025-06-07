
"use client";

import React, { useEffect } from 'react';

export function ClientLayoutEffects() {
  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextmenu);

    const handleKeydown = (e: KeyboardEvent) => {
      // Disable common dev tools shortcuts
      if (
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) || // Ctrl+Shift+I, J, C
        (e.ctrlKey && (e.key === 'U' || e.key === 'u')) || // Ctrl+U
        (e.key === 'F12') // F12
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('contextmenu', handleContextmenu);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return null; // This component does not render anything visible
}
