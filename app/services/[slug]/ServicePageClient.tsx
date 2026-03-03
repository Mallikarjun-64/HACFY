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
  ChevronUp
} from 'lucide-react';

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
              borderTop: index === 0 ? 'none' : 'none',
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
import { Service } from '@/lib/services-data';
import TrustInfographic from '@/components/sections/TrustInfographic';
import styles from './ServicePage.module.css';

const featureIcons = [Shield, Zap, Lock, Target];

export default function ServicePageClient({ service }: { service: Service }) {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const isWebApp = service.slug === 'web-application';
  const isDesktopApp = service.slug === 'desktop-application';
  const isMobileApp = service.slug === 'mobile-application';
  const isApiTesting = service.slug === 'api-security-testing';
  const isSubService = isWebApp || isDesktopApp || isMobileApp || isApiTesting;
  
  const backHref = isSubService ? '/services/applications' : '/#cybersecurity-services';
  const backText = isSubService ? 'Back to Applications' : 'Back to Services';

  const isSpecialPage = isWebApp || isDesktopApp;

  const methodologySteps = isDesktopApp ? [
    {
      tab: "Planning",
      title: "Planning & Information Gathering",
      description: "We define scope and testing objectives, understand the architecture and technology stack, and identify communication channels (HTTP/S, TCP, IPC, etc.).",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800"
    },
    {
      tab: "Analysis",
      title: "Vulnerability Analysis",
      description: "Static Analysis: Review binaries for hardcoded secrets and logic flaws.\nDynamic Analysis: Monitor runtime behavior including memory, file system, registry, and network traffic.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800"
    },
    {
      tab: "Testing",
      title: "Client-Side Control Testing",
      description: "We test client-side security controls and Inter-Process Communication (IPC) mechanisms for weaknesses that could be exploited locally.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800"
    },
    {
      tab: "Exploitation",
      title: "Exploitation & Privilege Escalation",
      description: "We test for DLL hijacking, insecure loading paths, and attempt injection attacks (SQL, Command, XML) to bypass authentication or licensing mechanisms.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800"
    },
    {
      tab: "Impact Assessment",
      title: "Business Impact Analysis",
      description: "We measure the potential business impact of identified vulnerabilities, ensuring risks are understood in the context of your specific software environment.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
    },
    {
      tab: "Reporting",
      title: "Reporting & Remediation",
      description: "We deliver a detailed report with CVSS severity ratings, proof of concept, and clear remediation guidance to help your developers fix vulnerabilities effectively.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
    }
  ] : [
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
      tab: "Mapping",
      title: "Mapping / Configuration Management",
      description: "We map application workflows, user roles, authentication mechanisms, and access control paths to understand how the system behaves under different scenarios.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800"
    },
    {
      tab: "Vulnerability Analysis",
      title: "Vulnerability Assessment / Analysis",
      description: "Using a combination of automated tools and deep manual testing techniques, we identify vulnerabilities based on industry frameworks such as OWASP Top 10. We also assess logic flaws and misconfigurations often missed by automated scanners.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800"
    },
    {
      tab: "Exploitation",
      title: "Exploitation",
      description: "We safely simulate real-world attack scenarios to validate vulnerabilities and measure their impact. This step helps determine the actual business risk associated with each finding.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
    },
    {
      tab: "Reporting",
      title: "Reporting and Remediation",
      description: "We provide a comprehensive report including:\n\n• Executive summary for leadership\n• Technical vulnerability details\n• Risk ratings and impact analysis\n• Step-by-step remediation guidance\n• Re-test support after fixes are implemented\n\nOur reports are clear, structured, and actionable — enabling your development and security teams to respond effectively.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
    }
  ];

  const faqs = isDesktopApp ? [
    {
      question: "Which operating systems do you support?",
      answer: "We test applications on Windows, macOS, and Linux environments."
    },
    {
      question: "Do you require source code?",
      answer: "Not necessarily. We can perform binary-level testing, but source code access enhances coverage and depth of the assessment."
    },
    {
      question: "Will testing impact production systems?",
      answer: "Testing is usually conducted in controlled environments to avoid operational disruption. We coordinate closely with your team."
    },
    {
      question: "How long does a desktop application penetration test take?",
      answer: "Typically 1–3 weeks depending on application complexity and the depth of testing required."
    },
    {
      question: "Do you provide remediation validation?",
      answer: "Yes. HacFy provides retesting services to confirm vulnerabilities have been effectively resolved by your development team."
    }
  ] : [
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

  if (isSpecialPage) {
    const sections = service.fullDetails.split('\n\n');
    
    // Parse content for custom layout
    const heroTitle = sections[0].replace(/^\d\.\s*/, '');
    const heroDesc = sections[1];
    
    // Support multiple intro paragraphs
    const introParagraphs = [];
    let currentIndex = 2;
    while (currentIndex < sections.length && !sections[currentIndex].match(/^\d\.\s*/) && !sections[currentIndex].toLowerCase().startsWith('why')) {
      introParagraphs.push(sections[currentIndex]);
      currentIndex++;
    }

    const whyTitle = sections[currentIndex]?.replace(/^\d\.\s*/, '') || "Why Choose HacFy?";
    currentIndex++;
    const subIntroText = sections[currentIndex];
    currentIndex++;
    const whyListHeading = sections[currentIndex];
    currentIndex++;
    
    // Support for list items starting with •
    const whyListLines = sections[currentIndex]?.split('\n') || [];
    const whyList = whyListLines.filter(line => line.trim().startsWith('•')).map(line => line.replace('•', '').trim());
    
    // If no bullet points found, handle as a single block (not ideal)
    currentIndex++;
    const closingText = sections[currentIndex];

    const serviceName = isWebApp ? 'Web Applications' : 'Desktop Applications';
    const singleServiceName = isWebApp ? 'Web Application' : 'Desktop Application';

    const benefits = isDesktopApp ? [
      { text: "Protect sensitive local and backend data", icon: Lock },
      { text: "Prevent privilege escalation attacks", icon: Shield },
      { text: "Reduce risk of reverse engineering and tampering", icon: Search },
      { text: "Ensure regulatory and compliance readiness", icon: FileText },
      { text: "Strengthen client-server communication security", icon: Handshake },
      { text: "Improve overall software resilience", icon: Settings }
    ] : [
      { text: "Identify vulnerabilities before attackers exploit them", icon: Search },
      { text: "Protect sensitive customer and organizational data", icon: Lock },
      { text: "Reduce risk of financial and reputational damage", icon: Target },
      { text: "Improve compliance readiness (ISO, PCI-DSS, SOC 2, etc.)", icon: FileText },
      { text: "Strengthen customer trust and brand credibility", icon: Handshake },
      { text: "Enhance overall security posture", icon: Shield }
    ];

    return (
      <main className={styles.mainContainer}>
        <nav className={styles.nav}>
          <Link href={backHref} className={styles.backButton}>
            <ArrowLeft size={20} />
            {backText}
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
        {/* <section className={styles.introSection}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className={styles.introText}
          > */}
            {/* {introParagraphs.map((para, i) => (
              <p key={i} style={{ marginTop: i > 0 ? '1.5rem' : 0 }}>{para}</p>
            ))}
          </motion.div>
        </section> */}

        {/* Why Section */}
        <section className={styles.whySection}>
          <h2 className={styles.whyTitle}>{whyTitle}</h2>
          <p className={styles.introText} style={{ marginInline: 'auto', marginBottom: '40px' }}>
            {subIntroText}
          </p>

          <TrustInfographic />
{/*           
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
          )} */}
        </section>

        {/* Methodology Section */}
        <section className={styles.methodologySection}>
          <h2 className={styles.methodologyTitle}>Our Industry Proven Methodology</h2>
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

        {/* Benefits Section - Theme Layout */}
        <section className={styles.benefitsSection}>
          <div className={styles.benefitsContainer}>
            <header className={styles.centeredHeader}>
              <h2 className={styles.benefitsTitle}>Benefits of a {singleServiceName} Penetration Test</h2>
            </header>
            
            <motion.div 
              className={styles.benefitsGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className={styles.benefitItemTheme} 
                  variants={itemVariants}
                >
                  <div className={styles.iconWrapperTheme}>
                    <benefit.icon size={24} />
                  </div>
                  <span className={styles.benefitTextTheme}>{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Custom Package Section */}
        <section className={styles.customPackageSection}>
          <motion.div 
            className={styles.customPackageBanner}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.customPackageContent}>
              <h2 className={styles.customPackageTitle}>Get a Quote Today & Fortify Your {serviceName}</h2>
              <p className={styles.customPackageDescription}>
                Cyber threats evolve every day. Waiting until after a breach is not a strategy. Partner with HacFy to proactively secure your {serviceName.toLowerCase()} with industry-grade penetration testing.
              </p>
            </div>
            <Link href="/contact" className={styles.customPackageBtn}>
              Get a Quote
            </Link>
          </motion.div>
        </section>

        {/* FAQ Section 6 */}
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

  if (service.slug === 'mobile-application') {
    const serviceName = 'Mobile Applications';
    const mobileMethodologySteps = [
      {
        tab: "Planning & Scoping",
        title: "Planning and Scoping",
        description: "We begin by understanding the application architecture and identifying Android and/or iOS platforms in scope. Compliance objectives including GDPR and PCI DSS are defined alongside testing timelines and reporting expectations. We then confirm testing boundaries, finalise the attack surface scope, set up secure testing environments, and define clear success criteria.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800"
      },
      {
        tab: "Reconnaissance",
        title: "Intelligence Gathering (Reconnaissance)",
        description: "Identifying the application package name and version, mapping backend endpoints, and conducting OSINT research across public repositories, exposed credentials, and forums. We also review third-party integrations to develop a comprehensive picture of the application's attack surface.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800"
      },
      {
        tab: "Static Analysis (SAST)",
        title: "Static Analysis (SAST)",
        description: "Decompiling and reviewing application binaries without execution to identify hardcoded secrets such as API keys, tokens, and credentials. We assess insecure configurations, weak cryptographic algorithms, improper certificate validation, and code obfuscation weaknesses to provide a comprehensive static security analysis.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800"
      },
      {
        tab: "Dynamic Analysis (DAST)",
        title: "Dynamic Analysis (DAST)",
        description: "Executing the application on physical or emulated devices to observe runtime behavior. Network traffic is captured and modified using tools like Burp Suite to test for insecure data transmission and API manipulation. Local data storage is inspected across shared preferences, SQLite databases, and temporary files. Security protections including SSL pinning, root/jailbreak detection, and runtime controls are systematically tested and bypassed to evaluate true resilience.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800"
      },
      {
        tab: "Exploitation",
        title: "Exploitation",
        description: "Actively exploiting identified vulnerabilities to determine real business impact. Our team tests for SQL Injection, authentication bypass, Insecure Direct Object Reference (IDOR), privilege escalation, and business logic flaws. This phase demonstrates how attackers could compromise data, accounts, or backend systems.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
      },
      {
        tab: "Reporting",
        title: "Reporting and Remediation",
        description: "HacFy delivers a detailed, executive-ready penetration testing report including technical vulnerability descriptions, Proof of Concept (PoC), risk severity based on CVSS scoring, business impact assessment, and step-by-step remediation guidance. We also provide post-remediation validation support to confirm vulnerabilities are properly resolved.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
      }
    ];

    const mobileFaqs = [
      {
        question: "How long does a mobile penetration test take?",
        answer: "Typically between 5–15 business days depending on app complexity, features, and scope."
      },
      {
        question: "Do you test both Android and iOS applications?",
        answer: "Yes. HacFy provides comprehensive security testing for both platforms."
      },
      {
        question: "Will testing affect live users?",
        answer: "Testing is usually conducted in staging environments. If production testing is required, it is carefully coordinated to avoid disruption."
      },
      {
        question: "Do you provide a compliance-ready report?",
        answer: "Yes. Our reports include risk ratings and documentation suitable for compliance audits (PCI DSS, GDPR, ISO)."
      },
      {
        question: "Can you re-test after fixes are implemented?",
        answer: "Absolutely. We provide remediation validation testing to confirm vulnerabilities are properly resolved."
      }
    ];

    return (
      <main className={styles.mainContainer}>
        <nav className={styles.nav}>
          <Link href={backHref} className={styles.backButton}>
            <ArrowLeft size={20} />
            {backText}
          </Link>
        </nav>

        <header className={styles.webAppHero}>
          <motion.div
            className={styles.webAppHeroContent}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.webAppHeroTitle}>What is a Mobile Application Penetration Test?</h1>
            <p className={styles.webAppHeroDescription}>
              A Mobile Application Penetration Test is a comprehensive security assessment performed on Android and iOS applications to identify vulnerabilities that could be exploited by attackers.
            </p>
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
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
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

        <section className={styles.introSection}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className={styles.introText}
          >
            <p>
              At HacFy, we simulate real-world attack scenarios to uncover security weaknesses in application source code and binaries, API integrations and backend communication, authentication and authorisation mechanisms, data storage and encryption practices, and business logic implementation.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              Our testing aligns with industry standards such as OWASP Mobile Top 10, ensuring your application is resilient against modern cyber threats while meeting compliance requirements like GDPR, PCI DSS, and ISO 27001.
            </p>
          </motion.div>
        </section>

        <section className={styles.whySection}>
          <h2 className={styles.whyTitle}>Why HacFy for Your Mobile Penetration Testing Services?</h2>
          <p className={styles.introText} style={{ marginInline: 'auto', marginBottom: '40px' }}>
            At HacFy, we go beyond automated scanning. Our assessments are conducted by experienced security professionals who perform deep manual testing combined with advanced tooling.
          </p>
          <motion.div
            className={styles.boxedContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className={styles.boxHeading}>Why Choose HacFy?</h3>
            <motion.ul
              className={styles.whyList}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                "Industry-aligned testing methodology (OWASP, NIST, PTES)",
                "Expertise in Android & iOS security testing",
                "Real-world attack simulation approach",
                "Detailed risk-based reporting with CVSS scoring",
                "Clear remediation guidance for development teams",
                "Secure handling of sensitive business data"
              ].map((item, index) => (
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
          <motion.p
            className={styles.introText}
            style={{ marginTop: '4rem', marginInline: 'auto', textAlign: 'left' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            We help organisations proactively detect and eliminate security gaps before attackers exploit them.
          </motion.p>
        </section>

        <section className={styles.methodologySection}>
          <h2 className={styles.methodologyTitle}>Our Industry-Proven Methodology</h2>
          <p className={styles.introText} style={{ marginInline: 'auto', marginBottom: '40px', textAlign: 'center' }}>
            At HacFy, we follow a structured and systematic testing approach to ensure complete coverage and measurable results.
          </p>
          <div className={styles.methodologyBox}>
            <div className={styles.tabsContainer}>
              {mobileMethodologySteps.map((step, index) => (
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
                <div className={styles.methodologyText}>
                  <h3 className={styles.stepTitle}>{mobileMethodologySteps[activeStep].title}</h3>
                  <p className={styles.stepDescription}>
                    {mobileMethodologySteps[activeStep].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.benefitsContainer}>
            <header className={styles.centeredHeader}>
              <h2 className={styles.benefitsTitle}>Benefits of a Mobile Application Penetration Test</h2>
            </header>
            <motion.div 
              className={styles.benefitsGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                { text: "Protect sensitive customer and business data", icon: Lock },
                { text: "Reduce risk of financial and reputational damage", icon: Target },
                { text: "Ensure regulatory compliance", icon: FileText },
                { text: "Secure application before public release", icon: Shield },
                { text: "Strengthen customer trust", icon: Handshake },
                { text: "Identify logic flaws beyond automated scanning", icon: Search }
              ].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className={styles.benefitItemTheme} 
                  variants={itemVariants}
                >
                  <div className={styles.iconWrapperTheme}>
                    <benefit.icon size={24} />
                  </div>
                  <span className={styles.benefitTextTheme}>{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Custom Package Section */}
        <section className={styles.customPackageSection}>
          <motion.div 
            className={styles.customPackageBanner}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.customPackageContent}>
              <h2 className={styles.customPackageTitle}>Get a Quote Today & Fortify Your {serviceName}</h2>
              <p className={styles.customPackageDescription}>
                Cyber threats evolve every day. Waiting until after a breach is not a strategy. Partner with HacFy to proactively secure your {serviceName.toLowerCase()} with industry-grade penetration testing.
              </p>
            </div>
            <Link href="/contact" className={styles.customPackageBtn}>
              Get a Quote
            </Link>
          </motion.div>
        </section>

        <section className={styles.introSection} style={{ marginBottom: '100px' }}>
          <FAQAccordion faqs={mobileFaqs} />
        </section>

        <section className={styles.ctaSection}>
          <motion.div
            className={styles.ctaCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.ctaTitle}>Ready to secure your mobile applications?</h2>
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

  if (service.slug === 'api-security-testing') {
    const serviceName = 'API Applications';
    const apiMethodologySteps = [
      {
        tab: "Planning & Recon",
        title: "Planning and Reconnaissance",
        description: "The assessment begins by defining scope, objectives, and rules of engagement. We gather detailed intelligence including API endpoints, base URLs, documentation files (Swagger / OpenAPI specifications), supported HTTP methods, authentication & authorization mechanisms, data formats (JSON, XML), and third-party integrations. This phase ensures full visibility into the API ecosystem before testing begins.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800"
      },
      {
        tab: "Vulnerability Analysis",
        title: "Discovery and Vulnerability Analysis",
        description: "We interact with the API to map the attack surface and identify potential weaknesses. Using a combination of automated tools (e.g., Burp Suite, OWASP ZAP) and advanced manual testing techniques, we assess vulnerabilities guided by the OWASP API Security Top 10. We look for Broken Object Level Authorization (BOLA), Broken Authentication, Excessive Data Exposure, Mass Assignment, Security Misconfigurations, Injection attacks, and Improper Rate Limiting.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800"
      },
      {
        tab: "Exploitation",
        title: "Exploitation",
        description: "HacFy safely exploits confirmed vulnerabilities to assess real-world impact. This includes testing for unauthorized data access, privilege escalation, account takeover, sensitive information disclosure, and denial-of-service risks. This step demonstrates how an attacker could abuse the API and quantifies the business impact.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
      },
      {
        tab: "Post-Exploitation",
        title: "Post-Exploitation",
        description: "We evaluate whether vulnerabilities can provide persistent access, allow lateral movement within systems, expose additional sensitive datasets, or escalate access to administrative privileges. This mimics advanced persistent threat (APT) scenarios and highlights systemic risks.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800"
      },
      {
        tab: "Reporting",
        title: "Reporting and Remediation",
        description: "HacFy delivers a detailed, executive-ready report including comprehensive vulnerability descriptions, Proof of Concept (PoC) evidence, severity ratings (CVSS scoring), business risk analysis, and clear remediation recommendations. We also provide secure coding best practice guidance and support development teams with remediation validation and re-testing services.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
      }
    ];

    const apiFaqs = [
      {
        question: "How long does an API penetration test take?",
        answer: "Typically between 5–12 business days depending on the number of endpoints and complexity of the API."
      },
      {
        question: "Do you test both internal and external APIs?",
        answer: "Yes. HacFy assesses public, partner-facing, and internal APIs."
      },
      {
        question: "Will testing impact production systems?",
        answer: "Testing is usually performed in staging environments. Production testing can be coordinated with proper safeguards."
      },
      {
        question: "Do you provide compliance-ready documentation?",
        answer: "Yes. Our reports include detailed risk analysis suitable for audits such as PCI DSS, ISO 27001, and GDPR."
      },
      {
        question: "Do you provide re-testing after remediation?",
        answer: "Yes. We validate fixes and provide confirmation reports after remediation."
      }
    ];

    return (
      <main className={styles.mainContainer}>
        <nav className={styles.nav}>
          <Link href={backHref} className={styles.backButton}>
            <ArrowLeft size={20} />
            {backText}
          </Link>
        </nav>

        <header className={styles.webAppHero}>
          <motion.div
            className={styles.webAppHeroContent}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.webAppHeroTitle}>What is an API Application Penetration Test?</h1>
            <p className={styles.webAppHeroDescription}>
              An API Application Penetration Test is a specialized security assessment focused on identifying vulnerabilities within Application Programming Interfaces (APIs). APIs power modern web, mobile, and cloud applications — making them a prime target for attackers.
            </p>
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
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
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

        <section className={styles.introSection}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className={styles.introText}
          >
            <p>
              At HacFy, we simulate real-world cyberattacks against your APIs to uncover weaknesses in authentication and authorization controls, data exposure and insecure object access, input validation and injection flaws, business logic vulnerabilities, and rate limiting and denial-of-service protections.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              Our testing methodology aligns with the OWASP API Security Top 10, ensuring your APIs remain secure, compliant, and resilient against evolving threats.
            </p>
          </motion.div>
        </section>

        <section className={styles.whySection}>
          <h2 className={styles.whyTitle}>Why HacFy for Your API Penetration Testing Services?</h2>
          <p className={styles.introText} style={{ marginInline: 'auto', marginBottom: '40px' }}>
            At HacFy, we combine deep technical expertise with real-world attack simulation to provide thorough API security assessments.
          </p>
          <motion.div
            className={styles.boxedContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className={styles.boxHeading}>Why Choose HacFy?</h3>
            <motion.ul
              className={styles.whyList}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                "Manual + automated hybrid testing approach",
                "Expertise in REST, SOAP, and GraphQL APIs",
                "Advanced authentication testing (OAuth 2.0, JWT, API Keys)",
                "Business logic flaw identification",
                "Detailed CVSS-based risk scoring",
                "Clear, developer-friendly remediation guidance",
                "Post-remediation re-testing support"
              ].map((item, index) => (
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
          <motion.p
            className={styles.introText}
            style={{ marginTop: '4rem', marginInline: 'auto', textAlign: 'left' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            We help organizations secure their APIs before attackers exploit them.
          </motion.p>
        </section>

        <section className={styles.methodologySection}>
          <h2 className={styles.methodologyTitle}>Our Industry-Proven Methodology</h2>
          <p className={styles.introText} style={{ marginInline: 'auto', marginBottom: '40px', textAlign: 'center' }}>
            HacFy follows a structured and comprehensive methodology to ensure complete API security coverage.
          </p>
          <div className={styles.methodologyBox}>
            <div className={styles.tabsContainer} style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
              {apiMethodologySteps.map((step, index) => (
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
                  <h3 className={styles.stepTitle}>{apiMethodologySteps[activeStep].title}</h3>
                  <p className={styles.stepDescription}>
                    {apiMethodologySteps[activeStep].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.benefitsContainer}>
            <header className={styles.centeredHeader}>
              <h2 className={styles.benefitsTitle}>Benefits of an API Application Penetration Test</h2>
            </header>
            <motion.div 
              className={styles.benefitsGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                { text: "Protect sensitive data from unauthorised access", icon: Lock },
                { text: "Meet regulatory and compliance requirements", icon: FileText },
                { text: "Secure APIs before production deployment", icon: Shield },
                { text: "Reduce risk of financial and reputational damage", icon: Target },
                { text: "Identify business logic vulnerabilities", icon: Search },
                { text: "Strengthen authentication and authorization mechanisms", icon: Handshake }
              ].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className={styles.benefitItemTheme} 
                  variants={itemVariants}
                >
                  <div className={styles.iconWrapperTheme}>
                    <benefit.icon size={24} />
                  </div>
                  <span className={styles.benefitTextTheme}>{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Custom Package Section */}
        <section className={styles.customPackageSection}>
          <motion.div 
            className={styles.customPackageBanner}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.customPackageContent}>
              <h2 className={styles.customPackageTitle}>Get a Quote Today & Fortify Your {serviceName}</h2>
              <p className={styles.customPackageDescription}>
                Cyber threats evolve every day. Waiting until after a breach is not a strategy. Partner with HacFy to proactively secure your {serviceName.toLowerCase()} with industry-grade penetration testing.
              </p>
            </div>
            <Link href="/contact" className={styles.customPackageBtn}>
              Get a Quote
            </Link>
          </motion.div>
        </section>

        <section className={styles.introSection} style={{ marginBottom: '100px' }}>
          <FAQAccordion faqs={apiFaqs} />
        </section>

        <section className={styles.ctaSection}>
          <motion.div
            className={styles.ctaCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.ctaTitle}>Ready to secure your API applications?</h2>
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
        <Link href={backHref} className={styles.backButton}>
          <ArrowLeft size={20} />
          {backText}
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
