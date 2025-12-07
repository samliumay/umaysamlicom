'use client';

import { motion } from 'framer-motion';
import styles from './IntelDossier.module.scss';
import { OPERATIVE_INTEL } from '@/app/data/intel';

/**
 * Intel Dossier Component
 * Displays operative information, skills, and research areas
 * Styled as a tactical weapon loadout/skill tree
 */
export default function IntelDossier() {
  const skills = [
    { name: 'AI Security', level: 95 },
    { name: 'OT Security', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'Red Teaming', level: 88 },
    { name: 'Reinforcement Learning', level: 85 }
  ];

  return (
    <section id="skill_log" className={styles.dossier}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.section}
        >
          <h3 className={styles.subsectionTitle}>EDUCATION // CREDENTIALS</h3>
          
          <div className={styles.timeline}>
            {OPERATIVE_INTEL.education.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${edu.degree}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={styles.educationReport}
              >
                <div className={styles.timelineConnector}>
                  <div className={styles.timelineDot}></div>
                  {index < OPERATIVE_INTEL.education.length - 1 && (
                    <div className={styles.timelineLine}></div>
                  )}
                </div>

                <div className={styles.educationCard}>
                  <div className={styles.educationHeader}>
                    <div className={styles.educationInstitution}>
                      <span className={styles.institutionLabel}>INSTITUTION:</span>
                      <span className={styles.institutionValue}>{edu.institution}</span>
                    </div>
                    <div className={styles.educationStatus}>
                      <span className={`${styles.statusBadge} ${edu.status === 'In Progress' ? styles.statusActive : styles.statusCompleted}`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <div className={styles.educationDetails}>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Degree:</span>
                      <span className={styles.detailValue}>{edu.degree}</span>
                    </div>
                    
                    {edu.date && (
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Date:</span>
                        <span className={styles.detailValue}>{edu.date}</span>
                      </div>
                    )}
                    
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Grade:</span>
                      <span className={styles.detailValue}>
                        {edu.gpa}
                        {edu.scholarship && ` | ${edu.scholarship}`}
                      </span>
                    </div>
                    
                    {edu.activities && (
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Activities:</span>
                        <span className={styles.detailValue}>{edu.activities}</span>
                      </div>
                    )}
                  </div>

                  {edu.description && (
                    <div className={styles.briefSection}>
                      <h4 className={styles.briefTitle}>DESCRIPTION:</h4>
                      <p className={styles.briefText}>{edu.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

