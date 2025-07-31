import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Contact.module.css';

/**
 * 문의하기 페이지 컴포넌트
 */
export default function Contact() {
  return (
    <>
      <Helmet>
        <title>문의하기 - 수정교회</title>
        <meta name="description" content="수정교회 연락처, 위치, 문의 방법에 대한 안내입니다." />
      </Helmet>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>문의하기</h1>
          <p>수정교회에 대한 문의사항은 언제든지 연락주세요.</p>
        </div>

        <div className={styles.content}>
          {/* 연락처 정보 섹션 */}
          <section className={styles.section}>
            <h2>연락처 정보</h2>
            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <img src="/contact.png" alt="전화" />
                </div>
                <h3>전화번호</h3>
                <p className={styles.contactDetail}>031-212-0091</p>
                <p className={styles.contactDescription}>교회 사무실로 연결됩니다</p>
              </div>
              
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                <img src="/email.png" alt="이메일" /> 
                </div>
                <h3>이메일</h3>
                <p className={styles.contactDetail}>suwoncrystalchurch@gmail.com</p>
                <p className={styles.contactDescription}>언제든지 메일로 문의하세요</p>
              </div>
              
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <img src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f2?w=400&h=300&fit=crop&crop=center" alt="주소" />
                </div>
                <h3>교회 주소</h3>
                <p className={styles.contactDetail}>경기도 수원시 팔달구<br />팔달문로150번길 13</p>
                <p className={styles.contactDescription}>수정침례교회</p>
              </div>
            </div>
          </section>

          {/* 운영시간 섹션 */}
          <section className={styles.section}>
            <h2>🕐 운영시간</h2>
            <div className={styles.scheduleBox}>
              <div className={styles.scheduleCard}>
                <h3>교회 사무실</h3>
                <div className={styles.scheduleDetails}>
                  <div className={styles.scheduleItem}>
                    <span className={styles.day}>평일</span>
                    <span className={styles.time}>오전 9:00 - 오후 6:00</span>
                  </div>
                  <div className={styles.scheduleItem}>
                    <span className={styles.day}>토요일</span>
                    <span className={styles.time}>오전 9:00 - 오후 3:00</span>
                  </div>
                  <div className={styles.scheduleItem}>
                    <span className={styles.day}>주일</span>
                    <span className={styles.time}>오전 09:00 - 오후 3:00</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.scheduleCard}>
                <h3>예배 시간</h3>
                <div className={styles.scheduleDetails}>
                  <div className={styles.scheduleItem}>
                    <span className={styles.day}>주일 예배</span>
                    <span className={styles.time}>오전 11:00</span>
                  </div>
                  <div className={styles.scheduleItem}>
                    <span className={styles.day}>수요 예배</span>
                    <span className={styles.time}>오후 7:30</span>
                  </div>
                  <div className={styles.scheduleItem}>
                    <span className={styles.day}>금요 기도회</span>
                    <span className={styles.time}>오후 8:30</span>
                  </div>
                  <div className={styles.scheduleItem}>
                    <span className={styles.day}>새벽 기도회</span>
                    <span className={styles.time}>오전 5:30</span>
                  </div>
                  <div className={styles.scheduleItem}>
                    <span className={styles.day}>영어 예배</span>
                    <span className={styles.time}>오전 9:00</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 담당자 정보 섹션 */}
          <section className={styles.section}>
            <h2>담당자 안내</h2>
            <div className={styles.staffGrid}>
              <div className={styles.staffCard}>
                <h3>담임목사님</h3>
                <p className={styles.staffName}>김광호 목사</p>
                <div className={styles.staffEducation}>
                  <p>한국침례신학대학교 신학과 (B.A.)</p>
                  <p>한국침례신학대학원 신학과 (M.Div.)</p>
                </div>
                <ul className={styles.staffDuties}>
                  <li>전반적인 교회 운영</li>
                  <li>목회 상담</li>
                  <li>설교 및 예배 인도</li>
                </ul>
                <p className={styles.staffContact}>상담 예약: 사무실 전화</p>
              </div>
              
              <div className={styles.staffCard}>
                <h3>새가족 담당</h3>
                <p className={styles.staffName}>새가족 환영팀</p>
                <ul className={styles.staffDuties}>
                  <li>새가족 등록 및 안내</li>
                  <li>새신자 교육</li>
                  <li>교회 적응 도움</li>
                </ul>
                <p className={styles.staffContact}>주일 예배 후 새신자실</p>
              </div>
              
              <div className={styles.staffCard}>
                <h3>교육 담당</h3>
                <p className={styles.staffName}>교육팀장 김은혜 권사</p>
                <ul className={styles.staffDuties}>
                  <li>양육과정 운영</li>
                  <li>주일학교 관리</li>
                  <li>교육 프로그램 기획</li>
                </ul>
                <p className={styles.staffContact}>교육 관련 문의</p>
              </div>
            </div>
          </section>

          {/* 자주 묻는 질문 섹션 */}
          <section className={styles.section}>
            <h2>❓ 자주 묻는 문의</h2>
            <div className={styles.faqSection}>
              <div className={styles.faqItem}>
                <h3>Q. 처음 교회에 가려면 어떻게 해야 하나요?</h3>
                <p>특별한 준비 없이 편안한 마음으로 오시면 됩니다. 주일 오전 10시 30분까지 오시면 예배에 참여하실 수 있습니다.</p>
              </div>
              
              <div className={styles.faqItem}>
                <h3>Q. 주차는 어떻게 하나요?</h3>
                <p>교회 내부 주차장이 있으며, 주차 안내 봉사자가 도움을 드립니다. 부족할 경우 인근 공영주차장을 이용하실 수 있습니다.</p>
              </div>
              
              <div className={styles.faqItem}>
                <h3>Q. 목사님과 상담하고 싶어요.</h3>
                <p>교회 사무실(031-212-0091)로 전화하셔서 상담 일정을 예약해 주시면 됩니다.</p>
              </div>
              
              <div className={styles.faqItem}>
                <h3>Q. 새가족 교육은 언제 받나요?</h3>
                <p>매월 새신자 교육이 시작됩니다. 4주 과정으로 주일 오후 2시부터 진행됩니다.</p>
              </div>
            </div>
          </section>

          {/* 오시는 길 섹션 */}
          <section className={styles.section}>
            <h2>🗺️ 오시는 길</h2>
            <div className={styles.mapSection}>
              <div className={styles.mapContainer}>
                <iframe
                  src="https://naver.me/xBwxuk9z"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowFullScreen
                  title="수정침례교회 위치"
                />
              </div>
              
              <div className={styles.directionInfo}>
                <h3>🚇 대중교통</h3>
                <ul>
                  <li><strong>지하철:</strong> 수인분당선 수원시청역 8번 출구에서 도보 30분</li>
                  <li><strong>버스:</strong> 수원월드컵경기장 하차 후 도보 10분</li>
                  <li><strong>버스:</strong> 월드메르디앙 하차 후 도보 3분</li>
                </ul>
                
                <h3>🚗 자가용</h3>
                <ul>
                  <li>네비게이션에 "수정침례교회" 검색</li>
                  <li>교회 내부 주차장 이용 가능</li>
                  <li>주차 공간 부족시 인근 공영주차장 이용</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 연락 격려 섹션 */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2>언제든지 연락하세요!</h2>
              <p>
                궁금한 점이나 도움이 필요한 일이 있으시면<br />
                언제든지 편안하게 연락해 주세요.<br />
                따뜻한 마음으로 도움을 드리겠습니다.
              </p>
              <div className={styles.quickActions}>
                <a href="tel:031-212-0091" className={styles.actionButton}>
                  📞 전화하기
                </a>
                <a href="mailto:suwoncrystalchurch@gmail.com" className={styles.actionButton}>
                  ✉️ 이메일 보내기
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 