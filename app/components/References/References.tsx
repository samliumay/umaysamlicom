'use client';

import { motion } from 'framer-motion';
import styles from './References.module.scss';
import { OPERATIVE_INTEL } from '@/app/data/intel';

/**
 * References Component
 * Displays verified sources and recommendation letters
 * Styled as classified intelligence attachments
 */
export default function References() {
  return (
    <section id="references" className={styles.references}>
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
            OFFICER_EVALUATIONS // DECRYPTED TRANSMISSION LOGS
            <span className={styles.bracket}>]</span>
          </h2>
        </motion.div>

        <div className={styles.referencesGrid}>
          {OPERATIVE_INTEL.references.map((reference, index) => (
            <motion.div
              key={reference.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={styles.referenceCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.sourceInfo}>
                  <h3 className={styles.sourceName}>{reference.name}</h3>
                  <p className={styles.sourceTitle}>{reference.title}</p>
                </div>
              </div>

              <div className={styles.cardBody}>
                {reference.affiliation && (
                  <div className={styles.affiliation}>
                    <span className={styles.affLabel}>AFFILIATION:</span>
                    <span className={styles.affValue}>{reference.affiliation}</span>
                  </div>
                )}

                {reference.email && (
                  <div className={styles.contactInfo}>
                    <span className={styles.contactLabel}>EMAIL:</span>
                    <span className={styles.contactValue}>{reference.email}</span>
                  </div>
                )}

                {reference.phone && (
                  <div className={styles.contactInfo}>
                    <span className={styles.contactLabel}>PHONE:</span>
                    <span className={styles.contactValue}>{reference.phone}</span>
                  </div>
                )}

                {reference.quote && (
                  <div className={styles.quote}>
                    <p className={styles.quoteText}>"{reference.quote}"</p>
                  </div>
                )}

                {reference.attachment && (
                  <div className={styles.attachment}>
                    <a
                      href={reference.attachment}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.attachmentLink}
                    >
                      <span>VIEW_REFERENCE_LETTER</span>
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


