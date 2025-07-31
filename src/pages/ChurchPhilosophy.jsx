import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './ChurchPhilosophy.module.css';

/**
 * 교회 철학 페이지 컴포넌트
 * 수정교회의 교육철학, 목회철학, 신앙관을 소개
 */
export default function ChurchPhilosophy() {
  return (
    <>
      <Helmet>
        <title>교회 철학 - 수정교회</title>
        <meta name="description" content="수정침례교회의 교육철학과 목회철학, 신앙관을 소개합니다. 성경적 가치관으로 세워가는 교회입니다." />
        <meta name="keywords" content="수정교회, 교회철학, 교육철학, 목회철학, 신앙관, 침례교회" />
      </Helmet>

      <div className={styles.container}>
        {/* 헤더 섹션 */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1>교회 철학</h1>
            <p>성경적 가치관으로 세워가는 수정교회의 철학</p>
          </div>
          <div className={styles.headerImage}>
            <img src="/bible2.jpg" alt="성경" />
          </div>
        </div>

        <div className={styles.content}>
          {/* 목회 철학 섹션 */}
          <section className={styles.pastoralSection}>
            <h2>목회 철학</h2>
            <div className={styles.philosophyGrid}>
              <div className={styles.philosophyCard}>
                <div className={styles.cardIcon}></div>
                <h3>목적 중심 목회</h3>
                <p>하나님의 목적과 계획에 따라 교회를 세워가며, 영혼 구원과 제자 양육에 집중합니다.</p>
                <ul>
                  <li>예배를 통한 하나님과의 관계</li>
                  <li>교제를 통한 성도 간의 교통</li>
                  <li>양육을 통한 영적 성장</li>
                  <li>봉사를 통한 사역 참여</li>
                  <li>전도를 통한 복음 확산</li>
                </ul>
              </div>
              <div className={styles.philosophyCard}>
                <div className={styles.cardIcon}></div>
                <h3>말씀 중심 목회</h3>
                <p>성경을 유일한 권위로 인정하며, 하나님의 말씀에 기초한 목회를 실천합니다.</p>
                <ul>
                  <li>강해설교를 통한 말씀 선포</li>
                  <li>성경공부를 통한 말씀 학습</li>
                  <li>묵상을 통한 말씀 적용</li>
                  <li>암송을 통한 말씀 내재화</li>
                  <li>실천을 통한 말씀 순종</li>
                </ul>
              </div>
              <div className={styles.philosophyCard}>
                <div className={styles.cardIcon}></div>
                <h3>관계 중심 목회</h3>
                <p>하나님과의 관계, 성도 간의 관계, 이웃과의 관계를 중시하는 공동체를 만듭니다.</p>
                <ul>
                  <li>세대 통합적 교제</li>
                  <li>소그룹 중심의 돌봄</li>
                  <li>멘토링 시스템 운영</li>
                  <li>가정교회 정신</li>
                  <li>지역사회와의 소통</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 교육 철학 섹션 */}
          <section className={styles.educationSection}>
            <h2>교육 철학</h2>
            <div className={styles.educationContent}>
              <div className={styles.educationText}>
                <h3>전인적 기독교 교육</h3>
                <div className={styles.educationAreas}>
                  <div className={styles.educationArea}>
                    <h4>지적 영역 (Knowledge)</h4>
                    <p>성경의 진리를 체계적으로 학습하고, 기독교 세계관을 형성합니다.</p>
                    <div className={styles.areaDetails}>
                      <span>성경 지식</span>
                      <span>신학적 이해</span>
                      <span>교리 학습</span>
                      <span>교회사 인식</span>
                    </div>
                  </div>
                  <div className={styles.educationArea}>
                    <h4>정서적 영역 (Affection)</h4>
                    <p>하나님에 대한 사랑과 이웃에 대한 사랑을 키워갑니다.</p>
                    <div className={styles.areaDetails}>
                      <span>예배의 기쁨</span>
                      <span>감사의 마음</span>
                      <span>사랑의 실천</span>
                      <span>섬김의 자세</span>
                    </div>
                  </div>
                  <div className={styles.educationArea}>
                    <h4>행동적 영역 (Behavior)</h4>
                    <p>믿음을 삶으로 실천하며, 그리스도의 제자로 살아갑니다.</p>
                    <div className={styles.areaDetails}>
                      <span>말씀 순종</span>
                      <span>기도 생활</span>
                      <span>전도 실천</span>
                      <span>봉사 참여</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.educationImage}>
                <img src="/bible-reading-table-1.jpg" alt="성경 교육" />
              </div>
            </div>
          </section>

          {/* 신앙관 섹션 */}
          <section className={styles.faithSection}>
            <h2>우리의 신앙관</h2>
            <div className={styles.faithCards}>
              <div className={styles.faithCard}>
                <h3>성경관</h3>
                <p><strong>성경은 하나님의 말씀</strong></p>
                <ul>
                  <li>성경의 무오성과 절대 권위 인정</li>
                  <li>성경 66권의 정경성 확신</li>
                  <li>성령의 조명하심을 통한 해석</li>
                  <li>삶의 모든 영역에서의 적용</li>
                </ul>
              </div>
              <div className={styles.faithCard}>
                <h3>구원관</h3>
                <p><strong>오직 예수 그리스도로 인한 구원</strong></p>
                <ul>
                  <li>예수 그리스도의 십자가 대속</li>
                  <li>믿음으로만 얻는 구원</li>
                  <li>성령의 거듭나게 하심</li>
                  <li>구원의 확신과 성화의 삶</li>
                </ul>
              </div>
              <div className={styles.faithCard}>
                <h3>성령관</h3>
                <p><strong>성령님의 인도하심과 능력</strong></p>
                <ul>
                  <li>성령님의 인격성과 신성 인정</li>
                  <li>중생과 성화 사역의 주체</li>
                  <li>은사를 통한 교회 성장</li>
                  <li>진리 가운데로 인도하심</li>
                </ul>
              </div>
              <div className={styles.faithCard}>
                <h3>교회관</h3>
                <p><strong>그리스도의 몸 된 교회</strong></p>
                <ul>
                  <li>성도의 교제와 연합</li>
                  <li>다양한 은사의 조화</li>
                  <li>지역교회의 자율성</li>
                  <li>만인제사장직의 실현</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 교육 방법론 섹션 */}
          <section className={styles.methodSection}>
            <h2>교육 방법론</h2>
            <div className={styles.methodGrid}>
              <div className={styles.methodCard}>
                <div className={styles.methodIcon}>👨‍🏫</div>
                <h3>체험적 학습</h3>
                <p>이론뿐만 아니라 실제 경험을 통해 신앙을 체득합니다.</p>
                <div className={styles.methodItems}>
                  <span>실습 중심 교육</span>
                  <span>현장 학습</span>
                  <span>프로젝트 수행</span>
                </div>
              </div>
              <div className={styles.methodCard}>
                <div className={styles.methodIcon}></div>
                <h3>관계적 학습</h3>
                <p>멘토와 멘티, 동료들과의 관계 속에서 성장합니다.</p>
                <div className={styles.methodItems}>
                  <span>멘토링 시스템</span>
                  <span>소그룹 스터디</span>
                  <span>팀 프로젝트</span>
                </div>
              </div>
              <div className={styles.methodCard}>
                <div className={styles.methodIcon}>🔄</div>
                <h3>순환적 학습</h3>
                <p>배움과 가르침, 받음과 나눔의 선순환 구조를 만듭니다.</p>
                <div className={styles.methodItems}>
                  <span>단계별 성장</span>
                  <span>재생산 원리</span>
                  <span>지속적 발전</span>
                </div>
              </div>
            </div>
          </section>

          {/* 실천 지침 섹션 */}
          <section className={styles.practiceSection}>
            <h2>실천 지침</h2>
            <div className={styles.practiceContent}>
              <div className={styles.practiceQuote}>
                <blockquote>
                  "너희는 이 세대를 본받지 말고 오직 마음을 새롭게 함으로 변화를 받아 
                  하나님의 선하시고 기뻐하시고 온전하신 뜻이 무엇인지 분별하도록 하라"
                  <cite>- 로마서 12:2 -</cite>
                </blockquote>
              </div>
              <div className={styles.practiceList}>
                <h3>우리의 다짐</h3>
                <div className={styles.practiceItems}>
                  <div className={styles.practiceItem}>
                    <span className={styles.practiceNumber}>1</span>
                    <div>
                      <h4>말씀 중심의 삶</h4>
                      <p>매일 성경을 읽고 묵상하며, 말씀에 순종하는 삶을 살겠습니다.</p>
                    </div>
                  </div>
                  <div className={styles.practiceItem}>
                    <span className={styles.practiceNumber}>2</span>
                    <div>
                      <h4>기도하는 삶</h4>
                      <p>개인기도와 공동기도를 통해 하나님과 깊은 교제를 나누겠습니다.</p>
                    </div>
                  </div>
                  <div className={styles.practiceItem}>
                    <span className={styles.practiceNumber}>3</span>
                    <div>
                      <h4>사랑하는 삶</h4>
                      <p>하나님과 이웃을 사랑하며, 실천적 사랑을 보여주겠습니다.</p>
                    </div>
                  </div>
                  <div className={styles.practiceItem}>
                    <span className={styles.practiceNumber}>4</span>
                    <div>
                      <h4>섬기는 삶</h4>
                      <p>자신의 은사를 발견하고 교회와 세상을 섬기는 삶을 살겠습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 