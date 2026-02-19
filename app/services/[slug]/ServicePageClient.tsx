'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ChevronRight,
  Shield,
  Zap,
  Lock,
  Target,
  CheckCircle2,
  Check
} from 'lucide-react';
import { Service } from '@/lib/services-data';
import styles from './ServicePage.module.css';

const featureIcons = [Shield, Zap, Lock, Target];

export default function ServicePageClient({ service }: { service: Service }) {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const methodologySteps = [
    {
      tab: "1. Planning & Scoping",
      title: "1. Planning and Scoping",
      description: "We begin by defining objectives, scope, boundaries, timelines, and compliance requirements. This ensures the assessment aligns with your business goals and overall risk profile.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800"
    },
    {
      tab: "2. Reconnaissance",
      title: "2. Reconnaissance / Information Gathering",
      description: "Our team gathers intelligence to understand the application architecture, technologies, integrations, hosting environment, and potential entry points.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800"
    },
    {
      tab: "3. Mapping",
      title: "3. Mapping / Configuration Management",
      description: "We map application workflows, user roles, authentication mechanisms, and access control paths to understand how the system behaves under different scenarios.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800"
    },
    {
      tab: "4. Vulnerability Analysis",
      title: "4. Vulnerability Assessment / Analysis",
      description: "Using a combination of automated tools and deep manual testing techniques, we identify vulnerabilities based on industry frameworks such as OWASP Top 10. We also assess logic flaws and misconfigurations often missed by automated scanners.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800"
    },
    {
      tab: "5. Exploitation",
      title: "5. Exploitation",
      description: "We safely simulate real-world attack scenarios to validate vulnerabilities and measure their impact. This step helps determine the actual business risk associated with each finding.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
    },
    {
      tab: "6. Reporting",
      title: "6. Reporting and Remediation",
      description: "We provide a comprehensive report including:\n\n• Executive summary for leadership\n• Technical vulnerability details\n• Risk ratings and impact analysis\n• Step-by-step remediation guidance\n• Re-test support after fixes are implemented\n\nOur reports are clear, structured, and actionable — enabling your development and security teams to respond effectively.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
    }
  ];

  const faqs = [
    {
      question: "How long does a Web Application Penetration Test take?",
      answer: "The timeline depends on the size and complexity of the application. Most assessments range from a few days to several weeks."
    },
    {
      question: "Will testing impact our live environment?",
      answer: "Our testing is carefully planned to minimise disruption. We coordinate closely with your team to ensure safe execution."
    },
    {
      question: "Do you provide re-testing after remediation?",
      answer: "Yes. HacFy offers validation testing to confirm that identified vulnerabilities have been properly fixed."
    },
    {
      question: "Do you test against OWASP Top 10?",
      answer: "Yes. Our methodology aligns with OWASP standards and includes both automated and manual testing techniques."
    },
    {
      question: "Is the report suitable for compliance requirements?",
      answer: "Yes. Our reports are structured to support compliance audits and internal security reviews."
    }
  ];

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] // Custom easeOut
      }
    }
  };

  const listItemHover = { 
    scale: 1.02, 
    x: 10, 
    backgroundColor: '#f8fafc',
    transition: { duration: 0.2 } 
  };

  if (service.slug === 'web-application') {
    const sections = service.fullDetails.split('\n\n');
    
    // Parse content for custom layout
    const heroTitle = sections[0].replace(/^\d\.\s*/, '');
    const heroDesc = sections[1];
    const introText = sections[2];
    const whyTitle = sections[4]?.replace(/^\d\.\s*/, '') || "Why choose HacFy?";
    const subIntroText = sections[5];
    const whyListHeading = sections[6];
    const whyList = sections[7]?.split('\n').filter(line => line.trim().startsWith('•')).map(line => line.replace('•', '').trim()) || [];
    const closingText = sections[8];

    return (
      <main className={styles.mainContainer}>
        <nav className={styles.nav}>
          <Link href="/#services" className={styles.backButton}>
            <ArrowLeft size={20} />
            Back to Services
          </Link>
        </nav>

        {/* Custom Web App Hero */}
        <header className={styles.webAppHero}>
          <motion.div 
            className={styles.webAppHeroContent}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.webAppHeroTitle}>{heroTitle}</h1>
            <p className={styles.webAppHeroDescription}>{heroDesc}</p>
            <Link href="/contact" className={styles.heroCta}>
              GET IN TOUCH
            </Link>
          </motion.div>
          <motion.div 
            className={styles.webAppHeroImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -20, 0] 
            }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.2 },
              scale: { duration: 0.6, delay: 0.2 },
              y: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          >
            <div className={styles.imageContainer} style={{ aspectRatio: '16/10' }}>
               <Image
                src={service.image}
                alt={service.title}
                fill
                className={styles.image}
                priority
              />
            </div>
          </motion.div>
        </header>

        {/* Intro Section */}
        <section className={styles.introSection}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className={styles.introText}
          >
            <p>{introText}</p>
            {sections[3] && <p style={{ marginTop: '1.5rem' }}>{sections[3]}</p>}
          </motion.div>
        </section>

        {/* Why Section */}
        <section className={styles.whySection}>
          <h2 className={styles.whyTitle}>{whyTitle}</h2>
          <p className={styles.introText} style={{ marginInline: 'auto', marginBottom: '40px' }}>
            {subIntroText}
          </p>

          <motion.div 
            className={styles.boxedContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className={styles.boxHeading}>{whyListHeading}</h3>
            <motion.ul 
              className={styles.whyList}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {whyList.map((item, index) => (
                <motion.li 
                  key={index} 
                  className={styles.whyItem} 
                  variants={itemVariants}
                  whileHover={listItemHover}
                >
                  <CheckCircle2 className={styles.checkIcon} size={24} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {closingText && (
            <motion.p 
              className={styles.introText}
              style={{ marginTop: '4rem', marginInline: 'auto', textAlign: 'left' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {closingText}
            </motion.p>
          )}
        </section>

        {/* Methodology Section */}
        <section className={styles.methodologySection}>
          <h2 className={styles.methodologyTitle}>3. Our Industry-Proven Methodology</h2>
          <p className={styles.introText} style={{ marginInline: 'auto', marginBottom: '40px', textAlign: 'center' }}>
            HacFy follows a structured and comprehensive penetration testing methodology designed to deliver measurable security improvements.
          </p>
          <div className={styles.methodologyBox}>
            <div className={styles.tabsContainer}>
              {methodologySteps.map((step, index) => (
                <button
                  key={step.tab}
                  className={`${styles.tabButton} ${activeStep === index ? styles.activeTab : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  {step.tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={styles.tabContent}
              >
                <div className={styles.methodologyImage}>
                  <div className={styles.squareImageContainer}>
                    <Image
                      src={methodologySteps[activeStep].image}
                      alt={methodologySteps[activeStep].tab}
                      fill
                      className={styles.image}
                    />
                  </div>
                </div>
                <div className={styles.methodologyText}>
                  <h3 className={styles.stepTitle}>{methodologySteps[activeStep].title}</h3>
                  <p className={styles.stepDescription} style={{ whiteSpace: 'pre-line' }}>
                    {methodologySteps[activeStep].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Benefits Section - SaaS Split Layout */}
        <section className={styles.benefitsSection}>
          <div className={styles.centeredHeader}>
            <h2 className={styles.benefitsTitle}>4. Benefits of a Web Application Penetration Test</h2>
          </div>
          <div className={styles.benefitsContainer}>
            <div className={styles.benefitsLeft}>
              <p className={styles.benefitsIntroText}>
                Investing in a Web Application Penetration Test provides tangible business advantages:
              </p>
              
              <motion.div 
                className={styles.benefitsList}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {[
                  "Identify vulnerabilities before attackers exploit them",
                  "Protect sensitive customer and organizational data",
                  "Reduce risk of financial and reputational damage",
                  "Improve compliance readiness (ISO, PCI-DSS, SOC 2, etc.)",
                  "Strengthen customer trust and brand credibility",
                  "Enhance overall security posture"
                ].map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className={styles.benefitItem} 
                    variants={itemVariants}
                    whileHover={listItemHover}
                  >
                    <Check className={styles.benefitCheck} size={24} />
                    <span className={styles.benefitPointText}>{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className={styles.benefitsRight}>
              <div className={styles.saasCard}>
                <div className={styles.cardVisual}>
                  <Image
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800"
                    alt="Cybersecurity Visual"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.centeredFooter}>
            <p className={styles.strongCta}>
              At HacFy, we help you move from reactive security to proactive defence.
            </p>
          </div>
        </section>

        {/* New Call to Action Section 5 */}
        <section className={styles.introSection} style={{ marginTop: '100px', marginBottom: '100px' }}>
          <div className={styles.centeredHeader}>
            <h2 className={styles.benefitsTitle}>5. What Are You Waiting For? Get a Quote Today & Fortify Your Web Applications</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.introText}
            style={{ marginInline: 'auto', textAlign: 'center', maxWidth: '1000px' }}
          >
            <p>
              Cyber threats evolve every day. Waiting until after a breach is not a strategy.
              Partner with HacFy to proactively secure your web applications with industry-grade penetration testing.
              Our experts are ready to assess, identify, and help you remediate critical vulnerabilities before they impact your business.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              Contact us today for a customised quote and take the next step toward stronger security.
            </p>
          </motion.div>
        </section>

        {/* FAQ Section 6 */}
        <section className={styles.introSection} style={{ marginBottom: '100px' }}>
          <div className={styles.centeredHeader}>
            <h2 className={styles.benefitsTitle}>6. FAQs</h2>
          </div>
          <motion.div 
            style={{ maxWidth: '900px', margin: '0 auto' }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10, backgroundColor: '#ffffff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                style={{ 
                  marginBottom: '2rem', 
                  padding: '2rem', 
                  backgroundColor: '#f8fafc', 
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }}
              >
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 700, 
                  color: '#911A20', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#911A20', borderRadius: '50%' }} />
                  {faq.question}
                </h3>
                <p style={{ 
                  fontSize: '1.125rem', 
                  lineHeight: 1.6, 
                  color: '#475569',
                  paddingLeft: '20px'
                }}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
          <div className={styles.description}>
            {service?.fullDetails.split('\n\n').map((paragraph, i) => {
              const isHeading = paragraph.match(/^\d\./) || paragraph.endsWith('?') || paragraph.endsWith(':');
              const lines = paragraph.split('\n');
              const isList = lines.some(line => line.trim().startsWith('•'));
              
              if (isList) {
                return (
                  <div key={i} style={{ marginBottom: '1.5rem' }}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {lines.map((line, index) => (
                        <li key={index} style={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: '12px', 
                          marginBottom: '0.75rem',
                          color: '#475569',
                          fontSize: '1.125rem'
                        }}>
                          {line.trim().startsWith('•') ? (
                            <>
                              <span style={{ color: '#911A20', fontWeight: 'bold' }}>•</span>
                              {line.replace('•', '').trim()}
                            </>
                          ) : (
                            <span style={{ fontWeight: 600, color: '#911A20', marginBottom: '0.5rem', display: 'block', width: '100%' }}>
                              {line}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              return (
                <p 
                  key={i} 
                  style={{ 
                    marginBottom: i === service.fullDetails.split('\n\n').length - 1 ? 0 : '1.5rem',
                    fontWeight: isHeading ? 700 : 400,
                    color: isHeading ? '#911A20' : '#475569',
                    fontSize: isHeading ? '1.5rem' : '1.25rem'
                  }}
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
          <Link href="/contact" className={styles.heroCta}>
            GET IN TOUCH
          </Link>
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
            const isObject = typeof feature === 'object';
            const title = isObject ? feature.title : feature;
            const slug = isObject ? feature.slug : undefined;

            const content = (
              <>
                <div className={styles.featureIcon}>
                  <FeatureIcon size={32} />
                </div>
                <h3 className={styles.featureTitle}>{title}</h3>
                {slug && (
                  <div className={styles.viewDetails}>
                    Learn more <ChevronRight size={16} />
                  </div>
                )}
              </>
            );

            if (slug) {
              return (
                <motion.div 
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/services/${slug}`} className={`${styles.featureCard} ${styles.clickableCard}`}>
                    {content}
                  </Link>
                </motion.div>
              );
            }

            return (
              <motion.div 
                key={title}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {content}
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
