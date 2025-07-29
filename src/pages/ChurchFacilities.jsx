import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './ChurchFacilities.module.css';

/**
 * 교회 시설 페이지 컴포넌트
 * 본당, 교육관, 주차장 등 교회 시설을 소개
 */
export default function ChurchFacilities() {
  return (
    <>
      <Helmet>
        <title>교회 시설 - 수정교회</title>
        <meta name="description" content="수정침례교회의 본당, 교육관, 주차장 등 교회 시설을 안내합니다. 편리하고 안전한 교회 시설입니다." />
        <meta name="keywords" content="수정교회, 본당, 교육관, 주차장, 교회시설, 예배실" />
      </Helmet>

      <div className={styles.container}>
        {/* 헤더 섹션 */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1>교회 시설</h1>
            <p>하나님께 영광 돌리는 거룩한 공간</p>
          </div>
          <div className={styles.headerImage}>
            <img src="/church.png" alt="수정교회 건물" />
          </div>
        </div>

        <div className={styles.content}>
          {/* 본당 섹션 */}
          <section className={styles.sanctuarySection}>
            <h2>⛪ 본당</h2>
            <div className={styles.facilityCard}>
              <div className={styles.facilityImage}>
                <img src="/church.png" alt="본당 내부" />
              </div>
              <div className={styles.facilityInfo}>
                <h3>2층 본당 (예배실)</h3>
                <div className={styles.facilityDetails}>
                  <div className={styles.detailGrid}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>👥</span>
                      <div>
                        <h4>수용 인원</h4>
                        <p>약 200석</p>
                      </div>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>🎵</span>
                      <div>
                        <h4>음향 시설</h4>
                        <p>최신 디지털 음향 시스템</p>
                      </div>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>📺</span>
                      <div>
                        <h4>영상 시설</h4>
                        <p>대형 LED 스크린, 실시간 방송</p>
                      </div>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>❄️</span>
                      <div>
                        <h4>냉난방</h4>
                        <p>중앙 냉난방 시스템</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.facilityDescription}>
                  <h4>시설 특징</h4>
                  <ul>
                    <li>넓고 밝은 예배 공간으로 은혜로운 분위기 조성</li>
                    <li>휠체어 접근 가능한 무장애 설계</li>
                    <li>최신 음향・영상 시설로 생생한 예배 경험</li>
                    <li>쾌적한 환경을 위한 공기 순환 시스템</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 층별 시설 개요 */}
          <section className={styles.floorGuideSection}>
            <h2>🏢 층별 시설 개요</h2>
            <div className={styles.floorGuide}>
              <div className={styles.floorCard}>
                <h3>🔺 2층</h3>
                <div className={styles.floorItems}>
                  <span>본당 (예배실)</span>
                  <span>소그룹실</span>
                  <span>찬양 연습실</span>
                </div>
              </div>
              <div className={styles.floorCard}>
                <h3>🟦 1층</h3>
                <div className={styles.floorItems}>
                  <span>수정카페</span>
                  <span>사무실</span>
                  <span>로비</span>
                </div>
              </div>
              <div className={styles.floorCard}>
                <h3>🔻 지하1층</h3>
                <div className={styles.floorItems}>
                  <span>소예배실</span>
                  <span>영유아실</span>
                  <span>교제실</span>
                </div>
              </div>
            </div>
          </section>

          {/* 상세 시설 안내 섹션 */}
          <section className={styles.educationSection}>
            <h2>🏫 상세 시설 안내</h2>
            <div className={styles.facilityGrid}>
              <div className={styles.roomCard}>
                <div className={styles.roomHeader}>
                  <h3>📚 소그룹실 (2층)</h3>
                  <span className={styles.roomCapacity}>15-20명</span>
                </div>
                <div className={styles.roomFeatures}>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>💺</span>
                    <span>편안한 좌석</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>📱</span>
                    <span>프로젝터 설치</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>📖</span>
                    <span>성경공부 최적화</span>
                  </div>
                </div>
                <div className={styles.roomUsage}>
                  <strong>사용 용도:</strong>
                  <p>소그룹 성경공부, 제자훈련, 세미나</p>
                </div>
              </div>

              <div className={styles.roomCard}>
                <div className={styles.roomHeader}>
                  <h3>☕ 수정카페 (1층)</h3>
                  <span className={styles.roomCapacity}>20-30명</span>
                </div>
                <div className={styles.roomFeatures}>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>☕</span>
                    <span>커피・음료 제공</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>🍰</span>
                    <span>간단한 간식</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>💬</span>
                    <span>교제 공간</span>
                  </div>
                </div>
                <div className={styles.roomUsage}>
                  <strong>사용 용도:</strong>
                  <p>교제, 상담, 휴식 공간</p>
                </div>
              </div>

              <div className={styles.roomCard}>
                <div className={styles.roomHeader}>
                  <h3>🏢 사무실 (1층)</h3>
                  <span className={styles.roomCapacity}>5-8명</span>
                </div>
                <div className={styles.roomFeatures}>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>💻</span>
                    <span>컴퓨터・프린터</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>📞</span>
                    <span>전화・팩스</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>📋</span>
                    <span>교회 업무</span>
                  </div>
                </div>
                <div className={styles.roomUsage}>
                  <strong>사용 용도:</strong>
                  <p>교회 행정, 상담, 업무</p>
                </div>
              </div>

              <div className={styles.roomCard}>
                <div className={styles.roomHeader}>
                  <h3>⛪ 소예배실 (지하1층)</h3>
                  <span className={styles.roomCapacity}>50-60명</span>
                </div>
                <div className={styles.roomFeatures}>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>🎤</span>
                    <span>음향 시설</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>🎹</span>
                    <span>피아노</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>💒</span>
                    <span>예배 최적화</span>
                  </div>
                </div>
                <div className={styles.roomUsage}>
                  <strong>사용 용도:</strong>
                  <p>소규모 예배, 특별 집회</p>
                </div>
              </div>

              <div className={styles.roomCard}>
                <div className={styles.roomHeader}>
                  <h3>👶 영유아실 (지하1층)</h3>
                  <span className={styles.roomCapacity}>10-15명</span>
                </div>
                <div className={styles.roomFeatures}>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>🧸</span>
                    <span>안전한 놀이기구</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>📺</span>
                    <span>예배 실시간 시청</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>🧽</span>
                    <span>위생적인 환경</span>
                  </div>
                </div>
                <div className={styles.roomUsage}>
                  <strong>사용 용도:</strong>
                  <p>영유아 돌봄, 어린이 예배</p>
                </div>
              </div>

              <div className={styles.roomCard}>
                <div className={styles.roomHeader}>
                  <h3>🎵 찬양 연습실 (2층)</h3>
                  <span className={styles.roomCapacity}>10-12명</span>
                </div>
                <div className={styles.roomFeatures}>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>🎹</span>
                    <span>피아노・키보드</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>🎤</span>
                    <span>음향 장비</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>🔇</span>
                    <span>방음 시설</span>
                  </div>
                </div>
                <div className={styles.roomUsage}>
                  <strong>사용 용도:</strong>
                  <p>찬양팀 연습, 악기 연주</p>
                </div>
              </div>

              <div className={styles.roomCard}>
                <div className={styles.roomHeader}>
                  <h3>☕ 교제실 (지하1층)</h3>
                  <span className={styles.roomCapacity}>30-40명</span>
                </div>
                <div className={styles.roomFeatures}>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>🍽️</span>
                    <span>주방 시설</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>🪑</span>
                    <span>테이블・의자</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>❄️</span>
                    <span>냉장고・정수기</span>
                  </div>
                </div>
                <div className={styles.roomUsage}>
                  <strong>사용 용도:</strong>
                  <p>교제 모임, 식사 대접, 회의</p>
                </div>
              </div>
            </div>
          </section>

          {/* 주차장 섹션 */}
          <section className={styles.parkingSection}>
            <h2>🚗 주차장</h2>
            <div className={styles.parkingContent}>
              <div className={styles.parkingInfo}>
                <h3>교회 전용 주차장</h3>
                <div className={styles.parkingDetails}>
                  <div className={styles.parkingDetail}>
                    <span className={styles.parkingIcon}>🅿️</span>
                    <div>
                      <h4>주차 공간</h4>
                      <p>총 25대 주차 가능</p>
                    </div>
                  </div>
                  <div className={styles.parkingDetail}>
                    <span className={styles.parkingIcon}>🆓</span>
                    <div>
                      <h4>주차 요금</h4>
                      <p>무료 주차 (교회 이용 시)</p>
                    </div>
                  </div>
                  <div className={styles.parkingDetail}>
                    <span className={styles.parkingIcon}>♿</span>
                    <div>
                      <h4>장애인 주차</h4>
                      <p>전용 주차구역 2대</p>
                    </div>
                  </div>
                  <div className={styles.parkingDetail}>
                    <span className={styles.parkingIcon}>💡</span>
                    <div>
                      <h4>야간 조명</h4>
                      <p>안전한 야간 주차</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.parkingMap}>
                <div className={styles.mapPlaceholder}>
                  <h4>🗺️ 주차장 위치도</h4>
                  <div className={styles.mapContent}>
                    <div className={styles.mapBuilding}>
                      <span>🏛️ 교회 본관</span>
                    </div>
                    <div className={styles.mapParking}>
                      <span>🅿️ 주차장</span>
                      <small>25대</small>
                    </div>
                    <div className={styles.mapEntrance}>
                      <span>🚪 정문</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.parkingGuide}>
              <h4>🚗 주차 안내</h4>
              <div className={styles.guideGrid}>
                <div className={styles.guideItem}>
                  <h5>예배 시간 주차</h5>
                  <p>주일 오전 10:30부터 주차장 개방</p>
                  <p>예배 시작 30분 전 도착 권장</p>
                </div>
                <div className={styles.guideItem}>
                  <h5>만차 시 대안</h5>
                  <p>인근 공영주차장 이용</p>
                  <p>도보 3분 거리</p>
                </div>
                <div className={styles.guideItem}>
                  <h5>주차 에티켓</h5>
                  <p>다른 차량 진출입 방해 금지</p>
                  <p>정해진 구역 내 주차</p>
                </div>
              </div>
            </div>
          </section>

          {/* 편의시설 섹션 */}
          <section className={styles.amenitiesSection}>
            <h2>🏢 편의시설</h2>
            <div className={styles.amenitiesGrid}>
              <div className={styles.amenityCard}>
                <div className={styles.amenityIcon}>🚻</div>
                <h3>화장실</h3>
                <p>지하1층, 1층, 2층 각각 남녀 구분</p>
                <p>장애인 전용 화장실 완비</p>
              </div>
              <div className={styles.amenityCard}>
                <div className={styles.amenityIcon}>💧</div>
                <h3>정수기</h3>
                <p>지하1층, 1층 로비, 2층 복도</p>
                <p>냉온수 정수기 설치</p>
              </div>
              <div className={styles.amenityCard}>
                <div className={styles.amenityIcon}>🏥</div>
                <h3>응급실</h3>
                <p>간단한 응급처치 가능</p>
                <p>구급약품 상시 비치</p>
              </div>
              <div className={styles.amenityCard}>
                <div className={styles.amenityIcon}>📚</div>
                <h3>도서코너</h3>
                <p>기독교 서적, 성경</p>
                <p>자유롭게 열람 가능</p>
              </div>
              <div className={styles.amenityCard}>
                <div className={styles.amenityIcon}>🛜</div>
                <h3>WiFi</h3>
                <p>교회 전체 무료 WiFi</p>
                <p>비밀번호: crystal2024</p>
              </div>
              <div className={styles.amenityCard}>
                <div className={styles.amenityIcon}>🧹</div>
                <h3>청소용품</h3>
                <p>지하1층, 1층, 2층별 청소용품 비치</p>
                <p>환경 정리에 협조</p>
              </div>
            </div>
          </section>

          {/* 시설 이용 안내 섹션 */}
          <section className={styles.usageSection}>
            <h2>📋 시설 이용 안내</h2>
            <div className={styles.usageContent}>
              <div className={styles.usageRules}>
                <h3>이용 수칙</h3>
                <div className={styles.rulesList}>
                  <div className={styles.rule}>
                    <span className={styles.ruleNumber}>1</span>
                    <div>
                      <h4>예약 필수</h4>
                      <p>소그룹실, 교제실 사용 시 사전 예약 필요</p>
                    </div>
                  </div>
                  <div className={styles.rule}>
                    <span className={styles.ruleNumber}>2</span>
                    <div>
                      <h4>정리정돈</h4>
                      <p>사용 후 원상복구 및 청소</p>
                    </div>
                  </div>
                  <div className={styles.rule}>
                    <span className={styles.ruleNumber}>3</span>
                    <div>
                      <h4>금지사항</h4>
                      <p>흡연, 음주, 큰 소음 금지</p>
                    </div>
                  </div>
                  <div className={styles.rule}>
                    <span className={styles.ruleNumber}>4</span>
                    <div>
                      <h4>안전수칙</h4>
                      <p>비상구 위치 확인, 화재 예방</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.reservationInfo}>
                <h3>예약 문의</h3>
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>📞</span>
                    <div>
                      <h4>전화 예약</h4>
                      <p>031-212-0091</p>
                      <small>월~금 오전 9시~오후 6시</small>
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>✉️</span>
                    <div>
                      <h4>이메일 예약</h4>
                      <p>suwoncrystalchurch@gmail.com</p>
                      <small>24시간 접수 가능</small>
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