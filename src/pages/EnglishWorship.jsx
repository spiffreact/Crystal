import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './WorshipSchedule.module.css';

/**
 * 영어예배 안내 페이지 컴포넌트
 */
export default function EnglishWorship() {
  return (
    <>
      <Helmet>
        <title>영어예배 - 수정교회</title>
        <meta name="description" content="수정침례교회 영어예배 안내입니다. 매주 주일 오전 9시에 드리는 영어예배에 여러분을 초대합니다." />
        <meta name="keywords" content="수정교회, 영어예배, English Worship, 국제예배, 외국인예배" />
      </Helmet>

      <div className={styles.container}>
        <div className={`${styles.header} ${styles.english}`}>
          <div className={styles.headerContent}>
            <h1>영어예배</h1>
            <h2 style={{fontSize: '1.8rem', marginTop: '1rem', opacity: '0.9'}}>English Worship Service</h2>
            <p>하나님께 영광 돌리는 영어예배에 여러분을 초대합니다</p>
            <p style={{fontSize: '1rem', marginTop: '0.5rem', opacity: '0.9'}}>Welcome to our English Worship Service</p>
          </div>
          <div className={styles.headerBadge}>
            <div className={styles.timeInfo}>
              <span className={styles.day}>Sunday</span>
              <span className={styles.time}>9:00 AM</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.infoSection}>
            <div className={styles.infoGrid}>
              <div className={`${styles.infoCard} ${styles.english}`}>
                <div className={styles.cardIcon}>🕘</div>
                <h3>예배 시간 / Service Time</h3>
                <p><strong>매주 주일 오전 9:00</strong></p>
                <p><strong>Every Sunday 9:00 AM</strong></p>
                <p>약 1시간 진행 / 1hour</p>
              </div>
              <div className={`${styles.infoCard} ${styles.english}`}>
                <div className={styles.cardIcon}>📍</div>
                <h3>예배 장소 / Location</h3>
                <p><strong>본당 (2층) / Sanctuary (2F)</strong></p>
                <p>약 200석 규모 / 200 seats</p>
              </div>
              <div className={`${styles.infoCard} ${styles.english}`}>
                <div className={styles.cardIcon}>🌍</div>
                <h3>언어 / Language</h3>
                <p><strong>영어 (English)</strong></p>
                <p>동시통역 서비스 제공</p>
                <p>Interpretation available</p>
              </div>
              <div className={`${styles.infoCard} ${styles.english}`}>
                <div className={styles.cardIcon}>👥</div>
                <h3>대상 / Target</h3>
                <p><strong>전교인</strong></p>
                <p><strong>All church members</strong></p>
                <p>모든 분들을 환영합니다</p>
              </div>
            </div>
          </section>

          <section className={styles.orderSection}>
            <h2>📋 예배 순서 / Order of Service</h2>
            <div className={styles.orderContent}>
              <div className={styles.orderList}>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>9:00</span>
                  <div className={styles.orderDetails}>
                    <h4>Prelude & Praise</h4>
                    <h4>전주 및 찬양</h4>
                    <p>마음을 준비하며 영어 찬양으로 예배를 시작합니다</p>
                    <p>Prepare hearts and begin with English praise</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>9:15</span>
                  <div className={styles.orderDetails}>
                    <h4>Prayer & Scripture Reading</h4>
                    <h4>기도 및 성경봉독</h4>
                    <p>대표기도와 오늘의 말씀을 봉독합니다</p>
                    <p>Prayer and reading of today's scripture</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>9:25</span>
                  <div className={styles.orderDetails}>
                    <h4>Sermon / Message</h4>
                    <h4>말씀 선포</h4>
                    <p>영어로 진행되는 하나님의 말씀 (25분)</p>
                    <p>God's Word delivered in English (25 min)</p>
                  </div>
                </div>
                <div className={styles.orderItem}>
                  <span className={styles.orderTime}>9:50</span>
                  <div className={styles.orderDetails}>
                    <h4>Offering & Benediction</h4>
                    <h4>헌금 및 축도</h4>
                    <p>감사의 헌금과 하나님의 축복으로 마칩니다</p>
                    <p>Offering with gratitude and God's blessing</p>
                  </div>
                </div>
              </div>
              <div className={styles.orderImage}>
                <img src="/church.png" alt="English Worship" />
                <div className={styles.imageCaption}>
                  <p>영어로 드리는 은혜로운 예배</p>
                  <p>Graceful worship in English</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.specialSection}>
            <h2>✨ 영어예배 특징 / Special Features</h2>
            <div className={styles.specialGrid}>
              <div className={styles.specialCard}>
                <h3>🌍 International Community</h3>
                <h4>국제적 공동체</h4>
                <p>다양한 국적의 성도들이 함께 드리는 예배로, 국제적인 교제와 문화 교류를 경험할 수 있습니다.</p>
                <p>Experience international fellowship and cultural exchange.</p>
                <div className={styles.specialSchedule}>
                  <span>매주 진행 / Weekly</span>
                </div>
              </div>
              <div className={styles.specialCard}>
                <h3>📖 English Bible Study</h3>
                <h4>영어 성경공부</h4>
                <p>예배 후 영어로 진행되는 성경공부를 통해 말씀을 더 깊이 나눕니다.</p>
                <p>Deep Bible study in English after the service.</p>
                <div className={styles.specialSchedule}>
                  <span>예배 후 / After Service</span>
                </div>
              </div>
              <div className={styles.specialCard}>
                <h3>🤝 Cultural Exchange</h3>
                <h4>문화 교류</h4>
                <p>다양한 문화적 배경을 가진 성도들과의 만남을 통해 하나님 나라의 다양성을 경험합니다.</p>
                <p>Experience God's kingdom diversity through cultural meetings.</p>
                <div className={styles.specialSchedule}>
                  <span>매월 특별모임 / Monthly</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.participationSection}>
            <h2>🤝 참여 안내 / How to Join</h2>
            <div className={styles.participationContent}>
              <div className={styles.participationText}>
                <h3>처음 오시는 분들을 위한 안내 / Guide for First-time Visitors</h3>
                <div className={styles.guideList}>
                  <div className={styles.guideItem}>
                    <span className={styles.guideIcon}>📖</span>
                    <div>
                      <h4>성경 / Bible</h4>
                      <p>영어 성경(NIV, ESV)을 준비해 주세요</p>
                      <p>English Bible (NIV, ESV) recommended</p>
                      <p>교회에서도 대여 가능합니다</p>
                    </div>
                  </div>
                  <div className={styles.guideItem}>
                    <span className={styles.guideIcon}>👶</span>
                    <div>
                      <h4>어린이 돌봄 / Childcare</h4>
                      <p>영어예배 중 영유아실에서 돌봄 서비스 제공</p>
                      <p>Childcare available during English service</p>
                      <p>영어 가능한 교사가 돌봄</p>
                    </div>
                  </div>
                  <div className={styles.guideItem}>
                    <span className={styles.guideIcon}>🎧</span>
                    <div>
                      <h4>통역 서비스 / Interpretation</h4>
                      <p>필요시 한국어-영어 동시통역 제공</p>
                      <p>Korean-English interpretation available</p>
                      <p>사전에 문의해 주세요</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.participationActions}>
                <Link to="/welcome/visit" className={styles.actionButton}>
                  🏛️ 교회 방문 안내 / Visit Guide
                </Link>
                <Link to="/welcome/register" className={styles.actionButton}>
                  ✍️ 새가족 등록 / Registration
                </Link>
                <Link to="/worship/videos" className={styles.actionButton}>
                  📺 온라인 예배 / Online Service
                </Link>
              </div>
            </div>
          </section>

          <section className={styles.contactSection}>
            <h2>📞 문의사항 / Contact Information</h2>
            <div className={styles.contactGrid}>
              <div className={`${styles.contactCard} ${styles.english}`}>
                <h3>📞 전화 문의 / Phone</h3>
                <p><strong>031-212-0091</strong></p>
                <p>월~금 오전 9시~오후 6시</p>
                <p>Mon-Fri 9:00 AM - 6:00 PM</p>
              </div>
              <div className={`${styles.contactCard} ${styles.english}`}>
                <h3>📧 이메일 문의 / Email</h3>
                <p><strong>suwoncrystalchurch@gmail.com</strong></p>
                <p>언제든지 영어로 문의해 주세요</p>
                <p>Feel free to contact in English</p>
              </div>
              <div className={`${styles.contactCard} ${styles.english}`}>
                <h3>📍 교회 주소 / Address</h3>
                <p><strong>경기 수원시 팔달구</strong></p>
                <p>팔달문로150번길 13</p>
                <p>Paldal-gu, Suwon-si, Gyeonggi-do</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 