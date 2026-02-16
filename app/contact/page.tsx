"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
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
    fullName: '',
    email: '',
    countryCode: '+91',
    phoneNumber: '',
    company: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry = countries.find(c => c.code === formData.countryCode) || countries.find(c => c.id === 'IN') || countries[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            service: formData.service,
            full_name: formData.fullName,
            email: formData.email,
            phone: `${formData.countryCode} ${formData.phoneNumber}`,
            company: formData.company,
            subject: formData.subject,
            message: formData.message,
            submitted_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        service: '',
        fullName: '',
        email: '',
        countryCode: '+91',
        phoneNumber: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Section className={styles.section} variant="slate-50">
        <div className={styles.contactContainer}>
          {/* Left Column: Info */}
          {/* <div className={styles.infoColumn}>
            <div className={styles.header}>
              <h1 className={styles.title}>Contact Information</h1>
              <p className={styles.description}>
                Reach out to our cybersecurity experts for consultation, support, or partnership opportunities.
              </p>
            </div> */}

            {/* <div className={styles.infoCards}>
              <motion.div 
                className={styles.infoCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className={styles.iconWrapper}>
                  <Mail size={24} />
                </div>
                <div className={styles.cardContent}>
                  <h3>Email</h3>
                  <p>info@hacfy.com</p>
                  <p className={styles.subtext}>We&apos;ll respond within 24 hours</p>
                </div>
              </motion.div>

              <motion.div 
                className={styles.infoCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className={styles.iconWrapper}>
                  <Phone size={24} />
                </div>
                <div className={styles.cardContent}>
                  <h3>Phone</h3>
                  <p>+91 8660767853</p>
                  <p className={styles.subtext}>Mon-Fri, 9AM-6PM IST</p>
                </div>
              </motion.div>

              <motion.div 
                className={styles.infoCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className={styles.iconWrapper}>
                  <MapPin size={24} />
                </div>
                <div className={styles.cardContent}>
                  <h3>Office</h3>
                  <p>Hacfy Office, 2nd Floor Alva&apos;s Technology Centre, Mijar-Moodubidire, DK 574225.</p>
                </div>
              </motion.div>

              <motion.div 
                className={styles.infoCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className={styles.iconWrapper}>
                  <Clock size={24} />
                </div>
                <div className={styles.cardContent}>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </motion.div>
            </div>
          </div> */}

          {/* Right Column: Form */}
          <motion.div 
            className={styles.formCard}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.formTitle}>Send us a Message</h2>
            
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Select Services *</label>
                <select 
                  className={styles.select} 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Choose an option --</option>
                  <option value="network-systems">Network & Systems</option>
                  <option value="cloud-platforms">Cloud Platforms</option>
                  <option value="data-storage">Data Storage</option>
                  <option value="applications">Applications</option>
                  <option value="communication-code">Communication & Code</option>
                  <option value="devices-hardware">Devices & Hardware</option>
                  <option value="security-testing">Security Testing</option>
                  <option value="human-risk-testing">Human Risk Testing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name *</label>
                  <input 
                    type="text" 
                    name="fullName"
                    className={styles.input} 
                    placeholder="Enter your Full Name" 
                    value={formData.fullName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    className={styles.input} 
                    placeholder="Enter your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number *</label>
                  <div className={styles.phoneInputWrapper}>
                    <div className={styles.customCountrySelector} ref={dropdownRef}>
                      <div 
                        className={styles.selectorTrigger}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <div className={styles.selectedFlag}>
                          <span>{selectedCountry.flag}</span>
                          <span>{selectedCountry.code}</span>
                        </div>
                        <ChevronDown size={14} className={isDropdownOpen ? styles.rotate : ''} />
                      </div>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div 
                            className={styles.dropdownList}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
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
                              {filteredCountries.map((country) => (
                                <button
                                  key={`${country.id}-${country.code}`}
                                  type="button"
                                  className={`${styles.countryItem} ${formData.countryCode === country.code ? styles.active : ''}`}
                                  onClick={() => handleCountrySelect(country.code)}
                                >
                                  <span className={styles.itemFlag}>{country.flag}</span>
                                  <span className={styles.itemName}>{country.name}</span>
                                  <span className={styles.itemCode}>{country.code}</span>
                                </button>
                              ))}
                              {filteredCountries.length === 0 && (
                                <div className={styles.noResults}>No country found</div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <input 
                      type="tel" 
                      name="phoneNumber"
                      className={styles.input} 
                      style={{ flex: 1 }} 
                      placeholder="Phone Number" 
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Company (Optional)</label>
                  <input 
                    type="text" 
                    name="company"
                    className={styles.input} 
                    placeholder="Your Company" 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Subject *</label>
                <input 
                  type="text" 
                  name="subject"
                  className={styles.input} 
                  placeholder="How can we help you?" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Message *</label>
                <textarea 
                  name="message"
                  className={styles.textarea} 
                  placeholder="Tell us about your cybersecurity needs..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {status === 'success' && (
                <div className={styles.successBox} style={{ color: '#10b981', border: '1px solid #10b981', background: '#ecfdf5' }}>
                  <div className={styles.successContent}>
                    <CheckCircle2 size={20} />
                    <span>Message Sent Successfully!</span>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className={styles.successBox} style={{ color: '#ef4444', border: '1px solid #ef4444', background: '#fef2f2' }}>
                  <div className={styles.successContent}>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default ContactPage;
