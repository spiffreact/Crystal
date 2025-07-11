import React from 'react';

export default function PastorGreeting() {
  return (
    <div style={{ width: '100vw', height: '100vh', minHeight: 400, background: '#fff', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src="/greeting.png" alt="위임목사 인사말" style={{ width: '90vw', height: '90vw', objectFit: 'contain', maxWidth: '1000px', maxHeight: '1000px' }} />
    </div>
  );
} 