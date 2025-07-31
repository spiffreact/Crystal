import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './ChurchVisit.module.css';

/**
 * 교회 방문하기 페이지 컴포넌트
 */
export default function ChurchVisit() {
  return (
    <>
      <Helmet>
        <title>교회 방문하기 - 수정교회</title>
        <meta name="description" content="수정교회 방문 안내 - 위치, 예배시간, 주차안내 등 처음 오시는 분들을 위한 모든 정보를 안내합니다." />
      </Helmet>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>교회 방문하기</h1>
          <p>수정교회에 처음 오시는 분들을 위한 방문 안내입니다.</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>교회 위치 & 오시는 길</h2>
            <div className={styles.locationInfo}>
              <div className={styles.addressBox}>
                <h3>주소</h3>
                <p>경기 수원시 팔달구 팔달문로150번길 13 수정교회</p>
                <div className={styles.contactDetail}>
                  <span><strong>전화:</strong> 031-212-0091</span>
                  <span><strong>이메일:</strong> suwoncrystalchurch@gmail.com</span>
                </div>
              </div>
              
              <div className={styles.transportInfo}>
                <div className={styles.transportItem}>
                  <h4> 자가용으로 오시는 경우</h4>
                  <ul>
                    <li>월드 메르디앙 건너편 입니다.</li>
                    <li>동수원병원 ・ 월드컵경기장 방향에서 접근 가능합니다</li>
                    <li>교회 전용 주차장을 이용해 주세요</li>
                  </ul>
                </div>
                
                <div className={styles.transportItem}>
                  <h4> 대중교통으로 오시는 경우</h4>
                  <ul>
                    <li>지하철 1호선 수원역에서 버스 이용</li>
                    <li>우만동우체국앞 정류장 하차 (도보 약 2-3분)</li>
                    <li>우만동사거리 정류장 하차 (도보 약 5분)</li>
                    <li>주요 노선: 51, 13, 7-2, 66, 27, 37, 39번 등</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>예배 시간 안내</h2>
            <div className={styles.serviceSchedule}>
              <div className={styles.serviceCard}>
                <h3>주일 예배</h3>
                <div className={styles.serviceDetails}>
                  <div className={styles.serviceTime}>
                    <span className={styles.timeLabel}>오전 예배</span>
                    <span className={styles.time}>11:00 AM</span>
                  </div>
                  <p>주일 오전 11시, 본당에서 드리는 주요 예배입니다.</p>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <h3>주중 예배</h3>
                <div className={styles.serviceDetails}>
                  <div className={styles.weekdayServices}>
                    <div className={styles.serviceItem}>
                      <span>수요예배</span>
                      <span>수요일 7:30 PM</span>
                    </div>
                    <div className={styles.serviceItem}>
                      <span>금요기도회</span>
                      <span>금요일 8:30 PM</span>
                    </div>
                    <div className={styles.serviceItem}>
                      <span>새벽기도회</span>
                      <span>매일 5:30 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>🅿️ 주차 안내</h2>
            <div className={styles.parkingInfo}>
              <div className={styles.parkingCard}>
                <h3>교회 주차장</h3>
                <ul>
                  <li>교회 건물 지하 1층 주차장 이용</li>
                  <li>주일 오전에는 교통 안내팀이 도와드립니다</li>
                  <li>주차 공간이 부족할 경우 인근 공영주차장 이용</li>
                  <li>장애인 주차구역 별도 준비되어 있습니다</li>
                </ul>
              </div>
              
              <div className={styles.parkingTips}>
                <h4>주차 팁</h4>
                <p>주일 오전 10시 30분 이전에 오시면 여유롭게 주차하실 수 있습니다.</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>처음 오시는 분들을 위한 안내</h2>
            <div className={styles.firstVisitGuide}>
              <div className={styles.guideCard}>
                                  <div className={styles.guideIcon}></div>
                <h3>환영 데스크</h3>
                <p>
                  1층 카페 에서 처음 오신 분들을 
                  안내해 드립니다. 궁금한 것이 있으시면 언제든 말씀해 주세요.
                </p>
              </div>

              <div className={styles.guideCard}>
                                  <div className={styles.guideIcon}></div>
                <h3>예배 순서</h3>
                <p>
                  예배 순서지를 받으시면 찬송가 번호와 성경 구절이 
                  안내되어 있습니다. 찬송가와 성경은 각 좌석에 비치되어 있습니다.
                </p>
              </div>

              <div className={styles.guideCard}>
                <div className={styles.guideIcon}>🎁</div>
                <h3>새가족 선물</h3>
                <p>
                  처음 오신 분들에게는 소정의 선물을 준비해 드립니다. 
                  예배 후 새가족 등록을 통해 받으실 수 있습니다.
                </p>
              </div>

              <div className={styles.guideCard}>
                <div className={styles.guideIcon}>☕</div>
                <h3>애찬(식사)</h3>
                <p>
                  주일 예배 후에는 함께 식사하는 시간이 있습니다. 
                  처음 오신 분들도 함께 교제할 수 있습니다.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2> 복장 안내</h2>
            <div className={styles.dressCode}>
              <div className={styles.dressInfo}>
                <h3>편안한 복장으로 오세요</h3>
                <p>
                  수정교회는 복장에 대한 특별한 규정이 없습니다. 
                  평상시 입으시는 편안한 옷차림으로 오시면 됩니다.
                </p>
                <ul>
                  <li>정장이 아니어도 괜찮습니다</li>
                  <li>청바지, 티셔츠도 환영입니다</li>
                  <li>계절에 맞는 적절한 복장이면 충분합니다</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>어린이 & 영유아 안내</h2>
            <div className={styles.childrenInfo}>
              <div className={styles.childrenCard}>
                <h3>영아부 (0-3세)</h3>
                <p>별도의 영아부실에서 안전하게 돌봄을 받을 수 있습니다.</p>
                <ul>
                  <li>전문 교사가 돌봄</li>
                  <li>기저귀, 젖병 등 준비되어 있음</li>
                  <li>부모님 호출 시스템 운영</li>
                </ul>
              </div>

              <div className={styles.childrenCard}>
                <h3>유아부 & 유치부 (4-7세)</h3>
                <p>연령별 맞춤 프로그램으로 예배를 드립니다.</p>
                <ul>
                  <li>찬양, 율동, 성경 이야기</li>
                  <li>만들기, 그리기 활동</li>
                  <li>간식 제공</li>
                </ul>
              </div>

              <div className={styles.childrenCard}>
                <h3>어린이부 (초등학생)</h3>
                <p>어린이 눈높이에 맞춘 예배와 활동을 진행합니다.</p>
                <ul>
                  <li>어린이 설교</li>
                  <li>성경 퀴즈</li>
                  <li>또래 친구들과의 교제</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>자주 묻는 질문</h2>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <h4>Q. 처음 방문할 때 미리 연락해야 하나요?</h4>
                <p>A. 미리 연락하지 않으셔도 됩니다. 언제든 편하게 오시면 환영입니다.</p>
              </div>

              <div className={styles.faqItem}>
                <h4>Q. 헌금을 꼭 해야 하나요?</h4>
                <p>A. 헌금은 강요하지 않습니다. 마음이 있으실 때 자유롭게 하시면 됩니다.</p>
              </div>

              <div className={styles.faqItem}>
                <h4>Q. 예배 중간에 들어가도 되나요?</h4>
                <p>A. 네, 언제든 들어오셔도 됩니다. 입구에서 안내해 드리겠습니다.</p>
              </div>

              <div className={styles.faqItem}>
                <h4>Q. 주일 외에 다른 날에도 방문할 수 있나요?</h4>
                <p>A. 네, 사무실 운영시간(월-금 9:00-18:00)에 언제든 방문 가능합니다.</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>문의 및 연락처</h2>
            <div className={styles.contactSection}>
              <div className={styles.contactCard}>
                <h3>교회 사무실</h3>
                <div className={styles.contactDetails}>
                  <p><strong>전화:</strong> 031-212-0091</p>
                  <p><strong>이메일:</strong> suwoncrystalchurch@gmail.com</p>
                  <p><strong>운영시간:</strong> 월-금 09:00-18:00</p>
                </div>
              </div>

              <div className={styles.contactCard}>
                <h3>새가족 담당</h3>
                <div className={styles.contactDetails}>
                  <p>새가족 관련 문의는 예배 후 새가족 환영실에서 받고 있습니다.</p>
                  <p>또는 교회 사무실로 연락 주시면 담당자가 안내해 드리겠습니다.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 