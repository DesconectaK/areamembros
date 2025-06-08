
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
      // Script already loaded or loading, prevent re-injection
      // Potentially, if the videoId changes, we might want to remove the old script
      // and player instance, but Vturb might handle this internally or this component
      // might be unmounted and remounted by React. For now, just prevent duplicates.
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://scripts.converteai.net/${vturbAccountId}/players/${videoId}/player.js`;
    script.async = true;
    document.head.appendChild(script);

    // Clean up script if component unmounts, though Vturb might not need this.
    // This is generally good practice for scripts injected this way.
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript && existingScript.parentElement) {
        // Check if player instance has a cleanup method, if documented by Vturb
        // For now, just removing the script tag.
        // existingScript.parentElement.removeChild(existingScript);
        // Note: Removing the script tag itself might not unload the player if it's already initialized.
        // Proper cleanup would involve Vturb's API if available.
      }
      // Also consider cleaning up the player div if Vturb doesn't do it.
      // const playerDiv = document.getElementById(playerContainerId);
      // if (playerDiv) playerDiv.innerHTML = ''; // Or more specific cleanup
    };
  }, [videoId, vturbAccountId, scriptId, playerContainerId]);

  return (
    <div
      id={playerContainerId}
      // The className prop will now control the aspect ratio e.g., aspect-video, aspect-[4/3]
      // Removed hardcoded padding for aspect ratio from here.
      style={{ position: 'relative', width: '100%' }} 
      className={className}
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
