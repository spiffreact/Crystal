import React from 'react';
import styles from './PastorGreeting.module.css';

export default function PastorGreeting() {
  return (
    <div style={{ width: '100vw', height: '100vh', minHeight: 400, background: '#fff', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img 
        src="/greeting.png" 
        alt="위임목사 인사말" 
        className={styles['pastor-greeting-image']}
      />
    </div>
  );
} 