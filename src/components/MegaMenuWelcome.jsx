import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MegaMenuWelcome.module.css';

/**
 * 환영합니다 메가메뉴 컴포넌트
 * 새가족과 교회 소개 관련 메뉴들을 보여주는 드롭다운 메뉴
 */
export default function MegaMenuWelcome({ open, closing }) {
  // 메뉴가 닫혀있고 닫히는 애니메이션도 아닌 경우 렌더링하지 않음
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
      {/* 왼쪽 설명 영역 */}
      <div className={styles.left}>
        <h2>환영합니다</h2>
        <p>
          수정침례교회에 처음 오신 분들을
          <br />
          위한 교회 방문부터 수정 교인이
          <br />
          되기까지의 과정
        </p>
        {/* 모바일에서만 표시되는 로고 */}
        <div className={styles.mobileLogo}>
          <img src="/crystal-logo.png" alt="수정침례교회 로고" />
        </div>
      </div>
      
      {/* 오른쪽 메뉴 컬럼들 */}
      <div className={styles.cols}>
        {/* 새가족 안내 메뉴 */}
        <div>
          <h3>새가족 안내</h3>
          <ul>
            <li><Link to="/welcome/greeting" onClick={handleLinkClick}>환영합니다</Link></li>
            <li><Link to="/welcome/visit" onClick={handleLinkClick}>교회 방문하기</Link></li>
            <li><Link to="/welcome/register" onClick={handleLinkClick}>새가족 등록하기</Link></li>
          </ul>
        </div>
        
        {/* 사역 참여 메뉴 */}
        <div>
          <h3>사역 참여</h3>
          <ul>
            <li><Link to="/welcome/ministry" onClick={handleLinkClick}>사역 참여하기</Link></li>
            <li><Link to="/welcome/volunteer" onClick={handleLinkClick}>봉사 활동</Link></li>
            <li><Link to="/welcome/training" onClick={handleLinkClick}>양육 과정</Link></li>
          </ul>
        </div>
        
        {/* 교회 정보 메뉴 */}
        <div>
          <h3>교회 정보</h3>
          <ul>
            <li><Link to="/welcome/glossary" onClick={handleLinkClick}>교회 용어집</Link></li>
            <li><Link to="/welcome/faq" onClick={handleLinkClick}>새가족 FAQ</Link></li>
            <li><Link to="/welcome/contact" onClick={handleLinkClick}>문의하기</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 