export interface Service {
  slug: string;
  title: string;
  description: string;
  fullDetails: string;
  icon: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: 'infrastructure',
    title: 'Infrastructure',
    description: 'Comprehensive security assessments for your physical and virtual network infrastructure.',
    fullDetails: 'Our infrastructure security services provide deep-dive assessments into your network architecture, including routers, switches, and server configurations. We identify potential entry points and lateral movement risks to harden your overall security posture. We evaluate firewall rules, network segmentation, and internal/external exposure to ensure your core systems are protected against modern threats.',
    icon: 'Server',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    features: ['Network Architecture Audit', 'Vulnerability Assessment', 'Firewall Configuration Review', 'Segmentation Testing']
  },
  {
    slug: 'cloud',
    title: 'Cloud',
    description: 'Advanced security testing for AWS, Azure, and Google Cloud environments.',
    fullDetails: 'We specialize in securing cloud-native environments. Our team evaluates IAM policies, storage configurations, and serverless functions to ensure your cloud infrastructure is resilient against misconfigurations and unauthorized access. We follow industry benchmarks (CIS) and best practices for each major provider to ensure your data remains secure in the cloud.',
    icon: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    features: ['IAM Policy Review', 'S3 Bucket Security', 'Serverless Security', 'Multi-cloud Strategy']
  },
  {
    slug: 'databases',
    title: 'Databases',
    description: 'Identifying vulnerabilities in SQL and NoSQL databases to prevent data breaches.',
    fullDetails: 'Our database security reviews focus on identifying SQL injection risks, weak authentication mechanisms, and improper encryption. We help you protect your most sensitive data from internal and external threats by auditing access controls and ensuring data-at-rest and data-in-transit protections are properly implemented.',
    icon: 'Database',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1200',
    features: ['Encryption Audit', 'SQL Injection Testing', 'Access Control Review', 'Data Leakage Prevention']
  },
  {
    slug: 'applications',
    title: 'Applications',
    description: 'Deep-dive security analysis of web and mobile applications.',
    fullDetails: 'We perform thorough testing of your web and mobile applications using industry standards like OWASP. Our process includes dynamic (DAST) and static analysis (SAST) to find logic flaws and technical vulnerabilities. We cover everything from authentication bypass to complex business logic vulnerabilities that automated tools often miss.',
    icon: 'AppWindow',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    features: ['Web App Penetration Testing', 'Mobile App Security', 'API Security Testing', 'Source Code Review']
  },
  {
    slug: 'email-collaboration',
    title: 'Email & collaboration',
    description: 'Securing communication channels and collaboration tools like O365 and Slack.',
    fullDetails: 'We assess the security of your communication platforms to prevent phishing, data leakage, and account takeovers. We help you implement best practices for multi-factor authentication (MFA), data loss prevention (DLP), and secure configurations for tools like Microsoft 365, Google Workspace, and Slack.',
    icon: 'Mail',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    features: ['Phishing Protection', 'DLP Implementation', 'MFA Configuration', 'Third-party App Audit']
  },
  {
    slug: 'iot-hardware',
    title: 'Iot and hardware',
    description: 'Testing embedded systems and smart devices for hardware and software flaws.',
    fullDetails: 'Our IoT security services cover the entire ecosystem, from device firmware to communication protocols. We help you identify hardware-level vulnerabilities, insecure debug ports, and weak encryption in wireless communications, ensuring your connected devices don\'t become a weak link in your security chain.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    features: ['Firmware Analysis', 'Hardware Hacking', 'Protocol Security', 'Reverse Engineering']
  },
  {
    slug: 'security-review',
    title: 'Security review',
    description: 'Holistic review of security policies, architectures, and implementations.',
    fullDetails: 'We provide a comprehensive evaluation of your organization\'s security framework. This includes policy reviews, architectural assessments, and compliance checks (such as SOC2, GDPR, or HIPAA readiness) to ensure a robust security foundation that aligns with your business goals.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    features: ['Compliance Gap Analysis', 'Policy Development', 'Security Architecture Review', 'Risk Assessment']
  },
  {
    slug: 'human-risk',
    title: 'Human Risk',
    description: 'Assessing organization resilience through social engineering and security awareness testing.',
    fullDetails: 'We test your organization\'s human element through simulated phishing, vishing, and physical social engineering attacks. Our goal is to identify training gaps and improve your workforce\'s ability to recognize and report threats, transforming your employees into a strong line of defense.',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    features: ['Phishing Simulations', 'Security Awareness Training', 'Social Engineering', 'Physical Access Testing']
  }
];

