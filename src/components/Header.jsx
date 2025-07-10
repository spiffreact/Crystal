import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import MegaMenu from './MegaMenu';

export default function Header() {
  const [megaOpen, setMegaOpen] = useState(false);

  const handleClickOutside = (e) => {
    // 소개합니다 메뉴 영역을 클릭한 경우는 제외
    if (!e.target.closest('[data-mega-menu]')) {
      setMegaOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
        <a href="/">환영합니다</a>
        <div
          style={{ position: 'relative', display: 'inline-block' }}
          data-mega-menu
        >
          <a
            href="/intro#"
            style={{ zIndex: 101, position: 'relative' }}
            data-mega-menu
            onClick={(e) => {
              e.preventDefault();
              setMegaOpen(!megaOpen);
            }}
          >
            소개합니다
          </a>
          <MegaMenu open={megaOpen} closing={false} />
        </div>
        <a href="#">예배와 말씀</a>
        <a href="#">공동체와 양육</a>
        <a href="#">선교와 사역</a>
      </nav>
    </header>
  );
}
