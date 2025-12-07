'use client';

import { useState } from 'react';
import BIOSBoot from './components/BIOSBoot/BIOSBoot';
import HUD from './components/HUD/HUD';
import Sidebar from './components/Sidebar/Sidebar';
import OperatorProfile from './components/OperatorProfile/OperatorProfile';
import IntelDossier from './components/IntelDossier/IntelDossier';
import FieldOperations from './components/FieldOperations/FieldOperations';
import Blueprints from './components/Blueprints/Blueprints';
import References from './components/References/References';
import Contact from './components/Contact/Contact';
import styles from './globals.module.scss';

/**
 * Main Portfolio Page
 * Tactical Operations Terminal with BIOS Boot, HUD, and Sidebar Navigation
 */
export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  const handleBootComplete = () => {
    setBootComplete(true);
    // Dispatch custom event to trigger audio playback
    window.dispatchEvent(new Event('bootComplete'));
  };

  return (
    <>
      <div className={styles.gridOverlay}></div>
      <div className={styles.container}>
        {!bootComplete && (
          <BIOSBoot onComplete={handleBootComplete} />
        )}
        
        {bootComplete && (
          <>
            <HUD />
            <Sidebar />
            <main className={styles.mainContent}>
              <OperatorProfile />
              <FieldOperations />
              <IntelDossier />
              <Blueprints />
              <References />
              <Contact />
            </main>
          </>
        )}
      </div>
    </>
  );
}
