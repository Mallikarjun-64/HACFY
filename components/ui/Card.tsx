import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', animate = false }) => {
  return (
    <div className={`${styles.card} ${className} ${animate ? styles.animate : ''}`}>
      {children}
    </div>
  );
};

export default Card;
