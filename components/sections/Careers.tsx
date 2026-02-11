"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Building, Users, Globe, 
  Award, CheckCircle, FileText, Lock 
} from 'lucide-react';
import Section from '@/components/ui/Section';
import styles from './Careers.module.css';

const Careers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'client' | 'certifications'>('client');

  useEffect(() => {
    const handleTabChange = (event: any) => {
      if (event.detail?.tabId) {
        setActiveTab(event.detail.tabId);
      }
    };
    window.addEventListener('changeCareerTab', handleTabChange);
    return () => window.removeEventListener('changeCareerTab', handleTabChange);
  }, []);

  const content = {
    client: {
      // title: 'Clients',
      // description: 'We work with a diverse range of clients, from small startups to large enterprises, helping them secure their digital assets and build robust cybersecurity frameworks.',
      cards: [
        {
          title: 'Enterprise Solutions',
          description: 'Tailored security for large organizations with complex infrastructures.',
          icon: <Building size={32} />
        },
        {
          title: 'SME Growth',
          description: 'Scalable protection for growing businesses and innovative startups.',
          icon: <Users size={32} />
        },
        {
          title: 'Public Sector',
          description: 'Specialized services for government and educational institutions.',
          icon: <Globe size={32} />
        }
      ]
    },
    certifications: {
      // title: 'Certifications',
      // description: 'We take pride in our industry-leading certifications that demonstrate our commitment to excellence and adherence to global security standards.',
      cards: [
        {
          title: 'ISO 27001',
          description: 'International standard for information security management systems.',
          icon: <Award size={32} />
        },
        {
          title: 'CISSP',
          description: 'Certified Information Systems Security Professional certification.',
          icon: <Shield size={32} />
        },
        {
          title: 'CEH',
          description: 'Certified Ethical Hacker - Master of defensive security techniques.',
          icon: <Lock size={32} />
        },
        {
          title: 'CompTIA Security+',
          description: 'Global standard for validating baseline security skills.',
          icon: <CheckCircle size={32} />
        }
      ]
    }
  };

  return (
    <Section id="careers" variant="light">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>Client & Certifications</h2>
          <p className={styles.intro}>Explore our client base and professional standards.</p>
        </motion.div>

        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'client' ? styles.active : ''}`}
            onClick={() => setActiveTab('client')}
          >
            Client
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'certifications' ? styles.active : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            Certifications
          </button>
        </div>

        <div className={styles.contentWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={styles.content}
            >
              <div className={styles.contentInfo}>
                <h3 className={styles.contentTitle}>{content[activeTab].title}</h3>
                <p className={styles.description}>{content[activeTab].description}</p>
              </div>
              
              <div className={styles.marqueeContainer}>
                <div className={styles.marquee}>
                  {/* First set of cards */}
                  {content[activeTab].cards.map((card, index) => (
                    <div key={`first-${index}`} className={styles.infoCard}>
                      <div className={styles.cardIcon}>{card.icon}</div>
                      <div className={styles.cardBody}>
                        <h4 className={styles.cardTitle}>{card.title}</h4>
                        <p className={styles.cardDescription}>{card.description}</p>
                      </div>
                    </div>
                  ))}
                  {/* Duplicated set for infinite loop */}
                  {content[activeTab].cards.map((card, index) => (
                    <div key={`second-${index}`} className={styles.infoCard}>
                      <div className={styles.cardIcon}>{card.icon}</div>
                      <div className={styles.cardBody}>
                        <h4 className={styles.cardTitle}>{card.title}</h4>
                        <p className={styles.cardDescription}>{card.description}</p>
                      </div>
                    </div>
                  ))}
                  {/* Third set to ensure coverage on large screens */}
                  {content[activeTab].cards.map((card, index) => (
                    <div key={`third-${index}`} className={styles.infoCard}>
                      <div className={styles.cardIcon}>{card.icon}</div>
                      <div className={styles.cardBody}>
                        <h4 className={styles.cardTitle}>{card.title}</h4>
                        <p className={styles.cardDescription}>{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

export default Careers;
