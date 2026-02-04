"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import styles from './Resources.module.css';

const resources = [
  {
    title: 'Understanding Cyber Risk for SMEs',
    image: '/images/blog1.jpg',
    category: 'Guides'
  },
  {
    title: 'Why Visibility Matters Before Security',
    image: '/images/blog2.jpg',
    category: 'Insights'
  },
  {
    title: 'Common Security Gaps in Growing Businesses',
    image: '/images/blog3.jpg',
    category: 'Research'
  }
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Resources: React.FC = () => {
  return (
    <Section id="resources" variant="white">
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>Blogs & Resources</h2>
        <p className={styles.intro}>Stay informed. Stay ahead of cyber risk.</p>
      </motion.div>
      <motion.div 
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {resources.map((resource, index) => (
          <motion.div key={index} variants={item}>
            <Card className={styles.resourceCard}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={resource.image} 
                  alt={resource.title} 
                  fill 
                  className={styles.blogImage}
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.category}>{resource.category}</span>
                <h3 className={styles.resourceTitle}>
                  <span>{resource.title}</span>
                </h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
        className={styles.actions}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button variant="outline">Explore All Resources</Button>
      </motion.div>
    </Section>
  );
};

export default Resources;
