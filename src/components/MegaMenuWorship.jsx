import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MegaMenuWorship.module.css';

export default function MegaMenuWorship({ open, closing }) {
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
        <h2>예배와 말씀</h2>
        <p>
          동영상으로 수정교회의 예배 말씀도 다시 보고, 
          <br/>
          예배에 참여하기 전에 예배 시간 정보도 알아보세요
        </p>
        <div className={styles.mobileLogo}>
          {/* 성경책 아이콘 (SVG) */}
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="18" width="56" height="44" rx="8" fill="#1976d2"/>
            <rect x="20" y="26" width="40" height="28" rx="4" fill="#fff"/>
            <rect x="32" y="36" width="16" height="4" rx="2" fill="#1976d2"/>
            <rect x="38" y="30" width="4" height="16" rx="2" fill="#1976d2"/>
            <rect x="20" y="54" width="40" height="4" rx="2" fill="#ff7043"/>
          </svg>
        </div>
      </div>
      {/* 오른쪽 메뉴 컬럼들 */}
      <div className={styles.cols}>
        {/* 예배 영상 */}
          <div>
            <h3>예배 영상</h3>
            <ul>
              <li><Link to="/worship/videos" onClick={handleLinkClick}>주일 예배</Link></li>
              <li><Link to="/worship/wednesday" onClick={handleLinkClick}>수요 예배</Link></li>
              <li><Link to="/worship/friday" onClick={handleLinkClick}>금요 예배</Link></li>
              <li><Link to="/worship/dawn" onClick={handleLinkClick}>새벽기도회</Link></li>
              <li><Link to="/worship/english" onClick={handleLinkClick}>영어 예배</Link></li>
            </ul>
          </div>
        {/* 설교 */}
        <div>
            <h3>설교</h3>
            <ul>
            <li><Link to="#" onClick={handleLinkClick}>책별 설교</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>인물별 설교</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>주제별 설교</Link></li>
          </ul>
        </div>
        {/* 특별 집회 */}
        <div>
          <h3>특별집회 영상</h3>
          <ul>
            <li><Link to="/worship/videos" onClick={handleLinkClick}>신년 예배</Link></li>
            <li><Link to="/worship/wednesday" onClick={handleLinkClick}>맥추감사 예배</Link></li>
            <li><Link to="/worship/friday" onClick={handleLinkClick}>성탄절 예배</Link></li>
            <li><Link to="/worship/dawn" onClick={handleLinkClick}>특밤기도회</Link></li>
            {/* <li><Link to="/worship/english" onClick={handleLinkClick}>영어 예배</Link></li> */}
          </ul>
        </div>
      </div>
    </div>
    
  );
} 