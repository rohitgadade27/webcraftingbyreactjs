import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export const HlsVideo = ({ src, className = "", style = {}, objectFit = "object-cover" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native support (Safari/iOS)
      video.src = src;
      // In Safari, native HLS can be played automatically with autoPlay attribute, 
      // but explicitly calling play() handles edge cases.
      video.addEventListener('loadedmetadata', () => {
        video.muted = true;
        video.play().catch(e => console.error("Native play error:", e));
      });
    } else if (Hls.isSupported()) {
      // HLS.js support with aggressive quality settings
      const hls = new Hls({
        capLevelToPlayerSize: false,
        startLevel: -1
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // Force the highest available quality (HD/4K)
        hls.currentLevel = hls.levels.length - 1;
        video.muted = true;
        video.play().catch(e => console.error("HLS play error:", e));
      });
      return () => {
        hls.destroy();
      };
    }
  }, [src]);

  return (
    <div className={`absolute inset-0 z-0 ${className}`} style={style}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`w-full h-full ${objectFit} object-center`}
      />
    </div>
  );
};
