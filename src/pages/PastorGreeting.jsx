import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './PastorGreeting.module.css';

export default function PastorGreeting() {
  return (
    <>
      <Helmet>
        <title>위임목사 인사말 - 수정교회</title>
        <meta name="description" content="수정침례교회 김광호 담임목사의 인사말입니다. 교회에 대한 비전과 목회철학을 전해드립니다." />
        <meta name="keywords" content="수정교회, 김광호목사, 담임목사, 인사말, 목회철학, 교회비전" />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1>위임목사 인사말</h1>
            <p>수정침례교회 김광호 담임목사</p>
          </div>
          <div className={styles.headerImage}>
            <img src="/church.png" alt="수정교회" />
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.greetingSection}>
            <div className={styles.pastorInfo}>
              <div className={styles.pastorPhoto}>
                <img src="/pastor.profile.png" alt="김광호 담임목사" />
              </div>
              <div className={styles.pastorDetails}>
                <h2>김광호 담임목사</h2>
                <div className={styles.pastorCredentials}>
                  <p>한국침례신학대학교 신학과 (B.A.)</p>
                  <p>한국침례신학대학원 신학과 (M.Div.)</p>
                </div>
                <div className={styles.pastorMinistry}>
                  <p>수정침례교회 담임목사 (1991년~현재)</p>
                </div>
              </div>
            </div>

            <div className={styles.greetingMessage}>
              <h3>목사님의 인사말</h3>
              <div className={styles.messageText}>
                <p>
                  수정침례교회 홈페이지를 방문해 주신 모든 분들께 주님의 은혜와 평강이 함께 하시기를 기원합니다.
                </p>
                
                <p>
                  저희 수정침례교회는 <strong>"하나님께 영광, 이웃에게 사랑"</strong>이라는 비전 아래 
                  하나님의 말씀 위에 굳게 서서 예수 그리스도의 복음을 전하는 교회입니다.
                </p>

                <p>
                  우리는 하나님의 말씀을 삶의 중심에 두고, 성령님의 인도하심을 따라 
                  성도 한 사람 한 사람이 그리스도의 제자로 성장해 나가는 것을 목표로 하고 있습니다. 
                  또한 지역 사회와 세계 선교를 통해 하나님 나라 확장에 힘쓰고 있습니다.
                </p>

                <p>
                  저희 교회는 다음과 같은 가치를 추구합니다:
                </p>

                <div className={styles.visionList}>
                  <div className={styles.visionItem}>
                    <h4>말씀 중심</h4>
                    <p>성경 말씀을 삶의 기준으로 삼아 매일의 삶 속에서 하나님의 뜻을 실천합니다.</p>
                  </div>
                  <div className={styles.visionItem}>
                    <h4>기도 생활</h4>
                    <p>개인과 공동체의 기도를 통해 하나님과의 깊은 교제를 나눕니다.</p>
                  </div>
                  <div className={styles.visionItem}>
                    <h4>💒 예배 중심</h4>
                    <p>하나님께 드리는 예배를 통해 영적 갈증을 해소하고 새 힘을 얻습니다.</p>
                  </div>
                  <div className={styles.visionItem}>
                    <h4>교제와 섬김</h4>
                    <p>성도간의 따뜻한 교제와 이웃을 향한 섬김으로 하나님의 사랑을 실천합니다.</p>
                  </div>
                </div>

                <p>
                  처음 방문하시는 분들께서는 부담 없이 저희와 함께 예배하시기 바랍니다. 
                  새가족 담당 교역자와 성도들이 친절하게 안내해 드릴 것입니다.
                </p>

                <p>
                  저희 수정침례교회 교우들과 함께 하나님의 크신 사랑을 경험하시고, 
                  믿음 안에서 참된 기쁨과 평안을 누리시기를 진심으로 소망합니다.
                </p>

                <p className={styles.signature}>
                  주님의 이름으로<br />
                  <strong>수정침례교회 담임목사 김광호</strong>
                </p>
              </div>
            </div>
          </section>

          <section className={styles.connectSection}>
            <h2>담임목사와의 상담</h2>
            <div className={styles.connectGrid}>
              <div className={styles.connectCard}>
                <div className={styles.connectIcon}>
                  <img src="https://plus.unsplash.com/premium_photo-1663127366913-8fa952ddc7af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJTg0JUIxJUVBJUIyJUJEfGVufDB8fDB8fHww" alt="성경 상담" />
                </div>
                <h3>목회 상담</h3>
                <p>
                  신앙적인 고민이나 인생의 방향에 대해 
                  성경적 관점에서 상담을 받으실 수 있습니다.
                </p>
                <div className={styles.connectInfo}>
                  <p><strong>상담 시간:</strong> 주중 오전 10시~오후 5시</p>
                  <p><strong>예약 방법:</strong> 교회 사무실 (031-212-0091)</p>
                </div>
              </div>
              <div className={styles.connectCard}>
                <div className={styles.connectIcon}>
                  <img src="https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJheWVyfGVufDB8fDB8fHww" alt="기도 요청" />
                </div>
                <h3>기도 요청</h3>
                <p>
                  어려운 상황이나 특별한 기도 제목이 있으시면 
                  언제든지 기도 요청을 해주시기 바랍니다.
                </p>
                <div className={styles.connectInfo}>
                  <p><strong>기도 요청:</strong> 24시간 언제든지</p>
                  <p><strong>연락처:</strong> suwoncrystalchurch@gmail.com</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 