'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './BIOSBoot.module.scss';

/**
 * BIOS Boot Component
 * Loading screen with spinning symbol and percentage indicator
 */
export default function BIOSBoot({ onComplete }: { onComplete: () => void }) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const minDuration = 2000; // 2 seconds minimum
    const targetProgress = 100;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / minDuration) * 100, targetProgress);
      
      setLoadingProgress(Math.floor(progress));

      if (progress >= targetProgress) {
        setIsComplete(true);
        // Wait a bit before completing
        setTimeout(() => {
          onComplete();
        }, 300);
      } else {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.biosBoot}
      >
        <div className={styles.loadingContainer}>
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill}
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <div className={styles.progressText}>
              {loadingProgress}%
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

