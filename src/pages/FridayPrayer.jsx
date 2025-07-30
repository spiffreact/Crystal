import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './WorshipSchedule.module.css';

/**
 * 금요기도회 안내 페이지 컴포넌트
 */
export default function FridayPrayer() {
  return (
    <>
      <Helmet>
        <title>금요기도회 - 수정교회</title>
        <meta name="description" content="수정침례교회 금요기도회 안내입니다. 매주 금요일 저녁 8시에 드리는 기도회에 여러분을 초대합니다." />
      </Helmet>

      <div className={styles.container}>
        <div className={`${styles.header} ${styles.friday}`}>
          <div className={styles.headerContent}>
            <h1>금요기도회</h1>
            <p>하나님과 깊이 교제하는 기도의 시간</p>
          </div>
          <div className={styles.headerBadge}>
            <div className={styles.timeInfo}>
              <span className={styles.day}>금요일</span>
              <span className={styles.time}>저녁 8:30</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.infoSection}>
            <div className={styles.infoGrid}>
              <div className={`${styles.infoCard} ${styles.friday}`}>
                <div className={styles.cardIcon}>🕗</div>
                <h3>기도회 시간</h3>
                <p><strong>매주 금요일 저녁 8:30</strong></p>
                <p>약 1시간 진행</p>
              </div>
              <div className={`${styles.infoCard} ${styles.friday}`}>
                <div className={styles.cardIcon}>🙏</div>
                <h3>기도 중심</h3>
                <p><strong>깊은 기도와 간구</strong></p>
                <p>하나님과의 친밀한 교제</p>
              </div>
              <div className={`${styles.infoCard} ${styles.friday}`}>
                <div className={styles.cardIcon}>🎵</div>
                <h3>찬양과 기도</h3>
                <p><strong>찬양 중심의 예배</strong></p>
                <p>성령의 임재를 경험</p>
              </div>
              <div className={`${styles.infoCard} ${styles.friday}`}>
                <div className={styles.cardIcon}>💝</div>
                <h3>특별한 은혜</h3>
                <p><strong>치유와 회복의 시간</strong></p>
                <p>영적 재충전의 기회</p>
              </div>
            </div>
          </section>

          <section className={styles.orderSection}>
            <h2>📋 기도회 순서</h2>
            <div className={styles.orderContent}>
              <div className={styles.orderList}>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>8:30</span>
                  <div className={styles.orderDetails}>
                    <h4>경배와 찬양</h4>
                    <p>마음을 하나님께 향하며 찬양으로 시작합니다</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>8:45</span>
                  <div className={styles.orderDetails}>
                    <h4>말씀 묵상</h4>
                    <p>짧은 말씀으로 기도의 방향을 정합니다</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>8:55</span>
                  <div className={styles.orderDetails}>
                    <h4>개인 기도</h4>
                    <p>각자의 필요를 하나님께 아뢰는 시간</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>9:10</span>
                  <div className={styles.orderDetails}>
                    <h4>중보 기도</h4>
                    <p>교회와 나라를 위한 중보기도</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>9:20</span>
                  <div className={styles.orderDetails}>
                    <h4>감사와 찬양</h4>
                    <p>하나님의 응답에 감사하며 찬양으로 마무리</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>9:30</span>
                  <div className={styles.orderDetails}>
                    <h4>축도</h4>
                    <p>하나님의 축복으로 마칩니다</p>
                  </div>
                </div>
              </div>
              <div className={styles.orderImage}>
                <img src="/thekingofkings.jpg" alt="기도하는 모습" />
                <div className={styles.imageCaption}>
                  <p>하나님과 깊이 교제하는 기도</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.specialSection}>
            <h2>✨ 금요기도회의 특별함</h2>
            <div className={styles.specialGrid}>
              <div className={styles.specialCard}>
                <h3>🔥 영적 충만</h3>
                <p>한 주간의 영적 메마름을 채우고 성령의 충만함을 경험합니다.</p>
                <div className={styles.specialSchedule}>
                  <span>영적 재충전</span>
                </div>
              </div>
              <div className={styles.specialCard}>
                <h3>💒 교회 부흥</h3>
                <p>교회와 목회자, 성도들을 위한 뜨거운 중보기도를 드립니다.</p>
                <div className={styles.specialSchedule}>
                  <span>교회 중보</span>
                </div>
              </div>
              <div className={styles.specialCard}>
                <h3>🌍 나라 중보</h3>
                <p>우리나라와 민족, 세계 선교를 위한 중보기도 시간입니다.</p>
                <div className={styles.specialSchedule}>
                  <span>나라 중보</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 