'use client';

import { motion } from 'framer-motion';
import styles from './Blueprints.module.scss';
import { OPERATIVE_INTEL } from '@/app/data/intel';

/**
 * Blueprints Component
 * Displays engineering projects as classified blueprints
 * Styled as tactical project documentation
 */
export default function Blueprints() {
  return (
    <section id="blueprints" className={styles.blueprints}>
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
            TACTICAL PROJECTS
            <span className={styles.bracket}>]</span>
          </h2>
        </motion.div>

        <div className={styles.timeline}>
          {OPERATIVE_INTEL.blueprints.map((blueprint, index) => (
            <motion.div
              key={`${blueprint.codename}-${index}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={styles.projectReport}
            >
              <div className={styles.timelineConnector}>
                <div className={styles.timelineDot}></div>
                {index < OPERATIVE_INTEL.blueprints.length - 1 && (
                  <div className={styles.timelineLine}></div>
                )}
              </div>

              <div className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectCodename}>
                    <span className={styles.codenameLabel}>PROJECT:</span>
                    <span className={styles.codenameValue}>{blueprint.codename}</span>
                  </div>
                  <div className={styles.projectStatus}>
                    <span className={`${styles.statusBadge} ${blueprint.status === 'under development' ? styles.statusActive : styles.statusCompleted}`}>
                      {blueprint.status}
                    </span>
                  </div>
                </div>

                <div className={styles.projectDetails}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Class:</span>
                    <span className={styles.detailValue}>{blueprint.class}</span>
                  </div>
                  
                  {blueprint.algo && (
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Algorithm:</span>
                      <span className={styles.detailValue}>{blueprint.algo}</span>
                    </div>
                  )}
                  
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Tech Stack:</span>
                    <span className={styles.detailValue}>{blueprint.techStack}</span>
                  </div>
                </div>

                <div className={styles.briefSection}>
                  <h4 className={styles.briefTitle}>DESCRIPTION:</h4>
                  <p className={styles.briefText}>{blueprint.description}</p>
                </div>

                {blueprint.github && (
                  <div className={styles.githubLink}>
                    <a
                      href={blueprint.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubButton}
                    >
                      <span>VIEW_REPOSITORY</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


