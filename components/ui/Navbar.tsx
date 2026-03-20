"use client";

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Shield, 
  Globe, 
  Smartphone, 
  Network, 
  Database, 
  Cpu, 
  Mail, 
  Users, 
  Monitor,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navbar.module.css';
import Button from '@/components/ui/Button';
import { services } from '@/lib/services-data';

const iconMap: Record<string, any> = {
  Server: Network,
  Cloud: Globe,
  Database: Database,
  AppWindow: Monitor,
  Mail: Mail,
  Cpu: Cpu,
  ShieldCheck: Shield,
  Users: Users,
  Shield: Shield,
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('network-systems');
  const pathname = usePathname();
  const router = useRouter();

  const categories = [
    {
      id: 'network-systems',
      title: 'Network & Systems',
      services: ['infrastructure']
    },
    {
      id: 'cloud-platforms',
      title: 'Cloud Platforms',
      services: ['cloud']
    },
    {
      id: 'data-storage',
      title: 'Data Storage',
      services: ['databases']
    },
    {
      id: 'applications',
      title: 'Applications',
      services: [
        'web-application',
        'mobile-application',
        'api-security-testing',
        'desktop-application'
      ]
    },
    {
      id: 'communication-code',
      title: 'Communication & Code',
      services: ['email-collaboration']
    },
    {
      id: 'devices-hardware',
      title: 'Devices & Hardware',
      services: ['iot-hardware']
    },
    {
      id: 'security-testing',
      title: 'Security Testing',
      services: ['security-review']
    },
    {
      id: 'human-risk-testing',
      title: 'Human Risk Testing',
      services: ['human-risk']
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/#hero' },
    { label: 'Services', href: '/#cybersecurity-services', isMegaMenu: true },
    { label: 'Blogs', href: '/#resources' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    if (href.startsWith('/#') && pathname === '/') {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(href);
    }
  };

  const handleSubItemClick = (href: string, tabId: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    
    const navigateAndSetTab = () => {
      const element = document.getElementById('careers');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // We trigger the tab change by looking for the buttons in Careers section
        // Alternatively, we could use a global state/event, but for now let's use a simple event
        window.dispatchEvent(new CustomEvent('changeCareerTab', { detail: { tabId } }));
      }
    };

    if (pathname === '/') {
      navigateAndSetTab();
    } else {
      router.push(href);
      // Wait for navigation
      setTimeout(navigateAndSetTab, 100);
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image 
            alt="Left Logo" 
            loading="lazy" 
            width={100} 
            height={40} 
            decoding="async" 
            data-nimg="1" 
            style={{ color: 'transparent', objectFit: 'contain' }} 
            src="/images/hacfy.webp"
          />
        </div>

        {/* Desktop Links */}
        <div className={styles.links}>
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className={styles.navItemWrapper}
              onMouseEnter={() => (item.isMegaMenu) && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a 
                href={item.href} 
                className={`${styles.link} ${item.isMegaMenu ? styles.hasDropdown : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
                {item.isMegaMenu && <ChevronDown size={14} className={styles.chevron} />}
              </a>

              {item.isMegaMenu && activeDropdown === item.label && (
                <div className={styles.megaMenu}>
                  <div className={styles.megaMenuCategories}>
                    <p className={styles.megaMenuTitle}>Service Categories</p>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.categoryBtnActive : ''}`}
                        onMouseEnter={() => setActiveCategory(cat.id)}
                      >
                        {cat.title}
                        {activeCategory === cat.id ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </button>
                    ))}
                  </div>
                  <div className={styles.megaMenuContent}>
                    <p className={styles.contentTitle}>
                      {categories.find(c => c.id === activeCategory)?.title}
                    </p>
                    <div className={styles.servicesGrid}>
                      {categories.find(c => c.id === activeCategory)?.services.map(slug => {
                        const service = services.find(s => s.slug === slug);
                        if (!service) return null;
                        const Icon = iconMap[service.icon] || Shield;
                        return (
                          <Link 
                            key={slug} 
                            href={`/services/${service.slug}`}
                            className={styles.serviceCard}
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className={styles.serviceIcon}>
                              <Icon size={24} />
                            </div>
                            <div className={styles.serviceInfo}>
                              <p className={styles.serviceName}>{service.title}</p>
                              <p className={styles.serviceDesc}>{service.description.substring(0, 60)}...</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <Button 
            onClick={() => handleNavClick('/contact')}
            variant="primary"
            className={styles.navCta}
          >
            Request a Security Assessment
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={styles.mobileToggle} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileLinks}>
              {navItems.map((item) => (
                <div key={item.label} className={styles.mobileNavItem}>
                  <div className={styles.mobileLinkRow} onClick={() => (item.isMegaMenu) ? setActiveDropdown(activeDropdown === item.label ? null : item.label) : handleNavClick(item.href)}>
                    <a 
                      href={item.href} 
                      className={styles.mobileLink}
                      onClick={(e) => e.preventDefault()}
                    >
                      {item.label}
                    </a>
                    {(item.isMegaMenu) && <ChevronDown size={20} className={`${styles.chevron} ${activeDropdown === item.label ? styles.rotate : ''}`} />}
                  </div>

                  {item.isMegaMenu && activeDropdown === item.label && (
                    <div className={styles.mobileSubMenu}>
                      {categories.map((cat) => (
                        <div key={cat.id} className={styles.mobileCategorySection}>
                          <p className={styles.mobileSubTitle}>{cat.title}</p>
                          <div className={styles.mobileSubItemsGrid}>
                            {cat.services.map(slug => {
                              const service = services.find(s => s.slug === slug);
                              if (!service) return null;
                              return (
                                <button
                                  key={slug}
                                  className={styles.mobileSubItem}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setActiveDropdown(null);
                                    router.push(`/services/${service.slug}`);
                                  }}
                                >
                                  {service.title}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button 
                onClick={() => handleNavClick('/contact')}
                variant="primary"
                className={styles.mobileNavCta}
              >
                Request a Security Assessment
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
