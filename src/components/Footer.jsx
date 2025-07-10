import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
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
              <div>
                <span>16240 경기도 수원시 팔달구 팔달문로150번길 13</span>
                <span className={styles.tel}>T 031)212-0091</span>
              </div>
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
