import React from 'react';
import styles from './FooterBottom.module.css';

const FooterBottom: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.text}>
          © 2026 | Cybersecurity Services | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterBottom;
