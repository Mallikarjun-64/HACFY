import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'white' | 'slate-50' | 'slate-100' | 'gradient';
  containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = '', 
  variant = 'white',
  containerClassName = ''
}) => {
  return (
    <section id={id} className={`${styles.section} ${styles[variant]} ${className}`}>
      <div className={`container ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
