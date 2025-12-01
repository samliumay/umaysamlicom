'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Navigation.module.scss';

/**
 * Navigation Component
 * Tactical-style navigation menu with smooth scrolling
 */
export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['dossier', 'operations', 'blueprints', 'references', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'dossier', label: 'INTEL DOSSIER' },
    { id: 'operations', label: 'FIELD OPERATIONS' },
    { id: 'blueprints', label: 'PROJECTS' },
    { id: 'references', label: 'REFERENCES' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={styles.navigation}
    >
      <div className={styles.navContainer}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
          >
            <span className={styles.navLabel}>{item.label}</span>
            {activeSection === item.id && (
              <motion.div
                layoutId="activeIndicator"
                className={styles.activeIndicator}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}

