"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navbar.module.css';
import Button from '@/components/ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    { label: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#') && pathname === '/') {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(href);
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Hacfy
        </div>

        {/* Desktop Links */}
        <div className={styles.links}>
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className={styles.link}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          <Button 
            onClick={() => handleNavClick('/contact')}
            variant="primary"
            className={styles.navCta}
          >
            Request Cyber Risk View
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
                <a 
                  key={item.label} 
                  href={item.href} 
                  className={styles.mobileLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                onClick={() => handleNavClick('/contact')}
                variant="primary"
                className={styles.mobileNavCta}
              >
                Request Cyber Risk View
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
