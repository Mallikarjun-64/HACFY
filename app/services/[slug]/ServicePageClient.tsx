'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ChevronRight,
  Shield,
  Zap,
  Lock,
  Target,
  CheckCircle2,
  Check,
  Search,
  Users,
  FileText,
  Handshake,
  Settings,
  ChevronDown,
  ChevronUp,
  Activity,
  Code,
  Globe,
  Smartphone,
  Server,
  Monitor,
  Cpu,
  ArrowRight,
  Wifi,
  Mail,
  Cloud,
  ShieldCheck
} from 'lucide-react';

import { Service, Feature, services } from '@/lib/services-data';
import TrustInfographic from '@/components/sections/TrustInfographic';
import styles from './ServicePage.module.css';

const iconMap: Record<string, React.ComponentType<any>> = {
  Lock,
  Shield,
  Search,
  FileText,
  Handshake,
  Settings,
  Target,
  Users,
  Zap,
  Globe,
  Smartphone,
  Activity,
  Monitor,
  Server,
  Cpu,
  Wifi,
  Mail,
  Cloud,
  ShieldCheck
};

const FAQAccordion = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 800, 
          color: '#0f172a',
          position: 'relative',
          display: 'inline-block',
          paddingBottom: '10px'
        }}>
          FAQ
          <div style={{ 
            position: 'absolute', 
            bottom: 0, 
            left: '50%', 
            transform: 'translateX(-50%)', 
            width: '40px', 
            height: '3px', 
            backgroundColor: '#DA1515F3' 
          }} />
        </h2>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: '16px' }}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 0',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            <span style={{ 
              fontSize: '1.125rem', 
              fontWeight: 600, 
              color: '#1e293b' 
            }}>
              {faq.question}
            </span>
            {openIndex === index ? (
              <ChevronUp size={20} color="#64748b" />
            ) : (
              <ChevronDown size={20} color="#64748b" />
            )}
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ 
                  padding: '24px', 
                  backgroundColor: '#F9FAFB', 
                  borderRadius: '8px',
                  marginBottom: '20px',
                  color: '#475569',
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}>
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default function ServicePageClient({ service }: { service: Service }) {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const parentSlugs = ['applications', 'infrastructure', 'cloud', 'email-security', 'iot-hardware', 'soc-maturity'];
  const isParentService = parentSlugs.includes(service.slug);

  // Find the parent service if this is a sub-service
  const parentService = services.find(parent => 
    parent.features && typeof parent.features[0] === 'object' && 
    (parent.features as Feature[]).some(f => f.slug === service.slug)
  );

  const backHref = isParentService ? '/#cybersecurity-services' : (parentService ? `/services/${parentService.slug}` : '/#cybersecurity-services');
  const backText = isParentService ? 'Back to Services' : (parentService ? `Back to ${parentService.title}` : 'Back to Services');

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
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const listItemHover = { 
    scale: 1.02, 
    x: 10, 
    backgroundColor: '#f8fafc',
    transition: { duration: 0.2 } 
  };

  // ==========================================
  // RENDER PARENT SERVICE SELECTOR PAGE
  // ==========================================
  if (isParentService) {
    return (
      <main className={styles.mainContainer}>
        <nav className={styles.nav}>
          <Link href="/#cybersecurity-services" className={styles.backButton}>
            <ArrowLeft size={20} />
            Back to Services
          </Link>
        </nav>

        <header className={styles.applicationsHero}>
          <motion.div
            className={styles.webAppHeroContent}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badge}>Services</span>
            <h1 className={styles.appHeroTitle}>{service.title}</h1>
            <p className={styles.appHeroDescription}>{service.description}</p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className={styles.primaryBtn}>
                GET IN TOUCH
              </Link>
              <Link href="/#cybersecurity-services" className={styles.secondaryBtn}>
                All Services
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className={styles.appHeroImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
              <div className={styles.imageContainer} style={{ aspectRatio: '1/1', background: 'transparent', boxShadow: 'none' }}>
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'radial-gradient(circle, rgba(218, 21, 21, 0.05) 0%, transparent 70%)'
                }}>
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={400}
                      className={styles.illustration}
                      priority
                    />
                  </motion.div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    className={styles.floatingIcon}
                    style={{ top: '20%', right: '10%' }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Shield size={24} color="#DA1515F3" fill="rgba(218, 21, 21, 0.1)" />
                    <span>Secure</span>
                  </motion.div>

                  <motion.div 
                    className={styles.floatingIcon}
                    style={{ bottom: '20%', left: '10%' }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <Lock size={24} color="#DA1515F3" fill="rgba(218, 21, 21, 0.1)" />
                    <span>Protected</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </header>

        <section className={styles.serviceCardsSection}>
          {(service.features as Feature[]).map((feature, index) => {
            const title = feature.title;
            const slug = feature.slug;
            const FeatureIcon = slug === 'web-application' ? Globe : 
                                slug === 'mobile-application' ? Smartphone : 
                                slug === 'api-security-testing' || slug === 'api-application' ? Activity : 
                                slug === 'desktop-application' ? Monitor :
                                slug === 'server-vapt' ? Server :
                                slug === 'firewall-vapt' ? Shield :
                                slug === 'routers-switches-vapt' ? Cpu :
                                slug === 'security-configuration-review' ? Settings :
                                slug === 'aws-vapt' || slug === 'gcp-vapt' ? Cloud :
                                slug === 'email-security-phishing' ? Mail :
                                slug === 'wifi-penetration-testing' ? Wifi :
                                slug === 'smart-devices-security' ? Cpu :
                                slug === 'soc-maturity-assessment' ? ShieldCheck : Shield;

            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={slug ? `/services/${slug}` : '#'} className={styles.serviceCard}>
                  <div className={styles.serviceIconCircle} style={{ background: 'rgba(218, 21, 21, 0.05)', color: '#DA1515F3' }}>
                    <FeatureIcon size={28} />
                  </div>
                  <div className={styles.serviceCardContent}>
                    <h3 className={styles.serviceCardTitle}>{title}</h3>
                    <p className={styles.serviceCardDescription}>
                      Specialized security testing and vulnerability assessment for {title.toLowerCase()} environments.
                    </p>
                  </div>
                  <ChevronRight size={24} color="#CBD5E1" className={styles.chevronIcon} />
                </Link>
              </motion.div>
            );
          })}
        </section>

        <section className={styles.ctaSection}>
          <motion.div
            className={styles.ctaCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.ctaTitle}>Ready to secure your {service.title.toLowerCase()}?</h2>
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

  // ==========================================
  // RENDER DETAILED SUB-SERVICE PREMIUM PAGE
  // ==========================================
  const heroTitle = service.title.toLowerCase().startsWith('what is') ? service.title : `What is ${service.title}?`;
  const heroDesc = service.description;
  
  const whyTitle = service.whyTitle || "Why Choose HacFy?";
  const subIntroText = service.whyText || "Choosing the right security partner is critical. At HacFy, we deliver more than vulnerability reports — we deliver clarity, risk context, and actionable solutions.";
  
  const whyList = service.whyList || [
    "Experienced Security Analysts: Real-world offensive security expertise",
    "Deep OWASP & Attack Vector Understanding: OWASP Top 10 and modern attack vectors",
    "Manual & Advanced Tools: Hands-on testing with advanced automated tools",
    "Clear, Executive-Friendly Reporting: Technical findings — with actionable insights",
    "Practical Remediation Guidance: Actionable guidance, not just vulnerability listings",
    "Responsible Testing Methodology: Safe and ethical penetration testing"
  ];

  const methodologySteps = service.methodologySteps || [
    {
      tab: "Planning & Scoping",
      title: "Planning and Scoping",
      description: "We begin by defining objectives, scope, boundaries, timelines, and compliance requirements. This ensures the assessment aligns with your business goals and overall risk profile.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800"
    },
    {
      tab: "Reconnaissance",
      title: "Reconnaissance / Information Gathering",
      description: "Our team gathers intelligence to understand the application architecture, technologies, integrations, hosting environment, and potential entry points.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800"
    },
    {
      tab: "Reporting",
      title: "Reporting and Remediation",
      description: "We provide a comprehensive report including: Executive summary for leadership, Technical vulnerability details, Risk ratings and impact analysis, Step-by-step remediation guidance, and Re-test support after fixes are implemented.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
    }
  ];

  const benefits = service.benefits || [
    { text: "Identify vulnerabilities before attackers exploit them", icon: "Search" },
    { text: "Protect sensitive customer and organizational data", icon: "Lock" },
    { text: "Reduce risk of financial and reputational damage", icon: "Target" },
    { text: "Improve compliance readiness (ISO, PCI-DSS, SOC 2, etc.)", icon: "FileText" },
    { text: "Strengthen customer trust and brand credibility", icon: "Handshake" },
    { text: "Enhance overall security posture", icon: "Shield" }
  ];

  const faqs = service.faqs || [
    {
      question: "How long does a security assessment take?",
      answer: "The timeline depends on the size and complexity of the environment. Most assessments range from a few days to several weeks."
    },
    {
      question: "Will testing impact our live environment?",
      answer: "Our testing is carefully planned to minimise disruption. We coordinate closely with your team to ensure safe execution."
    },
    {
      question: "Do you provide re-testing after remediation?",
      answer: "Yes. HacFy offers validation testing to confirm that identified vulnerabilities have been properly fixed."
    }
  ];

  return (
    <main className={styles.mainContainer} ref={containerRef}>
      <nav className={styles.nav}>
        <Link href={backHref} className={styles.backButton}>
          <ArrowLeft size={20} />
          {backText}
        </Link>
      </nav>

      {/* Hero Section */}
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

      {/* Why Choose Section */}
      <section className={styles.whySection}>
        <h2 className={styles.whyTitle}>{whyTitle}</h2>
        <p className={styles.introText} style={{ marginInline: 'auto', marginBottom: '40px' }}>
          {subIntroText}
        </p>

        <TrustInfographic />

        <motion.div
          className={styles.boxedContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ marginTop: '4rem' }}
        >
          <h3 className={styles.boxHeading}>Service Highlights</h3>
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
      </section>

      {/* Methodology Section */}
      <section className={styles.methodologySection}>
        <h2 className={styles.methodologyTitle}>Our Industry Proven Methodology</h2>
        <p className={styles.introText} style={{ marginInline: 'auto', marginBottom: '40px', textAlign: 'center' }}>
          HacFy follows a structured and comprehensive penetration testing methodology designed to deliver measurable security improvements.
        </p>
        <div className={styles.methodologyBox}>
          <div className={styles.tabsContainer} style={{ gridTemplateColumns: `repeat(${methodologySteps.length}, 1fr)` }}>
            {methodologySteps.map((step, index) => (
              <button
                key={step.tab}
                className={`${styles.tabButton} ${activeStep === index ? styles.activeTab : ''}`}
                onClick={() => setActiveStep(index)}
                style={{ fontSize: '0.9rem', padding: '15px 10px' }}
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

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsContainer}>
          <header className={styles.centeredHeader}>
            <h2 className={styles.benefitsTitle}>Benefits of our {service.title}</h2>
          </header>
          
          <motion.div 
            className={styles.benefitsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {benefits.map((benefit, index) => {
              const BenefitIcon = iconMap[benefit.icon] || Shield;
              return (
                <motion.div 
                  key={index} 
                  className={styles.benefitItemTheme} 
                  variants={itemVariants}
                >
                  <div className={styles.iconWrapperTheme}>
                    <BenefitIcon size={24} />
                  </div>
                  <span className={styles.benefitTextTheme}>{benefit.text}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Custom Quote/Package Section */}
      <section className={styles.customPackageSection}>
        <motion.div 
          className={styles.customPackageBanner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.customPackageContent}>
            <h2 className={styles.customPackageTitle}>Get a Quote Today & Fortify Your Systems</h2>
            <p className={styles.customPackageDescription}>
              Cyber threats evolve every day. Waiting until after a breach is not a strategy. Partner with HacFy to proactively secure your assets with industry-grade security assessments.
            </p>
          </div>
          <Link href="/contact" className={styles.customPackageBtn}>
            Get a Quote
          </Link>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className={styles.introSection} style={{ marginBottom: '100px' }}>
        <FAQAccordion faqs={faqs} />
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <motion.div 
          className={styles.ctaCard}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.ctaTitle}>Ready to secure your {service.title.toLowerCase()}?</h2>
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
