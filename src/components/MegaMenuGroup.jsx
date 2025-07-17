import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MegaMenuGroup.module.css';

/**
 * 공동체와 양육 메가메뉴 컴포넌트
 * 교회 내 공동체와 양육 프로그램들을 보여주는 드롭다운 메뉴
 */
export default function MegaMenuGroup({ open, closing }) {
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
        <h2>공동체와 양육</h2>
        <p>
          수정교회에 소속된 공동체와
          <br />
          더욱 성숙한 수정 교인이 되기 위한
          <br />
          공동체별 양육 프로그램
        </p>
        <div className={styles.mobileLogo}>
          <img src="/church.png" alt="수정교회 로고" />
        </div>
      </div>
      <div className={styles.cols}>
        <div>
          <h3>부서별 공동체</h3>
          <ul>
            <li><Link to="/community/youth" onClick={handleLinkClick}>청년부</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>대학부</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>중고등부</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>초등부</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>유치부</Link></li>
          </ul>
        </div>
        <div>
          <h3>양육 프로그램</h3>
          <ul>
            <li><Link to="#" onClick={handleLinkClick}>새신자 양육</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>성경공부</Link></li>
            <li><Link to="/community/bible" onClick={handleLinkClick}>성경읽기</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>기도학교</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>제자훈련</Link></li>
          </ul>
        </div>
        <div>
          <h3>소그룹</h3>
          <ul>
            <li><Link to="#" onClick={handleLinkClick}>가정예배</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>기도모임</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>성경공부모임</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>전도모임</Link></li>
          </ul>
        </div>
        <div>
          <h3>특별 공동체</h3>
          <ul>
            <li><Link to="#" onClick={handleLinkClick}>찬양팀</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>봉사팀</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>전도팀</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>교육팀</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
