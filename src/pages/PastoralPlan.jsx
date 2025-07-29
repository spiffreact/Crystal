import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './PastoralPlan.module.css';

/**
 * 목회계획 페이지 컴포넌트
 */
export default function PastoralPlan() {
  return (
    <>
      <Helmet>
        <title>목회계획 - 수정교회</title>
        <meta name="description" content="수정교회의 목회계획과 사역 방향을 소개합니다." />
      </Helmet>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>목회계획</h1>
          <p>하나님의 말씀 위에 세워진 수정교회의 목회 비전과 계획입니다.</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>목회 비전</h2>
            <div className={styles.visionCard}>
              <h3>"예수 그리스도의 제자를 세우는 교회"</h3>
              <p>
                수정교회는 하나님의 말씀 위에 굳게 서서, 성령의 능력으로 
                예수 그리스도의 참된 제자들을 세워나가는 교회입니다. 
                모든 성도가 그리스도의 성품을 닮아가며, 세상의 빛과 소금의 
                역할을 감당하는 성숙한 그리스도인으로 성장하도록 돕습니다.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>2024년 주요 목회 계획</h2>
            <div className={styles.planGrid}>
              <div className={styles.planCard}>
                <div className={styles.planIcon}>📖</div>
                <h3>말씀 중심의 사역</h3>
                <ul>
                  <li>체계적인 성경 교육 강화</li>
                  <li>큐티와 성경읽기 운동 확산</li>
                  <li>가정예배 문화 정착</li>
                  <li>말씀 묵상 세미나 개최</li>
                </ul>
              </div>

              <div className={styles.planCard}>
                <div className={styles.planIcon}>🙏</div>
                <h3>기도와 예배 부흥</h3>
                <ul>
                  <li>새벽기도회 참여 증진</li>
                  <li>중보기도팀 활성화</li>
                  <li>특별기도회 정기 개최</li>
                  <li>예배의 질적 향상</li>
                </ul>
              </div>

              <div className={styles.planCard}>
                <div className={styles.planIcon}>👥</div>
                <h3>공동체 양육</h3>
                <ul>
                  <li>새신자 양육 체계화</li>
                  <li>소그룹 사역 확산</li>
                  <li>세대별 맞춤 양육</li>
                  <li>제자훈련 프로그램 운영</li>
                </ul>
              </div>

              <div className={styles.planCard}>
                <div className={styles.planIcon}>🌍</div>
                <h3>선교와 전도</h3>
                <ul>
                  <li>국내외 선교 사역 확대</li>
                  <li>개인전도 훈련</li>
                  <li>지역사회 섬김 사역</li>
                  <li>온라인 선교 플랫폼 구축</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>월별 주요 계획</h2>
            <div className={styles.monthlyPlan}>
              <div className={styles.monthItem}>
                <div className={styles.month}>1-3월</div>
                <div className={styles.monthContent}>
                  <h4>새해 다짐과 기초 다지기</h4>
                  <p>새신자 양육 집중, 기도회 강화, 말씀 교육 체계 정비</p>
                </div>
              </div>

              <div className={styles.monthItem}>
                <div className={styles.month}>4-6월</div>
                <div className={styles.monthContent}>
                  <h4>부활절 및 봄 사역</h4>
                  <p>부활절 특별예배, 야외예배, 가정의 달 행사, 청년부 수련회</p>
                </div>
              </div>

              <div className={styles.monthItem}>
                <div className={styles.month}>7-9월</div>
                <div className={styles.monthContent}>
                  <h4>여름 사역과 전도</h4>
                  <p>여름성경학교, 해외단기선교, 전도폭발 훈련, 추석 감사예배</p>
                </div>
              </div>

              <div className={styles.monthItem}>
                <div className={styles.month}>10-12월</div>
                <div className={styles.monthContent}>
                  <h4>결실과 감사</h4>
                  <p>추수감사절, 성탄절 준비, 한 해 결산, 새해 비전 준비</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>특별 사역 계획</h2>
            <div className={styles.specialMinistry}>
              <div className={styles.ministryItem}>
                <h3>🎯 차세대 사역 강화</h3>
                <p>
                  어린이부터 청년까지 각 연령대에 맞는 체계적인 교육과 양육을 통해 
                  신앙의 다음 세대를 든든히 세워나갑니다.
                </p>
              </div>

              <div className={styles.ministryItem}>
                <h3>💒 교회 건축 계획</h3>
                <p>
                  늘어나는 성도들을 위한 새로운 교육관 건축을 추진하여 
                  더 나은 예배와 교육 환경을 조성합니다.
                </p>
              </div>

              <div className={styles.ministryItem}>
                <h3>🤝 지역사회 섬김</h3>
                <p>
                  지역 내 소외계층을 위한 봉사활동과 복지사업을 통해 
                  그리스도의 사랑을 실천합니다.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>기도 제목</h2>
            <div className={styles.prayerBox}>
              <h3>함께 기도해 주세요</h3>
              <ul className={styles.prayerList}>
                <li>모든 성도가 말씀과 기도로 무장되도록</li>
                <li>새신자들이 믿음 안에서 든든히 서가도록</li>
                <li>교회 내 사랑과 화목이 넘치도록</li>
                <li>복음 전파와 선교 사역이 확장되도록</li>
                <li>목회자와 교역자들에게 지혜와 능력이 더하여지도록</li>
                <li>교회 건축과 확장을 위한 하나님의 인도하심</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 