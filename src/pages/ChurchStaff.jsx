import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './ChurchStaff.module.css';

/**
 * 섬기는 사람들 페이지 컴포넌트
 * 담임목사, 협력목사, 전도사, 장로・권사들을 소개
 */
export default function ChurchStaff() {
  return (
    <>
      <Helmet>
        <title>섬기는 사람들 - 수정교회</title>
        <meta name="description" content="수정침례교회를 섬기는 교역자와 임원들을 소개합니다. 하나님의 사랑으로 섬기는 분들입니다." />
        <meta name="keywords" content="수정교회, 담임목사, 협력목사, 전도사, 장로, 권사, 교역자" />
      </Helmet>

      <div className={styles.container}>
        {/* 헤더 섹션 */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1>섬기는 사람들</h1>
            <p>하나님의 사랑으로 교회와 성도를 섬기는 분들</p>
          </div>
          <div className={styles.headerImage}>
            <img src="/church.png" alt="수정교회" />
          </div>
        </div>

        <div className={styles.content}>
          {/* 담임목사 섹션 */} 
          <section className={styles.pastorSection}>
            <h2>👨‍💼 담임목사</h2>
            <div className={styles.pastorCard}>
              <div className={styles.pastorImage}>
                <img src="/pastor.profile.png" alt="담임목사" />
              </div>
              <div className={styles.pastorInfo}>
                <h3>김광호 목사</h3>
                <p className={styles.pastorTitle}>담임목사</p>
                <div className={styles.pastorDetails}>
                  <div className={styles.detailItem}>
                    <strong>학력:</strong>
                    <span>한국침례신학대학교 신학과 (B.A.)</span>
                    <span>한국침례신학대학원 신학과 (M.Div.)</span>
                  </div>
                  <div className={styles.detailItem}>
                    <strong>경력:</strong>
                    <span>수정침례교회 담임목사 (1991년~현재)</span>
                  </div>
                  <div className={styles.detailItem}>
                    <strong>사역:</strong>
                    <span>설교, 목회상담, 교회행정, 전도</span>
                  </div>
                  <div className={styles.detailItem}>
                    <strong>신조:</strong>
                    <span>"한 영혼을 주님께로"</span>
                  </div>
                </div>
                <div className={styles.pastorMessage}>
                  <p>
                    "하나님의 말씀과 기도로 성도들과 함께 성장하며, 
                    한 사람 한 사람을 소중히 여기는 목회를 실천하고 있습니다."
                  </p>
                </div>
              </div>
            </div>
                   </section>

          {/* 협력목사 섹션 */}
          <section className={styles.pastorSection}>
            <h2>👥 협력목사</h2>
            <div className={styles.pastorCard}>
              <div className={styles.pastorImage}>
                <img src="/pastor.cha.png" alt="협력목사" />
              </div>
              <div className={styles.pastorInfo}>
                <h3>차보용 목사</h3>
                <p className={styles.pastorTitle}>협력목사</p>
                <div className={styles.pastorDetails}>
                  <div className={styles.detailItem}>
                    <strong>경력:</strong>
                    <span>현 보영테크 대표</span>
               
                    <span>월드베스트프렌드 대표</span>
           
                    <span>수정교회 협력목사</span>
                  </div>
                  <div className={styles.detailItem}>
                    <strong>사역:</strong>
                    <span>선교, 양육, 제자훈련, 교육</span>
                  </div>
                  <div className={styles.detailItem}>
                    <strong>신조:</strong>
                    <span>"함께 성장하는 공동체"</span>
                  </div>
                </div>
                <div className={styles.pastorMessage}>
                  <p>
                    "체계적인 제자훈련을 통해 성도들의 영적 성장을 돕고, 
                    선교 사역을 통해 하나님 나라 확장에 힘쓰고 있습니다."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 임시 주석 처리 - 나머지 섬기는 사람들 섹션들

          <section className={styles.evangelistSection}>
            <h2>👩‍💼 전도사</h2>
            <div className={styles.staffGrid}>
              <div className={styles.staffCard}>
                <div className={styles.staffImage}>
                  <div className={styles.placeholder}>👩‍💼</div>
                </div>
                <div className={styles.staffInfo}>
                  <h3>청년부 전도사</h3>
                  <p className={styles.staffRole}>청년부 담당</p>
                  <div className={styles.staffDescription}>
                    <p>청년들의 신앙성장과 공동체 형성을 위해 헌신하며, 시대적 감각으로 청년사역을 이끌어가고 있습니다.</p>
                  </div>
                  <div className={styles.staffMinistry}>
                    <span>청년부</span>
                    <span>대학부</span>
                    <span>청년모임</span>
                  </div>
                </div>
              </div>
              <div className={styles.staffCard}>
                <div className={styles.staffImage}>
                  <div className={styles.placeholder}>👩‍💼</div>
                </div>
                <div className={styles.staffInfo}>
                  <h3>교육부 전도사</h3>
                  <p className={styles.staffRole}>교육부 담당</p>
                  <div className={styles.staffDescription}>
                    <p>어린이와 청소년들의 신앙교육을 담당하며, 창의적이고 재미있는 교육프로그램을 개발하고 있습니다.</p>
                  </div>
                  <div className={styles.staffMinistry}>
                    <span>어린이부</span>
                    <span>중고등부</span>
                    <span>주일학교</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.elderSection}>
            <h2>🤵 장로・권사</h2>
            <div className={styles.elderGrid}>
              <div className={styles.elderCard}>
                <h3>👨‍💼 장로</h3>
                <div className={styles.elderList}>
                  <div className={styles.elderItem}>
                    <strong>김영수 장로</strong>
                    <span>당회 회계</span>
                  </div>
                  <div className={styles.elderItem}>
                    <strong>이철민 장로</strong>
                    <span>당회 서기</span>
                  </div>
                  <div className={styles.elderItem}>
                    <strong>박광호 장로</strong>
                    <span>건축위원장</span>
                  </div>
                </div>
                <div className={styles.elderRole}>
                  <p><strong>역할:</strong> 당회 구성원으로서 교회의 영적 지도와 행정을 담당합니다.</p>
                </div>
              </div>
              
              <div className={styles.elderCard}>
                <h3>👩‍💼 권사</h3>
                <div className={styles.elderList}>
                  <div className={styles.elderItem}>
                    <strong>최명숙 권사</strong>
                    <span>여전도회 회장</span>
                  </div>
                  <div className={styles.elderItem}>
                    <strong>정은혜 권사</strong>
                    <span>교육부 부장</span>
                  </div>
                  <div className={styles.elderItem}>
                    <strong>김순자 권사</strong>
                    <span>구제위원장</span>
                  </div>
                </div>
                <div className={styles.elderRole}>
                  <p><strong>역할:</strong> 여성도들의 신앙지도와 교육, 구제사역을 담당합니다.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.organizationSection}>
            <h2>🏛️ 사역 조직도</h2>
            <div className={styles.orgChart}>
              <div className={styles.orgLevel}>
                <div className={styles.orgBox}>
                  <h4>담임목사</h4>
                  <p>교회 총괄</p>
                </div>
              </div>
              <div className={styles.orgLevel}>
                <div className={styles.orgBox}>
                  <h4>당회</h4>
                  <p>교회 운영</p>
                </div>
                <div className={styles.orgBox}>
                  <h4>협력목사</h4>
                  <p>교육 담당</p>
                </div>
              </div>
              <div className={styles.orgLevel}>
                <div className={styles.orgBox}>
                  <h4>장로회</h4>
                  <p>영적 지도</p>
                </div>
                <div className={styles.orgBox}>
                  <h4>권사회</h4>
                  <p>여성 사역</p>
                </div>
                <div className={styles.orgBox}>
                  <h4>전도사</h4>
                  <p>부서 담당</p>
                </div>
              </div>
              <div className={styles.orgLevel}>
                <div className={styles.orgBox}>
                  <h4>교육부</h4>
                  <p>교육 사역</p>
                </div>
                <div className={styles.orgBox}>
                  <h4>선교부</h4>
                  <p>선교 사역</p>
                </div>
                <div className={styles.orgBox}>
                  <h4>구제부</h4>
                  <p>구제 사역</p>
                </div>
                <div className={styles.orgBox}>
                  <h4>찬양부</h4>
                  <p>찬양 사역</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.serviceSection}>
            <h2>❤️ 섬김의 정신</h2>
            <div className={styles.serviceContent}>
              <div className={styles.serviceQuote}>
                <blockquote>
                  "인자가 온 것은 섬김을 받으려 함이 아니라 도리어 섬기려 하고 
                  자기 목숨을 많은 사람의 대속물로 주려 함이니라"
                  <cite>- 마태복음 20:28 -</cite>
                </blockquote>
              </div>
              <div className={styles.serviceValues}>
                <div className={styles.serviceValue}>
                  <h3>🙏 겸손한 섬김</h3>
                  <p>예수님의 본을 따라 겸손한 마음으로 성도들을 섬깁니다.</p>
                </div>
                <div className={styles.serviceValue}>
                  <h3>❤️ 사랑의 목회</h3>
                  <p>하나님의 사랑을 받아 사랑으로 성도들을 돌봅니다.</p>
                </div>
                <div className={styles.serviceValue}>
                  <h3>🎯 사명감</h3>
                  <p>하나님께서 맡겨주신 사명을 충실히 감당합니다.</p>
                </div>
                <div className={styles.serviceValue}>
                  <h3>🤝 동역</h3>
                  <p>성도들과 함께 하나님 나라 확장을 위해 동역합니다.</p>
                </div>
              </div>
            </div>
          </section>
          */}
        </div>
      </div>
    </>
  );
} 