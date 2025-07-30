import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './VolunteerActivities.module.css';

/**
 * 봉사활동 페이지 컴포넌트
 */
export default function VolunteerActivities() {
  return (
    <>
      <Helmet>
        <title>봉사활동 - 수정교회</title>
        <meta name="description" content="수정교회 봉사활동 프로그램에 대한 안내입니다." />
      </Helmet>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>봉사활동</h1>
          <p>섬김과 나눔을 통해 하나님의 사랑을 실천하는 봉사의 자리입니다.</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>봉사활동 소개</h2>
            <p>
              수정교회의 봉사활동은 "가장 아름다운 손은 주님의 손처럼 사랑으로 섬기는 손"이라는 
              교회의 핵심 메시지를 바탕으로 하나님의 사랑을 실천하는 소중한 사역입니다. 
              교회 내부뿐만 아니라 지역사회를 섬기며 복음의 빛을 전하는 일에 참여하실 수 있습니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2>교회 내 봉사활동</h2>
            <div className={styles.serviceGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <img src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29yc2hpcHxlbnwwfHwwfHx8MA%3D%3D" alt="찬양대" />
                </div>
                <h3>찬양대</h3>
                <p>하나님께 드리는 아름다운 찬양 사역</p>
                <ul>
                  <li>성인 찬양대</li>
                  <li>청년 찬양대</li>
                  <li>어린이 찬양대</li>
                </ul>
                <div className={styles.serviceTime}>
                  <strong>연습시간:</strong> 매주 주일 오전 9:00
                </div>
              </div>
              
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center" alt="교육부서" />
                </div>
                <h3>교육부서</h3>
                <p>다음 세대를 세우는 교육 사역</p>
                <ul>
                  <li>주일학교 교사</li>
                  <li>청년부 리더</li>
                  <li>성경학교 도우미</li>
                </ul>
                <div className={styles.serviceTime}>
                  <strong>활동시간:</strong> 주일 오전/오후 교육시간
                </div>
              </div>
              
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <img src="https://images.unsplash.com/photo-1457139621581-298d1801c832?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByYXllcnxlbnwwfHwwfHx8MA%3D%3D" alt="중보기도팀" />
                </div>
                <h3>중보기도팀</h3>
                <p>교회와 성도들을 위한 기도 사역</p>
                <ul>
                  <li>새벽기도회 기도</li>
                  <li>중보기도 모임</li>
                  <li>특별기도 사역</li>
                </ul>
                <div className={styles.serviceTime}>
                  <strong>모임시간:</strong> 매주 화요일 오전 10:00
                </div>
              </div>
              
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <img src="https://images.unsplash.com/photo-1497015289639-54688650d173?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWF8ZW58MHx8MHx8fDA%3D" alt="미디어팀" />
                </div>
                <h3>미디어팀</h3>
                <p>예배와 교육을 돕는 기술 사역</p>
                <ul>
                  <li>영상/음향 운영</li>
                  <li>온라인 방송 지원</li>
                  <li>홈페이지 관리</li>
                </ul>
                <div className={styles.serviceTime}>
                  <strong>활동시간:</strong> 예배시간 및 행사 시
                </div>
              </div>
              
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center" alt="교통봉사팀" />
                </div>
                <h3>교통봉사팀</h3>
                <p>안전하고 편리한 교통 안내</p>
                <ul>
                  <li>주차 안내</li>
                  <li>교통 정리</li>
                  <li>어르신 모시기</li>
                </ul>
                <div className={styles.serviceTime}>
                  <strong>활동시간:</strong> 주일 오전 8:30 - 오후 1:00
                </div>
              </div>
              
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=300&fit=crop&crop=center" alt="친교봉사팀" />
                </div>
                <h3>친교봉사팀</h3>
                <p>따뜻한 교제를 돕는 섬김</p>
                <ul>
                  <li>애찬 준비</li>
                  <li>다과 준비</li>
                  <li>행사 진행 지원</li>
                </ul>
                <div className={styles.serviceTime}>
                  <strong>활동시간:</strong> 예배 후 및 행사 시
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>지역사회 봉사활동</h2>
            <div className={styles.communityService}>
              <div className={styles.communityCard}>
                <div className={styles.communityIcon}>
                  <img src="https://plus.unsplash.com/premium_photo-1681996653334-9e16a2b598aa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bnVyc2luZyUyMGhvbWV8ZW58MHx8MHx8fDA%3D" alt="독거어르신 방문" />
                </div>
                <h3>독거어르신 방문</h3>
                <p>지역 독거어르신들을 정기적으로 방문하여 안부를 확인하고 생활에 필요한 도움을 제공합니다.</p>
                <div className={styles.serviceDetails}>
                  <span>📅 매월 둘째, 넷째 토요일</span>
                  <span>⏰ 오후 2:00 - 5:00</span>
                </div>
              </div>
              
              <div className={styles.communityCard}>
                <div className={styles.communityIcon}>
                  <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop&crop=center" alt="무료급식 봉사" />
                </div>
                <h3>무료급식 봉사</h3>
                <p>지역 복지센터와 연계하여 어려운 이웃들에게 따뜻한 식사를 제공하는 봉사활동입니다.</p>
                <div className={styles.serviceDetails}>
                  <span>📅 매주 목요일</span>
                  <span>⏰ 오전 10:00 - 오후 2:00</span>
                </div>
              </div>
              
              <div className={styles.communityCard}>
                <div className={styles.communityIcon}>
                  <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center" alt="지역아동센터 학습지도" />
                </div>
                <h3>지역아동센터 학습지도</h3>
                <p>지역 아동센터 아이들의 학습을 도와주고 함께 놀아주는 교육 봉사활동입니다.</p>
                <div className={styles.serviceDetails}>
                  <span>📅 매주 화, 목요일</span>
                  <span>⏰ 오후 3:00 - 6:00</span>
                </div>
              </div>
              
              <div className={styles.communityCard}>
                <div className={styles.communityIcon}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgyAC9nf7JOCmlAOr-jqb3e3n8z6EnSz-o6A&s" alt="해외 선교지 지원" />
                </div>
                <h3>해외 선교지 지원</h3>
                <p>탄자니아 등 해외 선교지를 위한 물품 후원과 기도 지원 활동입니다.</p>
                <div className={styles.serviceDetails}>
                  <span>📅 연 2회 (6월, 12월)</span>
                  <span>⏰ 특별 모금 및 후원</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>봉사활동 참여 방법</h2>
            <div className={styles.participationBox}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3>관심 분야 선택</h3>
                <p>자신의 은사와 관심에 맞는 봉사 분야를 선택합니다.</p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3>담당자 상담</h3>
                <p>해당 부서 담당자와 상담을 통해 구체적인 활동 내용을 확인합니다.</p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3>교육 및 훈련</h3>
                <p>필요한 경우 기본 교육과 훈련을 받습니다.</p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3>활동 시작</h3>
                <p>팀원들과 함께 봉사활동을 시작합니다.</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>문의 및 신청</h2>
            <div className={styles.contactBox}>
              <p>봉사활동에 참여를 원하시는 분은 언제든지 연락해 주세요.</p>
              
              <div className={styles.contactInfo}>
                <h3>신청 방법</h3>
                <ul>
                  <li>주일 예배 후 각 부서 담당자에게 직접 신청</li>
                  <li>교회 사무실 전화 신청</li>
                  <li>목사님이나 권사님께 상담 신청</li>
                  <li>온라인 신청서 작성</li>
                </ul>
                
                <h3>문의</h3>
                <p><strong>전화:</strong> 031-212-0091</p>
                <p><strong>이메일:</strong> suwoncrystalchurch@gmail.com</p>
                <p><strong>담당:</strong> 각 부서별 담당 권사</p>
              </div>
              
              <div className={styles.inspirationBox}>
                <h3>봉사의 의미</h3>
                <blockquote>
                  "이는 성도를 온전하게 하여 봉사의 일을 하게 하며 그리스도의 몸을 세우려 하심이라" (엡 4:12)
                  <br /><br />
                  <strong>섬김을 통해 우리는 그리스도의 사랑을 실천하고, 하나님 나라를 확장하는 일에 동참합니다.</strong>
                </blockquote>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 