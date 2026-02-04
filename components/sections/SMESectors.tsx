"use client";

import { motion } from 'framer-motion';
import { Building2, Rocket, Landmark, Stethoscope, ShoppingBag, Laptop } from 'lucide-react';
import Section from '@/components/ui/Section';
import styles from './SMESectors.module.css';

const sectors = [
  { icon: <Building2 size={24} />, name: 'Small & Medium Enterprises (SMEs)' },
  { icon: <Rocket size={24} />, name: 'Startups & SaaS' },
  { icon: <Landmark size={24} />, name: 'FinTech & BFSI' },
  { icon: <Stethoscope size={24} />, name: 'Healthcare' },
  { icon: <ShoppingBag size={24} />, name: 'E-commerce' },
  { icon: <Laptop size={24} />, name: 'IT & Technology Services' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const SMESectors: React.FC = () => {
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
        viewport={{ once: true, amount: 0.2 }}
      >
        {sectors.map((sector, index) => (
          <motion.div key={index} variants={item}>
            <div className={styles.sectorCard}>
              <div className={styles.iconWrapper}>{sector.icon}</div>
              <span className={styles.sectorName}>{sector.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default SMESectors;
