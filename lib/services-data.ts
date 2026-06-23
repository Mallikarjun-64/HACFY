export interface Feature {
  title: string;
  slug?: string;
}

export interface MethodologyStep {
  tab: string;
  title: string;
  description: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Benefit {
  text: string;
  icon: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  fullDetails: string;
  icon: string;
  image: string;
  features: string[] | Feature[];
  hidden?: boolean;
  
  // Custom properties for the premium layout:
  whyTitle?: string;
  whyText?: string;
  whyList?: string[];
  methodologySteps?: MethodologyStep[];
  benefits?: Benefit[];
  faqs?: FAQ[];
}

export const services: Service[] = [
  // ==========================================
  // PARENT SERVICES (VISIBLE ON HOMEPAGE)
  // ==========================================
  {
    slug: 'applications',
    title: 'Applications',
    description: 'Web, mobile, and desktop applications, along with APIs, undergo structured security testing to detect vulnerabilities and logic flaws. Identified risks are validated and remediated to prevent exploitation and protect user data.',
    fullDetails: 'We perform thorough testing of your web and mobile applications using industry standards like OWASP. Our process includes dynamic (DAST) and static analysis (SAST) to find logic flaws and technical vulnerabilities. We cover everything from authentication bypass to complex business logic vulnerabilities that automated tools often miss.',
    icon: 'AppWindow',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    features: [
      { title: 'Web Application', slug: 'web-application' },
      { title: 'Mobile Application', slug: 'mobile-application' },
      { title: 'API Security Testing', slug: 'api-security-testing' },
      { title: 'Desktop Applications', slug: 'desktop-application' }
    ]
  },
  {
    slug: 'infrastructure',
    title: 'Network & Systems',
    description: 'Enterprise infrastructure, including servers, firewalls, routers, and internal network components, is rigorously assessed to identify security gaps and misconfigurations. Our team strengthens perimeter defenses, hardens configurations, and ensures a resilient network architecture.',
    fullDetails: 'Our infrastructure security services provide deep-dive assessments into your network architecture, including routers, switches, and server configurations. We identify potential entry points and lateral movement risks to harden your overall security posture. We evaluate firewall rules, network segmentation, and internal/external exposure to ensure your core systems are protected against modern threats.',
    icon: 'Server',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    features: [
      { title: 'Server VAPT', slug: 'server-vapt' },
      { title: 'Firewall VAPT', slug: 'firewall-vapt' },
      { title: 'Routers & Switches VAPT', slug: 'routers-switches-vapt' },
      { title: 'Security Configuration Review', slug: 'security-configuration-review' }
    ]
  },
  {
    slug: 'cloud',
    title: 'Cloud Platforms',
    description: 'Cloud environments are evaluated for identity controls, storage exposure, misconfigurations, and compliance risks. We implement secure architecture practices and enforce strong access governance to protect critical workloads.',
    fullDetails: 'We specialize in securing cloud-native environments. Our team evaluates IAM policies, storage configurations, and serverless functions to ensure your cloud infrastructure is resilient against misconfigurations and unauthorized access. We follow industry benchmarks (CIS) and best practices for each major provider to ensure your data remains secure in the cloud.',
    icon: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    features: [
      { title: 'AWS VAPT', slug: 'aws-vapt' },
      { title: 'GCP VAPT', slug: 'gcp-vapt' }
    ]
  },
  {
    slug: 'email-security',
    title: 'Email Security & Phishing',
    description: 'Email platforms and security gateways are tested against simulated phishing threats and communication vulnerability risks. We enhance employee awareness, detect credential theft pathways, and ensure secure configurations to prevent email-based compromise.',
    fullDetails: 'We assess the security of your communication platforms to prevent phishing, data leakage, and account takeovers. We design and launch realistic, targeted phishing simulation campaigns and review email routing security configurations (SPF, DKIM, DMARC) to keep your communication channels secure.',
    icon: 'Mail',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    features: [
      { title: 'Email Security & Phishing Simulation', slug: 'email-security-phishing' }
    ]
  },
  {
    slug: 'iot-hardware',
    title: 'Devices & Hardware',
    description: 'Connected devices, smart hardware systems, and wireless networks are analyzed for firmware vulnerabilities, physical interface exploitation, and signal leakage. We reduce attack surfaces and secure device ecosystems from end to end.',
    fullDetails: 'Our IoT security services cover the entire ecosystem, from device firmware to communication protocols. We help you identify hardware-level vulnerabilities, insecure debug ports, and weak encryption in wireless communications, ensuring your connected devices and networks do not become a weak link in your security chain.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    features: [
      { title: 'Wi-Fi Penetration Testing', slug: 'wifi-penetration-testing' },
      { title: 'Smart Devices Security', slug: 'smart-devices-security' }
    ]
  },
  {
    slug: 'soc-maturity',
    title: 'SOC Maturity Assessment',
    description: 'Evaluate the effectiveness, detection capabilities, and incident response readiness of your Security Operations Center. We map rules to the MITRE ATT&CK framework and provide a structured improvement roadmap.',
    fullDetails: 'We go beyond checklist-based audits by evaluating real detection and response capabilities of your Security Operations Center (SOC). We map your detection rules to the MITRE ATT&CK framework, assess SIEM/SOAR effectiveness, and provide a structured improvement roadmap.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    features: [
      { title: 'SOC Maturity Assessment', slug: 'soc-maturity-assessment' }
    ]
  },

  // ==========================================
  // DETAILED SUB-SERVICES (HIDDEN FROM HOME)
  // ==========================================
  
  // 1. Applications Sub-Services
  {
    slug: 'web-application',
    title: 'Web Application Penetration Testing',
    description: 'A Web Application Penetration Test is a controlled security assessment designed to identify vulnerabilities in your web applications before attackers do.',
    fullDetails: 'Web applications are exposed directly to the internet, making them the most targeted entry points for cyber attacks. A Web Application Penetration Test is a controlled security assessment designed to identify vulnerabilities in your web applications before attackers do. It simulates real-world cyberattacks to uncover security weaknesses that could lead to data breaches, financial loss, or reputational damage.',
    icon: 'Globe',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    features: [],
    hidden: true,
    whyTitle: 'Why Organizations Trust HacFy',
    whyText: 'Choosing the right security partner is critical. At HacFy, we deliver more than vulnerability reports — we deliver clarity, risk context, and actionable solutions.',
    whyList: [
      'Experienced Security Analysts: Real-world offensive security expertise',
      'Deep OWASP & Attack Vector Understanding: OWASP Top 10 and modern attack vectors',
      'Manual & Advanced Tools: Hands-on testing with advanced automated tools',
      'Clear, Executive-Friendly Reporting: Technical findings — with actionable insights',
      'Practical Remediation Guidance: Actionable guidance, not just vulnerability listings',
      'Responsible Testing Methodology: Safe and ethical penetration testing'
    ],
    methodologySteps: [
      {
        tab: 'Planning & Scoping',
        title: 'Planning and Scoping',
        description: 'We begin by defining objectives, scope, boundaries, timelines, and compliance requirements. This ensures the assessment aligns with your business goals and overall risk profile.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800'
      },
      {
        tab: 'Reconnaissance',
        title: 'Reconnaissance / Information Gathering',
        description: 'Our team gathers intelligence to understand the application architecture, technologies, integrations, hosting environment, and potential entry points.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800'
      },
      {
        tab: 'Mapping',
        title: 'Mapping / Configuration Management',
        description: 'We map application workflows, user roles, authentication mechanisms, and access control paths to understand how the system behaves under different scenarios.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800'
      },
      {
        tab: 'Vulnerability Analysis',
        title: 'Vulnerability Assessment / Analysis',
        description: 'Using a combination of automated tools and deep manual testing techniques, we identify vulnerabilities based on industry frameworks such as OWASP Top 10. We also assess logic flaws and misconfigurations often missed by automated scanners.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800'
      },
      {
        tab: 'Exploitation',
        title: 'Exploitation',
        description: 'We safely simulate real-world attack scenarios to validate vulnerabilities and measure their impact. This step helps determine the actual business risk associated with each finding.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800'
      },
      {
        tab: 'Reporting',
        title: 'Reporting and Remediation',
        description: 'We provide a comprehensive report including: Executive summary for leadership, Technical vulnerability details, Risk ratings and impact analysis, Step-by-step remediation guidance, and Re-test support after fixes are implemented.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'
      }
    ],
    benefits: [
      { text: 'Identify vulnerabilities before attackers exploit them', icon: 'Search' },
      { text: 'Protect sensitive customer and organizational data', icon: 'Lock' },
      { text: 'Reduce risk of financial and reputational damage', icon: 'Target' },
      { text: 'Improve compliance readiness (ISO, PCI-DSS, SOC 2, etc.)', icon: 'FileText' },
      { text: 'Strengthen customer trust and brand credibility', icon: 'Handshake' },
      { text: 'Enhance overall security posture', icon: 'Shield' }
    ],
    faqs: [
      { question: 'How long does a Web Application Penetration Test take?', answer: 'The timeline depends on the size and complexity of the application. Most assessments range from a few days to several weeks.' },
      { question: 'Will testing impact our live environment?', answer: 'Our testing is carefully planned to minimise disruption. We coordinate closely with your team to ensure safe execution.' },
      { question: 'Do you provide re-testing after remediation?', answer: 'Yes. HacFy offers validation testing to confirm that identified vulnerabilities have been properly fixed.' },
      { question: 'Do you test against OWASP Top 10?', answer: 'Yes. Our methodology aligns with OWASP standards and includes both automated and manual testing techniques.' },
      { question: 'Is the report suitable for compliance requirements?', answer: 'Yes. Our reports are structured to support compliance audits and internal security reviews.' }
    ]
  },
  {
    slug: 'mobile-application',
    title: 'Mobile Application Penetration Testing',
    description: 'A Mobile Application Penetration Test is a comprehensive security assessment performed on Android and iOS applications to identify vulnerabilities that could be exploited by attackers.',
    fullDetails: 'Mobile applications present unique threats due to local client-side data storage, binary reverse-engineering, and custom platform APIs. A Mobile Application Penetration Test is a comprehensive security assessment performed on Android and iOS applications to identify vulnerabilities that could be exploited by attackers. It simulates real-world cyberattacks to uncover security weaknesses that could lead to data breaches, financial loss, or reputational damage.',
    icon: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
    features: [],
    hidden: true,
    whyTitle: 'Why Organizations Trust HacFy',
    whyText: 'Choosing the right security partner is critical. At HacFy, we deliver more than vulnerability reports — we deliver clarity, risk context, and actionable solutions.',
    whyList: [
      'Experienced Security Analysts: Real-world offensive security expertise',
      'Deep OWASP & Attack Vector Understanding: OWASP Top 10 and modern attack vectors',
      'Manual & Advanced Tools: Hands-on testing with advanced automated tools',
      'Clear, Executive-Friendly Reporting: Technical findings — with actionable insights',
      'Practical Remediation Guidance: Actionable guidance, not just vulnerability listings',
      'Responsible Testing Methodology: Safe and ethical penetration testing'
    ],
    methodologySteps: [
      {
        tab: 'Planning & Scoping',
        title: 'Planning and Scoping',
        description: 'We begin by understanding the application architecture and identifying Android and/or iOS platforms in scope. Compliance objectives including GDPR and PCI DSS are defined alongside testing timelines and reporting expectations. We then confirm testing boundaries, finalise the attack surface scope, set up secure testing environments, and define clear success criteria.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800'
      },
      {
        tab: 'Reconnaissance',
        title: 'Intelligence Gathering (Reconnaissance)',
        description: 'Identifying the application package name and version, mapping backend endpoints, and conducting OSINT research across public repositories, exposed credentials, and forums. We also review third-party integrations to develop a comprehensive picture of the application\'s attack surface.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800'
      },
      {
        tab: 'Static Analysis',
        title: 'Static Analysis (SAST)',
        description: 'Decompiling and reviewing application binaries without execution to identify hardcoded secrets such as API keys, tokens, and credentials. We assess insecure configurations, weak cryptographic algorithms, improper certificate validation, and code obfuscation weaknesses to provide a comprehensive static security analysis.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800'
      },
      {
        tab: 'Dynamic Analysis',
        title: 'Dynamic Analysis (DAST)',
        description: 'Executing the application on physical or emulated devices to observe runtime behavior. Network traffic is captured and modified using tools like Burp Suite to test for insecure data transmission and API manipulation. Local data storage is inspected across shared preferences, SQLite databases, and temporary files. Security protections including SSL pinning, root/jailbreak detection, and runtime controls are systematically tested and bypassed to evaluate true resilience.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800'
      },
      {
        tab: 'Exploitation',
        title: 'Exploitation',
        description: 'Actively exploiting identified vulnerabilities to determine real business impact. Our team tests for SQL Injection, authentication bypass, Insecure Direct Object Reference (IDOR), privilege escalation, and business logic flaws. This phase demonstrates how attackers could compromise data, accounts, or backend systems.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800'
      },
      {
        tab: 'Reporting',
        title: 'Reporting and Remediation',
        description: 'HacFy delivers a detailed, executive-ready penetration testing report including technical vulnerability descriptions, Proof of Concept (PoC), risk severity based on CVSS scoring, business impact assessment, and step-by-step remediation guidance. We also provide post-remediation validation support to confirm vulnerabilities are properly resolved.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'
      }
    ],
    benefits: [
      { text: 'Identify vulnerabilities before attackers exploit them', icon: 'Search' },
      { text: 'Protect sensitive customer and organizational data', icon: 'Lock' },
      { text: 'Reduce risk of financial and reputational damage', icon: 'Target' },
      { text: 'Improve compliance readiness (ISO, PCI-DSS, SOC 2, etc.)', icon: 'FileText' },
      { text: 'Strengthen customer trust and brand credibility', icon: 'Handshake' },
      { text: 'Enhance overall security posture', icon: 'Shield' }
    ],
    faqs: [
      { question: 'How long does a mobile penetration test take?', answer: 'Typically between 5–15 business days depending on app complexity, features, and scope.' },
      { question: 'Do you test both Android and iOS applications?', answer: 'Yes. HacFy provides comprehensive security testing for both platforms.' },
      { question: 'Will testing affect live users?', answer: 'Testing is usually conducted in staging environments. If production testing is required, it is carefully coordinated to avoid disruption.' },
      { question: 'Do you provide a compliance-ready report?', answer: 'Yes. Our reports include risk ratings and documentation suitable for compliance audits (PCI DSS, GDPR, ISO).' },
      { question: 'Can you re-test after fixes are implemented?', answer: 'Absolutely. We provide remediation validation testing to confirm vulnerabilities are properly resolved.' }
    ]
  },
  {
    slug: 'api-security-testing',
    title: 'API Security Testing',
    description: 'An API Application Penetration Test is a specialized security assessment focused on identifying vulnerabilities within Application Programming Interfaces (APIs).',
    fullDetails: 'APIs power modern web, mobile, and cloud applications — making them a prime target for attackers. An API Application Penetration Test is a specialized security assessment focused on identifying vulnerabilities within Application Programming Interfaces (APIs). It simulates real-world cyberattacks to uncover security weaknesses that could lead to data breaches, financial loss, or reputational damage.',
    icon: 'Activity',
    image: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=1200',
    features: [],
    hidden: true,
    whyTitle: 'Why Choose HacFy for API Penetration Testing?',
    whyText: 'At HacFy, we combine deep technical expertise with real-world attack simulation to provide thorough API security assessments.',
    whyList: [
      'Manual + automated hybrid testing approach',
      'Expertise in REST, SOAP, and GraphQL APIs',
      'Advanced authentication testing (OAuth 2.0, JWT, API Keys)',
      'Business logic flaw identification',
      'Detailed CVSS-based risk scoring',
      'Clear, developer-friendly remediation guidance',
      'Post-remediation re-testing support'
    ],
    methodologySteps: [
      {
        tab: 'Planning & Recon',
        title: 'Planning and Reconnaissance',
        description: 'The assessment begins by defining scope, objectives, and rules of engagement. We gather detailed intelligence including API endpoints, base URLs, documentation files (Swagger / OpenAPI specifications), supported HTTP methods, authentication & authorization mechanisms, data formats (JSON, XML), and third-party integrations. This phase ensures full visibility into the API ecosystem before testing begins.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800'
      },
      {
        tab: 'Vulnerability Analysis',
        title: 'Discovery and Vulnerability Analysis',
        description: 'We interact with the API to map the attack surface and identify potential weaknesses. Using a combination of automated tools (e.g., Burp Suite, OWASP ZAP) and advanced manual testing techniques, we assess vulnerabilities guided by the OWASP API Security Top 10. We look for Broken Object Level Authorization (BOLA), Broken Authentication, Excessive Data Exposure, Mass Assignment, Security Misconfigurations, Injection attacks, and Improper Rate Limiting.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800'
      },
      {
        tab: 'Exploitation',
        title: 'Exploitation',
        description: 'HacFy safely exploits confirmed vulnerabilities to assess real-world impact. This includes testing for unauthorized data access, privilege escalation, account takeover, sensitive information disclosure, and denial-of-service risks. This step demonstrates how an attacker could abuse the API and quantifies the business impact.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800'
      },
      {
        tab: 'Post-Exploitation',
        title: 'Post-Exploitation',
        description: 'We evaluate whether vulnerabilities can provide persistent access, allow lateral movement within systems, expose additional sensitive datasets, or escalate access to administrative privileges. This mimics advanced persistent threat (APT) scenarios and highlights systemic risks.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800'
      },
      {
        tab: 'Reporting',
        title: 'Reporting and Remediation',
        description: 'HacFy delivers a detailed, executive-ready report including comprehensive vulnerability descriptions, Proof of Concept (PoC) evidence, severity ratings (CVSS scoring), business risk analysis, and clear remediation recommendations. We also provide secure coding best practice guidance and support development teams with remediation validation and re-testing services.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'
      }
    ],
    benefits: [
      { text: 'Protect sensitive data from unauthorised access', icon: 'Lock' },
      { text: 'Meet regulatory and compliance requirements', icon: 'FileText' },
      { text: 'Secure APIs before production deployment', icon: 'Shield' },
      { text: 'Reduce risk of financial and reputational damage', icon: 'Target' },
      { text: 'Identify business logic vulnerabilities', icon: 'Search' },
      { text: 'Strengthen authentication and authorization mechanisms', icon: 'Handshake' }
    ],
    faqs: [
      { question: 'How long does an API penetration test take?', answer: 'Typically between 5–12 business days depending on the number of endpoints and complexity of the API.' },
      { question: 'Do you test both internal and external APIs?', answer: 'Yes. HacFy assesses public, partner-facing, and internal APIs.' },
      { question: 'Will testing impact production systems?', answer: 'Testing is usually performed in staging environments. Production testing can be coordinated with proper safeguards.' },
      { question: 'Do you provide compliance-ready documentation?', answer: 'Yes. Our reports include detailed risk analysis suitable for audits such as PCI DSS, ISO 27001, and GDPR.' },
      { question: 'Do you provide re-testing after remediation?', answer: 'Yes. We validate fixes and provide confirmation reports after remediation.' }
    ]
  },
  {
    slug: 'desktop-application',
    title: 'Desktop Application Penetration Testing',
    description: 'Desktop Application Penetration Testing is a specialized security assessment focused on identifying vulnerabilities in Windows, macOS, or Linux-based client applications.',
    fullDetails: 'Desktop applications interact directly with operating systems, local storage, memory, and backend services — creating unique attack surfaces. Desktop Application Penetration Testing is a specialized security assessment focused on identifying vulnerabilities in Windows, macOS, or Linux-based client applications.',
    icon: 'Monitor',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200',
    features: [],
    hidden: true,
    whyTitle: 'Why Choose HacFy for Desktop Application Testing?',
    whyText: 'Our assessments simulate real-world attack scenarios to uncover weaknesses including hardcoded credentials, insecure local data storage, client-side authentication bypass, and DLL hijacking.',
    whyList: [
      'Experienced Security Analysts: Real-world offensive security expertise',
      'Deep OWASP & Attack Vector Understanding: OWASP Top 10 and modern attack vectors',
      'Manual & Advanced Tools: Hands-on testing with advanced automated tools',
      'Clear, Executive-Friendly Reporting: Technical findings — with actionable insights',
      'Practical Remediation Guidance: Actionable guidance, not just vulnerability listings',
      'Responsible Testing Methodology: Safe and ethical penetration testing'
    ],
    methodologySteps: [
      {
        tab: 'Planning',
        title: 'Planning & Information Gathering',
        description: 'We define scope and testing objectives, understand the architecture and technology stack, and identify communication channels (HTTP/S, TCP, IPC, etc.).',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800'
      },
      {
        tab: 'Analysis',
        title: 'Vulnerability Analysis',
        description: 'Static Analysis: Review binaries for hardcoded secrets and logic flaws.\nDynamic Analysis: Monitor runtime behavior including memory, file system, registry, and network traffic.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800'
      },
      {
        tab: 'Testing',
        title: 'Client-Side Control Testing',
        description: 'We test client-side security controls and Inter-Process Communication (IPC) mechanisms for weaknesses that could be exploited locally.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800'
      },
      {
        tab: 'Exploitation',
        title: 'Exploitation & Privilege Escalation',
        description: 'We test for DLL hijacking, insecure loading paths, and attempt injection attacks (SQL, Command, XML) to bypass authentication or licensing mechanisms.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800'
      },
      {
        tab: 'Impact',
        title: 'Business Impact Analysis',
        description: 'We measure the potential business impact of identified vulnerabilities, ensuring risks are understood in the context of your specific software environment.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800'
      },
      {
        tab: 'Reporting',
        title: 'Reporting & Remediation',
        description: 'We deliver a detailed report with CVSS severity ratings, proof of concept, and clear remediation guidance to help your developers fix vulnerabilities effectively.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'
      }
    ],
    benefits: [
      { text: 'Protect sensitive local and backend data', icon: 'Lock' },
      { text: 'Prevent privilege escalation attacks', icon: 'Shield' },
      { text: 'Reduce risk of reverse engineering and tampering', icon: 'Search' },
      { text: 'Ensure regulatory and compliance readiness', icon: 'FileText' },
      { text: 'Strengthen client-server communication security', icon: 'Handshake' },
      { text: 'Improve overall software resilience', icon: 'Settings' }
    ],
    faqs: [
      { question: 'Which operating systems do you support?', answer: 'We test applications on Windows, macOS, and Linux environments.' },
      { question: 'Do you require source code?', answer: 'Not necessarily. We can perform binary-level testing, but source code access enhances coverage and depth of the assessment.' },
      { question: 'Will testing impact production systems?', answer: 'Testing is usually conducted in controlled environments to avoid operational disruption. We coordinate closely with your team.' },
      { question: 'How long does a desktop application penetration test take?', answer: 'Typically 1–3 weeks depending on application complexity and the depth of testing required.' },
      { question: 'Do you provide remediation validation?', answer: 'Yes. HacFy provides retesting services to confirm vulnerabilities have been effectively resolved by your development team.' }
    ]
  },

  // 2. Infrastructure Sub-Services
  {
    slug: 'server-vapt',
    title: 'Server VAPT (Vulnerability Assessment & Penetration Testing)',
    description: 'Identify, analyze, and exploit vulnerabilities in operating systems, configurations, and protocols of critical servers.',
    fullDetails: 'Servers are one of the most targeted assets in any organization. Server VAPT (Vulnerability Assessment & Penetration Testing) is a comprehensive security evaluation designed to identify, analyze, and exploit vulnerabilities in servers and their underlying infrastructure. While Vulnerability Assessment (VA) focuses on identifying and prioritizing security weaknesses, Penetration Testing (PT) goes a step further by actively exploiting those weaknesses to assess real-world impact.',
    icon: 'Server',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1200',
    features: [],
    hidden: true,
    whyTitle: 'Why Choose HacFy for Server VAPT?',
    whyText: 'We combine automated scanning with deep manual exploitation to deliver real, actionable results. We don\'t just find vulnerabilities — we prove their impact.',
    whyList: [
      'End-to-end VAPT (VA + PT combined)',
      'Advanced vulnerability scanning & manual validation',
      'Expertise in Linux, Windows & hybrid environments',
      'Privilege escalation & post-exploitation expertise',
      'CIS benchmark-based hardening checks',
      'CVSS-based risk prioritization',
      'Clear remediation roadmap',
      'Re-testing & validation support'
    ],
    methodologySteps: [
      {
        tab: 'Planning',
        title: 'Planning and Scope Definition',
        description: 'Identify servers (internal / external), define testing type (black-box / grey-box / white-box), finalize IP ranges and environments, and establish rules of engagement.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800'
      },
      {
        tab: 'Discovery (VA)',
        title: 'Vulnerability Assessment (VA Phase)',
        description: 'We perform automated and manual discovery to identify vulnerabilities:\n• Network scanning (Nmap)\n• Vulnerability scanning (Nessus, OpenVAS)\n• Service enumeration (SSH, SMB, RDP, FTP, HTTP)\n• Patch and version analysis\n• Configuration review against CIS benchmarks.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800'
      },
      {
        tab: 'Exploitation (PT)',
        title: 'Penetration Testing (PT Phase)',
        description: 'We validate and exploit identified vulnerabilities:\n• Remote Code Execution (RCE)\n• Privilege escalation (user → root/admin)\n• Credential dumping & reuse\n• Exploitation of misconfigured services\n• Lateral movement within internal networks.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800'
      },
      {
        tab: 'Post-Exploit',
        title: 'Post-Exploitation Analysis',
        description: 'We simulate advanced attack scenarios to assess deeper impact:\n• Persistence (cron jobs, startup services, backdoors)\n• Data exfiltration possibilities\n• Access to sensitive files/databases\n• Domain compromise (in enterprise environments).',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800'
      },
      {
        tab: 'Reporting',
        title: 'Reporting and Remediation',
        description: 'We deliver a detailed, actionable report including: vulnerability details with Proof of Concept (PoC), CVSS severity ratings, business risk impact, step-by-step remediation guidance, and CIS standards-based server hardening recommendations.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'
      }
    ],
    benefits: [
      { text: 'Identify and eliminate critical vulnerabilities', icon: 'Search' },
      { text: 'Prevent unauthorized server access', icon: 'Lock' },
      { text: 'Strengthen server configurations and hardening', icon: 'Settings' },
      { text: 'Reduce risk of ransomware and data breaches', icon: 'Shield' },
      { text: 'Improve patch and vulnerability management', icon: 'Target' },
      { text: 'Ensure compliance (ISO 27001, PCI DSS, etc.)', icon: 'FileText' }
    ],
    faqs: [
      { question: 'What is the difference between VA and PT?', answer: 'VA focuses on identifying and prioritizing security weaknesses, while PT goes a step further by actively exploiting those weaknesses to measure real-world impact.' },
      { question: 'How long does Server VAPT take?', answer: 'Typically 5–12 business days, depending on scope and number of servers.' },
      { question: 'Do you test both internal and external servers?', answer: 'Yes — including on-premise and cloud environments.' },
      { question: 'Will testing impact production?', answer: 'Testing is carefully controlled to minimize risk. We prefer staging environments, but production testing can be done safely with precautions.' },
      { question: 'Do you provide re-testing after fixes?', answer: 'Yes — we validate remediation and provide confirmation reports.' }
    ]
  },
  {
    slug: 'firewall-vapt',
    title: 'Firewall VAPT',
    description: 'Evaluate the effectiveness, configuration, and rules of firewall devices protecting your network perimeter.',
    fullDetails: 'Firewalls act as the first line of defense — but misconfigurations, weak rule sets, or outdated firmware can allow attackers to bypass them. Firewall VAPT (Vulnerability Assessment & Penetration Testing) is a focused security assessment designed to evaluate the effectiveness, configuration, and resilience of firewall devices that protect your network perimeter.',
    icon: 'Shield',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200',
    features: [],
    hidden: true,
    whyTitle: 'Why Choose HacFy for Firewall VAPT?',
    whyText: 'We go beyond surface-level checks by validating how your firewall behaves under real attack scenarios. We ensure your firewall is not just configured — but secure and effective.',
    whyList: [
      'Complete VA + PT coverage (configuration + exploitation)',
      'Deep firewall rule analysis and misconfiguration detection',
      'Expertise in major firewall vendors (Fortinet, Palo Alto, Cisco, etc.)',
      'VPN and remote access security testing',
      'Network segmentation validation',
      'CVSS-based risk prioritization',
      'Actionable hardening recommendations',
      'Re-testing & validation support'
    ],
    methodologySteps: [
      {
        tab: 'Planning',
        title: 'Planning and Scope Definition',
        description: 'Identify firewall devices (perimeter / internal), define scope (IP ranges, zones, interfaces), gather architecture diagrams, and determine testing approach (black-box / grey-box).',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800'
      },
      {
        tab: 'Discovery (VA)',
        title: 'Vulnerability Assessment (VA Phase)',
        description: 'We perform detailed configuration and exposure analysis:\n• Rule base review (overly permissive rules, "ANY-ANY" access)\n• Port and service exposure analysis\n• Firmware version checks for known vulnerabilities\n• VPN configuration review (encryption, authentication)\n• Logging and alerting configuration.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800'
      },
      {
        tab: 'Exploitation (PT)',
        title: 'Penetration Testing (PT Phase)',
        description: 'We simulate real-world attacks to test firewall effectiveness:\n• Firewall rule bypass techniques\n• Port evasion and traffic manipulation\n• Unauthorized access attempts across network zones\n• VPN exploitation scenarios\n• Testing exposed management interfaces.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800'
      },
      {
        tab: 'Post-Exploit',
        title: 'Post-Exploitation Analysis',
        description: 'We analyze deeper risks if a bypass is successful: internal network access, lateral movement across segments, access to critical servers/applications, and persistence opportunities.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800'
      },
      {
        tab: 'Reporting',
        title: 'Reporting and Remediation',
        description: 'We deliver a comprehensive report including: detailed misconfiguration findings, exploitable vulnerabilities with Proof of Concept (PoC), CVSS severity ratings, business impact analysis, rule optimization guidance, and secure segmentation strategy.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'
      }
    ],
    benefits: [
      { text: 'Prevent unauthorized network access', icon: 'Lock' },
      { text: 'Strengthen perimeter security', icon: 'Shield' },
      { text: 'Detect misconfigurations before attackers exploit them', icon: 'Search' },
      { text: 'Improve network segmentation and access control', icon: 'Settings' },
      { text: 'Secure VPN and remote access channels', icon: 'Handshake' },
      { text: 'Ensure compliance with standards (ISO 27001, PCI DSS)', icon: 'FileText' }
    ],
    faqs: [
      { question: 'What does firewall VAPT include?', answer: 'It includes both configuration review (VA) and attack simulation (PT) against firewall controls.' },
      { question: 'Can you test enterprise firewalls?', answer: 'Yes — including Fortinet, Palo Alto, Cisco ASA, Check Point, and more.' },
      { question: 'Will firewall testing disrupt network traffic?', answer: 'Testing is carefully controlled to avoid disruption, especially in production environments.' },
      { question: 'Do you test VPN security?', answer: 'Yes — including SSL VPN, IPSec, and remote access configurations.' },
      { question: 'Do you provide re-testing after fixes?', answer: 'Yes — we validate all remediations and provide confirmation reports.' }
    ]
  },
  {
    slug: 'routers-switches-vapt',
    title: 'Routers & Switches VAPT',
    description: 'Assess routing protocols, switch port security, VLAN segmentation, and device firmware vulnerabilities.',
    fullDetails: 'Routers and switches are critical infrastructure components — if compromised, attackers can intercept traffic, manipulate data, or gain unauthorized network access. Routers & Switches VAPT is a comprehensive security assessment focused on evaluating the configuration, firmware, and network behavior of core networking devices.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    features: [],
    hidden: true,
    whyTitle: 'Why Choose HacFy for Routers & Switches VAPT?',
    whyText: 'We combine deep configuration auditing with real-world exploitation techniques to uncover both technical and logical weaknesses. We ensure your network backbone is secure and resilient.',
    whyList: [
      'Full VAPT coverage (VA + PT combined)',
      'Expertise in enterprise networking devices (Cisco, Juniper, HP, etc.)',
      'Layer 2 & Layer 3 attack simulation',
      'Configuration and firmware security review',
      'Network segmentation validation',
      'CVSS-based risk prioritization',
      'Clear remediation and hardening guidance',
      'Post-fix validation and re-testing'
    ],
    methodologySteps: [
      {
        tab: 'Planning',
        title: 'Planning and Scope Definition',
        description: 'Identify network devices (routers, switches, core/distribution/access layers), define network segments and VLAN architecture, gather configuration files (if white/grey-box), and define testing boundaries.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800'
      },
      {
        tab: 'Discovery (VA)',
        title: 'Vulnerability Assessment (VA Phase)',
        description: 'We perform in-depth analysis of configurations and exposures:\n• Port scanning (Nmap) and vulnerability scanning (Nessus)\n• Firmware version analysis for known CVEs\n• Review of insecure management protocols (Telnet, SNMP v1/v2)\n• Weak ACL rules and routing misconfigurations\n• VLAN misconfigurations and improper segmentation.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800'
      },
      {
        tab: 'Exploitation (PT)',
        title: 'Penetration Testing (PT Phase)',
        description: 'We simulate real-world attacks targeting network devices: VLAN hopping, ARP spoofing / MITM attacks, MAC flooding, routing protocol manipulation, unauthorized access to management interfaces, and ACL bypass techniques.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800'
      },
      {
        tab: 'Post-Exploit',
        title: 'Post-Exploitation Analysis',
        description: 'If exploitation is successful, we assess deeper impact: traffic interception, lateral movement across VLANs, access to sensitive internal systems, and persistence within network infrastructure.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800'
      },
      {
        tab: 'Reporting',
        title: 'Reporting and Remediation',
        description: 'We provide a detailed, actionable report containing: vulnerability descriptions with Proof of Concept (PoC), CVSS severity ratings, network impact analysis, and secure configuration enforcement (SSH, SNMPv3).',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'
      }
    ],
    benefits: [
      { text: 'Prevent unauthorized network access and manipulation', icon: 'Lock' },
      { text: 'Strengthen internal network segmentation', icon: 'Settings' },
      { text: 'Protect against MITM and Layer 2 attacks', icon: 'Shield' },
      { text: 'Secure critical network infrastructure', icon: 'Search' },
      { text: 'Improve monitoring and access control', icon: 'Target' },
      { text: 'Ensure compliance with security standards', icon: 'FileText' }
    ],
    faqs: [
      { question: 'What devices are covered under this assessment?', answer: 'Routers, switches, and other network infrastructure devices across all layers.' },
      { question: 'Do you test Layer 2 attacks?', answer: 'Yes — including VLAN hopping, ARP spoofing, and MAC flooding.' },
      { question: 'Will testing impact network performance?', answer: 'Testing is controlled to minimize disruption, especially in production environments.' },
      { question: 'Do you review configurations?', answer: 'Yes — configuration review is a key part of the VA phase.' },
      { question: 'Do you provide re-testing?', answer: 'Yes — we validate remediation and provide confirmation reports.' }
    ]
  },
  {
    slug: 'security-configuration-review',
    title: 'Security Configuration Review (Hardening Assessment)',
    description: 'Ensure systems, operating systems, and network devices are securely configured against CIS benchmarks.',
    fullDetails: 'Most breaches occur due to misconfigurations — fixing them early is critical. A Security Configuration Review is a structured assessment of systems, applications, and infrastructure to ensure they are securely configured according to industry best practices and hardening standards.',
    icon: 'Settings',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    features: [],
    hidden: true,
    whyTitle: 'Why Choose HacFy for Configuration Review?',
    whyText: 'We go beyond basic checklists by combining automated audits with expert manual validation. We help you build secure systems by design, not just fix vulnerabilities.',
    whyList: [
      'Benchmark-based security assessment (CIS, NIST)',
      'Deep manual configuration analysis',
      'Coverage across OS, network, cloud, and applications',
      'Identification of misconfigurations and policy gaps',
      'Risk-based prioritization (CVSS mapping)',
      'Actionable hardening recommendations',
      'Compliance-ready reporting',
      'Re-validation after fixes'
    ],
    methodologySteps: [
      {
        tab: 'Planning',
        title: 'Planning and Scope Definition',
        description: 'Identify assets (servers, network devices, cloud, applications), define standards (CIS, NIST, ISO, internal policies), determine access level (read-only / admin / config files), and establish audit scope.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800'
      },
      {
        tab: 'Audit',
        title: 'Configuration Assessment (Audit Phase)',
        description: 'We perform detailed configuration review using automated tools and manual verification:\n• OS hardening checks (password policies, services, logging)\n• Network device configuration (ACLs, SNMP, management access)\n• Firewall rule review\n• Cloud configuration (IAM roles, storage, security groups)\n• Database security (authentication, encryption, access controls).',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800'
      },
      {
        tab: 'Gap Analysis',
        title: 'Gap Analysis & Review',
        description: 'We compare current configurations against best practices, identifying CIS Benchmark deviations, weak/missing security controls, overly permissive access, disabled/misconfigured logging, and insecure default settings.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800'
      },
      {
        tab: 'Risk Analysis',
        title: 'Risk Analysis & Prioritization',
        description: 'Each finding is evaluated based on exploitability, impact on confidentiality, integrity, availability, and likelihood of misuse. We assign severity levels and prioritize remediation.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800'
      },
      {
        tab: 'Reporting',
        title: 'Reporting and Remediation',
        description: 'We deliver a detailed, audit-ready report containing configuration issues with evidence, CIS/NIST control references, risk severity, step-by-step hardening recommendations, and compliance mapping.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'
      }
    ],
    benefits: [
      { text: 'Eliminate misconfigurations before exploitation', icon: 'Lock' },
      { text: 'Strengthen baseline security posture', icon: 'Shield' },
      { text: 'Ensure compliance with industry standards', icon: 'FileText' },
      { text: 'Reduce attack surface significantly', icon: 'Search' },
      { text: 'Improve monitoring, logging, and access control', icon: 'Settings' },
      { text: 'Support secure system deployment', icon: 'Target' }
    ],
    faqs: [
      { question: 'How is configuration review different from VAPT?', answer: 'Configuration Review focuses on preventive security controls (hardening & compliance), while VAPT focuses on actively identifying and exploiting vulnerabilities.' },
      { question: 'What standards do you follow?', answer: 'CIS Benchmarks, NIST, ISO 27001, and vendor best practices.' },
      { question: 'Do you support cloud configuration review?', answer: 'Yes — AWS, Azure, and GCP environments.' },
      { question: 'Will this impact production systems?', answer: 'No — this is a non-intrusive, read-only configuration assessment.' },
      { question: 'Do you provide re-validation?', answer: 'Yes — we verify all remediations and provide updated reports.' }
    ]
  },

  // 3. Cloud Sub-Services
  {
    slug: 'aws-vapt',
    title: 'AWS Cloud VAPT',
    description: 'Comprehensive security evaluation of your cloud infrastructure hosted on Amazon Web Services (AWS).',
    fullDetails: 'Cloud environments are highly dynamic — a single misconfiguration (like a public S3 bucket or overly permissive IAM role) can lead to serious data breaches. AWS VAPT (Vulnerability Assessment & Penetration Testing) is a comprehensive security evaluation of your cloud infrastructure hosted on Amazon Web Services (AWS).',
    icon: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    features: [],
    hidden: true,
    whyTitle: 'Why HacFy for AWS VAPT?',
    whyText: 'We combine cloud expertise with offensive security techniques to uncover real-world risks. We help you secure your cloud before attackers exploit it.',
    whyList: [
      'End-to-end AWS VAPT (VA + PT)',
      'Deep IAM privilege escalation testing',
      'S3 and data exposure analysis',
      'Cloud-native attack simulation',
      'Misconfiguration and architecture review',
      'CVSS-based risk prioritization',
      'Compliance mapping (ISO 27001, GDPR)',
      'Re-testing & remediation validation'
    ],
    methodologySteps: [
      {
        tab: 'Planning',
        title: 'Planning and Scope Definition',
        description: 'Identify AWS accounts, regions, and services in scope. Define testing approach (black-box / grey-box / white-box), review AWS architecture (VPCs, subnets), and establish access permissions.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800'
      },
      {
        tab: 'VA Phase',
        title: 'Vulnerability Assessment',
        description: 'We perform automated and manual assessment of configurations: IAM role and policy review, S3 bucket permissions, Security Groups / NACL analysis, EC2 config, and logging review (CloudTrail, GuardDuty) using ScoutSuite, Prowler, Nessus.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800'
      },
      {
        tab: 'PT Phase',
        title: 'Penetration Testing (Exploitation)',
        description: 'We simulate real-world cloud attack scenarios: IAM privilege escalation, credential abuse and role assumption, exploiting exposed S3 buckets, SSRF-based metadata attacks, and security group bypass.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800'
      },
      {
        tab: 'Post-Exploit',
        title: 'Post-Exploitation & Persistence',
        description: 'We assess deeper impact: access to sensitive data (S3, RDS, EBS snapshots), lateral movement across services, persistence via IAM roles, and full account compromise simulations.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800'
      },
      {
        tab: 'Reporting',
        title: 'Reporting and Remediation',
        description: 'We provide a detailed report including vulnerability descriptions with Proof of Concept (PoC), CVSS severity ratings, business impact analysis, AWS-specific remediation guidance, and secure architecture recommendations.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'
      }
    ],
    benefits: [
      { text: 'Prevent cloud misconfigurations and data leaks', icon: 'Lock' },
      { text: 'Secure IAM and access controls', icon: 'Shield' },
      { text: 'Strengthen cloud architecture and segmentation', icon: 'Settings' },
      { text: 'Detect and fix exposed services', icon: 'Search' },
      { text: 'Ensure compliance with cloud security standards', icon: 'FileText' },
      { text: 'Reduce risk of account takeover and breaches', icon: 'Target' }
    ],
    faqs: [
      { question: 'Is AWS VAPT allowed by AWS?', answer: 'Yes — AWS allows penetration testing on specific services without prior approval, as per their policies.' },
      { question: 'What services do you cover?', answer: 'IAM, S3, EC2, VPC, RDS, Lambda, CloudTrail, and more.' },
      { question: 'Will testing impact production?', answer: 'Testing is carefully controlled to avoid disruption.' },
      { question: 'Do you provide compliance mapping?', answer: 'Yes — aligned with ISO 27001, PCI DSS, GDPR, and CIS benchmarks.' },
      { question: 'Do you provide re-testing?', answer: 'Yes — we validate fixes and provide confirmation reports.' }
    ]
  },
  {
    slug: 'gcp-vapt',
    title: 'GCP Cloud VAPT',
    description: 'Comprehensive security evaluation of your cloud infrastructure hosted on Google Cloud Platform (GCP).',
    fullDetails: 'Cloud-native environments are highly scalable but also prone to misconfiguration risks, which are one of the leading causes of cloud breaches. GCP VAPT (Vulnerability Assessment & Penetration Testing) is a comprehensive security evaluation of your cloud infrastructure hosted on Google Cloud Platform (GCP).',
    icon: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    features: [],
    hidden: true,
    whyTitle: 'Why HacFy for GCP VAPT?',
    whyText: 'We combine cloud expertise with offensive security techniques to identify real-world attack paths. We help you secure your GCP environment before attackers exploit it.',
    whyList: [
      'End-to-end GCP VAPT (VA + PT)',
      'Advanced IAM privilege escalation testing',
      'Storage and data exposure analysis',
      'Cloud-native attack simulation',
      'Misconfiguration and architecture review',
      'CVSS-based risk prioritization',
      'Compliance mapping (ISO 27001, GDPR)',
      'Re-testing & remediation validation'
    ],
    methodologySteps: [
      {
        tab: 'Planning',
        title: 'Planning and Scope Definition',
        description: 'Identify GCP projects, services, and regions. Define testing approach (black-box / grey-box / white-box), review architecture (VPCs, subnets), and establish access permissions.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800'
      },
      {
        tab: 'VA Phase',
        title: 'Vulnerability Assessment',
        description: 'We analyze configurations using automated and manual methods: IAM roles, Cloud Storage permissions, compute engine configurations, firewall rules, and logging configurations using ScoutSuite, Prowler, Nessus.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800'
      },
      {
        tab: 'PT Phase',
        title: 'Penetration Testing (Exploitation)',
        description: 'We simulate real-world cloud attack scenarios: IAM privilege escalation, service account abuse, credential leakage exploitation, access to metadata services, and lateral movement.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800'
      },
      {
        tab: 'Post-Exploit',
        title: 'Post-Exploitation & Persistence',
        description: 'We assess deeper impact: access to sensitive data (Cloud Storage, databases), persistence through service accounts or keys, and full project or organization-level compromise.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800'
      },
      {
        tab: 'Reporting',
        title: 'Reporting and Remediation',
        description: 'We provide a detailed GCP-specific report containing vulnerability descriptions with PoC, CVSS severity ratings, business impact analysis, IAM least privilege recommendations, and re-testing validation.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'
      }
    ],
    benefits: [
      { text: 'Prevent cloud misconfigurations and data exposure', icon: 'Lock' },
      { text: 'Secure IAM roles and service accounts', icon: 'Shield' },
      { text: 'Strengthen network security and segmentation', icon: 'Settings' },
      { text: 'Identify exposed services and resources', icon: 'Search' },
      { text: 'Ensure compliance with security standards', icon: 'FileText' },
      { text: 'Reduce risk of account/project compromise', icon: 'Target' }
    ],
    faqs: [
      { question: 'Is penetration testing allowed in GCP?', answer: 'Yes — GCP allows penetration testing on your own resources without prior approval, subject to their policies.' },
      { question: 'What services do you cover?', answer: 'IAM, Cloud Storage, Compute Engine, VPC, databases, and service accounts.' },
      { question: 'Will testing impact production?', answer: 'Testing is carefully controlled to minimize risk and avoid disruption.' },
      { question: 'Do you provide compliance mapping?', answer: 'Yes — aligned with ISO 27001, PCI DSS, GDPR, and CIS benchmarks.' },
      { question: 'Do you provide re-testing?', answer: 'Yes — we validate remediation and provide confirmation reports.' }
    ]
  },

  // 4. Email Security Sub-Services
  {
    slug: 'email-security-phishing',
    title: 'Email Security & Phishing Simulation',
    description: 'Simulated phishing campaigns and technical configuration audits to protect against credential theft, BEC, and email scams.',
    fullDetails: 'Phishing remains one of the most successful attack vectors — targeting employees to gain credentials, deliver malware, or initiate business email compromise (BEC). Email Security & Phishing Simulation is a controlled security assessment designed to evaluate how effectively your organization can detect, prevent, and respond to phishing attacks and email-based threats.',
    icon: 'Mail',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    features: [],
    hidden: true,
    whyTitle: 'Why HacFy for Phishing Simulation Campaigns?',
    whyText: 'We design realistic, targeted campaigns that mirror actual attacker tactics. We help you transform your employees into your first line of defense.',
    whyList: [
      'Customized phishing scenarios (HR, IT, finance, etc.)',
      'Real-world attack simulation (credential theft, malware links)',
      'Employee behavior analytics and reporting',
      'Email security control evaluation',
      'Safe and controlled execution environment',
      'Detailed campaign metrics and insights',
      'Security awareness recommendations',
      'Re-campaign support for improvement tracking'
    ],
    methodologySteps: [
      {
        tab: 'Design',
        title: 'Planning and Campaign Design',
        description: 'Identify target user groups (employees, departments, executives), define campaign objectives (awareness, credential testing), create realistic templates (login pages, HR updates), and configure simulation domains/infrastructure.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800'
      },
      {
        tab: 'Execution',
        title: 'Phishing Simulation Execution',
        description: 'We launch controlled campaigns: email delivery using lookalike domains, credential harvesting simulation (securely logged), malicious link simulations, and attachment-based phishing payloads.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800'
      },
      {
        tab: 'Tracking',
        title: 'User Interaction Tracking',
        description: 'We monitor and analyze user actions: email open rates, link click rates, credential submission attempts, and reporting rates (how many users flag/report the email).',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800'
      },
      {
        tab: 'Analysis',
        title: 'Post-Campaign Analysis',
        description: 'Evaluate high-risk user groups, identify most effective templates, find gaps in user training, and examine email security gateway/filter failures.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800'
      },
      {
        tab: 'Reporting',
        title: 'Reporting and Recommendations',
        description: 'Deliver detailed reports featuring campaign metrics/stats, risk scoring by department, identified filtering weaknesses, training guidance, and DMARC/SPF configurations review.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'
      }
    ],
    benefits: [
      { text: 'Reduce risk of credential theft and account compromise', icon: 'Lock' },
      { text: 'Improve employee awareness and behavior', icon: 'Users' },
      { text: 'Identify high-risk users and departments', icon: 'Target' },
      { text: 'Strengthen email security controls', icon: 'Shield' },
      { text: 'Enhance incident detection and response', icon: 'Search' },
      { text: 'Prevent financial and reputational damage', icon: 'FileText' }
    ],
    faqs: [
      { question: 'Is phishing simulation safe?', answer: 'Yes — all campaigns are controlled, safe, and designed to avoid any real harm or service disruption.' },
      { question: 'Will employees know they are being tested?', answer: 'This depends on the engagement type (announced for baseline training or blind testing for true response assessment).' },
      { question: 'Do you collect real passwords?', answer: 'No. Login credentials are simulated and handled securely for assessment metrics only, without storing actual user passwords.' },
      { question: 'How often should campaigns be conducted?', answer: 'We recommend quarterly or bi-annually to achieve effective and persistent security awareness improvements.' },
      { question: 'Do you provide training after the campaign?', answer: 'Yes — we provide targeted security awareness recommendations and direct training materials based on campaign failure rates.' }
    ]
  },

  // 5. IoT and Hardware Sub-Services
  {
    slug: 'wifi-penetration-testing',
    title: 'Wi-Fi Penetration Testing',
    description: 'Evaluate corporate and guest wireless networks against deauthentication, handshake cracking, and unauthorized access.',
    fullDetails: 'Wireless networks extend beyond physical boundaries — making them highly attractive targets for attackers attempting unauthorized access, data interception, or network compromise. Wi-Fi Penetration Testing is a specialized security assessment focused on evaluating the security of wireless networks against real-world attack scenarios.',
    icon: 'Shield',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    features: [],
    hidden: true,
    whyTitle: 'Why HacFy for Wi-Fi Penetration Testing?',
    whyText: 'We simulate real attacker behavior — from outside your premises — to identify how your wireless network can be exploited and breached.',
    whyList: [
      'Real-world attack simulation (external & internal perspectives)',
      'Wireless protocol and encryption testing expertise',
      'Rogue AP and evil twin detection',
      'Enterprise Wi-Fi (WPA2-Enterprise / WPA3) testing',
      'Network segmentation validation (guest vs internal)',
      'CVSS-based risk prioritization',
      'Actionable remediation guidance',
      'Re-testing & validation support'
    ],
    methodologySteps: [
      {
        tab: 'Planning',
        title: 'Planning and Scope Definition',
        description: 'Identify SSIDs (corporate, guest, hidden networks), define testing boundaries (on-site / external perimeter), determine authentication type (PSK / Enterprise), and establish rules of engagement.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800'
      },
      {
        tab: 'Discovery',
        title: 'Discovery and Configuration Analysis',
        description: 'We identify wireless networks and analyze settings: SSID discovery, encryption type verification (WEP, WPA2, WPA3), signal strength mapping, and rogue Access Point detection using tools like Aircrack-ng, Kismet, Wireshark.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800'
      },
      {
        tab: 'Exploitation',
        title: 'Penetration Testing (Attack Simulation)',
        description: 'We simulate wireless attacks: WPA/WPA2 handshake capture and offline cracking, evil twin deployments, deauthentication attacks, rogue AP setups, and client-side credential harvesting.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800'
      },
      {
        tab: 'Post-Exploit',
        title: 'Post-Exploitation & Network Access',
        description: 'If access is gained, we assess deeper risks: internal network access from Wi-Fi, lateral movement, network traffic interception, and device spoofing.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800'
      },
      {
        tab: 'Reporting',
        title: 'Reporting and Remediation',
        description: 'We deliver a report containing: vulnerability findings with Proof of Concept (PoC), CVSS severity ratings, WPA3 encryption enforcement recommendations, secure 802.1X/RADIUS authentication setups, and segmentation fixes.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'
      }
    ],
    benefits: [
      { text: 'Prevent unauthorized wireless access', icon: 'Lock' },
      { text: 'Protect sensitive data from interception', icon: 'Shield' },
      { text: 'Detect rogue access points and threats', icon: 'Search' },
      { text: 'Strengthen encryption and authentication', icon: 'Settings' },
      { text: 'Ensure proper network segmentation', icon: 'Handshake' },
      { text: 'Reduce risk of internal network compromise', icon: 'Target' }
    ],
    faqs: [
      { question: 'Can Wi-Fi be hacked easily?', answer: 'Weak configurations (like weak PSK passwords or outdated WEP/WPA encryption) can make Wi-Fi networks vulnerable to offline password cracking within minutes.' },
      { question: 'Do you test WPA3 networks?', answer: 'Yes — we test WPA2-Personal, WPA2-Enterprise, as well as newer WPA3 environments.' },
      { question: 'Is testing done from outside the office?', answer: 'Yes — we simulate physical attackers attempting to breach your network from nearby public spots or parking lots.' },
      { question: 'Will testing disrupt the network?', answer: 'Certain tests (like deauthentication) are highly controlled and coordinated with your IT team to prevent accidental user impact.' },
      { question: 'Do you provide re-testing?', answer: 'Yes — we validate fixes and provide confirmation reports.' }
    ]
  },
  {
    slug: 'smart-devices-security',
    title: 'Smart Devices Hardware & Firmware Security Testing',
    description: 'Hardware interface analysis (UART, JTAG) and firmware reverse-engineering for IoT, embedded systems, and smart devices.',
    fullDetails: 'Smart devices (IoT, wearables, industrial controllers, smart home systems) often operate with limited security controls, making them prime targets for attackers. Smart Devices Hardware & Firmware Testing is a specialized security assessment focused on identifying vulnerabilities in embedded systems, IoT devices, and their underlying firmware and hardware components.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    features: [],
    hidden: true,
    whyTitle: 'Why HacFy for Hardware & Firmware VAPT?',
    whyText: 'We combine hardware-level analysis with firmware reverse engineering and real-world attack simulation to uncover deep vulnerabilities that standard scans miss.',
    whyList: [
      'End-to-end IoT VAPT (Hardware + Firmware + Communication)',
      'Firmware extraction and reverse engineering expertise',
      'Hardware interface exploitation (UART/JTAG access)',
      'Secure boot and update mechanism validation',
      'Embedded system vulnerability analysis',
      'CVSS-based risk prioritization',
      'Detailed remediation and secure design guidance',
      'Re-testing & validation support'
    ],
    methodologySteps: [
      {
        tab: 'Planning',
        title: 'Planning and Scope Definition',
        description: 'Identify device types and models, define testing scope (hardware, firmware, communication), collect firmware images, and establish testing environments.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800'
      },
      {
        tab: 'Hardware',
        title: 'Hardware Assessment (VA Phase)',
        description: 'We analyze physical security: identifying debug interfaces (UART, JTAG), checking exposed ports, chip-level and PCB analysis, and secure storage validation (EEPROM, flash memory).',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800'
      },
      {
        tab: 'Firmware',
        title: 'Firmware Analysis (VA + PT Phase)',
        description: 'We extract and analyze firmware images: unpacking, static analysis for secrets, API tokens, reverse engineering of binaries, and searching for hardcoded credentials using tools like Binwalk, Ghidra.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800'
      },
      {
        tab: 'Exploitation',
        title: 'Penetration Testing (Attack Simulation)',
        description: 'We simulate real attacks: firmware tampering and modified firmware flashing, bypassing secure boot, unauthorized update delivery, and protocol sniffing (BLE, Zigbee, Wi-Fi).',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800'
      },
      {
        tab: 'Post-Exploit',
        title: 'Post-Exploitation & Backdoors',
        description: 'We assess deeper risks: persistent backdoor insertion, data extraction from local storage, lateral movement to connected corporate networks, and remote control scenarios.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800'
      },
      {
        tab: 'Reporting',
        title: 'Reporting and Remediation',
        description: 'We deliver a detailed report containing: vulnerability findings with PoC, firmware & hardware findings, CVSS ratings, secure design guidelines (secure boot, firmware signing), and re-testing.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'
      }
    ],
    benefits: [
      { text: 'Identify deep-rooted vulnerabilities in IoT devices', icon: 'Search' },
      { text: 'Prevent device takeover and misuse', icon: 'Lock' },
      { text: 'Protect sensitive data stored on devices', icon: 'Shield' },
      { text: 'Strengthen firmware integrity and update mechanisms', icon: 'Settings' },
      { text: 'Secure hardware interfaces and embedded systems', icon: 'Target' },
      { text: 'Reduce risk of large-scale IoT attacks (botnets)', icon: 'FileText' }
    ],
    faqs: [
      { question: 'What devices can you test?', answer: 'IoT devices, smart home products, industrial devices (ICS), wearables, medical devices, and custom embedded systems.' },
      { question: 'Do you require physical access?', answer: 'Yes, physical access is required for hardware-level testing. Firmware-only testing can sometimes be done remotely if the firmware is provided.' },
      { question: 'Can firmware be reverse engineered?', answer: 'Yes — we decompile and analyze binary files to identify hidden vulnerabilities, hardcoded API keys, or backdoors.' },
      { question: 'Will testing damage the device?', answer: 'No — testing is conducted carefully in our labs to avoid physical hardware damage.' },
      { question: 'Do you provide re-testing?', answer: 'Yes — we validate fixes and provide confirmation reports.' }
    ]
  },

  // 6. SOC Maturity Sub-Services
  {
    slug: 'soc-maturity-assessment',
    title: 'SOC Maturity Assessment',
    description: 'Evaluate people, processes, and technology capabilities of your Security Operations Center.',
    fullDetails: 'A SOC Maturity Assessment evaluates the effectiveness, capability, and readiness of your Security Operations Center (SOC) to detect, respond to, and recover from cyber threats. It measures your SOC across key domains such as people, processes, and technology, identifying gaps and providing a roadmap to enhance your security operations.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200',
    features: [],
    hidden: true,
    whyTitle: 'Why HacFy for SOC Maturity Assessment?',
    whyText: 'We go beyond checklist-based audits by evaluating real detection and response capabilities. We help you transform your SOC from reactive to proactive and intelligence-driven.',
    whyList: [
      'Comprehensive SOC capability evaluation (People, Process, Technology)',
      'Detection engineering and use-case coverage analysis',
      'SIEM optimization and log visibility assessment',
      'Mapping to MITRE ATT&CK techniques',
      'Incident response readiness evaluation',
      'Automation and SOAR maturity assessment',
      'Risk-based maturity scoring model',
      'Actionable roadmap for SOC improvement'
    ],
    methodologySteps: [
      {
        tab: 'Planning',
        title: 'Planning and Scope Definition',
        description: 'Identify SOC model (in-house / MSSP / hybrid), define scope (tools, processes, teams), gather architecture details (SIEM, EDR, SOAR), and conduct stakeholder interviews.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800'
      },
      {
        tab: 'Current State',
        title: 'Current State Assessment',
        description: 'We evaluate existing SOC capabilities: SIEM configuration and log ingestion, alerting rules, incident response playbooks, threat intelligence usage, and SOC team shift operations.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800'
      },
      {
        tab: 'Detection',
        title: 'Detection & Use Case Analysis',
        description: 'Mapping detection rules to MITRE ATT&CK techniques, identifying detection gaps and log blind spots, evaluating false positives, and assessing alert fatigue.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800'
      },
      {
        tab: 'Incident Response',
        title: 'Incident Response & Threat Handling',
        description: 'Evaluate incident triage and escalation workflows, analyze response time metrics (MTTD, MTTR), review playbooks, and assess containment/remediation processes.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800'
      },
      {
        tab: 'Scoring',
        title: 'Maturity Scoring & Gap Analysis',
        description: 'We rate SOC maturity across levels (Initial, Developing, Defined, Managed, Optimized). We identify process gaps, technology limitations, and skill/training deficiencies.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800'
      },
      {
        tab: 'Roadmap',
        title: 'Reporting and Roadmap',
        description: 'We deliver a detailed report containing: SOC maturity scorecard, gap analysis with risk prioritization, MITRE ATT&CK mapping insights, tool optimization plans, and SOAR roadmap.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'
      }
    ],
    benefits: [
      { text: 'Improve threat detection and response capabilities', icon: 'Shield' },
      { text: 'Reduce incident response time (MTTD / MTTR)', icon: 'Target' },
      { text: 'Enhance visibility across infrastructure', icon: 'Search' },
      { text: 'Optimize SIEM and security tools', icon: 'Settings' },
      { text: 'Reduce false positives and alert fatigue', icon: 'Lock' },
      { text: 'Strengthen overall security posture', icon: 'ShieldCheck' },
      { text: 'Align with industry frameworks and compliance', icon: 'FileText' }
    ],
    faqs: [
      { question: 'How long does a SOC maturity assessment take?', answer: 'Typically 2–4 weeks, depending on SOC size, complexity, and tooling.' },
      { question: 'Do you support MSSP-based SOCs?', answer: 'Yes — we assess in-house, outsourced, and hybrid SOC models.' },
      { question: 'Will this include tool optimization?', answer: 'Yes — SIEM, EDR, and SOAR tools are evaluated and we provide specific configuration and use-case optimization paths.' },
      { question: 'Do you provide a roadmap for improvement?', answer: 'Yes — a prioritized, actionable short-term and long-term improvement roadmap is included.' },
      { question: 'Can you help implement improvements?', answer: 'Yes — we support detection engineering, playbook creation, and SOC enhancement post-assessment.' }
    ]
  }
];
