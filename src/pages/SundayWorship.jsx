import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './WorshipSchedule.module.css';

/**
 * 주일예배 안내 페이지 컴포넌트
 * 주일예배의 시간, 순서, 특징을 소개
 */
export default function SundayWorship() {
  return (
    <>
      <Helmet>
        <title>주일예배 - 수정교회</title>
        <meta name="description" content="수정침례교회 주일예배 안내입니다. 매주 주일 오전 11시에 드리는 주일예배에 여러분을 초대합니다." />
        <meta name="keywords" content="수정교회, 주일예배, 예배시간, 예배순서, 침례교회" />
      </Helmet>

      <div className={styles.container}>
        {/* 헤더 섹션 */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1>주일예배</h1>
            <p>하나님께 영광 돌리는 주일예배에 여러분을 초대합니다</p>
          </div>
          <div className={styles.headerBadge}>
            <div className={styles.timeInfo}>
              <span className={styles.day}>주일</span>
              <span className={styles.time}>오전 11:00</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          {/* 예배 정보 섹션 */}
          <section className={styles.infoSection}>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.cardIcon}>🕐</div>
                <h3>예배 시간</h3>
                <p><strong>매주 주일 오전 11:00</strong></p>
                <p>약 1시간 30분 진행</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.cardIcon}>📍</div>
                <h3>예배 장소</h3>
                <p><strong>본당 (2층)</strong></p>
                <p>좌석 200석 규모</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.cardIcon}>👔</div>
                <h3>복장 안내</h3>
                <p><strong>단정한 복장</strong></p>
                <p>편안하게 참석 가능</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.cardIcon}>👥</div>
                <h3>대상</h3>
                <p><strong>전 연령층</strong></p>
                <p>유아부터 어르신까지</p>
              </div>
            </div>
          </section>

          {/* 예배 순서 섹션 */}
          <section className={styles.orderSection}>
            <h2>📋 예배 순서</h2>
            <div className={styles.orderContent}>
              <div className={styles.orderList}>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>11:00</span>
                  <div className={styles.orderDetails}>
                    <h4>전주 및 묵상</h4>
                    <p>마음을 준비하며 하나님 앞에 나아갑니다</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>11:05</span>
                  <div className={styles.orderDetails}>
                    <h4>경배와 찬양</h4>
                    <p>찬양팀과 함께 하나님께 영광을 올려드립니다</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>11:20</span>
                  <div className={styles.orderDetails}>
                    <h4>기도 및 성경봉독</h4>
                    <p>대표기도와 오늘의 말씀을 봉독합니다</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>11:30</span>
                  <div className={styles.orderDetails}>
                    <h4>말씀 선포</h4>
                    <p>담임목사님의 강해설교를 통해 하나님의 뜻을 배웁니다</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>12:10</span>
                  <div className={styles.orderDetails}>
                    <h4>헌금 및 기도</h4>
                    <p>감사의 마음으로 헌금을 드리고 함께 기도합니다</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>12:20</span>
                  <div className={styles.orderDetails}>
                    <h4>광고 및 축도</h4>
                    <p>교회 소식을 나누고 하나님의 축복으로 마칩니다</p>
                  </div>
                </div>
              </div>
              <div className={styles.orderImage}>
                <img src="/church.png" alt="예배 모습" />
                <div className={styles.imageCaption}>
                  <p>하나님께 영광 돌리는 예배</p>
                </div>
              </div>
            </div>
          </section>

          {/* 특별 프로그램 섹션 */}
          <section className={styles.specialSection}>
            <h2>✨ 특별 프로그램</h2>
            <div className={styles.specialGrid}>
              <div className={styles.specialCard}>
                <h3>🎵 특별찬양</h3>
                <p>매월 마지막 주일에는 찬양팀의 특별찬양이 있습니다.</p>
                <div className={styles.specialSchedule}>
                  <span>매월 마지막 주일</span>
                </div>
              </div>
              <div className={styles.specialCard}>
                <h3>🍞 성찬식</h3>
                <p>매월 첫째 주일에는 주님의 몸과 피를 기념하는 성찬식을 거행합니다.</p>
                <div className={styles.specialSchedule}>
                  <span>매월 첫째 주일</span>
                </div>
              </div>
              <div className={styles.specialCard}>
                <h3>👥 새가족 소개</h3>
                <p>새로 오신 분들을 소개하고 환영하는 시간을 갖습니다.</p>
                <div className={styles.specialSchedule}>
                  <span>매주 진행</span>
                </div>
              </div>
            </div>
          </section>

          {/* 참여 안내 섹션 */}
          <section className={styles.participationSection}>
            <h2>🤝 참여 안내</h2>
            <div className={styles.participationContent}>
              <div className={styles.participationText}>
                <h3>처음 오시는 분들을 위한 안내</h3>
                <div className={styles.guideList}>
                  <div className={styles.guideItem}>
                    <span className={styles.guideIcon}>🚗</span>
                    <div>
                      <h4>주차 안내</h4>
                      <p>교회 앞 주차장 이용 가능 (무료)</p>
                      <p>만차 시 인근 공영주차장 이용</p>
                    </div>
                  </div>
                                     <div className={styles.guideItem}>
                     <span className={styles.guideIcon}>👶</span>
                     <div>
                       <h4>영유아 돌봄</h4>
                       <p>예배 중 영유아실(지하1층)에서 돌봄 서비스 제공</p>
                       <p>안전하고 깨끗한 환경</p>
                     </div>
                   </div>
                  <div className={styles.guideItem}>
                    <span className={styles.guideIcon}>📱</span>
                    <div>
                      <h4>온라인 참여</h4>
                      <p>YouTube 실시간 방송으로도 참여 가능</p>
                      <p>집에서도 함께 예배하세요</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.participationActions}>
                <Link to="/welcome/visit" className={styles.actionButton}>
                  🏛️ 교회 방문 안내
                </Link>
                <Link to="/welcome/register" className={styles.actionButton}>
                  ✍️ 새가족 등록
                </Link>
                <Link to="/worship/videos" className={styles.actionButton}>
                  📺 온라인 예배
                </Link>
              </div>
            </div>
          </section>

          {/* 연락처 섹션 */}
          <section className={styles.contactSection}>
            <h2>📞 문의사항</h2>
            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <h3>📞 전화 문의</h3>
                <p><strong>031-212-0091</strong></p>
                <p>월~금 오전 9시~오후 6시</p>
              </div>
              <div className={styles.contactCard}>
                <h3>📧 이메일 문의</h3>
                <p><strong>suwoncrystalchurch@gmail.com</strong></p>
                <p>언제든지 문의해 주세요</p>
              </div>
              <div className={styles.contactCard}>
                <h3>📍 교회 주소</h3>
                <p><strong>경기 수원시 팔달구</strong></p>
                <p>팔달문로150번길 13</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 