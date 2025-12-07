'use client';

import { useEffect, useRef } from 'react';

/**
 * Audio Player Component
 * Automatically plays background music when the site loads
 * Handles browser autoplay restrictions by listening for user interactions
 */
export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasStartedRef = useRef(false);

  const playAudio = async () => {
    if (audioRef.current && !hasStartedRef.current) {
      try {
        // Set volume to a reasonable level (0.5 = 50%)
        audioRef.current.volume = 0.5;
        await audioRef.current.play();
        hasStartedRef.current = true;
        console.log('Audio started playing');
      } catch (error) {
        // Autoplay was prevented, will wait for user interaction
        console.log('Audio autoplay prevented, waiting for user interaction');
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Wait for audio to be ready
    const tryPlayWhenReady = () => {
      if (audio.readyState >= 2) { // HAVE_CURRENT_DATA or higher
        playAudio();
      } else {
        audio.addEventListener('canplay', () => playAudio(), { once: true });
      }
    };

    // Try to play immediately on mount
    tryPlayWhenReady();

    // Listen for user interactions to start audio
    const interactionEvents = ['click', 'touchstart', 'keydown', 'mousedown', 'pointerdown'];
    
    const handleInteraction = () => {
      if (!hasStartedRef.current) {
        playAudio();
      }
    };

    // Add event listeners for user interactions
    interactionEvents.forEach(event => {
      document.addEventListener(event, handleInteraction, { passive: true });
    });

    // Also listen for boot complete event
    const handleBootComplete = () => {
      if (!hasStartedRef.current) {
        playAudio();
      }
    };
    window.addEventListener('bootComplete', handleBootComplete);

    // Cleanup
    return () => {
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
      window.removeEventListener('bootComplete', handleBootComplete);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/uav_shealth.mp3"
      loop
      preload="auto"
      style={{ display: 'none' }}
    />
  );
}

