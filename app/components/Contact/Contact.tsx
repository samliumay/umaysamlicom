'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import styles from './Contact.module.scss';
import { OPERATIVE_INTEL } from '@/app/data/intel';

/**
 * Contact Component (Comms Uplink)
 * Displays encrypted and non-secure communication channels
 * Styled as a tactical communication interface
 */
export default function Contact() {

  return (
    <section id="comms" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.section}
        >
          <h2 className={styles.sectionTitle}>
            <span className={styles.bracket}>[</span>
            COMMUNICATION CHANNELS
            <span className={styles.bracket}>]</span>
          </h2>

          <div className={styles.contactCard}>
            <div className={styles.channels}>
              <h3 className={styles.channelTitle}>CONTACT CHANNELS:</h3>
              <div className={styles.channelLinks}>
                <motion.a
                  href={`mailto:${OPERATIVE_INTEL.identity.contact.email}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={styles.channelLink}
                >
                  <Mail size={18} />
                  <span>{OPERATIVE_INTEL.identity.contact.email}</span>
                </motion.a>
                <motion.a
                  href={`https://${OPERATIVE_INTEL.identity.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className={styles.channelLink}
                >
                  <Linkedin size={18} />
                  <span>{OPERATIVE_INTEL.identity.contact.linkedin}</span>
                </motion.a>
                <motion.a
                  href={`https://${OPERATIVE_INTEL.identity.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className={styles.channelLink}
                >
                  <Github size={18} />
                  <span>{OPERATIVE_INTEL.identity.contact.github}</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

