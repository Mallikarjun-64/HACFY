"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cloud, Activity, Maximize } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import styles from './ModernBusinesses.module.css';

const features = [
  {
    icon: <Activity size={32} strokeWidth={1.5} />,
    title: 'Real-time Monitoring',
    description: 'Continuous visibility into your infrastructure with automated threat detection.'
  },
  {
    icon: <Cloud size={32} strokeWidth={1.5} />,
    title: 'Cloud-Native',
    description: 'Security built specifically for modern cloud environments and SaaS stacks.'
  },
  {
    icon: <Shield size={32} strokeWidth={1.5} />,
    title: 'Actionable Insights',
    description: 'Transform complex data into clear, prioritized steps for your security team.'
  },
  {
    icon: <Maximize size={32} strokeWidth={1.5} />,
    title: 'Scalable',
    description: 'Protection that grows with your business, from startup to global enterprise.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ModernBusinesses: React.FC = () => {
  return (
    <Section id="features" variant="slate-50">
      <div className={styles.header}>
        <h2 className={styles.title}>Built for Modern Businesses</h2>
      </div>
      <motion.div 
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={item}>
            <Card className={styles.featureCard}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default ModernBusinesses;
