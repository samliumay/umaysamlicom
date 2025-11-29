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
    <section id="train_ops" className={styles.dossier}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.section}
        >
          <h3 className={styles.subsectionTitle}>EDUCATION // CREDENTIALS</h3>
          
          <div className={styles.educationList}>
            {OPERATIVE_INTEL.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className={styles.educationItem}
              >
                <div className={styles.eduHeader}>
                  <span className={styles.eduInstitution}>{edu.institution}</span>
                  {edu.status && (
                    <span className={styles.eduStatus}>{edu.status}</span>
                  )}
                </div>
                <p className={styles.eduDegree}>{edu.degree}</p>
                <p className={styles.eduGPA}>GPA: {edu.gpa}</p>
                {edu.focus && (
                  <p className={styles.eduFocus}>Focus: {edu.focus}</p>
                )}
                <p className={styles.eduStatusText}>Status: {edu.status}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

