import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img
          src="/crystal-logo2.png"
          alt="수정침례교회 로고"
          className={styles.logo}
        />
      </div>
      <nav className={styles.nav}>
        <a href="#">환영합니다</a>
        <a href="#">소개합니다</a>
        <a href="#">예배와 말씀</a>
        <a href="#">공동체와 양육</a>
        <a href="#">선교와 사역</a>
      </nav>
    </header>
  );
}
