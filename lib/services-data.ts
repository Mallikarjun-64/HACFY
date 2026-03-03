export interface Feature {
  title: string;
  slug?: string;
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
}

export const services: Service[] = [
  {
    slug: 'infrastructure',
    title: 'Network & Systems',
    description: 'Enterprise infrastructure, including servers, firewalls, routers, and internal network components, is rigorously assessed to identify security gaps and misconfigurations. Our team strengthens perimeter defenses, hardens configurations, and ensures a resilient network architecture.',
    fullDetails: 'Our infrastructure security services provide deep-dive assessments into your network architecture, including routers, switches, and server configurations. We identify potential entry points and lateral movement risks to harden your overall security posture. We evaluate firewall rules, network segmentation, and internal/external exposure to ensure your core systems are protected against modern threats.',
    icon: 'Server',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    features: ['Network Architecture Audit', 'Vulnerability Assessment', 'Firewall Configuration Review', 'Segmentation Testing']
  },
  {
    slug: 'cloud',
    title: 'Cloud Platforms',
    description: 'Cloud environments are evaluated for identity controls, storage exposure, misconfigurations, and compliance risks. We implement secure architecture practices and enforce strong access governance to protect critical workloads.',
    fullDetails: 'We specialize in securing cloud-native environments. Our team evaluates IAM policies, storage configurations, and serverless functions to ensure your cloud infrastructure is resilient against misconfigurations and unauthorized access. We follow industry benchmarks (CIS) and best practices for each major provider to ensure your data remains secure in the cloud.',
    icon: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    features: ['IAM Policy Review', 'S3 Bucket Security', 'Serverless Security', 'Multi-cloud Strategy']
  },
  {
    slug: 'databases',
    title: 'Data Storage',
    description: 'Business data repositories are tested for unauthorized access, weak encryption, and privilege misuse. Security controls are enhanced to ensure the confidentiality, integrity, and continuous availability of sensitive information.',
    fullDetails: 'Our database security reviews focus on identifying SQL injection risks, weak authentication mechanisms, and improper encryption. We help you protect your most sensitive data from internal and external threats by auditing access controls and ensuring data-at-rest and data-in-transit protections are properly implemented.',
    icon: 'Database',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1200',
    features: ['Encryption Audit', 'SQL Injection Testing', 'Access Control Review', 'Data Leakage Prevention']
  },
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
    slug: 'email-collaboration',
    title: 'Communication & Code',
    description: 'Email platforms, collaboration tools, and source code environments are reviewed for access control weaknesses and configuration risks. We secure development pipelines and enforce best practices to prevent data leakage and unauthorized code exposure.',
    fullDetails: 'We assess the security of your communication platforms to prevent phishing, data leakage, and account takeovers. We help you implement best practices for multi-factor authentication (MFA), data loss prevention (DLP), and secure configurations for tools like Microsoft 365, Google Workspace, and Slack.',
    icon: 'Mail',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    features: ['Phishing Protection', 'DLP Implementation', 'MFA Configuration', 'Third-party App Audit']
  },
  {
    slug: 'iot-hardware',
    title: 'Devices & Hardware',
    description: 'Connected devices and hardware systems are analyzed for firmware vulnerabilities, insecure communication, and network exposure. Protective controls are implemented to reduce attack surfaces and prevent device-level compromise.',
    fullDetails: 'Our IoT security services cover the entire ecosystem, from device firmware to communication protocols. We help you identify hardware-level vulnerabilities, insecure debug ports, and weak encryption in wireless communications, ensuring your connected devices don\'t become a weak link in your security chain.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    features: ['Firmware Analysis', 'Hardware Hacking', 'Protocol Security', 'Reverse Engineering']
  },
  {
    slug: 'security-review',
    title: 'Security Testing',
    description: 'Comprehensive assessments are conducted to uncover technical vulnerabilities and operational weaknesses. Detailed reports and remediation guidance enable organizations to proactively strengthen their security posture.',
    fullDetails: 'We provide a comprehensive evaluation of your organization\'s security framework. This includes policy reviews, architectural assessments, and compliance checks (such as SOC2, GDPR, or HIPAA readiness) to ensure a robust security foundation that aligns with your business goals.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    features: ['Compliance Gap Analysis', 'Policy Development', 'Security Architecture Review', 'Risk Assessment']
  },
  {
    slug: 'human-risk',
    title: 'Human Risk Testing',
    description: 'Simulated phishing campaigns and awareness evaluations measure employee susceptibility to social engineering threats. Actionable insights help reduce human-related risks and improve overall security awareness.',
    fullDetails: 'We test your organization\'s human element through simulated phishing, vishing, and physical social engineering attacks. Our goal is to identify training gaps and improve your workforce\'s ability to recognize and report threats, transforming your employees into a strong line of defense.',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    features: ['Phishing Simulations', 'Security Awareness Training', 'Social Engineering', 'Physical Access Testing']
  },
  {
    slug: 'mobile-application',
    title: 'Mobile Application Penetration Testing',
    description: 'A Mobile Application Penetration Test is a comprehensive security assessment performed on Android and iOS applications to identify vulnerabilities that could be exploited by attackers.',
    fullDetails: 'Mobile Application Penetration Testing',
    icon: 'AppWindow',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Android & iOS Security Testing',
      'Static & Dynamic Analysis',
      'API Security Assessment',
      'Compliance Reporting'
    ],
    hidden: true
  },
  {
    slug: 'web-application',
    title: 'Web Application',
    description: 'A Web Application Penetration Test is a controlled security assessment designed to identify vulnerabilities in your web applications before attackers do. It simulates real-world cyberattacks to uncover security weaknesses that could lead to data breaches, financial loss, or reputational damage.',
    fullDetails: '1. What is a Web Application Penetration Test?\n\nA Web Application Penetration Test is a controlled security assessment designed to identify vulnerabilities in your web applications before attackers do. It simulates real-world cyberattacks to uncover security weaknesses that could lead to data breaches, financial loss, or reputational damage.\n\nAt HacFy, we go beyond automated scanning. Our security experts combine advanced tools with in-depth manual testing to evaluate authentication mechanisms, session management, business logic, APIs, input validation, access controls, and server configurations.\n\nOur testing approach aligns with industry standards such as OWASP Top 10, ensuring that your web applications remain resilient against modern threats.\n\n2. Why Organizations Trust HacFy\n\nChoosing the right security partner is critical. At HacFy, we deliver more than vulnerability reports — we deliver clarity, risk context, and actionable solutions.\n\nWhy organizations trust HacFy:\n\n• Experienced Security Analysts: Real-world offensive security expertise\n• Deep OWASP & Attack Vector Understanding: OWASP Top 10 and modern attack vectors\n• Manual & Advanced Tools: Hands-on testing with advanced automated tools\n• Clear, Executive-Friendly Reporting: Technical findings — with actionable insights\n• Practical Remediation Guidance: Actionable guidance, not just vulnerability listings\n• Responsible Testing Methodology: Safe and ethical penetration testing\n\nWe focus on business impact, not just technical findings. Our goal is to strengthen your security posture while ensuring minimal disruption to operations.',
    icon: 'AppWindow',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Authentication Mechanism Review',
      'Session Management Testing',
      'Business Logic Evaluation',
      'API Security Assessment',
      'Input Validation Testing',
      'Access Control Audit'
    ],
    hidden: true
  },
  {
    slug: 'api-security-testing',
    title: 'API Security Testing',
    description: 'An API Application Penetration Test is a specialized security assessment focused on identifying vulnerabilities within Application Programming Interfaces (APIs).',
    fullDetails: 'API Security Testing',
    icon: 'Shield',
    image: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Authentication & Authorization Testing',
      'Data Exposure Analysis',
      'Injection & Input Validation',
      'Rate Limiting Evaluation'
    ],
    hidden: true
  },
  {
    slug: 'desktop-application',
    title: 'Desktop Application Penetration Testing',
    description: 'Desktop Application Penetration Testing is a specialized security assessment focused on identifying vulnerabilities in Windows, macOS, or Linux-based client applications. Unlike web applications, desktop applications often interact directly with operating systems, local storage, memory, and backend services — creating unique attack surfaces.',
    fullDetails: '1. What is Desktop Application Penetration Testing?\n\nDesktop Application Penetration Testing is a specialized security assessment focused on identifying vulnerabilities in Windows, macOS, or Linux-based client applications. Unlike web applications, desktop applications often interact directly with operating systems, local storage, memory, and backend services — creating unique attack surfaces.\n\nAt HacFy, we simulate real-world attack scenarios to uncover security weaknesses such as: Hardcoded credentials and encryption keys, Insecure local data storage, Client-side authentication bypass, DLL hijacking vulnerabilities, Injection flaws (SQL, Command, XML), Weak client-server communication security, and Privilege escalation risks.\n\n2. Why Organizations Trust HacFy\n\nChoosing the right security partner is critical. At HacFy, we deliver more than vulnerability reports — we deliver clarity, risk context, and actionable solutions.\n\nWhy organizations trust HacFy:\n\n• Experienced Security Analysts: Real-world offensive security expertise\n• Deep OWASP & Attack Vector Understanding: OWASP Top 10 and modern attack vectors\n• Manual & Advanced Tools: Hands-on testing with advanced automated tools\n• Clear, Executive-Friendly Reporting: Technical findings — with actionable insights\n• Practical Remediation Guidance: Actionable guidance, not just vulnerability listings\n• Responsible Testing Methodology: Safe and ethical penetration testing\n\nWe focus on business impact, not just technical findings. Our goal is to strengthen your security posture while ensuring minimal disruption to operations.',
    icon: 'Monitor',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Binary Analysis & Reverse Engineering',
      'Insecure Local Data Storage Audit',
      'DLL Hijacking & Injection Testing',
      'Client-Server Communication Security',
      'Privilege Escalation Analysis',
      'Runtime Memory Inspection'
    ],
    hidden: true
  }
];
