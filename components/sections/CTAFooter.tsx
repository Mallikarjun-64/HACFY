"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import styles from './CTAFooter.module.css';

const CTAFooter: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormState('success');
  };

  return (
    <Section id="contact" variant="slate-50" className={styles.ctaSection}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.textContainer}>
          <h2 className={styles.headline}>Ready to Gain Clear Visibility?</h2>
          <p className={styles.subtext}>Clarity today prevents incidents tomorrow. Get in touch with our security experts.</p>
        </div>

        <Card className={styles.formCard}>
          {formState === 'success' ? (
            <motion.div 
              className={styles.successMessage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle2 size={64} className={styles.successIcon} />
              <h3>Message Sent Successfully!</h3>
              <p>Our team will get back to you within 24 hours.</p>
              <Button variant="outline" onClick={() => setFormState('idle')}>Send Another Message</Button>
            </motion.div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@company.com" required />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="subject">Subject</label>
                <select id="subject">
                  <option>Cyber Risk Assessment</option>
                  <option>Continuous Monitoring</option>
                  <option>Compliance Audit</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} placeholder="Tell us about your security needs..." required></textarea>
              </div>
              <Button 
                type="submit" 
                variant="primary" 
                className={styles.submitBtn}
                disabled={formState === 'submitting'}
              >
                {formState === 'submitting' ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </Button>
            </form>
          )}
        </Card>
      </motion.div>
    </Section>
  );
};

export default CTAFooter;
