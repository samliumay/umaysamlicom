'use client';

import { motion } from 'framer-motion';
import styles from './OperatorProfile.module.scss';
import { OPERATIVE_INTEL } from '@/app/data/intel';

/**
 * Operator Profile Component
 * Hero section displaying operator identity, directive, and tactical focus tags
 */
export default function OperatorProfile() {
  return (
    <section id="intel" className={styles.profile}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <div className={styles.header}>
            <h1 className={styles.operatorName}>{OPERATIVE_INTEL.identity.name}</h1>
            <p className={styles.operatorTitle}>{OPERATIVE_INTEL.identity.title}</p>
            <div className={styles.clearance}>
              <span className={styles.clearanceLabel}>CLEARANCE:</span>
              <span className={styles.clearanceValue}>{OPERATIVE_INTEL.identity.clearance}</span>
            </div>
          </div>

          <div className={styles.directive}>
            <p className={styles.directiveText}>"{OPERATIVE_INTEL.identity.directive}"</p>
          </div>

          <div className={styles.tacticalFocus}>
            <span className={styles.focusLabel}>TACTICAL FOCUS:</span>
            <div className={styles.tags}>
              {OPERATIVE_INTEL.identity.tacticalFocus.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={styles.tag}
                >
                  [{tag}]
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

