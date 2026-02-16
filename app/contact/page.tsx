"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Loader2,
  ChevronDown,
  Search
} from 'lucide-react';

import Section from '@/components/ui/Section';
import styles from './Contact.module.css';
import Footer from '@/components/sections/Footer';
import { supabase } from '@/lib/supabase';
import { countries } from '@/lib/countries';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    companyEmail: '',
    countryCode: '+91',
    phoneNumber: '',
    companyName: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry =
    countries.find(c => c.code === formData.countryCode) ||
    countries.find(c => c.id === 'IN') ||
    countries[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCountrySelect = (code: string) => {
    setFormData(prev => ({ ...prev, countryCode: code }));
    setIsDropdownOpen(false);
    setSearchTerm('');
  };

  const filteredCountries = countries.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.code.includes(searchTerm)
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const email = formData.companyEmail.trim().toLowerCase();

    const blockedDomains = [
      'gmail.com',
      'yahoo.com',
      'outlook.com',
      'hotmail.com',
      'live.com',
      'msn.com',
      'icloud.com',
      'protonmail.com',
      'aol.com'
    ];

    const domain = email.split('@')[1];

    // 🚫 Strong company email enforcement
    if (!domain || blockedDomains.some(d => email.includes(d))) {
      setStatus('error');
      setErrorMessage('Please use your company email address');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            service: formData.service,
            full_name: formData.name,
            email: formData.companyEmail,
            phone: `${formData.countryCode} ${formData.phoneNumber}`,
            company: formData.companyName,
            subject: '',
            message: formData.message,
            submitted_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setStatus('success');

      setFormData({
        service: '',
        name: '',
        companyEmail: '',
        countryCode: '+91',
        phoneNumber: '',
        companyName: '',
        message: ''
      });

    } catch (error: any) {
      console.error('Supabase Error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Submission failed');
    }
  };

  return (
    <>
      <Section className={styles.section} variant="slate-50">
        <div className={styles.pageWrapper}>
          <h1 className={styles.mainTitle}>
            <span className={styles.blueText}>Get in touch </span>
            <span className={styles.cyanText}>with</span>
            <br />
            <span className={styles.blueText}>us today</span>
          </h1>

          <div className={styles.contactContainer}>

            {/* LEFT — FORM */}
            <motion.div
              className={styles.formCard}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <form className={styles.form} onSubmit={handleSubmit}>

                <select
                  className={styles.select}
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >

                  <option value="">Select Services</option>
                  <option value="VAPT">VAPT</option>
                  <option value="cloud-security">Cloud Security</option>
                  <option value="Application Security">Application Security</option>
                  <option value="Security Hardening">Security Hardening</option>
                  <option value="Human Risk Simulations">Human Risk Simulations</option>

                </select>

                <div className={styles.formGrid}>
                  <input
                    type="text"
                    name="name"
                    className={styles.input}
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="companyEmail"
                    className={styles.input}
                    placeholder="Company Email"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGrid}>

                  <div className={styles.phoneInputWrapper}>

                    {/* LEFT PART — FLAG + CODE */}
                    <div
                      className={styles.selectorTrigger}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className={styles.itemFlag}>{selectedCountry.flag}</span>
                      <span className={styles.itemCode}>{selectedCountry.code}</span>

                      <ChevronDown
                        size={14}
                        className={isDropdownOpen ? styles.rotate : ''}
                      />
                    </div>

                    {/* PHONE INPUT */}
                    <input
                      type="tel"
                      name="phoneNumber"
                      className={styles.input}
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      style={{ flex: 1 }}
                    />

                    {/* DROPDOWN */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          className={styles.dropdownList}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          <div className={styles.searchWrapper}>
                            <Search size={14} className={styles.searchIcon} />
                            <input
                              type="text"
                              className={styles.searchInput}
                              placeholder="Search country..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              autoFocus
                            />
                          </div>

                          <div className={styles.scrollArea}>
                            {filteredCountries.map(country => (
                              <button
                                key={`${country.id}-${country.code}`}
                                type="button"
                                className={styles.countryItem}
                                onClick={() => handleCountrySelect(country.code)}
                              >
                                <span className={styles.itemFlag}>{country.flag}</span>
                                <span className={styles.itemName}>{country.name}</span>
                                <span className={styles.itemCode}>{country.code}</span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>

                  {/* COMPANY NAME */}
                  <input
                    type="text"
                    name="companyName"
                    className={styles.input}
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                  />

                </div>


                <textarea
                  name="message"
                  className={styles.textarea}
                  placeholder="Please outline your query..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                {status === 'success' && (
                  <div className={styles.successBox}>
                    <div className={styles.successContent}>
                      <CheckCircle2 size={18} />
                      <span>Message Sent Successfully!</span>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className={styles.successBox} style={{ color: '#ef4444' }}>
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' && (
                    <Loader2 size={18} className="animate-spin" />
                  )}
                  {status === 'loading' ? 'SENDING...' : 'SUBMIT FORM'}
                </button>

              </form>
            </motion.div>

            {/* RIGHT — INFO PANEL */}
            <motion.div
              className={styles.infoColumn}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className={styles.processTitle}>What happens next?</h2>

              <div className={styles.processSteps}>
                {['Confirmation', 'Review & Routing', 'Initial contact', 'Consultation', 'Proposal']
                  .map((title, i) => (
                    <div className={styles.processStep} key={title}>
                      <div className={styles.stepIcon}>{i + 1}</div>
                      <div className={styles.stepContent}>
                        <h3 className={styles.stepTitle}>{title}</h3>
                        <p className={styles.stepDescription}>
                          Our team will guide you through the next steps after submission.
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>

          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default ContactPage;
