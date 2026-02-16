"use client";

import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, Loader2, ShieldAlert, Shield, Lock, Search } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isAssessing, setIsAssessing] = useState(false);
  const [riskScore, setRiskScore] = useState(0); // 0 to 100
  const [scanStep, setScanStep] = useState(0);
  
  const scanSteps = [
    "Analyzing DNS configuration...",
    "Scanning for open ports...",
    "Checking SSL/TLS certificates...",
    "Detecting server vulnerabilities...",
    "Evaluating application security..."
  ];

  const handleCheck = async () => {
    if (isAssessing) return;
    
    setIsAssessing(true);
    setRiskScore(0);
    
    // Simulate multi-step scanning process
    for (let i = 0; i < scanSteps.length; i++) {
      setScanStep(i);
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    
    const randomRisk = Math.floor(Math.random() * 80) + 10;
    setRiskScore(randomRisk);
    setIsAssessing(false);
  };

  return (
    <Section id="hero" variant="white" className={styles.heroSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.headline}>
            Gain Clear Visibility into Your Cyber Risk <span className={styles.highlight}>Before Threats Turn into Incidents</span>
          </h1>
          <p className={styles.subtext}>
            Strengthen your organization with comprehensive security assessments that identify vulnerabilities, reduce exposure, and enhance resilience across your digital infrastructure.
          </p>
          <div className={styles.actions}>
            <Button 
              variant="primary" 
              size="large"
              className={styles.ctaButton}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request a Security Assessment
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.assessmentContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.assessmentCard}>
            <div className={styles.assessmentHeader}>
              <span className={styles.assessLabel}>LIVE SCANNER</span>
              <h2 className={styles.assessTitle}>Risk Exposure Scanner</h2>
              <p className={styles.assessSub}>Identify vulnerabilities in real-time</p>
            </div>

            <div className={styles.assessmentBody}>
              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <input 
                    type="text" 
                    placeholder="Enter your website URL (e.g., company.com)" 
                    className={styles.mockInput}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
                <button 
                  className={styles.assessBtn} 
                  onClick={handleCheck}
                  disabled={isAssessing || !url}
                >
                  {isAssessing ? (
                    <><Loader2 className={styles.spinner} size={20} /> Scanning...</>
                  ) : (
                    <>Run Security Scan <Search size={18} /></>
                  )}
                </button>
              </div>

              <div className={styles.animationContainer}>
                {/* Radar/Scan Animation */}
                <div className={styles.radarWrapper}>
                  <motion.div 
                    className={styles.radarRing1}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div 
                    className={styles.radarRing2}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.05, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  />
                  
                  <div className={styles.scannerCircle}>
                    <AnimatePresence mode="wait">
                      {isAssessing ? (
                        <motion.div 
                          key="scanning"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className={styles.scanEffect}
                        >
                          <motion.div 
                            className={styles.scanBar}
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                          <div className={styles.scanIcons}>
                            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }}><Lock size={24} className={styles.iconDim} /></motion.div>
                            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}><Shield size={24} className={styles.iconDim} /></motion.div>
                          </div>
                        </motion.div>
                      ) : riskScore > 0 ? (
                        <motion.div 
                          key="result"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className={styles.resultDisplay}
                        >
                          <div className={`${styles.scoreCircle} ${riskScore > 60 ? styles.highRiskBg : riskScore > 30 ? styles.medRiskBg : styles.lowRiskBg}`}>
                            <span className={styles.scoreValue}>{riskScore}</span>
                            <span className={styles.scoreLabel}>RISK</span>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="idle"
                          className={styles.idleDisplay}
                        >
                          <ShieldCheck size={64} className={styles.shieldIconLarge} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Scan Status Text */}
                <div className={styles.statusWrapper}>
                  <AnimatePresence mode="wait">
                    {isAssessing && (
                      <motion.p 
                        key={scanStep}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={styles.statusText}
                      >
                        {scanSteps[scanStep]}
                      </motion.p>
                    )}
                    {!isAssessing && riskScore > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={styles.riskMessage}
                      >
                        {riskScore > 60 ? (
                          <span className={styles.highRiskText}><ShieldAlert size={16} /> High Vulnerability Detected</span>
                        ) : riskScore > 30 ? (
                          <span className={styles.medRiskText}><Shield size={16} /> Moderate Risk Found</span>
                        ) : (
                          <span className={styles.lowRiskText}><ShieldCheck size={16} /> Security Posture: Strong</span>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            
            {/* Decoration */}
            <div className={styles.cardBgIcon}>
              <ShieldCheck size={120} opacity={0.03} />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
