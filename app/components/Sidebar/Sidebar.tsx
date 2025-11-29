'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Sidebar.module.scss';

/**
 * Sidebar Component
 * Tactical menu navigation resembling a weapon selection menu
 * Collapses to hamburger menu on mobile
 */
export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intel', 'ops-log', 'train_ops', 'comms'];
      const scrollPosition = window.scrollY + 150;

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
    { id: 'intel', label: 'INTEL', number: '01' },
    { id: 'ops-log', label: 'OPS_LOG', number: '02' },
    { id: 'train_ops', label: 'TRAIN_OPS', number: '03' },
    { id: 'comms', label: 'COMMS', number: '04' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isMobile && (
        <button
          className={styles.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}
      
      <motion.nav
        initial={false}
        animate={{
          x: isMobile ? (isOpen ? 0 : -280) : 0,
          opacity: isMobile ? (isOpen ? 1 : 0) : 1
        }}
        transition={{ duration: 0.3 }}
        className={`${styles.sidebar} ${isMobile ? styles.mobile : ''}`}
      >
        <div className={styles.sidebarContent}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
            >
              <span className={styles.itemNumber}>[{item.number}]</span>
              <span className={styles.itemLabel}>// {item.label}</span>
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
      
      {isMobile && isOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

