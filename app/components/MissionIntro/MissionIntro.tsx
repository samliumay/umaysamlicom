'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MissionIntro.module.scss';
import { OPERATIVE_INTEL } from '@/app/data/intel';

/**
 * Mission Intro Component
 * Simulates the Modern Warfare 2 opening scene with typewriter effect
 * Displays operative information in a tactical HUD style
 */
export default function MissionIntro({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showContent, setShowContent] = useState(false);

  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const introSequence = [
    `Time: ${currentTime}`,
    `Location: ${OPERATIVE_INTEL.identity.location}`,
    `Operative: ${OPERATIVE_INTEL.identity.name} '${OPERATIVE_INTEL.identity.alias}' ŞAMLI`,
    `Affiliation: NATO / TED University`
  ];

  useEffect(() => {
    if (currentStep < introSequence.length) {
      const currentText = introSequence[currentStep];
      let charIndex = 0;
      setDisplayedText('');

      const typeInterval = setInterval(() => {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          // Wait before moving to next step
          setTimeout(() => {
            setCurrentStep(prev => prev + 1);
          }, 1500);
        }
      }, 50); // Typing speed

      return () => clearInterval(typeInterval);
    } else {
      // All steps complete, fade to main content
      setTimeout(() => {
        setShowContent(true);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }, 2000);
    }
  }, [currentStep]);

  return (
    <div className={styles.missionIntro}>
      <AnimatePresence>
        {!showContent && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={styles.introSequence}
          >
            <div className={styles.introText}>
              <span className={styles.text}>{displayedText}</span>
              <span className={styles.cursor}>_</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.satelliteView}
        >
          <div className={styles.satelliteMap}>
            <div className={styles.mapGrid}></div>
            <div className={styles.mapOverlay}>
              <h1 className={styles.operativeName}>{OPERATIVE_INTEL.identity.name}</h1>
              <p className={styles.operativeTitle}>{OPERATIVE_INTEL.identity.title}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

