import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.inner}>
        {/* 좌측: 로고 */}
        <div className={styles.left}>
          <img
            src="/crystal-logo2.png"
            alt="수정교회 로고"
            className={styles.logo}
          />
        </div>
        {/* 우측: 언어/주소/저작권 */}
        <div className={styles.right}>
          <div className={styles.langs}>
            <span>Global site</span>
            <span>|</span>
            <span>English</span>
            <span>|</span>
            <span>日本語</span>
            <span>|</span>
            <span>中國語</span>
          </div>
          <div className={styles.addressSnsRow}>
            <div className={styles.addresses}>
              <div style={{whiteSpace: 'nowrap'}}>
                <span>16240 경기도 수원시 팔달구 팔달문로150번길 13&nbsp;&nbsp;<span id="phone-number">T 031)212-0091</span></span>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <a 
                href="https://www.youtube.com/@%EC%88%98%EC%A0%95%EC%B9%A8%EB%A1%80%EA%B5%90%ED%9A%8C-m1o" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                title="수정침례교회 유튜브"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://naver.me/xBwxuk9z" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                title="수정침례교회 네이버 지도"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
                </svg>
              </a>
              <a 
                href="" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                title="수정침례교회 네이버 블로그"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.copyright}>
            2025 © CRYSTAL BAPTIST CHURCH. ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
