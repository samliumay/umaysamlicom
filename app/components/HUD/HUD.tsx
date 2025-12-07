'use client';

import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import styles from './HUD.module.scss';
import { OPERATIVE_INTEL } from '@/app/data/intel';

/**
 * HUD Component
 * Heads-Up Display with status bar showing time zones on left, location and network status on right
 */
export default function HUD() {
  const [times, setTimes] = useState({
    washington: '',
    beijing: '',
    istanbul: ''
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      
      const washington = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
      const beijing = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
      const istanbul = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));

      setTimes({
        washington: washington.toTimeString().substr(0, 8),
        beijing: beijing.toTimeString().substr(0, 8),
        istanbul: istanbul.toTimeString().substr(0, 8)
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  const location = OPERATIVE_INTEL.identity.location;
  const coords = `${OPERATIVE_INTEL.identity.coords.lat}, ${OPERATIVE_INTEL.identity.coords.lng}`;

  return (
    <div className={styles.hud}>
      <div className={styles.statusBar}>
        {/* Left side - Time zones */}
        <div className={styles.leftSection}>
          <div className={styles.timeZones}>
            <div className={styles.timeItem}>
              <span className={styles.timeLabel}>WASHINGTON:</span>
              <span className={styles.timeValue}>{times.washington}</span>
            </div>
            <div className={styles.timeItem}>
              <span className={styles.timeLabel}>BEIJING:</span>
              <span className={styles.timeValue}>{times.beijing}</span>
            </div>
            <div className={styles.timeItem}>
              <span className={styles.timeLabel}>ISTANBUL:</span>
              <span className={styles.timeValue}>{times.istanbul}</span>
            </div>
          </div>
        </div>

        {/* Right side - Location and Network Status */}
        <div className={styles.rightSection}>
          <div className={styles.locationItem}>
            <MapPin size={12} />
            <span className={styles.locationLabel}>COORDS:</span>
            <span className={styles.locationValue}>{coords}</span>
          </div>
          <div className={styles.locationItem}>
            <span className={styles.locationLabel}>LOC:</span>
            <span className={styles.locationValue}>{location}</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.label}>NET_STATUS:</span>
            <span className={styles.value}>
              <span className={styles.statusText}>ONLINE</span>
              <span className={styles.statusDot}></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

