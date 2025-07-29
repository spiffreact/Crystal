import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './ChurchVision.module.css';

/**
 * 교회 비전 페이지 컴포넌트
 * 수정교회의 비전, 사명, 핵심가치를 소개
 */
export default function ChurchVision() {
  return (
    <>
      <Helmet>
        <title>교회 비전 - 수정교회</title>
        <meta name="description" content="수정침례교회의 비전과 사명, 핵심가치를 소개합니다. 한 영혼을 주님께로 인도하는 교회입니다." />
        <meta name="keywords" content="수정교회, 교회비전, 사명, 핵심가치, 침례교회" />
      </Helmet>

      <div className={styles.container}>
        {/* 헤더 섹션 */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1>교회 비전</h1>
            <p>수정교회의 비전과 사명을 소개합니다</p>
          </div>
          <div className={styles.headerImage}>
            <img src="/church.png" alt="수정교회" />
          </div>
        </div>

        <div className={styles.content}>
          {/* 교회 표어 섹션 */}
          <section className={styles.mottoSection}>
            <div className={styles.mottoCard}>
              <h2>🎯 교회 표어</h2>
              <div className={styles.motto}>
                <span className={styles.mottoText}>"한 영혼을 주님께로"</span>
                <p className={styles.mottoDescription}>
                  한 사람 한 사람의 소중한 영혼을 예수 그리스도께로 인도하는 것이 
                  우리 수정교회의 가장 중요한 사명입니다.
                </p>
              </div>
            </div>
          </section>

          {/* 비전 섹션 */}
          <section className={styles.visionSection}>
            <h2>🔮 우리의 비전</h2>
            <div className={styles.visionGrid}>
              <div className={styles.visionCard}>
                <div className={styles.visionIcon}>📖</div>
                <h3>말씀 중심</h3>
                <p>하나님의 말씀을 삶의 중심에 두고, 성경적 가치관으로 살아가는 교회</p>
              </div>
              <div className={styles.visionCard}>
                <div className={styles.visionIcon}>❤️</div>
                <h3>사랑 실천</h3>
                <p>예수님의 사랑을 실천하며, 이웃과 공동체를 섬기는 교회</p>
              </div>
              <div className={styles.visionCard}>
                <div className={styles.visionIcon}>🌍</div>
                <h3>복음 전도</h3>
                <p>온 세상에 복음을 전하며, 생명의 구원을 나누는 교회</p>
              </div>
              <div className={styles.visionCard}>
                <div className={styles.visionIcon}>⛪</div>
                <h3>예배 회복</h3>
                <p>하나님께 영광 돌리는 참된 예배를 회복하는 교회</p>
              </div>
              <div className={styles.visionCard}>
                <div className={styles.visionIcon}>🙏</div>
                <h3>기도 운동</h3>
                <p>기도로 시작하고 기도로 마치는, 기도하는 교회</p>
              </div>
              <div className={styles.visionCard}>
                <div className={styles.visionIcon}>🤝</div>
                <h3>공동체</h3>
                <p>서로 사랑하고 돌보며 함께 성장하는 건강한 공동체</p>
              </div>
            </div>
          </section>

          {/* 사명 섹션 */}
          <section className={styles.missionSection}>
            <h2>🎯 우리의 사명</h2>
            <div className={styles.missionContent}>
              <div className={styles.missionText}>
                <h3>예수님의 3대 사역 실천</h3>
                <div className={styles.missionItems}>
                  <div className={styles.missionItem}>
                    <span className={styles.missionNumber}>1</span>
                    <div>
                      <h4>가르치고 (Teaching)</h4>
                      <p>하나님의 말씀을 체계적으로 가르치며, 성경적 세계관을 확립합니다.</p>
                    </div>
                  </div>
                  <div className={styles.missionItem}>
                    <span className={styles.missionNumber}>2</span>
                    <div>
                      <h4>전파하고 (Preaching)</h4>
                      <p>복음의 능력을 선포하며, 예수 그리스도의 구원을 증거합니다.</p>
                    </div>
                  </div>
                  <div className={styles.missionItem}>
                    <span className={styles.missionNumber}>3</span>
                    <div>
                      <h4>치유하고 (Healing)</h4>
                      <p>영혼의 상처를 치유하며, 전인적 회복을 돕습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.missionImage}>
                <img src="/bible.jpg" alt="성경" />
              </div>
            </div>
          </section>

          {/* 핵심 가치 섹션 */}
          <section className={styles.valuesSection}>
            <h2>💎 핵심 가치</h2>
            <div className={styles.valuesList}>
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>🔥</div>
                <div className={styles.valueContent}>
                  <h3>열정 (Passion)</h3>
                  <p>하나님과 영혼에 대한 뜨거운 열정으로 섬깁니다.</p>
                </div>
              </div>
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>🎯</div>
                <div className={styles.valueContent}>
                  <h3>목적 (Purpose)</h3>
                  <p>하나님의 뜻과 목적을 발견하고 순종하며 살아갑니다.</p>
                </div>
              </div>
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>👥</div>
                <div className={styles.valueContent}>
                  <h3>동역 (Partnership)</h3>
                  <p>함께 일하며 서로 협력하는 공동체를 이룹니다.</p>
                </div>
              </div>
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>⚡</div>
                <div className={styles.valueContent}>
                  <h3>능력 (Power)</h3>
                  <p>성령의 능력으로 변화되고 세상을 변화시킵니다.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 목표 섹션 */}
          <section className={styles.goalsSection}>
            <h2>🏆 2025년 목표</h2>
            <div className={styles.goalsGrid}>
              <div className={styles.goalCard}>
                <h3>영적 성장</h3>
                <ul>
                  <li>📖 전 교인 성경 1독 완주</li>
                  <li>🙏 새벽기도회 참석률 증가</li>
                  <li>📚 소그룹 성경공부 활성화</li>
                </ul>
              </div>
              <div className={styles.goalCard}>
                <h3>전도와 선교</h3>
                <ul>
                  <li>👥 새가족 100명 등록</li>
                  <li>🌍 해외선교 지원 확대</li>
                  <li>🏢 직장선교 프로그램 런칭</li>
                </ul>
              </div>
              <div className={styles.goalCard}>
                <h3>공동체 성숙</h3>
                <ul>
                  <li>❤️ 섬김과 나눔의 문화 확산</li>
                  <li>🤝 세대 간 소통 프로그램</li>
                  <li>🎵 문화사역 활성화</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 행동 지침 섹션 */}
          <section className={styles.actionSection}>
            <h2>✨ 우리의 다짐</h2>
            <div className={styles.actionCard}>
              <div className={styles.actionText}>
                <p>우리는 <strong>한 영혼을 주님께로</strong> 인도하기 위해</p>
                <ul className={styles.actionList}>
                  <li>매일 말씀과 기도로 하나님과 동행하겠습니다</li>
                  <li>이웃과 공동체를 사랑으로 섬기겠습니다</li>
                  <li>복음의 증인으로서 삶으로 증거하겠습니다</li>
                  <li>하나님 나라 확장을 위해 헌신하겠습니다</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 