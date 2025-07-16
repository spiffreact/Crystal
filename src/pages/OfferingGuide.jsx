import React from 'react';
import styles from './OfferingGuide.module.css';

export default function OfferingGuide() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>헌금 안내</h1>
      </div>
      
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.imageSection}>
            <div className={styles.circularImage}>
              {/* 성경적인 헌금 이미지 표현 */}
              <div className={styles.crossIcon}>✝</div>
              <div className={styles.chaliceIcon}>🍷</div>
            </div>
          </div>
          
          <div className={styles.textSection}>
            <h2>온라인 헌금 납입 방법을 안내해 드립니다.</h2>
            <div className={styles.divider}></div>
            <p>
              수정침례교회의 교인 여러분이 보내주신 소중한 헌금은 하나님의 나라를 위해 귀하게 쓰입니다. 
              <br/>직접 헌금함에 헌금할 수 없는 분들을 위한 헌금 방법도 마련되어 있으니, <br/>
              자세한 내용은 하단의 내용을 참고해 주시기 바랍니다.
            </p>
          </div>
        </div>
        
        <div className={styles.methods}>
          <h3>헌금 방법</h3>
          <div className={styles.methodGrid}>
            <div className={styles.methodCard}>
              <h4>계좌이체</h4>
              <p>농협: 301-0317-6295-41</p>
              <p>예금주: 수정교회</p>
            </div>
            
            <div className={styles.methodCard}>
              <h4>건축 헌금</h4>
              <p>우리: 1005-404-402324</p>
              <p>예금주: 수정교회</p>
            </div>
            
            <div className={styles.methodCard}>
              <h4>모바일 헌금</h4>
              <p>스마트폰을 통한 간편 헌금</p>
              <p>언제 어디서나 가능</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 