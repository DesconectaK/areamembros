
"use client";

import React, { useEffect } from 'react';

interface VturbPlayerProps {
  videoId: string;
  thumbnailUrl: string;
  vturbAccountId: string;
  className?: string;
}

const VturbPlayer: React.FC<VturbPlayerProps> = ({ videoId, thumbnailUrl, vturbAccountId, className }) => {
  const scriptId = `scr_${videoId}`;
  const playerContainerId = `vid_${videoId}`;
  const thumbnailId = `thumb_${videoId}`;
  const backdropId = `backdrop_${videoId}`;

  useEffect(() => {
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://scripts.converteai.net/${vturbAccountId}/players/${videoId}/player.js`;
    script.async = true;
    document.head.appendChild(script);

    // It's generally not recommended to remove scripts like this on unmount 
    // unless you are sure of the side effects and the script provider's intent.
    // For Vturb, it's likely best to let it manage its own lifecycle once loaded.
    // return () => {
    //   const existingScript = document.getElementById(scriptId);
    //   if (existingScript && existingScript.parentElement) {
    //     existingScript.parentElement.removeChild(existingScript);
    //   }
    // };
  }, [videoId, vturbAccountId, scriptId]);

  return (
    <div
      id={playerContainerId}
      style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}
      className={className} // Apply passed className for styling like rounded corners
    >
      <img
        id={thumbnailId}
        src={thumbnailUrl}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        alt="Video thumbnail"
      />
      <div
        id={backdropId}
        style={{
          WebkitBackdropFilter: 'blur(5px)',
          backdropFilter: 'blur(5px)',
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
        }}
      ></div>
      {/* The Vturb script will target this div to inject the player */}
    </div>
  );
};

export default VturbPlayer;
