import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './WorshipSchedule.module.css';

/**
 * 수요예배 안내 페이지 컴포넌트
 */
export default function WednesdayWorship() {
  return (
    <>
      <Helmet>
        <title>수요예배 - 수정교회</title>
        <meta name="description" content="수정침례교회 수요예배 안내입니다. 매주 수요일 저녁 7시 30분에 드리는 수요예배에 여러분을 초대합니다." />
      </Helmet>

      <div className={styles.container}>
        <div className={`${styles.header} ${styles.wednesday}`}>
          <div className={styles.headerContent}>
            <h1>수요예배</h1>
            <p>주님과 더 깊이 만나는 은혜로운 수요예배</p>
          </div>
          <div className={styles.headerBadge}>
            <div className={styles.timeInfo}>
              <span className={styles.day}>수요일</span>
              <span className={styles.time}>저녁 7:30</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.infoSection}>
            <div className={styles.infoGrid}>
              <div className={`${styles.infoCard} ${styles.wednesday}`}>
                <div className={styles.cardIcon}>🕢</div>
                <h3>예배 시간</h3>
                <p><strong>매주 수요일 저녁 7:30</strong></p>
                <p>약 1시간 진행</p>
              </div>
              <div className={`${styles.infoCard} ${styles.wednesday}`}>
                <div className={styles.cardIcon}>📖</div>
                <h3>예배 특징</h3>
                <p><strong>성경공부 중심</strong></p>
                <p>깊이 있는 말씀 나눔</p>
              </div>
              <div className={`${styles.infoCard} ${styles.wednesday}`}>
                <div className={styles.cardIcon}>👥</div>
                <h3>참석 대상</h3>
                <p><strong>청년부터 장년까지</strong></p>
                <p>말씀을 사모하는 모든 분</p>
              </div>
              <div className={`${styles.infoCard} ${styles.wednesday}`}>
                <div className={styles.cardIcon}>🙏</div>
                <h3>예배 분위기</h3>
                <p><strong>경건하고 은혜로운</strong></p>
                <p>깊은 묵상과 기도</p>
              </div>
            </div>
          </section>

          <section className={styles.orderSection}>
            <h2>📋 예배 순서</h2>
            <div className={styles.orderContent}>
              <div className={styles.orderList}>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>7:30</span>
                  <div className={styles.orderDetails}>
                    <h4>묵상과 기도</h4>
                    <p>조용한 마음으로 하나님 앞에 나아갑니다</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>7:35</span>
                  <div className={styles.orderDetails}>
                    <h4>찬양과 경배</h4>
                    <p>은혜로운 찬양으로 하나님께 영광을 돌립니다</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>7:50</span>
                  <div className={styles.orderDetails}>
                    <h4>말씀 선포</h4>
                    <p>체계적인 성경공부와 적용</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>8:20</span>
                  <div className={styles.orderDetails}>
                    <h4>나눔과 기도</h4>
                    <p>말씀에 대한 나눔과 중보기도</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>8:30</span>
                  <div className={styles.orderDetails}>
                    <h4>축도</h4>
                    <p>하나님의 축복으로 마무리</p>
                  </div>
                </div>
              </div>
              <div className={styles.orderImage}>
                <img src="/bible.jpg" alt="성경공부" />
                <div className={styles.imageCaption}>
                  <p>말씀 중심의 깊이 있는 예배</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.specialSection}>
            <h2>✨ 수요예배의 특별함</h2>
            <div className={styles.specialGrid}>
              <div className={styles.specialCard}>
                <h3>📚 체계적 성경공부</h3>
                <p>성경 각 권을 차례로 공부하며 하나님의 뜻을 깊이 묵상합니다.</p>
                <div className={styles.specialSchedule}>
                  <span>연속 강해</span>
                </div>
              </div>
              <div className={styles.specialCard}>
                <h3>🤝 소그룹 나눔</h3>
                <p>말씀을 듣고 삶에 적용하는 나눔의 시간을 갖습니다.</p>
                <div className={styles.specialSchedule}>
                  <span>매주 진행</span>
                </div>
              </div>
              <div className={styles.specialCard}>
                <h3>🙏 중보기도</h3>
                <p>교회와 성도들을 위한 깊은 중보기도 시간이 있습니다.</p>
                <div className={styles.specialSchedule}>
                  <span>매주 진행</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 