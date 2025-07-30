import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './DiscipleshipProcess.module.css';

/**
 * 양육과정 페이지 컴포넌트
 */
export default function DiscipleshipProcess() {
  return (
    <>
      <Helmet>
        <title>양육과정 - 수정교회</title>
        <meta name="description" content="수정교회 신앙 양육과정에 대한 안내입니다." />
      </Helmet>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>양육과정</h1>
          <p>체계적인 말씀 교육을 통해 성숙한 그리스도인으로 성장하는 과정입니다.</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>양육과정 소개</h2>
            <p>
              수정교회의 양육과정은 하나님의 말씀 위에 굳건히 서는 제자를 세우는 것을 목표로 합니다. 
              신앙의 기초부터 성숙한 그리스도인의 삶까지, 단계별로 체계적인 교육을 통해 
              하나님의 사람으로 온전히 세워가는 과정입니다.
            </p>
            <div className={styles.visionBox}>
              <h3>양육 비전</h3>
              <blockquote>
                "그러므로 너희는 가서 모든 민족을 제자로 삼아 아버지와 아들과 성령의 이름으로 침례를 베풀고 
                내가 너희에게 분부한 모든 것을 가르쳐 지키게 하라" (마 28:19-20)
              </blockquote>
            </div>
          </section>

          <section className={styles.section}>
            <h2>양육과정 체계</h2>
            <div className={styles.processFlow}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1단계</div>
                <div className={styles.stepContent}>
                  <h3>새신자 과정</h3>
                  <p className={styles.stepPeriod}>4주 과정</p>
                  <div className={styles.stepDetails}>
                    <h4>주요 내용</h4>
                    <ul>
                      <li>구원의 확신</li>
                      <li>기독교 기본 교리</li>
                      <li>교회 소개 및 예배 안내</li>
                      <li>신앙생활의 기초</li>
                    </ul>
                    <h4>교재</h4>
                    <p>「새신자 교육 교재」</p>
                  </div>
                </div>
              </div>

              <div className={styles.processArrow}>⬇</div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2단계</div>
                <div className={styles.stepContent}>
                  <h3>새가족 과정</h3>
                  <p className={styles.stepPeriod}>8주 과정</p>
                  <div className={styles.stepDetails}>
                    <h4>주요 내용</h4>
                    <ul>
                      <li>성경 개관 (구약/신약)</li>
                      <li>기도와 말씀 묵상</li>
                      <li>교회 역사와 비전</li>
                      <li>그리스도인의 삶</li>
                    </ul>
                    <h4>교재</h4>
                    <p>「새가족 교육 교재」</p>
                  </div>
                </div>
              </div>

              <div className={styles.processArrow}>⬇</div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3단계</div>
                <div className={styles.stepContent}>
                  <h3>성장과정</h3>
                  <p className={styles.stepPeriod}>12주 과정</p>
                  <div className={styles.stepDetails}>
                    <h4>주요 내용</h4>
                    <ul>
                      <li>성경 심화 학습</li>
                      <li>교리와 신학</li>
                      <li>성령님의 역사</li>
                      <li>선교와 전도</li>
                    </ul>
                    <h4>교재</h4>
                    <p>「제자훈련 교재」</p>
                  </div>
                </div>
              </div>

              <div className={styles.processArrow}>⬇</div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4단계</div>
                <div className={styles.stepContent}>
                  <h3>리더과정</h3>
                  <p className={styles.stepPeriod}>16주 과정</p>
                  <div className={styles.stepDetails}>
                    <h4>주요 내용</h4>
                    <ul>
                      <li>리더십과 섬김</li>
                      <li>목양과 돌봄</li>
                      <li>소그룹 인도법</li>
                      <li>영적 지도력</li>
                    </ul>
                    <h4>교재</h4>
                    <p>「리더십 훈련 교재」</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>연령별 양육프로그램</h2>
            <div className={styles.ageGroupGrid}>
              <div className={styles.ageGroupCard}>
                <div className={styles.ageIcon}>
                  <img src="https://plus.unsplash.com/premium_photo-1682003644019-d1d7757b7f3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJTk4JTgxJUVDJTlDJUEwJUVDJTk1JTg0fGVufDB8fDB8fHww" alt="영유아부" />
                </div>
                <h3>영유아부 (0-5세)</h3>
                <div className={styles.ageContent}>
                  <h4>프로그램</h4>
                  <ul>
                    <li>성경 이야기 시간</li>
                    <li>찬양과 율동</li>
                    <li>기도 배우기</li>
                  </ul>
                  <h4>시간</h4>
                  <p>주일 오전 11:00 - 12:00</p>
                </div>
              </div>
              
              <div className={styles.ageGroupCard}>
                <div className={styles.ageIcon}>
                  <img src="https://thecrystalchurch.netlify.app/img2/en5.jpg" alt="유초등부" />
                </div>
                <h3>유초등부 (6-12세)</h3>
                <div className={styles.ageContent}>
                  <h4>프로그램</h4>
                  <ul>
                    <li>주일학교 성경공부</li>
                    <li>여름성경학교</li>
                    <li>어린이 찬양대</li>
                  </ul>
                  <h4>시간</h4>
                  <p>주일 오전 11:00 - 12:00</p>
                </div>
              </div>
              
              <div className={styles.ageGroupCard}>
                <div className={styles.ageIcon}>
                  <img src="/youth.jpeg" alt="중고등부" />
                </div>
                <h3>중고등부 (13-18세)</h3>
                <div className={styles.ageContent}>
                  <h4>프로그램</h4>
                  <ul>
                    <li>청소년 성경공부</li>
                    <li>또래 멘토링</li>
                    <li>진로 상담</li>
                  </ul>
                  <h4>시간</h4>
                  <p>주일 오전 11:00 - 12:00</p>
                </div>
              </div>
              
              <div className={styles.ageGroupCard}>
                <div className={styles.ageIcon}>
                  <img src="/college.png" alt="청년부" />
                </div>
                <h3>청년부 (19-35세)</h3>
                <div className={styles.ageContent}>
                  <h4>프로그램</h4>
                  <ul>
                    <li>청년 성경공부</li>
                    <li>소그룹 모임</li>
                    <li>캠프 및 수련회</li>
                  </ul>
                  <h4>시간</h4>
                  <p>주일 오후 1:00 - 3:00</p>
                </div>
              </div>
              
              <div className={styles.ageGroupCard}>
                <div className={styles.ageIcon}>
                  <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop&crop=center" alt="장년부" />
                </div>
                <h3>장년부 (36세 이상)</h3>
                <div className={styles.ageContent}>
                  <h4>프로그램</h4>
                  <ul>
                    <li>구역별 성경공부</li>
                    <li>제자훈련</li>
                    <li>리더십 훈련</li>
                  </ul>
                  <h4>시간</h4>
                  <p>주일 오후 2:00 - 3:30</p>
                </div>
              </div>
              
              <div className={styles.ageGroupCard}>
                <div className={styles.ageIcon}>
                  <img src="https://images.unsplash.com/photo-1568337339884-18892057f7cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCVFQyU4QiU5QyVFQiU4QiU4OCVFQyU5NiVCNHxlbnwwfHwwfHx8MA%3D%3D" alt="어르신부" />
                </div>
                <h3>시니어 (70세 이상)</h3>
                <div className={styles.ageContent}>
                  <h4>프로그램</h4>
                  <ul>
                    <li>어르신 성경공부</li>
                    <li>찬양과 기도</li>
                    <li>건강 관리 교육</li>
                  </ul>
                  <h4>시간</h4>
                  <p>주일 오후 2:00 - 3:30</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>양육과정 일정 및 신청</h2>
            <div className={styles.scheduleBox}>
              <div className={styles.scheduleInfo}>
                <h3>📅 2025년 양육과정 일정</h3>
                <div className={styles.scheduleTable}>
                  <div className={styles.scheduleRow}>
                    <div className={styles.scheduleLabel}>상반기</div>
                    <div className={styles.scheduleDetail}>
                      <p><strong>새신자 과정:</strong> 3월, 5월 시작</p>
                      <p><strong>새가족 과정:</strong> 4월 시작</p>
                      <p><strong>성장과정:</strong> 3월 시작</p>
                      <p><strong>리더과정:</strong> 3월 시작</p>
                    </div>
                  </div>
                  <div className={styles.scheduleRow}>
                    <div className={styles.scheduleLabel}>하반기</div>
                    <div className={styles.scheduleDetail}>
                      <p><strong>새신자 과정:</strong> 9월, 11월 시작</p>
                      <p><strong>새가족 과정:</strong> 10월 시작</p>
                      <p><strong>성장과정:</strong> 9월 시작</p>
                      <p><strong>리더과정:</strong> 9월 시작</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.applicationBox}>
                <h3>신청 방법</h3>
                <div className={styles.applicationSteps}>
                  <div className={styles.appStep}>
                    <span className={styles.appStepNum}>1</span>
                    <p>교육팀에 신청서 제출</p>
                  </div>
                  <div className={styles.appStep}>
                    <span className={styles.appStepNum}>2</span>
                    <p>담당자와 상담</p>
                  </div>
                  <div className={styles.appStep}>
                    <span className={styles.appStepNum}>3</span>
                    <p>적합한 과정 배정</p>
                  </div>
                  <div className={styles.appStep}>
                    <span className={styles.appStepNum}>4</span>
                    <p>교육 시작</p>
                  </div>
                </div>
                
                <div className={styles.contactInfo}>
                  <h4>문의</h4>
                  <p><strong>전화:</strong> 031-212-0091</p>
                  <p><strong>이메일:</strong> suwoncrystalchurch@gmail.com</p>
                  <p><strong>담당:</strong> 교육팀장 000 권사</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 