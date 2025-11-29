'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './BIOSBoot.module.scss';

/**
 * BIOS Boot Component
 * Simulates a system boot sequence with terminal-style text output
 * Displays integrity checks, uplink establishment, and biometric decryption
 */
export default function BIOSBoot({ onComplete }: { onComplete: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showComplete, setShowComplete] = useState(false);
  const [userIP, setUserIP] = useState('LOADING...');
  const [bootSequence, setBootSequence] = useState<string[]>([]);

  // Fetch user IP address
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setUserIP(data.ip);
      } catch (error) {
        // Fallback if IP fetch fails
        setUserIP('UNAVAILABLE');
      }
    };
    fetchIP();
  }, []);

  // Update boot sequence when IP is loaded
  useEffect(() => {
    if (userIP !== 'LOADING...') {
      setBootSequence([
        '> CHECKING_INTEGRITY... OK',
        '> ESTABLISHING_UPLINK (MIT_SECURE_NODE_01)...',
        `> DECRYPTING_BIOMETRICS: ${userIP}...`,
        '> CLEARANCE_LEVEL: Unclassified... verified.',
        '> WELCOME, OPERATOR.'
      ]);
    }
  }, [userIP]);

  useEffect(() => {
    if (bootSequence.length === 0) return; // Wait for IP to load

    if (currentLine < bootSequence.length) {
      const currentText = bootSequence[currentLine];
      let charIndex = 0;
      setDisplayedText('');

      const typeInterval = setInterval(() => {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          // Wait before moving to next line
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
          }, 800);
        }
      }, 30); // Fast typing speed

      return () => clearInterval(typeInterval);
    } else {
      // All lines complete, show loading screen
      setTimeout(() => {
        setShowComplete(true);
        // Show loading screen and transition
        setTimeout(() => {
          onComplete();
        }, 2000);
      }, 1000);
    }
  }, [currentLine, bootSequence, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.biosBoot}
      >
        <div className={styles.terminal}>
          {bootSequence.slice(0, currentLine).map((line, index) => (
            <div key={index} className={styles.bootLine}>
              {line}
            </div>
          ))}
          {currentLine < bootSequence.length && (
            <div className={styles.bootLine}>
              {displayedText}
              <span className={styles.cursor}>_</span>
            </div>
          )}
          {showComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={styles.loadingScreen}
            >
              <div className={styles.loadingText}>
                <span className={styles.loadingDots}>LOADING</span>
                <span className={styles.dots}>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

