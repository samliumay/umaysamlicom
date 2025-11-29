'use client';

import { motion } from 'framer-motion';
import styles from './FieldOperations.module.scss';
import { OPERATIVE_INTEL } from '@/app/data/intel';

/**
 * Field Operations Component
 * Displays mission log (experience) as a tactical timeline
 * Each job is styled as a Mission Report
 */
export default function FieldOperations() {
  return (
    <section id="ops-log" className={styles.operations}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.sectionTitle}>
            <span className={styles.bracket}>[</span>
            FIELD OPERATIONS // MISSION LOG
            <span className={styles.bracket}>]</span>
          </h2>
        </motion.div>

        <div className={styles.timeline}>
          {OPERATIVE_INTEL.mission_log.map((mission, index) => (
            <motion.div
              key={mission.codename}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={styles.missionReport}
            >
              <div className={styles.timelineConnector}>
                <div className={styles.timelineDot}></div>
                {index < OPERATIVE_INTEL.mission_log.length - 1 && (
                  <div className={styles.timelineLine}></div>
                )}
              </div>

              <div className={styles.missionCard}>
                <div className={styles.missionHeader}>
                  <div className={styles.missionCodename}>
                    <span className={styles.codenameLabel}>OPERATION:</span>
                    <span className={styles.codenameValue}>{mission.codename}</span>
                  </div>
                  <div className={styles.missionStatus}>
                    <span className={`${styles.statusBadge} ${mission.status === 'ACTIVE' ? styles.statusActive : styles.statusCompleted}`}>
                      {mission.status}
                    </span>
                  </div>
                </div>

                <div className={styles.missionDetails}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Role:</span>
                    <span className={styles.detailValue}>{mission.role}</span>
                  </div>
                  
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Location:</span>
                    <span className={styles.detailValue}>{mission.location}</span>
                  </div>
                  
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Date:</span>
                    <span className={styles.detailValue}>{mission.date}</span>
                  </div>
                </div>

                <div className={styles.briefSection}>
                  <h4 className={styles.briefTitle}>BRIEF:</h4>
                  <p className={styles.briefText}>{mission.brief}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

