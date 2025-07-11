import React from 'react';
import styles from './MegaMenu.module.css';

export default function MegaMenu({ open, closing }) {
  if (!open && !closing) return null;

  return (
    <div className={`${styles.megaMenu} ${closing ? styles.closing : ''}`}>
      <div className={styles.left}>
        <h2>소개합니다</h2>
        <p>
          수정교회의 역사를 비롯해 교회 시설,
          <br />
          주차안내, 수정교회에 대한 모든 것.
        </p>
        <div className={styles.mobileLogo}>
          <img src="/public/church.png" alt="수정교회 로고" />
        </div>
      </div>
      <div className={styles.cols}>
        <div>
          <h3>교회소개</h3>
          <ul>
            <li>위임목사 인사말</li>
            <li>목회계획</li>
            <li>교회 비전</li>
            <li>교회 철학</li>
          </ul>
        </div>
        <div>
          <h3>예배시간</h3>
          <ul>
            <li>주일예배</li>
            <li>수요예배</li>
            <li>금요기도회</li>
            <li>새벽기도회</li>
          </ul>
        </div>
        <div>
          <h3>섬기는 사람들</h3>
          <ul>
            <li>담임목사</li>
            <li>협동목사</li>
            <li>전도사</li>
            <li>장로・권사</li>
          </ul>
        </div>
        <div>
          <h3>교회 시설</h3>
          <ul>
            <li>본당</li>
            <li>교육관</li>
            <li>주차장</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
