import styles from './ChurchIntro.module.css';

export default function ChurchIntro() {
  return (
    <div className={styles.introWrap}>
      <h1 className={styles.heading}>수정침례교회 소개</h1>
      <p className={styles.slogan}>"예수님의 사랑을 실천하는 교회"</p>
      <section className={styles.section}>
        <h2>
          <b>수정침례교회 소개</b>
        </h2>
        <ul>
          <li>
            <b>교회명</b>: 수정침례교회 (The Crystal Baptist Church)
          </li>
          <li>
            <b>표어</b>: "한 영혼을 주님께로"
          </li>
          <li>
            <b>창립일</b>: 1991년 11월 10일
          </li>
          <li>
            <b>담임목사</b>: 김광호 목사
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>
          <b>비전 및 사역 방향</b>
        </h2>
        <ul>
          <li>
            <b>예수님의 3대 사역</b>: "가르치고, 전파하고, 치유하고"를 실천
          </li>
          <li>
            <b>사역 중심</b>: <span className={styles.em}>말씀 중심</span>,{' '}
            <span className={styles.em}>사랑 실천</span>,{' '}
            <span className={styles.em}>복음 전도</span>,{' '}
            <span className={styles.em}>예배 회복</span>,{' '}
            <span className={styles.em}>기도 운동</span>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>
          <b>주요 프로그램 및 모임</b>
        </h2>
        <ul>
          <li>
            <b>정기 예배</b>: 주일 예배, 수요예배, 금요기도회, 새벽기도회
          </li>
          <li>
            <b>청년부</b>: 주일 오후 1시
          </li>
          <li>중보기도, 선교 사역, 찬양대 사역 등 다양한 부서 운영</li>
          <li>
            특별 행사: 신년특별기도, 여전도회 헌신예배, 어린이 주일,
            여름성경학교 등
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>
          <b>교회의 핵심 메시지</b>
        </h2>
        <blockquote className={styles.quote}>
          "이는 성도를 온전하게 하여 봉사의 일을 하게 하며 그리스도의 몸을
          세우려 하심이라" (엡 4:12)
          <br />
          <br />
          <b>가장 아름다운 손은 주님의 손처럼 사랑으로 섬기는 손입니다.</b>
        </blockquote>
      </section>

      <section className={styles.section}>
        <h2>
          <b>오시는 길</b>
        </h2>
        <div style={{ marginBottom: '1rem' }}>
          <p><strong>주소:</strong> 16240 경기도 수원시 팔달구 팔달문로150번길 13</p>
          <p><strong>전화:</strong> 031-212-0091</p>
          <p><strong>교통:</strong></p>
          <ul>
            <li><strong>지하철:</strong> 1호선 수원역 1번 출구에서 도보 10분</li>
            <li><strong>버스:</strong> 수원역 정류장 하차 후 도보 10분</li>
            <li><strong>자가용:</strong> 네비게이션에 "수정침례교회" 검색</li>
          </ul>
        </div>
        {/* 네이버 지도 */}
        <div style={{
          width: '100%',
          height: '400px',
          marginBottom: '1rem',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <iframe
            src="https://naver.me/xBwxuk9z"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="수정침례교회 위치"
          />
        </div>
        <div style={{
          background: '#f8f9fa',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#1976d2' }}>🚗 주차 안내</h3>
          <p style={{ margin: '0.5rem 0' }}>교회 내부 주차장을 이용하실 수 있습니다.</p>
          <p style={{ margin: '0.5rem 0' }}>주차 공간이 부족할 경우 인근 공영주차장을 이용해 주세요.</p>
        </div>
      </section>
      <div className={styles.footerMsg}></div>
    </div>
  );
}
