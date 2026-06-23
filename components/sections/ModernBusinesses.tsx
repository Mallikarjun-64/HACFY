"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Database, 
  Globe, 
  Lock, 
  Zap, 
  UserCheck, 
  Truck, 
  Search, 
  Layers,
  Cpu,
  CheckSquare,
  Activity,
  PlayCircle,
  Settings,
  FileText,
  Bell,
  Monitor,
  Share2
} from 'lucide-react';
import Section from '@/components/ui/Section';
import styles from './ModernBusinesses.module.css';

const dataSources = [
  { icon: <Lock size={16} />, label: 'Darkweb Intel' },
  { icon: <Globe size={16} />, label: 'Brand Intelligence' },
  { icon: <Database size={16} />, label: 'Data Leaks' },
  { icon: <Search size={16} />, label: 'API Scanners' },
  { icon: <Zap size={16} />, label: 'App Scanners' },
  { icon: <UserCheck size={16} />, label: 'Employee Telemetry' },
  { icon: <Truck size={16} />, label: 'Supply Chain' },
  { icon: <Shield size={16} />, label: 'Threat Intel' },
  { icon: <Layers size={16} />, label: 'Any Data Source' },
];

const aiAgents = [
  { icon: <Cpu size={24} />, label: 'Prediction' },
  { icon: <CheckSquare size={24} />, label: 'Validation' },
  { icon: <Activity size={24} />, label: 'Triage' },
  { icon: <PlayCircle size={24} />, label: 'Simulation' },
];

const applications = [
  { icon: <Lock size={22} />, label: 'Dark Web Monitoring' },
  { icon: <Shield size={22} />, label: 'Attack Surface Monitoring' },
  { icon: <Truck size={22} />, label: 'Supply Chain Monitoring' },
  { icon: <Globe size={22} />, label: 'Brand Monitoring' },
];

const outputs = [
  { icon: <Share2 size={28} />, label: 'Integrations' },
  { icon: <FileText size={28} />, label: 'Reporting' },
  { icon: <Bell size={28} />, label: 'Alerts' },
  { icon: <Monitor size={28} />, label: 'Dashboard' },
];

const PREMIUM_EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: PREMIUM_EASE,
    },
  },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const ModernBusinesses: React.FC = () => {
  return (
    <Section id="platform" variant="slate-50">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: PREMIUM_EASE }}
        >
          <h2 className={styles.title}>Built for Modern Businesses</h2>
        </motion.div>

        <motion.div 
          className={styles.diagramContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* External Animated SVG Connections (Pipes) */}
          <svg className={styles.backgroundSvg} viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
            {/* Base Pipes Left to Center */}
            <path d="M220 100 Q 300 300 400 300" className={styles.pipeBase} />
            <path d="M220 200 Q 300 300 400 300" className={styles.pipeBase} />
            <path d="M220 300 L 400 300" className={styles.pipeBase} />
            <path d="M220 400 Q 300 300 400 300" className={styles.pipeBase} />
            <path d="M220 500 Q 300 300 400 300" className={styles.pipeBase} />
            
            {/* Flowing Data */}
            <path d="M220 100 Q 300 300 400 300" className={styles.flowPath} />
            <path d="M220 200 Q 300 300 400 300" className={styles.flowPath} />
            <path d="M220 300 L 400 300" className={styles.flowPath} />
            <path d="M220 400 Q 300 300 400 300" className={styles.flowPath} />
            <path d="M220 500 Q 300 300 400 300" className={styles.flowPath} />
            
            {/* Base Pipes Center to Right */}
            <path d="M1000 300 Q 1050 300 1100 150" className={styles.pipeBase} />
            <path d="M1000 300 Q 1050 300 1100 250" className={styles.pipeBase} />
            <path d="M1000 300 Q 1050 300 1100 350" className={styles.pipeBase} />
            <path d="M1000 300 Q 1050 300 1100 450" className={styles.pipeBase} />

            {/* Flowing Data */}
            <path d="M1000 300 Q 1050 300 1100 150" className={styles.flowPath} />
            <path d="M1000 300 Q 1050 300 1100 250" className={styles.flowPath} />
            <path d="M1000 300 Q 1050 300 1100 350" className={styles.flowPath} />
            <path d="M1000 300 Q 1050 300 1100 450" className={styles.flowPath} />
          </svg>

          {/* Left Column - Data Sources */}
          <div className={styles.dataSources}>
            {dataSources.map((source, index) => (
              <motion.div 
                key={index} 
                className={styles.sourceItem} 
                variants={itemVariants}
                whileHover={{ 
                  x: 10, 
                  scale: 1.05, 
                  boxShadow: "0 10px 20px rgba(218, 21, 21, 0.1)",
                  color: "#DA1515F3",
                  borderColor: "#DA1515F3"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={styles.sourceIcon}>{source.icon}</span>
                <span>{source.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Data Pipe */}
          <motion.div 
            className={styles.dataPipeWrapper} 
            variants={itemVariants}
            animate={floatingAnimation}
          >
            <motion.div 
              className={styles.dataPipe}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -2, 2, 0],
                boxShadow: "0 15px 30px rgba(218, 21, 21, 0.6)"
              }}
              transition={{ duration: 0.3 }}
            >
              Data Pipe
            </motion.div>
          </motion.div>

          {/* Main Platform Box */}
          <motion.div 
            className={styles.platformBox} 
            variants={itemVariants}
          >
            
            {/* AI Agents Section */}
            <motion.div className={styles.platformSection} variants={itemVariants}>
              <div className={styles.sectionLabel}>AI Agents</div>
              <svg className={styles.internalSvg} viewBox="0 0 600 100" fill="none">
                <path d="M100 50 L 500 50" className={styles.pipeBase} />
                <path d="M100 50 L 500 50" className={styles.flowPath} />
              </svg>
              <div className={styles.aiAgentsRow}>
                {aiAgents.map((agent, index) => (
                  <motion.div 
                    key={index} 
                    className={styles.agentNode} 
                    variants={itemVariants}
                    animate={{
                      y: [0, -5, 0],
                      transition: {
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <motion.div 
                      className={styles.agentIcon}
                      whileHover={{ 
                        scale: 1.25, 
                        rotate: 360,
                        backgroundColor: "#DA1515F3",
                        boxShadow: "0 0 25px rgba(218, 21, 21, 0.8)"
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {agent.icon}
                    </motion.div>
                    <span className={styles.agentLabel}>{agent.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Cyber Threat Events Section */}
            <motion.div className={styles.platformSection} variants={itemVariants}>
              <div className={styles.sectionLabel}>Cyber Threat Events</div>
              <svg className={styles.internalSvg} viewBox="0 0 600 100" fill="none">
                <path d="M300 50 L 150 50" className={styles.pipeBase} />
                <path d="M300 50 L 450 50" className={styles.pipeBase} />
                <path d="M300 50 L 150 50" className={styles.flowPath} />
                <path d="M300 50 L 450 50" className={styles.flowPath} />
              </svg>
              <div className={styles.threatRow}>
                <motion.div 
                  className={styles.threatNode} 
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className={styles.threatIconCircle}
                    whileHover={{ scale: 1.15, borderColor: "#DA1515F3", color: "#DA1515F3" }}
                  >
                    <Layers size={30} />
                  </motion.div>
                  <span className={styles.agentLabel}>Threat Graphs</span>
                </motion.div>

                <motion.div 
                  className={styles.threatNode} 
                  variants={itemVariants}
                >
                  <motion.div 
                    className={`${styles.threatIconCircle} ${styles.apiIcon}`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 90,
                      boxShadow: "0 0 40px rgba(218, 21, 21, 0.5)"
                    }}
                  >
                    <Settings size={40} />
                  </motion.div>
                  <span className={styles.agentLabel}>API</span>
                </motion.div>

                <motion.div 
                  className={styles.threatNode} 
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className={styles.threatIconCircle}
                    whileHover={{ scale: 1.15, borderColor: "#DA1515F3", color: "#DA1515F3" }}
                  >
                    <Shield size={30} />
                  </motion.div>
                  <span className={styles.agentLabel}>Threat Events</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom Section - Apps & Use Cases */}
            <motion.div className={styles.platformSection} variants={itemVariants}>
              <div className={styles.statsHeader}>
                <span className={styles.statItem}>18+ Applications</span>
                <span className={styles.statItem}>170 Use Cases</span>
              </div>
              <div className={styles.appsGrid}>
                {applications.map((app, index) => (
                  <motion.div 
                    key={index} 
                    className={styles.appCard} 
                    variants={itemVariants}
                    whileHover={{ 
                      y: -12, 
                      scale: 1.02,
                      background: "linear-gradient(135deg, #DA1515F3 0%, #911A20 100%)",
                      boxShadow: "0 25px 50px -12px rgba(218, 21, 21, 0.5)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className={styles.appIcon}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                    >
                      {app.icon}
                    </motion.div>
                    <span className={styles.appLabel}>{app.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Outputs */}
          <div className={styles.outputs}>
            {outputs.map((output, index) => (
              <motion.div 
                key={index} 
                className={styles.outputCard} 
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  x: -10,
                  borderColor: "#DA1515F3",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className={styles.outputIcon}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {output.icon}
                </motion.div>
                <span className={styles.outputLabel}>{output.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ModernBusinesses;
