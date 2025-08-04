import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import styles from './EducationTeam.module.css';

/**
 * 교육팀 페이지 컴포넌트
 * 로그인이 필요한 보호된 페이지
 */
export default function EducationTeam() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    navigate('/', { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>교육팀 - 수정교회</title>
        <meta name="description" content="수정교회 교육팀 페이지입니다." />
      </Helmet>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.headerContent}>
              <h1>교육팀</h1>
              <p>수정교회 교육 사역을 담당하는 교육팀입니다.</p>
            </div>
            <button onClick={handleLogout} className={styles.logoutButton}>
              로그아웃
            </button>
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>교육팀 소개</h2>
            <p>
              교육팀은 수정교회의 모든 교육 사역을 기획하고 운영하는 팀입니다.
              성경 교육, 제자 훈련, 새신자 양육 등 다양한 교육 프로그램을 통해
              성도들의 영적 성장을 돕고 있습니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>주요 사역</h2>
            <div className={styles.ministryGrid}>
              <div className={styles.ministryCard}>
                <h3>성경 교육</h3>
                <p>체계적인 성경 교육을 통한 말씀 양육</p>
              </div>
              <div className={styles.ministryCard} onClick={() => navigate('/community/education-team/newcomer-management')} style={{cursor: 'pointer'}}>
                <h3>새신자 양육</h3>
                <p>새로 오신 분들을 위한 맞춤형 교육</p>
                <div className={styles.cardHover}>관리 페이지로 이동 →</div>
              </div>
              <div className={styles.ministryCard}>
                <h3>제자 훈련</h3>
                <p>영적 지도자 양성을 위한 훈련</p>
              </div>
              <div className={styles.ministryCard}>
                <h3>교육 자료 개발</h3>
                <p>효과적인 교육을 위한 자료 제작</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>새신자 양육 관리</h2>
            <div className={styles.newcomerManagement}>
              <div className={styles.managementGrid}>
                <div className={styles.managementCard}>
                  <h3>새신자 현황</h3>
                  <div className={styles.statusList}>
                    <div className={styles.statusItem}>
                      <span className={styles.statusLabel}>이번 달 새신자</span>
                      <span className={styles.statusNumber}>8명</span>
                    </div>
                    <div className={styles.statusItem}>
                      <span className={styles.statusLabel}>양육 진행 중</span>
                      <span className={styles.statusNumber}>15명</span>
                    </div>
                    <div className={styles.statusItem}>
                      <span className={styles.statusLabel}>양육 완료</span>
                      <span className={styles.statusNumber}>23명</span>
                    </div>
                  </div>
                </div>

                <div className={styles.managementCard}>
                  <h3>양육 일정</h3>
                  <div className={styles.scheduleList}>
                    <div className={styles.scheduleItem}>
                      <span className={styles.scheduleDate}>2024.01.21</span>
                      <span className={styles.scheduleContent}>새신자 양육 1차 (환영과정)</span>
                    </div>
                    <div className={styles.scheduleItem}>
                      <span className={styles.scheduleDate}>2024.01.28</span>
                      <span className={styles.scheduleContent}>새신자 양육 2차 (양육과정)</span>
                    </div>
                    <div className={styles.scheduleItem}>
                      <span className={styles.scheduleDate}>2024.02.04</span>
                      <span className={styles.scheduleContent}>새신자 양육 3차 (정착과정)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.newcomerTools}>
                <h3>양육 관리 도구</h3>
                <div className={styles.toolsNavigation}>
                  <button 
                    onClick={() => navigate('/community/education-team/newcomer-management')}
                    className={styles.managementPageButton}
                  >
                    새신자 양육 관리 페이지로 이동
                  </button>
                </div>
                <div className={styles.toolsGrid}>
                  <div className={styles.toolCard}>
                    <h4>새신자 명단</h4>
                    <p>새신자 등록 현황과 개인별 양육 진행 상태를 확인할 수 있습니다.</p>
                    <button 
                    onClick={() => navigate('/community/education-team/newcomer-management')}
                    className={styles.toolButton}
                  >
                    명단 보기
                  </button>
                  </div>

                  <div className={styles.toolCard}>
                    <h4>양육 교재</h4>
                    <p>새신자 양육에 사용되는 교재와 자료를 관리합니다.</p>
                    <button className={styles.toolButton}>교재 관리</button>
                  </div>

                  <div className={styles.toolCard}>
                    <h4>출석 체크</h4>
                    <p>새신자별 양육 과정 출석 현황을 체크하고 관리합니다.</p>
                    <button className={styles.toolButton}>출석 관리</button>
                  </div>

                  <div className={styles.toolCard}>
                    <h4>연락망</h4>
                    <p>새신자들과의 소통을 위한 연락망을 관리합니다.</p>
                    <button className={styles.toolButton}>연락망 관리</button>
                  </div>

                  <div className={styles.toolCard}>
                    <h4>양육 리포트</h4>
                    <p>새신자 양육 현황과 통계를 확인할 수 있습니다.</p>
                    <button className={styles.toolButton}>리포트 보기</button>
                  </div>

                  <div className={styles.toolCard}>
                    <h4>선물 관리</h4>
                    <p>새신자에게 제공되는 선물과 교재 재고를 관리합니다.</p>
                    <button className={styles.toolButton}>선물 관리</button>
                  </div>
                </div>
              </div>

              <div className={styles.newcomerNotes}>
                <h3>📝 새신자 양육 노트</h3>
                <div className={styles.notesContainer}>
                  <div className={styles.noteItem}>
                    <div className={styles.noteHeader}>
                      <span className={styles.noteName}>김○○님</span>
                      <span className={styles.noteDate}>2024.01.15 등록</span>
                    </div>
                    <p className={styles.noteContent}>
                      첫 방문 시 매우 적극적이셨음. 성경에 대한 관심도가 높아 양육이 순조롭게 진행될 것으로 예상.
                      다음 주 2차 양육 예정.
                    </p>
                  </div>

                  <div className={styles.noteItem}>
                    <div className={styles.noteHeader}>
                      <span className={styles.noteName}>이○○님</span>
                      <span className={styles.noteDate}>2024.01.08 등록</span>
                    </div>
                    <p className={styles.noteContent}>
                      가족과 함께 등록하셨음. 어린 자녀가 있어 주일학교 연계 필요. 
                      양육 과정에서 가정 예배에 대한 안내 집중 예정.
                    </p>
                  </div>

                  <div className={styles.noteItem}>
                    <div className={styles.noteHeader}>
                      <span className={styles.noteName}>박○○님</span>
                      <span className={styles.noteDate}>2024.01.01 등록</span>
                    </div>
                    <p className={styles.noteContent}>
                      3차 양육 완료. 소그룹 참여 의향 있음. 
                      다음 주부터 청년부 소그룹 연결 예정. 양육 과정 우수 완료.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>팀원 소개</h2>
            <div className={styles.teamInfo}>
              <p>교육팀에 대한 자세한 정보는 교회 사무실로 문의해 주세요.</p>
              <div className={styles.contact}>
                <p><strong>문의:</strong> 교회 사무실 (031-212-0091)</p>
                <p><strong>이메일:</strong> suwoncrystalchurch@gmail.com</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 