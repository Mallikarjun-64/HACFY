"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Section from '@/components/ui/Section';
import { 
  ChevronDown, 
  Server, 
  Cloud, 
  Database, 
  AppWindow, 
  Mail, 
  Cpu, 
  ShieldCheck, 
  Users 
} from 'lucide-react';
import styles from './TrustedServices.module.css';

import { services } from '@/lib/services-data';

const IconMap: { [key: string]: React.ElementType } = {
  Server,
  Cloud,
  Database,
  AppWindow,
  Mail,
  Cpu,
  ShieldCheck,
  Users,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const TrustedServices: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const router = useRouter();

  const toggleService = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    } else {
      setActiveIndex(null);
    }
  };

  return (
    <Section id="services" variant="white">
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className={styles.mainHeadline}>Comprehensive Security <span className={styles.highlight}>Solutions</span></h3>
        <p className={styles.description}>Protecting your digital assets with industry-leading expertise and modern tools.</p>
      </motion.div>
      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service, index) => {
          const IconComponent = IconMap[service.icon] || Server;
          return (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`${styles.serviceItem} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => toggleService(index)}
            >
              <button 
                className={styles.serviceHeader} 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleService(index);
                }}
                aria-expanded={activeIndex === index}
              >
                <div className={styles.titleGroup}>
                  <div className={styles.iconContainer}>
                    <IconComponent size={20} className={styles.serviceIcon} />
                  </div>
                  <span className={styles.serviceTitle}>{service.title}</span>
                </div>
                <ChevronDown className={`${styles.chevron} ${activeIndex === index ? styles.rotate : ''}`} size={20} />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={styles.serviceContent}
                  >
                    <div className={styles.contentInner}>
                      <div className={styles.descriptionWrapper}>
                        <p className={styles.serviceDescription}>
                          {service.description}
                        </p>
                        
                        <div 
                          className={styles.learnMoreBtn}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            router.push(`/services/${service.slug}`);
                          }}
                          style={{ cursor: 'pointer' }}
                        >
                          <span>Learn more</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
};

export default TrustedServices;
