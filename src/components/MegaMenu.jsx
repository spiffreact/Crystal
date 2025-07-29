import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MegaMenu.module.css';

/**
 * 소개합니다 메가메뉴 컴포넌트
 * 교회 소개 관련 메뉴들을 보여주는 드롭다운 메뉴
 */
export default function MegaMenu({ open, closing }) {
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
        <h2>소개합니다</h2>
        <p>
          수정교회의 역사를 비롯해 교회 시설,
          <br />
          주차안내, 수정교회에 대한 모든 것.
        </p>
        {/* 모바일에서만 표시되는 로고 */}
        <div className={styles.mobileLogo}>
          <img src="/church.png" alt="수정교회 로고" />
        </div>
      </div>
      
      {/* 오른쪽 메뉴 컬럼들 */}
      <div className={styles.cols}>
        {/* 교회소개 메뉴 */}
        <div>
          <h3>교회소개</h3>
          <ul>
            <li><Link to="/intro/pastor" onClick={handleLinkClick}>위임목사 인사말</Link></li>
            <li><Link to="/intro/pastoral-plan" onClick={handleLinkClick}>목회계획</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>교회 비전</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>교회 철학</Link></li>
          </ul>
        </div>
        
        {/* 예배시간 메뉴 */}
        <div>
          <h3>예배시간</h3>
          <ul>
            <li><Link to="#" onClick={handleLinkClick}>주일예배</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>수요예배</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>금요기도회</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>새벽기도회</Link></li>
            <li><a href="https://thecrystalchurch.netlify.app/">영어예배</a></li>
          </ul>
        </div>
        
        {/* 섬기는 사람들 메뉴 */}
        <div>
          <h3>섬기는 사람들</h3>
          <ul>
            <li><Link to="#" onClick={handleLinkClick}>담임목사</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>협동목사</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>전도사</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>장로・권사</Link></li>
          </ul>
        </div>
        
        {/* 교회 시설 메뉴 */}
        <div>
          <h3>교회 시설</h3>
          <ul>
            <li><Link to="#" onClick={handleLinkClick}>본당</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>교육관</Link></li>
            <li><Link to="#" onClick={handleLinkClick}>주차장</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
