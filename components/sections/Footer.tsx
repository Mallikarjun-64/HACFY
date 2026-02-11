"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Shield
} from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const router = useRouter();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/contact');
  };

  return (
    <footer className={styles.footer}>
      {/* Top CTA Bar */}
      <div className={styles.topCtaBar}>
        <div className="container">
          <div className={styles.ctaFlex}>
            <h2 className={styles.ctaText}>Ready to secure your digital future?</h2>
            <Link href="/contact" className={styles.ctaButton}>
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <Image 
                alt="Left Logo" 
                loading="lazy" 
                width={120} 
                height={50} 
                decoding="async" 
                data-nimg="1" 
                style={{ color: 'transparent', objectFit: 'contain' }} 
                src="/images/hacfy.webp"
              />
            </div>
            <p className={styles.tagline}>A FUTURE SECURED</p>
            <p className={styles.description}>
              Building a safer digital world with end-to-end cybersecurity solutions. From penetration testing to comprehensive security consulting.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail size={18} />
                <span>contact@hacfy.com</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={18} />
                <span>+1 (234) 567-890</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={18} />
                <span>Global Operations</span>
              </div>
            </div>
            <div className={styles.socials}>
              <a href="#" aria-label="LinkedIn" className={styles.socialIcon}><Linkedin size={20} /></a>
              <a href="#" aria-label="Twitter" className={styles.socialIcon}><Twitter size={20} /></a>
              <a href="#" aria-label="GitHub" className={styles.socialIcon}><Github size={20} /></a>
            </div>
          </div>

          {/* Services Column */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Services</h3>
            <ul className={styles.linkList}>
              <li><a href="#services">Penetration Testing</a></li>
              <li><a href="#services">Cloud Security</a></li>
              <li><a href="#services">Application Security</a></li>
              <li><a href="#services">Security Review</a></li>
              <li><a href="#services">Human Risk Assessment</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className={styles.newsletterColumn}>
            <h3 className={styles.columnTitle}>Stay Updated</h3>
            <p className={styles.newsletterText}>
              Subscribe to our newsletter for the latest security insights.
            </p>
            <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={styles.emailInput} 
                required 
              />
              <button type="submit" className={styles.subscribeBtn}>
                Subscribe <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <Shield size={20} className={styles.shieldIcon} />
            <span>© 2026 HACFY. All Rights Reserved.</span>
          </div>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cybersecurity Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
