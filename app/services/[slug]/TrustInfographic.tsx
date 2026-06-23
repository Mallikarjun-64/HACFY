'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock } from 'lucide-react';
import styles from './ServicePage.module.css';

// Illustrations matching the reference style
const ExperiencedIcon = ({ color }: { color: string }) => (
  <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="12" r="6" stroke={color} strokeWidth="1.5"/>
    <path d="M32 32C32 26.4772 26.6274 22 20 22C13.3726 22 8 26.4772 8 32" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M30 18V8C30 6.89543 29.1046 6 28 6H12C10.8954 6 10 6.89543 10 8V18" stroke={color} strokeWidth="1.5"/>
  </svg>
);

const OWASPIcon = ({ color }: { color: string }) => (
  <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="28" height="18" rx="3" stroke={color} strokeWidth="1.5"/>
    <path d="M12 32H28M20 26V32" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 14L16 17L12 20M20 20H26" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ToolsIconRed = ({ color }: { color: string }) => (
  <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="28" height="20" rx="3" stroke={color} strokeWidth="1.5"/>
    <path d="M6 24H34" stroke={color} strokeWidth="1.5"/>
    <circle cx="15" cy="17" r="4" stroke={color} strokeWidth="1.5"/>
    <path d="M18 20L23 25" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const MethodologyIcon = ({ color }: { color: string }) => (
  <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 8.5a1.5 1.5 0 0 0 0 2.1l2.4 2.4a1.5 1.5 0 0 0 2.1 0l5.65-5.65a9 9 0 1 1-11.9 11.9l-10.36 10.36a3.18 3.18 0 0 1-4.5-4.5l10.36-10.36a9 9 0 0 1 11.9-11.9l-5.64 5.64z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="25" cy="24" r="4" stroke={color} strokeWidth="1.5"/>
  </svg>
);

const ToolsIconBlue = ({ color }: { color: string }) => (
  <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 34C20 34 32 28 32 19V8.5L20 4L8 8.5V19C8 28 20 34 20 34Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.5 19L18.5 22L24.5 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="19" r="12" stroke={color} strokeWidth="1" strokeDasharray="3 3"/>
  </svg>
);

const RemediationIcon = ({ color }: { color: string }) => (
  <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 34C20 34 32 28 32 19V8.5L20 4L8 8.5V19C8 28 20 34 20 34Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="20" r="6" stroke={color} strokeWidth="1.5"/>
    <path d="M20 16V20L23 23" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ReportingIcon = ({ color }: { color: string }) => (
  <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 6H12C10.3431 6 9 7.34315 9 9V31C9 32.6569 10.3431 34 12 34H28C29.6569 34 31 32.6569 31 31V9C31 7.34315 29.6569 6 28 6Z" stroke={color} strokeWidth="1.5"/>
    <path d="M13 12H27M13 18H27M13 24H21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="22" y="22" width="6" height="6" stroke={color} strokeWidth="1.5"/>
  </svg>
);

const trustItems = [
  {
    title: "Experienced Security Analysts",
    description: "Real-world offensive security expertise",
    icon: ExperiencedIcon,
    color: "#3b82f6", // Blue
    angle: -135, // Top-Left
    labelPos: styles.labelTopLeft
  },
  {
    title: "Deep OWASP & Attack Vector Understanding",
    description: "OWASP Top 10 and modern attack vectors",
    icon: OWASPIcon,
    color: "#f97316", // Orange
    angle: -45, // Top-Right
    labelPos: styles.labelTopRight
  },
  {
    title: "Manual & Advanced Tools",
    description: "Hands-on testing with advanced automated tools",
    icon: ToolsIconRed,
    color: "#ef4444", // Red
    angle: 0, // Mid-Right
    labelPos: styles.labelMidRight
  },
  {
    title: "Responsible Testing Methodology",
    description: "Safe and ethical penetration testing",
    icon: MethodologyIcon,
    color: "#8b5cf6", // Purple
    angle: 45, // Bottom-Right
    labelPos: styles.labelBottomRight
  },
  {
    title: "Manual & Advanced Tools",
    description: "Hands-on testing with advanced automated tools",
    icon: ToolsIconBlue,
    color: "#3b82f6", // Blue
    angle: 90, // Bottom
    labelPos: styles.labelBottom
  },
  {
    title: "Practical Remediation Guidance",
    description: "Actionable guidance, not just vulnerability listings",
    icon: RemediationIcon,
    color: "#22c55e", // Green
    angle: 135, // Bottom-Left
    labelPos: styles.labelBottomLeft
  },
  {
    title: "Clear, Executive-Friendly Reporting",
    description: "Technical findings — with actionable insights",
    icon: ReportingIcon,
    color: "#06b6d4", // Cyan
    angle: 180, // Mid-Left
    labelPos: styles.labelMidLeft
  }
];

export default function TrustInfographic() {
  const radius = 300; 
  const innerRadius = 180;

  // Function to create an SVG arc
  const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
  }

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  return (
    <div className={styles.trustBox}>
      <h3 className={styles.trustBoxTitle}>Why organizations trust HacFy:</h3>
      <div className={styles.infographicWrapper}>
        <div className={styles.infographicContainer}>
          
          {/* SVG Layer for Rings and Arcs */}
          <svg className={styles.orbitalSvg} viewBox="0 0 1000 1000">
            {/* Base concentric rings */}
            <circle cx="500" cy="500" r="180" stroke="#f1f5f9" strokeWidth="1.5" fill="none" />
            <circle cx="500" cy="500" r="300" stroke="#f8fafc" strokeWidth="1.5" fill="none" />
            <circle cx="500" cy="500" r="420" stroke="#f8fafc" strokeWidth="1" fill="none" />

            {/* Connecting arcs and dots */}
            {trustItems.map((item, i) => {
              const nextItem = trustItems[(i + 1) % trustItems.length];
              
              const dot = polarToCartesian(500, 500, innerRadius, item.angle);
              const lineStart = polarToCartesian(500, 500, innerRadius, item.angle);
              const lineEnd = polarToCartesian(500, 500, radius, item.angle);

              return (
                <g key={i}>
                  {/* Colored Arc segment on inner ring */}
                  <path 
                    d={describeArc(500, 500, innerRadius, item.angle, nextItem.angle)} 
                    stroke={item.color} 
                    strokeWidth="3" 
                    fill="none" 
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                  
                  {/* Line from inner dot to satellite */}
                  <line 
                    x1={lineStart.x} y1={lineStart.y} 
                    x2={lineEnd.x} y2={lineEnd.y} 
                    stroke="#e2e8f0" 
                    strokeWidth="1.5" 
                  />
                  
                  {/* Colored dot on inner ring */}
                  <circle cx={dot.x} cy={dot.y} r="6" fill={item.color} stroke="white" strokeWidth="2" />
                </g>
              );
            })}
          </svg>

          {/* Center Hub */}
          <motion.div 
            className={styles.centerContainer}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.centerShield}>
              <Shield size={80} fill="#911A20" strokeWidth={1} color="#911A20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Lock size={32} color="white" fill="white" />
              </div>
            </div>
            <span className={styles.centerBrand}>HacFy</span>
          </motion.div>

          {/* Orbital Satellite Items */}
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            const rad = (item.angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);

            return (
              <motion.div
                key={index}
                className={styles.satelliteWrapper}
                style={{ 
                  left: `calc(50% + ${x}px)`, 
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)' 
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className={styles.satelliteIcon} 
                  style={{ borderColor: item.color }}
                >
                  <Icon color={item.color} />
                </div>
                
                {/* Text Label */}
                <div className={`${styles.labelContainer} ${item.labelPos}`}>
                  <h4 className={styles.satelliteTitle}>{item.title}</h4>
                  <p className={styles.satelliteText}>{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
