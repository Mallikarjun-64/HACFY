'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowLeft, 
  Server, 
  Cloud, 
  Database, 
  AppWindow, 
  Mail, 
  Cpu, 
  ShieldCheck, 
  Users,
  ChevronRight,
  Shield,
  Zap,
  Lock,
  Target
} from 'lucide-react';
import { Service } from '@/lib/services-data';
import styles from './ServicePage.module.css';

const iconMap: Record<string, any> = {
  Server, Cloud, Database, AppWindow, Mail, Cpu, ShieldCheck, Users
};

const featureIcons = [Shield, Zap, Lock, Target];

export default function ServicePageClient({ service }: { service: Service }) {
  const containerRef = useRef(null);

  // 3D Tilt Effect
  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  return (
    <main className={styles.mainContainer} ref={containerRef}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <Link href="/#services" className={styles.backButton}>
          <ArrowLeft size={20} />
          Back to Services
        </Link>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <motion.div 
          className={styles.contentSide}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className={styles.title}>{service?.title}</h1>
          <p className={styles.description}>
            {service?.fullDetails}
          </p>
        </motion.div>

        <div className={styles.imageSide}>
          <motion.div 
            className={styles.imageContainer}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
          >
            <Image
              src={service?.image || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'}
              alt={service?.title || 'Service Image'}
              fill
              className={styles.image}
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className={styles.imageOverlay} />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.featureSection}>
        <div className={styles.featureGrid}>
          {service?.features?.map((feature, index) => {
            const FeatureIcon = featureIcons[index % featureIcons.length];
            return (
              <motion.div 
                key={feature}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.featureIcon}>
                  <FeatureIcon size={32} />
                </div>
                <h3 className={styles.featureTitle}>{feature}</h3>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <motion.div 
          className={styles.ctaCard}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.ctaTitle}>Ready to secure your {service?.title?.toLowerCase()}?</h2>
          <p className={styles.ctaText}>
            Get in touch with our security experts to discuss your project requirements and get a custom quote.
          </p>
          <Link href="/contact" className={styles.startProjectBtn}>
            Start Project
            <ChevronRight size={20} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
