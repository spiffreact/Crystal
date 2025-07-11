import React from 'react';
import styles from './MegaMenuGroup.module.css';

/**
 * 공동체와 양육 메가메뉴 컴포넌트
 * 교회 내 공동체와 양육 프로그램들을 보여주는 드롭다운 메뉴
 */
export default function MegaMenuGroup({ open, closing }) {
  if (!open && !closing) return null;

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
          <img src="/public/church.png" alt="수정교회 로고" />
        </div>
      </div>
      <div className={styles.cols}>
        <div>
          <h3>부서별 공동체</h3>
          <ul>
            <li>청년부</li>
            <li>대학부</li>
            <li>중고등부</li>
            <li>초등부</li>
            <li>유치부</li>
          </ul>
        </div>
        <div>
          <h3>양육 프로그램</h3>
          <ul>
            <li>새신자 양육</li>
            <li>성경공부</li>
            <li>기도학교</li>
            <li>제자훈련</li>
          </ul>
        </div>
        <div>
          <h3>소그룹</h3>
          <ul>
            <li>가정예배</li>
            <li>기도모임</li>
            <li>성경공부모임</li>
            <li>전도모임</li>
          </ul>
        </div>
        <div>
          <h3>특별 공동체</h3>
          <ul>
            <li>찬양팀</li>
            <li>봉사팀</li>
            <li>전도팀</li>
            <li>교육팀</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
