import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './Welcome.module.css';

/**
 * 환영합니다 페이지 컴포넌트
 * 새가족을 위한 환영 메시지와 교회 소개
 */
export default function Welcome() {
  return (
    <>
      <Helmet>
        <title>환영합니다 - 수정교회</title>
        <meta name="description" content="수정교회에 오신 것을 환영합니다. 새가족을 위한 교회 소개와 안내입니다." />
      </Helmet>
      
      <div className={styles.container}>
        {/* 환영 헤더 */}
        <div className={styles.header} style={{
          backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1687203673190-d39c3719123a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VsY29tZXxlbnwwfHwwfHx8MA%3D%3D)'
        }}>
          <div className={styles.headerContent}>
            <div className={styles.logoSection}>
              <img src="/crystal-logo.png" alt="수정교회 로고" className={styles.logo} />
            </div>
            <div className={styles.transparentBox}>
              <div className={styles.welcomeText}>
                <h1>수정교회에 오신 것을 환영합니다!</h1>
                <p className={styles.subtitle}>
                  하나님의 사랑과 은혜가 가득한 이곳에서<br />
                  새로운 신앙의 여정을 시작하세요.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className={styles.content}>
          {/* 환영 메시지 섹션 */}
          <section className={styles.section}>
            <h2>환영 인사</h2>
            <div className={styles.welcomeMessage}>
              <p>
                수정교회 가족 여러분, 안녕하세요!<br />
                처음 방문해 주신 모든 분들을 진심으로 환영합니다.
              </p>
              <p>
                수정교회는 1991년 11월 10일 개척된 이래로 지역사회와 함께 성장해온 교회입니다.<br />
                우리는 하나님의 말씀 위에 세워진 건강한 교회 공동체를 추구하며,<br />
                모든 성도가 그리스도 안에서 성장하고 섬기는 교회를 꿈꿉니다.
              </p>
            </div>
          </section>

          {/* 교회 비전 섹션 */}
          <section className={styles.section}>
            <h2>우리의 비전</h2>
            <div className={styles.visionGrid}>
              <div className={styles.visionCard}>
                <div className={styles.visionIcon}></div>
                <h3>말씀 중심</h3>
                <p>성경 말씀을 기반으로 한 건전한 신앙 교육과 성장을 추구합니다.</p>
              </div>
              <div className={styles.visionCard}>
                <div className={styles.visionIcon}></div>
                <h3>사랑의 공동체</h3>
                <p>서로 사랑하고 돌보는 따뜻한 교회 공동체를 만들어갑니다.</p>
              </div>
              <div className={styles.visionCard}>
                <div className={styles.visionIcon}></div>
                <h3>선교와 섬김</h3>
                <p>지역사회와 세계를 향한 복음 전파와 사회적 책임을 다합니다.</p>
              </div>
              <div className={styles.visionCard}>
                <div className={styles.visionIcon}></div>
                <h3>예배와 기도</h3>
                <p>하나님께 드리는 참된 예배와 기도로 하나님과의 관계를 깊게 합니다.</p>
              </div>
            </div>
          </section>

          {/* 새가족을 위한 안내 섹션 */}
          <section className={styles.section}>
            <h2>새가족을 위한 안내</h2>
            <div className={styles.guideGrid}>
              <div className={styles.guideCard}>
                <div className={styles.stepNumber}>1</div>
                <h3>첫 방문</h3>
                <p>
                  처음 오시는 분들을 위해 1층 카페에 환영 데스크가 준비되어 있습니다.<br />
                  궁금한 점이 있으시면 언제든 문의해 주세요.
                </p>
                <Link to="/welcome/visit" className={styles.guideLink}>
                  교회 방문하기 →
                </Link>
              </div>
              <div className={styles.guideCard}>
                <div className={styles.stepNumber}>2</div>
                <h3>새가족 등록</h3>
                <p>
                  새가족으로 등록하시면 교회 소개 자료와 함께<br />
                  새가족을 위한 특별한 안내를 받으실 수 있습니다.
                </p>
                <Link to="/welcome/register" className={styles.guideLink}>
                  새가족 등록하기 →
                </Link>
              </div>
              <div className={styles.guideCard}>
                <div className={styles.stepNumber}>3</div>
                <h3>새가족 FAQ</h3>
                <p>
                  처음 교회에 오시는 분들이 자주 묻는 질문들과<br />
                  그에 대한 친절한 답변을 확인하실 수 있습니다.
                </p>
                <Link to="/welcome/faq" className={styles.guideLink}>
                  자주 묻는 질문 →
                </Link>
              </div>
            </div>
          </section>

          {/* 교회 생활 참여 섹션 */}
          <section className={styles.section}>
            <h2>교회 생활 참여하기</h2>
            <div className={styles.guideGrid}>
              <div className={styles.guideCard}>
                <div className={styles.stepNumber}>1</div>
                <h3>양육과정</h3>
                <p>
                  체계적인 말씀 교육을 통해 성숙한 그리스도인으로<br />
                  성장하는 단계별 양육과정에 참여하세요.
                </p>
                <Link to="/community/discipleship-process" className={styles.guideLink}>
                  양육과정 보기 →
                </Link>
              </div>
              <div className={styles.guideCard}>
                <div className={styles.stepNumber}>2</div>
                <h3>봉사활동</h3>
                <p>
                  섬김과 나눔을 통해 하나님의 사랑을 실천하는<br />
                  다양한 봉사활동에 참여하실 수 있습니다.
                </p>
                <Link to="/community/volunteer-activities" className={styles.guideLink}>
                  봉사활동 보기 →
                </Link>
              </div>
              <div className={styles.guideCard}>
                <div className={styles.stepNumber}>3</div>
                <h3>새신자 양육</h3>
                <p>
                  새로 오신 분들을 위한 체계적인 양육 프로그램으로<br />
                  신앙의 기초를 탄탄하게 세워나가세요.
                </p>
                <Link to="/community/newcomer-care" className={styles.guideLink}>
                  새신자 양육 보기 →
                </Link>
              </div>
            </div>
          </section>

          {/* 예배 안내 섹션 */}
          <section className={styles.section}>
            <h2>예배 시간 안내</h2>
            <div className={styles.scheduleGrid}>
              <div className={styles.scheduleCard}>
                <h3>주일 예배</h3>
                <div className={styles.scheduleInfo}>
                  <div className={styles.timeInfo}>
                    <span className={styles.time}>오전 11:00</span>
                    <span className={styles.detail}>매주 주일</span>
                  </div>
                  <p>온 가족이 함께 드리는 주일 대예배입니다.</p>
                </div>
              </div>
              <div className={styles.scheduleCard}>
                <h3>수요 기도회</h3>
                <div className={styles.scheduleInfo}>
                  <div className={styles.timeInfo}>
                    <span className={styles.time}>오후 7:30</span>
                    <span className={styles.detail}>매주 수요일</span>
                  </div>
                  <p>말씀과 기도로 영성을 깊게 하는 시간입니다.</p>
                </div>
              </div>
              <div className={styles.scheduleCard}>
                <h3>금요 기도회</h3>
                <div className={styles.scheduleInfo}>
                  <div className={styles.timeInfo}>
                    <span className={styles.time}>오후 8:30</span>
                    <span className={styles.detail}>매주 금요일</span>
                  </div>
                  <p>교회와 성도들을 위한 중보기도 시간입니다.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 연락처 섹션 */}
          <section className={styles.section}>
            <h2> 연락처 및 위치</h2>
            <div className={styles.contactInfo}>
              <div className={styles.contactCard}>
                <h3>교회 주소</h3>
                <p>경기 수원시 팔달구 팔달문로150번길 13 수정교회</p>
              </div>
              <div className={styles.contactCard}>
                <h3>연락처</h3>
                <p>031-212-0091</p>
              </div>
              <div className={styles.contactCard}>
                <h3>이메일</h3>
                <p>suwoncrystalchurch@gmail.com</p>
              </div>
            </div>
          </section>

          {/* 행동 유도 섹션 */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2>함께 하실 준비가 되셨나요?</h2>
              <p>
                수정교회는 여러분의 방문을 기다리고 있습니다.<br />
                하나님의 사랑 안에서 새로운 시작을 함께 해요!
              </p>
              <div className={styles.ctaButtons}>
                <Link to="/welcome/visit" className={styles.primaryButton}>
                  교회 방문 안내
                </Link>
                <Link to="/welcome/register" className={styles.secondaryButton}>
                  새가족 등록
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 