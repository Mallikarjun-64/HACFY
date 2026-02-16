"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navbar.module.css';
import Button from '@/components/ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/#hero' },
    { label: 'Features', href: '/#features' },
    { label: 'Services', href: '/#services' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Resources', href: '/#resources' },
    { 
      label: 'Careers', 
      href: '/#careers',
      dropdown: {
        title: 'Client & Certifications',
        items: [
          { label: 'Client', id: 'client' },
          { label: 'Certifications', id: 'certifications' }
        ]
      }
    },
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
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a 
                href={item.href} 
                className={`${styles.link} ${item.dropdown ? styles.hasDropdown : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
                {item.dropdown && <ChevronDown size={14} className={styles.chevron} />}
              </a>

              {item.dropdown && activeDropdown === item.label && (
                <div className={styles.dropdown}>
                  <p className={styles.dropdownTitle}>{item.dropdown.title}</p>
                  <div className={styles.dropdownItems}>
                    {item.dropdown.items.map((subItem) => (
                      <button
                        key={subItem.label}
                        className={styles.dropdownItem}
                        onClick={() => handleSubItemClick(item.href, subItem.id)}
                      >
                        {subItem.label}
                      </button>
                    ))}
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
                  <div className={styles.mobileLinkRow} onClick={() => item.dropdown ? setActiveDropdown(activeDropdown === item.label ? null : item.label) : handleNavClick(item.href)}>
                    <a 
                      href={item.href} 
                      className={styles.mobileLink}
                      onClick={(e) => e.preventDefault()}
                    >
                      {item.label}
                    </a>
                    {item.dropdown && <ChevronDown size={20} className={`${styles.chevron} ${activeDropdown === item.label ? styles.rotate : ''}`} />}
                  </div>

                  {item.dropdown && activeDropdown === item.label && (
                    <div className={styles.mobileSubMenu}>
                      <p className={styles.mobileSubTitle}>{item.dropdown.title}</p>
                      {item.dropdown.items.map((subItem) => (
                        <button
                          key={subItem.label}
                          className={styles.mobileSubItem}
                          onClick={() => handleSubItemClick(item.href, subItem.id)}
                        >
                          {subItem.label}
                        </button>
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
