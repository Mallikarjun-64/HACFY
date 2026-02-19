"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import styles from './TrustedServices.module.css';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/services-data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const TrustedServices: React.FC = () => {
  return (
    <Section id="services" variant="white">
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className={styles.mainHeadline}>Security Coverage Across Your <span className={styles.highlight}>Digital Assets</span></h3>
        <p className={styles.description}>Protecting critical infrastructure, applications, and business systems with structured security assessments.</p>
      </motion.div>
      <motion.div 
        className={styles.list}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.filter(service => !service.hidden).map((service, index) => {
          return (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className={styles.serviceItem}
            >
              <motion.div 
                className={styles.iconBlock}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className={styles.blockTitle}>{service.title}</span>
              </motion.div>
              <div className={styles.textBlock}>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                <Link href={`/services/${service.slug}`} className={styles.learnMore}>
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
};

export default TrustedServices;
