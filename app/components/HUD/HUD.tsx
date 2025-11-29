'use client';

import { useEffect, useState } from 'react';
import { Lock } from 'lucide-react';
import styles from './HUD.module.scss';
import { OPERATIVE_INTEL } from '@/app/data/intel';

/**
 * HUD Component
 * Heads-Up Display with status bar showing coordinates, time zones, and network status
 */
export default function HUD() {
  const [times, setTimes] = useState({
    london: '',
    washington: '',
    beijing: '',
    tokyo: '',
    istanbul: ''
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      
      const london = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/London' }));
      const washington = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
      const beijing = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
      const tokyo = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));
      const istanbul = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));

      setTimes({
        london: london.toTimeString().substr(0, 8),
        washington: washington.toTimeString().substr(0, 8),
        beijing: beijing.toTimeString().substr(0, 8),
        tokyo: tokyo.toTimeString().substr(0, 8),
        istanbul: istanbul.toTimeString().substr(0, 8)
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hud}>
      <div className={styles.statusBar}>
        <div className={styles.statusItem}>
          <span className={styles.label}>COORDS:</span>
          <span className={styles.value}>
            {OPERATIVE_INTEL.identity.coords.lat}, {OPERATIVE_INTEL.identity.coords.lng}
          </span>
        </div>
        
        <div className={styles.timeZones}>
          <div className={styles.timeItem}>
            <span className={styles.timeLabel}>LONDON:</span>
            <span className={styles.timeValue}>{times.london}</span>
          </div>
          <div className={styles.timeItem}>
            <span className={styles.timeLabel}>WASHINGTON:</span>
            <span className={styles.timeValue}>{times.washington}</span>
          </div>
          <div className={styles.timeItem}>
            <span className={styles.timeLabel}>BEIJING:</span>
            <span className={styles.timeValue}>{times.beijing}</span>
          </div>
          <div className={styles.timeItem}>
            <span className={styles.timeLabel}>TOKYO:</span>
            <span className={styles.timeValue}>{times.tokyo}</span>
          </div>
          <div className={styles.timeItem}>
            <span className={styles.timeLabel}>ISTANBUL:</span>
            <span className={styles.timeValue}>{times.istanbul}</span>
          </div>
        </div>
        
        <div className={styles.statusItem}>
          <span className={styles.label}>NET_STATUS:</span>
          <span className={styles.value}>
            <Lock size={12} />
            <span className={styles.statusText}>ENCRYPTED</span>
            <span className={styles.statusDot}></span>
          </span>
        </div>
      </div>
    </div>
  );
}

