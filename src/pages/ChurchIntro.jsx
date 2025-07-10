import styles from './ChurchIntro.module.css';

export default function ChurchIntro() {
  return (
    <div className={styles.introWrap}>
      <h1 className={styles.heading}>수정침례교회 소개</h1>
      <p className={styles.slogan}>“예수님의 사랑을 실천하는 교회”</p>
      <section className={styles.section}>
        <h2>
          🏠 <b>수정침례교회 소개</b>
        </h2>
        <ul>
          <li>
            <b>교회명</b>: 수정침례교회 (The Crystal Baptist Church)
          </li>
          <li>
            <b>표어</b>: “한 영혼을 주님께로”
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
          📖 <b>비전 및 사역 방향</b>
        </h2>
        <ul>
          <li>
            <b>예수님의 3대 사역</b>: “가르치고, 전파하고, 치유하고”를 실천
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
          🗓 <b>주요 프로그램 및 모임</b>
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
          📝 <b>교회의 핵심 메시지</b>
        </h2>
        <blockquote className={styles.quote}>
          “이는 성도를 온전하게 하여 봉사의 일을 하게 하며 그리스도의 몸을
          세우려 하심이라” (엡 4:12)
          <br />
          <br />
          <b>가장 아름다운 손은 주님의 손처럼 사랑으로 섬기는 손입니다.</b>
        </blockquote>
      </section>
      <div className={styles.footerMsg}></div>
    </div>
  );
}
