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

        <div className={styles.blueprintsGrid}>
          {OPERATIVE_INTEL.blueprints.map((blueprint, index) => (
            <motion.div
              key={blueprint.codename}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={styles.blueprintCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.codenameSection}>
                  <span className={styles.codenameLabel}>PROJECT:</span>
                  <span className={styles.codenameValue}>{blueprint.codename}</span>
                </div>
                <div className={styles.classBadge}>
                  <span className={styles.classLabel}>CLASS:</span>
                  <span className={styles.classValue}>{blueprint.class}</span>
                  <span className={`${styles.statusBadge} ${blueprint.status === 'under development' ? styles.statusDev : styles.statusFinished}`}>
                    {blueprint.status}
                  </span>
                </div>
              </div>

              <div className={styles.cardBody}>
                {blueprint.algo && (
                  <div className={styles.algo}>
                    <span className={styles.algoLabel}>ALGO:</span>
                    <span className={styles.algoValue}>{blueprint.algo}</span>
                  </div>
                )}
                
                <div className={styles.techStack}>
                  <span className={styles.techLabel}>TECH STACK:</span>
                  <span className={styles.techValue}>{blueprint.techStack}</span>
                </div>

                <div className={styles.description}>
                  <span className={styles.descLabel}>DESCRIPTION:</span>
                  <p className={styles.descText}>{blueprint.description}</p>
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


