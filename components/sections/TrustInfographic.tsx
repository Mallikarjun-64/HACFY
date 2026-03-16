"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Shield, Monitor, Wrench, FileText, ShieldCheck } from 'lucide-react';
import styles from './TrustInfographic.module.css';

const trustItems = [
  {
    title: "Experienced Security Analysts",
    description: "Real-world offensive security expertise",
    icon: Users,
    color: "#3b82f6",
    angle: -135,
    align: 'left'
  },
  {
    title: "Deep OWASP & Attack Vector Understanding",
    description: "OWASP Top 10 and modern attack vectors",
    icon: Monitor,
    color: "#0ea5e9",
    angle: -45,
    align: 'right'
  },
  {
    title: "Manual & Advanced Tools",
    description: "Hands-on testing with advanced automated tools",
    icon: Wrench,
    color: "#f59e0b",
    angle: 0,
    align: 'right'
  },
  {
    title: "Responsible Testing Methodology",
    description: "Safe and ethical penetration testing",
    icon: Shield,
    color: "#10b981",
    angle: 45,
    align: 'right'
  },
  {
    title: "Practical Remediation Guidance",
    description: "Actionable guidance, not just vulnerability listings",
    icon: ShieldCheck,
    color: "#8b5cf6",
    angle: 135,
    align: 'left'
  },
  {
    title: "Clear, Executive-Friendly Reporting",
    description: "Technical findings — with actionable insights",
    icon: FileText,
    color: "#ec4899",
    angle: 180,
    align: 'left'
  }
];

const TrustInfographic: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.radialWrapper}>
        <motion.div 
          className={styles.ringInner}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        ></motion.div>
        <motion.div 
          className={styles.ringOuter}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.div 
          className={styles.centerNode}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          <div style={{ position: 'relative', width: '78%', height: '78%', padding: '20px' }}>
            <Image 
              src="/images/hacfy.webp" 
              alt="HacFy Logo" 
              fill 
              sizes="(max-width: 160px) 100vw, 160px"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </motion.div>

        {trustItems.map((item, index) => {
          const radius = 240;
          const x = Math.cos((item.angle * Math.PI) / 180) * radius;
          const y = Math.sin((item.angle * Math.PI) / 180) * radius;

          const isLeft = item.align === 'left';

          return (
            <motion.div
              key={index}
              className={styles.nodeWrapper}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              } as any}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div 
                className={styles.iconNode} 
              >
                <item.icon size={28} />
              </div>
              
              <div 
                className={styles.content}
                style={{
                  [isLeft ? 'right' : 'left']: '80px',
                  textAlign: isLeft ? 'right' : 'left',
                } as any}
              >
                <h4 className={styles.nodeTitle}>{item.title}</h4>
                <p className={styles.nodeDesc}>{item.description}</p>
              </div>

              <div 
                className={styles.connectorLine}
                style={{
                  [isLeft ? 'right' : 'left']: '40px',
                  width: '40px'
                } as any}
              >
                <div className={styles.dot} style={{ [isLeft ? 'left' : 'right']: '-3px' }} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustInfographic;
