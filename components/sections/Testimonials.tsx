"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechFlow Solutions',
    content: 'CyberGuard transformed our security posture. Their risk assessment gave us the clarity we needed to prioritize our security roadmap effectively.',
    stars: 5
  },
  {
    name: 'David Chen',
    role: 'Founder, EcoScale',
    content: 'As a fast-growing startup, we needed security that could scale with us. The continuous monitoring service provides peace of mind 24/7.',
    stars: 5
  },
  {
    name: 'Michael Roberts',
    role: 'Operations Director, Global logistics',
    content: 'The team at CyberGuard is professional and deeply knowledgeable. They made compliance simple and straightforward for our entire team.',
    stars: 5
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
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" variant="white">
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>What Our Clients Say</h2>
        <p className={styles.subtext}>Trusted by innovative companies worldwide.</p>
      </motion.div>
      <motion.div 
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} variants={item}>
            <Card className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <Quote size={32} />
              </div>
              <div className={styles.stars}>
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className={styles.content}>&quot;{testimonial.content}&quot;</p>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <span className={styles.authorRole}>{testimonial.role}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Testimonials;
