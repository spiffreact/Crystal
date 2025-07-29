import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './NewcomerCare.module.css';

/**
 * 새신자 양육 페이지 컴포넌트
 */
export default function NewcomerCare() {
  return (
    <>
      <Helmet>
        <title>새신자 양육 - 수정교회</title>
        <meta name="description" content="수정교회 새신자 양육 프로그램에 대한 안내입니다." />
      </Helmet>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>새신자 양육</h1>
          <p>수정교회에 새로 오신 분들을 위한 체계적인 양육 프로그램입니다.</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>새신자 양육 프로그램 소개</h2>
            <p>
              수정교회에 오신 것을 진심으로 환영합니다! 새신자 양육 프로그램은 
              처음 교회에 나오시는 분들이 신앙의 기초를 탄탄히 다지고, 
              교회 공동체의 일원으로 자연스럽게 적응할 수 있도록 돕는 프로그램입니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>양육 과정</h2>
            <div className={styles.courseGrid}>
              <div className={styles.courseCard}>
                <div className={styles.courseNumber}>1</div>
                <h3>환영과정</h3>
                <p>교회 소개 및 신앙의 기초</p>
                <ul>
                  <li>교회 역사와 비전</li>
                  <li>기독교 기본 교리</li>
                  <li>예배와 기도의 의미</li>
                </ul>
              </div>
              
              <div className={styles.courseCard}>
                <div className={styles.courseNumber}>2</div>
                <h3>양육과정</h3>
                <p>성경 말씀과 신앙생활</p>
                <ul>
                  <li>성경 개관</li>
                  <li>구원의 확신</li>
                  <li>기도와 말씀 묵상</li>
                </ul>
              </div>
              
              <div className={styles.courseCard}>
                <div className={styles.courseNumber}>3</div>
                <h3>정착과정</h3>
                <p>교회 생활과 섬김</p>
                <ul>
                  <li>교회 조직과 사역</li>
                  <li>소그룹 참여</li>
                  <li>봉사와 헌신</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>프로그램 일정</h2>
            <div className={styles.scheduleBox}>
              <div className={styles.scheduleItem}>
                <strong>시간:</strong> 매주 주일 오후 2:00 - 3:30
              </div>
              <div className={styles.scheduleItem}>
                <strong>장소:</strong> 교육관 2층 새신자실
              </div>
              <div className={styles.scheduleItem}>
                <strong>기간:</strong> 12주 과정 (약 3개월)
              </div>
              <div className={styles.scheduleItem}>
                <strong>인원:</strong> 소그룹 형태 (8-10명)
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>참여 혜택</h2>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>📖</div>
                <div>
                  <h3>체계적인 신앙교육</h3>
                  <p>기독교 신앙의 기초부터 체계적으로 배울 수 있습니다.</p>
                </div>
              </div>
              
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>👥</div>
                <div>
                  <h3>교제와 친교</h3>
                  <p>같은 시기에 교회에 온 분들과 깊은 교제를 나눌 수 있습니다.</p>
                </div>
              </div>
              
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>🎯</div>
                <div>
                  <h3>개인별 맞춤 케어</h3>
                  <p>개인의 신앙 상태에 맞는 맞춤형 양육을 받을 수 있습니다.</p>
                </div>
              </div>
              
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>🏠</div>
                <div>
                  <h3>교회 정착 도움</h3>
                  <p>교회 생활에 자연스럽게 적응할 수 있도록 도움을 받습니다.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>신청 및 문의</h2>
            <div className={styles.applicationBox}>
              <p>새신자 양육에 참여를 원하시는 분은 언제든지 신청하실 수 있습니다.</p>
              
              <div className={styles.contactInfo}>
                <h3>신청 방법</h3>
                <ul>
                  <li>주일 예배 후 새신자 환영실 방문</li>
                  <li>교회 사무실 전화 신청</li>
                  <li>담당 교역자나 권사님께 직접 신청</li>
                </ul>
                
                <h3>문의</h3>
                <p><strong>전화:</strong> 031-212-0091</p>
                <p><strong>이메일:</strong> suwoncrystalchurch@gmail.com</p>
                <p><strong>담당:</strong> 새신자 양육팀</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 