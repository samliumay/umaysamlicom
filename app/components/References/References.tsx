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

        <div className={styles.timeline}>
          {OPERATIVE_INTEL.references.map((reference, index) => (
            <motion.div
              key={`${reference.name}-${index}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={styles.referenceReport}
            >
              <div className={styles.timelineConnector}>
                <div className={styles.timelineDot}></div>
                {index < OPERATIVE_INTEL.references.length - 1 && (
                  <div className={styles.timelineLine}></div>
                )}
              </div>

              <div className={styles.referenceCard}>
                <div className={styles.referenceHeader}>
                  <div className={styles.referenceName}>
                    <span className={styles.nameLabel}>REFERENCE:</span>
                    <span className={styles.nameValue}>{reference.name}</span>
                  </div>
                  {reference.affiliation && (
                    <div className={styles.affiliationBadge}>
                      <span className={styles.affBadgeText}>{reference.affiliation}</span>
                    </div>
                  )}
                </div>

                <div className={styles.referenceDetails}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Title:</span>
                    <span className={styles.detailValue}>{reference.title}</span>
                  </div>
                  
                  {reference.email && (
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Email:</span>
                      <span className={styles.detailValue}>{reference.email}</span>
                    </div>
                  )}
                  
                  {reference.phone && (
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Phone:</span>
                      <span className={styles.detailValue}>{reference.phone}</span>
                    </div>
                  )}
                </div>

                {reference.quote && (
                  <div className={styles.quoteSection}>
                    <h4 className={styles.quoteTitle}>EVALUATION:</h4>
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


