"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Rocket, Landmark, Stethoscope, ShoppingBag, Laptop, 
  Truck, GraduationCap, Factory, Home, Film, ShieldCheck 
} from 'lucide-react';
import Section from '@/components/ui/Section';
import styles from './SMESectors.module.css';

const sectors = [
  { 
    icon: <Building2 size={24} />, 
    name: 'Small & Medium Enterprises (SMEs)',
    description: 'Empowering smaller businesses with enterprise-grade security visibility that fits their scale and budget.'
  },
  { 
    icon: <Rocket size={24} />, 
    name: 'Startups & SaaS',
    description: 'Securing fast-growing tech companies by identifying vulnerabilities before they scale.'
  },
  { 
    icon: <Landmark size={24} />, 
    name: 'FinTech & BFSI',
    description: 'Meeting rigorous financial compliance and protection standards through deep security insights.'
  },
  { 
    icon: <Stethoscope size={24} />, 
    name: 'Healthcare',
    description: 'Protecting patient data and ensuring HIPAA-compliant infrastructure visibility.'
  },
  { 
    icon: <ShoppingBag size={24} />, 
    name: 'E-commerce',
    description: 'Safeguarding online stores and customer payment data from evolving web threats.'
  },
  { 
    icon: <Laptop size={24} />, 
    name: 'IT & Technology Services',
    description: 'Providing IT providers with the tools to verify and maintain their clients security posture.'
  },
  { 
    icon: <Truck size={24} />, 
    name: 'Logistics & Supply Chain',
    description: 'Mapping digital risks across complex supply chain networks and partner integrations.'
  },
  { 
    icon: <GraduationCap size={24} />, 
    name: 'Education & EdTech',
    description: 'Securing educational platforms and protecting student information from unauthorized access.'
  },
  { 
    icon: <Factory size={24} />, 
    name: 'Manufacturing',
    description: 'Bridging the gap between IT and OT security with comprehensive industrial network visibility.'
  },
  { 
    icon: <Home size={24} />, 
    name: 'Real Estate & PropTech',
    description: 'Protecting real estate platforms and sensitive property transaction data.'
  },
  { 
    icon: <Film size={24} />, 
    name: 'Media & Entertainment',
    description: 'Securing digital intellectual property and large-scale content delivery networks.'
  },
  { 
    icon: <ShieldCheck size={24} />, 
    name: 'Government & Public Sector',
    description: 'Assisting public institutions in meeting strict security mandates and protecting citizen data.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

const SMESectors: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<number | null>(null);

  return (
    <Section id="sectors" variant="white">
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>Designed for SMEs & Many Sectors</h2>
        <p className={styles.subtext}>Security shouldn&apos;t be complex or enterprise-only.</p>
      </motion.div>

      <motion.div 
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {sectors.map((sector, index) => (
          <motion.div 
            key={index} 
            variants={item}
          >
            <motion.div 
              layout
              className={`${styles.sectorCard} ${selectedSector === index ? styles.selected : ''}`}
              onClick={() => setSelectedSector(selectedSector === index ? null : index)}
              transition={{
                layout: { duration: 0.3, ease: "easeInOut" }
              }}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  {sector.icon}
                </div>
                <div className={styles.textContent}>
                  <span className={styles.sectorName}>
                    {sector.name}
                  </span>
                  <AnimatePresence initial={false}>
                    {selectedSector === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ 
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      >
                        <p className={styles.descriptionText}>
                          {sector.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default SMESectors;
