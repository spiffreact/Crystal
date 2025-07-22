import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MegaMenuMission.module.css';

/**
 * 선교와 사역 메가메뉴 컴포넌트
 * 교회의 선교 활동과 사역들을 보여주는 드롭다운 메뉴
 */
export default function MegaMenuMission({ open, closing }) {
  if (!open && !closing) return null;

  /**
   * 링크 클릭 시 모바일 메뉴를 닫는 핸들러
   */
  const handleLinkClick = () => {
    // 모바일 메뉴가 열려있다면 닫기
    const mobileMenu = document.querySelector('[class*="navOpen"]');
    if (mobileMenu) {
      // 모바일 메뉴 닫기 이벤트를 트리거
      const hamburgerButton = document.querySelector('[class*="hamburger"]');
      if (hamburgerButton) {
        hamburgerButton.click();
      }
    }
  };

  return (
    <div className={`${styles.megaMenu} ${closing ? styles.closing : ''}`}>
      <div className={styles.left}>
        <h2>선교와 사역</h2>
        <p>
          하나님의 사랑을 전하고
          <br />
          복음의 진리를 세상에 알리는
          <br />
          선교와 사역 프로그램
        </p>
        <div className={styles.mobileLogo}>
          <img src="/church.png" alt="수정교회 로고" />
        </div>
      </div>
      <div className={styles.cols}>
        <div>
          <h3>선교 활동</h3>
          <ul>
            <li><Link to="/mission/overseas-outreach" onClick={handleLinkClick}>해외 아웃리치</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 