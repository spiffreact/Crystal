import React from 'react';
import styles from './MegaMenu.module.css';

/**
 * 소개합니다 메가메뉴 컴포넌트
 * 교회 소개 관련 메뉴들을 보여주는 드롭다운 메뉴
 */
export default function MegaMenu({ open, closing }) {
  // 메뉴가 닫혀있고 닫히는 애니메이션도 아닌 경우 렌더링하지 않음
  if (!open && !closing) return null;

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
          <img src="/public/church.png" alt="수정교회 로고" />
        </div>
      </div>
      
      {/* 오른쪽 메뉴 컬럼들 */}
      <div className={styles.cols}>
        {/* 교회소개 메뉴 */}
        <div>
          <h3>교회소개</h3>
          <ul>
            <li><a href="/intro/pastor">위임목사 인사말</a></li>
            <li><a href="#">목회계획</a></li>
            <li><a href="#">교회 비전</a></li>
            <li><a href="#">교회 철학</a></li>
          </ul>
        </div>
        
        {/* 예배시간 메뉴 */}
        <div>
          <h3>예배시간</h3>
          <ul>
            <li><a href="#">주일예배</a></li>
            <li><a href="#">수요예배</a></li>
            <li><a href="#">금요기도회</a></li>
            <li><a href="#">새벽기도회</a></li>
            <li><a href="https://thecrystalchurch.netlify.app/">영어예배</a></li>
          </ul>
        </div>
        
        {/* 섬기는 사람들 메뉴 */}
        <div>
          <h3>섬기는 사람들</h3>
          <ul>
            <li><a href="#">담임목사</a></li>
            <li><a href="#">협동목사</a></li>
            <li><a href="#">전도사</a></li>
            <li><a href="#">장로・권사</a></li>
          </ul>
        </div>
        
        {/* 교회 시설 메뉴 */}
        <div>
          <h3>교회 시설</h3>
          <ul>
            <li><a href="#">본당</a></li>
            <li><a href="#">교육관</a></li>
            <li><a href="#">주차장</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
