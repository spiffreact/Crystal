import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './MinistryParticipation.module.css';

/**
 * 사역 참여하기 페이지 컴포넌트
 */
export default function MinistryParticipation() {
  const [selectedMinistry, setSelectedMinistry] = useState(null);

  const ministries = [
    {
      id: 'worship',
      title: '예배 사역팀',
      icon: '🎵',
      description: '찬양과 경배로 하나님께 영광을 돌리는 사역',
      roles: ['찬양팀', '악기팀', '음향팀', '영상팀'],
      requirements: '신앙 경력 1년 이상, 정기 연습 참여 가능',
      time: '매주 주일 오전 8시, 목요일 저녁 8시 연습',
      contact: '예배팀 담당자 (010-1234-5678)'
    },
    {
      id: 'education',
      title: '교육 사역팀',
      icon: '📚',
      description: '다음 세대를 위한 신앙 교육과 양육 사역',
      roles: ['주일학교 교사', '유치부 교사', '청소년부 교사', '성인부 교사'],
      requirements: '교육에 대한 열정, 아이들을 사랑하는 마음',
      time: '매주 주일 오전 9시~12시, 월 1회 교사 모임',
      contact: '교육팀 담당자 (010-2345-6789)'
    },
    {
      id: 'service',
      title: '봉사 사역팀',
      icon: '🤝',
      description: '교회와 지역사회를 섬기는 실천적 사역',
      roles: ['안내팀', '주차팀', '청소팀', '카페 봉사팀'],
      requirements: '섬김의 마음, 시간 투자 가능',
      time: '매주 주일 및 필요시 (사역별 상이)',
      contact: '봉사팀 담당자 (010-3456-7890)'
    },
    {
      id: 'mission',
      title: '선교 사역팀',
      icon: '🌍',
      description: '복음을 전하고 생명을 구원하는 선교 사역',
      roles: ['국내선교팀', '해외선교팀', '선교 후원팀', '기도 후원팀'],
      requirements: '선교에 대한 비전, 복음 전파의 열정',
      time: '월 1회 모임, 선교 프로젝트별 참여',
      contact: '선교팀 담당자 (010-4567-8901)'
    },
    {
      id: 'care',
      title: '돌봄 사역팀',
      icon: '💝',
      description: '교우들의 필요를 채우고 사랑으로 돌보는 사역',
      roles: ['새가족 돌봄팀', '병원 심방팀', '경조사 도움팀', '기도팀'],
      requirements: '따뜻한 마음, 남을 돌보는 마음',
      time: '필요시 연락 및 참여',
      contact: '돌봄팀 담당자 (010-5678-9012)'
    },
    {
      id: 'tech',
      title: '기술 사역팀',
      icon: '💻',
      description: '교회의 IT 인프라와 디지털 사역을 담당',
      roles: ['웹사이트 관리', '온라인 예배 지원', 'SNS 관리', 'IT 지원'],
      requirements: '기본적인 컴퓨터 활용 능력',
      time: '월 2회 모임, 필요시 지원',
      contact: '기술팀 담당자 (010-6789-0123)'
    }
  ];

  return (
    <>
      <Helmet>
        <title>사역 참여하기 - 수정교회</title>
        <meta name="description" content="수정침례교회의 다양한 사역에 참여하여 하나님 나라를 위해 함께 섬겨보세요. 예배, 교육, 봉사, 선교 등 다양한 사역이 기다립니다." />
        <meta name="keywords" content="수정교회, 사역참여, 봉사, 예배팀, 교육팀, 선교, 교회사역" />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1>사역 참여하기</h1>
            <p>하나님 나라를 위해 함께 섬기는 기쁨을 누려보세요</p>
            <div className={styles.headerStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>6+</span>
                <span className={styles.statLabel}>사역 분야</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>활동 중인 사역자</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>하나님의 사랑</span>
              </div>
            </div>
          </div>
          <div className={styles.headerImage}>
            <img src="/church.png" alt="사역 참여" />
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.introSection}>
            <h2>✨ 사역이란 무엇인가요?</h2>
            <div className={styles.introContent}>
              <div className={styles.introText}>
                <p>
                  사역은 단순한 봉사가 아닌, <strong>하나님께서 주신 은사를 통해 교회와 이웃을 섬기는 거룩한 부르심</strong>입니다.
                  각자의 달란트와 시간을 드려 하나님 나라 확장에 동참하는 기쁨의 여정입니다.
                </p>
                <div className={styles.bibleVerse}>
                  <p>"각각 은사를 받은 대로 하나님의 여러 가지 은혜를 맡은 선한 청지기 같이 서로 봉사하라"</p>
                  <span>- 베드로전서 4:10 -</span>
                </div>
              </div>
              <div className={styles.introBenefits}>
                <h3>🎁 사역 참여의 유익</h3>
                <ul>
                  <li>💪 영적 성장과 신앙 성숙</li>
                  <li>🤝 교우들과의 깊은 교제</li>
                  <li>🎯 삶의 목적과 방향성 발견</li>
                  <li>😊 섬김을 통한 기쁨과 보람</li>
                  <li>🌱 은사 개발과 실력 향상</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.ministriesSection}>
            <h2>🏛️ 사역 분야 소개</h2>
            <div className={styles.ministriesGrid}>
              {ministries.map((ministry) => (
                <div 
                  key={ministry.id} 
                  className={`${styles.ministryCard} ${selectedMinistry === ministry.id ? styles.selected : ''}`}
                  onClick={() => setSelectedMinistry(selectedMinistry === ministry.id ? null : ministry.id)}
                >
                  <div className={styles.ministryHeader}>
                    <span className={styles.ministryIcon}>{ministry.icon}</span>
                    <h3>{ministry.title}</h3>
                  </div>
                  <p className={styles.ministryDescription}>{ministry.description}</p>
                  
                  {selectedMinistry === ministry.id && (
                    <div className={styles.ministryDetails}>
                      <div className={styles.detailItem}>
                        <h4>👥 세부 역할</h4>
                        <div className={styles.rolesList}>
                          {ministry.roles.map((role, index) => (
                            <span key={index} className={styles.roleTag}>{role}</span>
                          ))}
                        </div>
                      </div>
                      <div className={styles.detailItem}>
                        <h4>📋 참여 조건</h4>
                        <p>{ministry.requirements}</p>
                      </div>
                      <div className={styles.detailItem}>
                        <h4>⏰ 활동 시간</h4>
                        <p>{ministry.time}</p>
                      </div>
                      <div className={styles.detailItem}>
                        <h4>📞 문의처</h4>
                        <p>{ministry.contact}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className={styles.ministryAction}>
                    <span className={styles.actionText}>
                      {selectedMinistry === ministry.id ? '접기' : '자세히 보기'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.applicationSection}>
            <h2>📝 사역 참여 신청 방법</h2>
            <div className={styles.applicationSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>🤔 기도하며 선택</h3>
                  <p>하나님께서 주신 은사와 관심 분야를 놓고 기도하며 적합한 사역을 선택합니다.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>📞 담당자 연락</h3>
                  <p>원하는 사역의 담당자에게 연락하여 자세한 정보를 문의하고 면담 일정을 잡습니다.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>📋 신청서 작성</h3>
                  <p>사역 참여 신청서를 작성하고 간단한 면담을 통해 적성과 가능 시간을 확인합니다.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>🎓 교육 및 훈련</h3>
                  <p>사역에 필요한 기본 교육과 훈련을 받고 기존 사역자들과 팀워크를 다집니다.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>5</div>
                <div className={styles.stepContent}>
                  <h3>🚀 사역 시작</h3>
                  <p>본격적으로 사역에 참여하여 하나님 나라 확장을 위해 함께 섬깁니다!</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.supportSection}>
            <h2>🤗 사역자를 위한 지원</h2>
            <div className={styles.supportGrid}>
              <div className={styles.supportCard}>
                <div className={styles.supportIcon}>📚</div>
                <h3>교육 프로그램</h3>
                <p>정기적인 사역자 교육과 워크숍을 통해 전문성을 키워갑니다.</p>
                <ul>
                  <li>월 1회 사역자 모임</li>
                  <li>분기별 워크숍</li>
                  <li>연 1회 사역자 수련회</li>
                </ul>
              </div>
              <div className={styles.supportCard}>
                <div className={styles.supportIcon}>💪</div>
                <h3>멘토링 시스템</h3>
                <p>경험 있는 선배 사역자가 새로운 사역자를 도와 함께 성장합니다.</p>
                <ul>
                  <li>1:1 멘토 배정</li>
                  <li>정기적인 피드백</li>
                  <li>어려움 상담 및 조언</li>
                </ul>
              </div>
              <div className={styles.supportCard}>
                <div className={styles.supportIcon}>🎁</div>
                <h3>보상 및 인정</h3>
                <p>사역자들의 헌신을 인정하고 격려하는 다양한 프로그램이 있습니다.</p>
                <ul>
                  <li>사역자 감사 예배</li>
                  <li>우수 사역자 표창</li>
                  <li>사역자 가족 초청 행사</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.faqSection}>
            <h2>❓ 자주 묻는 질문</h2>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <h3>Q. 새신자도 사역에 참여할 수 있나요?</h3>
                <p>A. 네! 대부분의 사역은 새신자도 참여 가능합니다. 다만 일부 사역은 신앙 경력이나 교육 이수가 필요할 수 있어 담당자와 상의해보세요.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Q. 여러 사역에 동시 참여가 가능한가요?</h3>
                <p>A. 가능하지만, 각 사역에 충실히 참여할 수 있는 범위 내에서 권장합니다. 담당자와 상의하여 적절한 수준을 조정하세요.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Q. 사역 참여 후 그만둘 수 있나요?</h3>
                <p>A. 개인 사정이나 상황 변화로 인해 사역을 중단해야 할 경우, 담당자와 상의하여 원만히 정리할 수 있습니다.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Q. 특별한 기술이나 경험이 없어도 되나요?</h3>
                <p>A. 대부분의 사역은 경험보다 섬기려는 마음이 더 중요합니다. 필요한 기술은 교육을 통해 배울 수 있습니다.</p>
              </div>
            </div>
          </section>

          <section className={styles.contactSection}>
            <h2>📞 사역 참여 문의</h2>
            <div className={styles.contactContent}>
              <div className={styles.contactInfo}>
                <h3>🏛️ 교회 사무실</h3>
                <p><strong>전화:</strong> 031-212-0091</p>
                <p><strong>이메일:</strong> suwoncrystalchurch@gmail.com</p>
                <p><strong>운영시간:</strong> 월~금 오전 9시~오후 6시</p>
              </div>
              <div className={styles.contactActions}>
                <Link to="/welcome/register" className={styles.actionButton}>
                  ✍️ 새가족 등록하기
                </Link>
                <Link to="/welcome/visit" className={styles.actionButton}>
                  🏛️ 교회 방문 안내
                </Link>
                <Link to="/intro/staff" className={styles.actionButton}>
                  👥 교역자 소개
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 