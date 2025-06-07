
"use client";

import React, { useEffect } from 'react';

export function ClientLayoutEffects() {
  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextmenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextmenu);
    };
  }, []);

  return null; // This component does not render anything visible
}
