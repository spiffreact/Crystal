import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './WorshipSchedule.module.css';

/**
 * 새벽기도회 안내 페이지 컴포넌트
 */
export default function DawnPrayer() {
  return (
    <>
      <Helmet>
        <title>새벽기도회 - 수정교회</title>
        <meta name="description" content="수정침례교회 새벽기도회 안내입니다. 매일 새벽 5시 30분에 드리는 새벽기도회에 여러분을 초대합니다." />
      </Helmet>

      <div className={styles.container}>
        <div className={`${styles.header} ${styles.dawn}`}>
          <div className={styles.headerContent}>
            <h1>새벽기도회</h1>
            <p>하루를 하나님과 함께 시작하는 새벽 기도</p>
          </div>
          <div className={styles.headerBadge}>
            <div className={styles.timeInfo}>
              <span className={styles.day}>매일</span>
              <span className={styles.time}>새벽 5:30</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.infoSection}>
            <div className={styles.infoGrid}>
              <div className={`${styles.infoCard} ${styles.dawn}`}>
                <div className={styles.cardIcon}>🌅</div>
                <h3>기도회 시간</h3>
                <p><strong>매일 새벽 5:30</strong></p>
                <p>약 1시간 진행</p>
              </div>
              <div className={`${styles.infoCard} ${styles.dawn}`}>
                <div className={styles.cardIcon}></div>
                <h3>진행 일정</h3>
                <p><strong>월~금 (토요일,주일 제외)</strong></p>
                <p>365일 지속적인 기도</p>
              </div>
              <div className={`${styles.infoCard} ${styles.dawn}`}>
                <div className={styles.cardIcon}></div>
                <h3>하루의 시작</h3>
                <p><strong>하나님과 함께 시작</strong></p>
                <p>복된 하루의 출발</p>
              </div>
              <div className={`${styles.infoCard} ${styles.dawn}`}>
                <div className={styles.cardIcon}></div>
                <h3>영적 훈련</h3>
                <p><strong>깊은 영성 훈련</strong></p>
                <p>신앙의 뿌리 내림</p>
              </div>
            </div>
          </section>

          <section className={styles.orderSection}>
            <h2>새벽기도회 순서</h2>
            <div className={styles.orderContent}>
              <div className={styles.orderList}>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>5:30</span>
                  <div className={styles.orderDetails}>
                    <h4>묵상과 준비</h4>
                    <p>조용한 마음으로 하나님 앞에 나아갑니다</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>5:35</span>
                  <div className={styles.orderDetails}>
                    <h4>찬양</h4>
                    <p>은혜로운 찬양으로 하나님께 영광을 돌립니다</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>5:45</span>
                  <div className={styles.orderDetails}>
                    <h4>말씀 묵상</h4>
                    <p>하루를 인도하실 하나님의 말씀을 들습니다</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>6:00</span>
                  <div className={styles.orderDetails}>
                    <h4>기도</h4>
                    <p>개인과 가정, 교회를 위한 간절한 기도</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>6:25</span>
                  <div className={styles.orderDetails}>
                    <h4>주기도문과 축도</h4>
                    <p>주님이 가르쳐 주신 기도와 축복으로 마무리</p>
                  </div>
                </div>
              </div>
              <div className={styles.orderImage}>
                <img src="/bible2.jpg" alt="새벽 기도" />
                <div className={styles.imageCaption}>
                  <p>새벽 이슬같은 은혜</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.specialSection}>
            <h2>새벽기도회의 축복</h2>
            <div className={styles.specialGrid}>
              <div className={styles.specialCard}>
                <h3>새로운 시작</h3>
                <p>매일 하나님과 함께 새로운 하루를 시작하는 축복을 누립니다.</p>
                <div className={styles.specialSchedule}>
                  <span>Daily Fresh Start</span>
                </div>
              </div>
              <div className={styles.specialCard}>
                <h3>영적 성숙</h3>
                <p>꾸준한 새벽 기도를 통해 깊은 영성과 성숙함을 얻습니다.</p>
                <div className={styles.specialSchedule}>
                  <span>Spiritual Growth</span>
                </div>
              </div>
              <div className={styles.specialCard}>
                <h3>하루 보호</h3>
                <p>하나님의 보호하심 속에서 평안하고 승리하는 하루를 보냅니다.</p>
                <div className={styles.specialSchedule}>
                  <span>Daily Protection</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 