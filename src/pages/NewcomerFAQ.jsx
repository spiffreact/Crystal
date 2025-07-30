import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './NewcomerFAQ.module.css';

/**
 * 새가족 FAQ 페이지 컴포넌트
 */
export default function NewcomerFAQ() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      category: "교회 방문 관련",
      items: [
        {
          question: "처음 교회에 가려면 어떻게 해야 하나요?",
          answer: "편안한 마음으로 오시면 됩니다. 특별한 준비는 필요 없으며, 주일 오전 10시 30분까지 오시면 예배에 참여하실 수 있습니다. 입구에서 안내해드리는 분들이 도움을 드릴 것입니다."
        },
        {
          question: "어떤 옷을 입고 가야 하나요?",
          answer: "정장을 입으실 필요는 없습니다. 깔끔하고 단정한 옷차림이면 충분합니다. 하나님은 마음을 보시니 너무 걱정하지 마세요. 많은 분들이 평상복으로 예배에 참여하십니다."
        },
        {
          question: "주차는 어디에 하나요?",
          answer: "교회 내부에 주차장이 있습니다. 주차 공간이 부족할 경우 교회 근처 공영주차장을 이용하실 수 있으며, 주차 안내를 도와드리는 봉사자가 있습니다."
        },
        {
          question: "아이와 함께 가도 되나요?",
          answer: "물론입니다! 영유아부, 유초등부가 운영되고 있어 연령에 맞는 프로그램에 참여하실 수 있습니다. 예배 시간 동안 아이들을 안전하게 돌봐드립니다."
        }
      ]
    },
    {
      category: "예배 관련",
      items: [
        {
          question: "예배 시간은 언제인가요?",
          answer: "주일 예배는 오전 10시 30분부터 12시까지입니다. 수요예배는 오후 7시 30분, 금요기도회는 오후 7시 30분, 새벽기도회는 오전 5시 30분에 있습니다. 영어예배는 주일 오후 2시에 있습니다."
        },
        {
          question: "예배 중에 어떻게 행동해야 하나요?",
          answer: "찬양 시간에는 함께 서서 찬양하고, 기도 시간에는 고개를 숙이며, 설교 시간에는 집중해서 들으시면 됩니다. 모르는 부분은 옆에 앉은 분께 조용히 물어보셔도 괜찮습니다."
        },
        {
          question: "성경을 가져가야 하나요?",
          answer: "성경을 가져오시면 좋지만, 없어도 괜찮습니다. 좌석에 성경이 비치되어 있고, 스크린에도 말씀이 나오니 걱정하지 마세요. 원하시면 교회에서 성경을 구입하실 수도 있습니다."
        },
        {
          question: "헌금을 꼭 해야 하나요?",
          answer: "헌금은 강요하지 않습니다. 헌금은 하나님께 드리는 감사의 표현으로, 마음에서 우러나와 기쁜 마음으로 드리는 것입니다. 처음 오신 분은 예배에 집중하시기 바랍니다."
        }
      ]
    },
    {
      category: "교회 생활 관련",
      items: [
        {
          question: "새신자 교육은 언제 받나요?",
          answer: "새신자 교육은 매월 시작됩니다. 4주 과정으로 진행되며, 주일 오후 2시부터 3시 30분까지입니다. 새신자실에서 등록하시면 자세한 안내를 받으실 수 있습니다."
        },
        {
          question: "소그룹 모임에 참여할 수 있나요?",
          answer: "새신자 교육을 마치신 후 구역 모임이나 소그룹에 참여하실 수 있습니다. 연령대와 거주지역을 고려하여 적합한 소그룹을 추천해드립니다."
        },
        {
          question: "봉사활동에 참여하려면 어떻게 해야 하나요?",
          answer: "교회에 정착하신 후 자신의 은사와 관심에 맞는 봉사 부서에 참여하실 수 있습니다. 찬양대, 교육부서, 친교봉사팀 등 다양한 봉사 기회가 있습니다."
        },
        {
          question: "침례는 언제 받을 수 있나요?",
          answer: "새신자 교육과 새가족 교육을 마치신 후, 신앙고백을 통해 침례를 받으실 수 있습니다. 날짜는,담임목사님과 상담 후 결정됩니다."
        }
      ]
    },
    {
      category: "교회 시설 및 프로그램",
      items: [
        {
          question: "교회에 어떤 시설들이 있나요?",
          answer: "본당, 교육관, 유아부실, 청년부실, 도서관, 기도실, 주방, 화장실 등의 시설이 있습니다. 엘리베이터도 설치되어 있어 거동이 불편하신 분들도 편리하게 이용하실 수 있습니다."
        },
        {
          question: "교회에서 제공하는 특별 프로그램이 있나요?",
          answer: "여름성경학교, 겨울수련회, 부활절 특별예배, 크리스마스 특별행사, 전도집회 등 다양한 프로그램이 있습니다. 또한 결혼준비교실, 부모교실 등의 교육 프로그램도 운영됩니다."
        },
        {
          question: "상담을 받을 수 있나요?",
          answer: "목사님과의 개인 상담이 가능합니다. 신앙상담, 가정상담, 진로상담 등을 받으실 수 있으며, 교회 사무실에 미리 예약하시면 됩니다."
        },
        {
          question: "교회 도서관을 이용할 수 있나요?",
          answer: "교회 도서관은 모든 성도에게 개방되어 있습니다. 신앙서적, 성경 연구 자료, 어린이 도서 등이 구비되어 있으며, 대출도 가능합니다."
        }
      ]
    },
    {
      category: "기타 문의사항",
      items: [
        {
          question: "교회 연락처는 어떻게 되나요?",
          answer: "전화번호는 031-212-0091이고, 이메일은 suwoncrystalchurch@gmail.com입니다. 교회 주소는 경기도 수원시 팔달구 팔달문로150번길 13입니다."
        },
        {
          question: "교회 홈페이지나 SNS가 있나요?",
          answer: "교회 홈페이지와 유튜브 채널을 통해 온라인으로도 예배에 참여하실 수 있습니다. 교회 소식과 설교 말씀을 온라인으로 접하실 수 있습니다."
        },
        {
          question: "결혼식이나 장례식을 교회에서 할 수 있나요?",
          answer: "교인의 경우 교회에서 결혼식과 장례식을 진행할 수 있습니다. 목사님과 상담 후 일정을 조율하여 진행하며, 필요한 안내를 받으실 수 있습니다."
        },
        {
          question: "교회에 대해 더 자세히 알고 싶어요.",
          answer: "교회 소개 페이지를 참고하시거나, 새신자 환영실을 방문해 주세요. 담당 권사님께서 자세히 안내해드리며, 궁금한 점은 언제든지 문의하실 수 있습니다."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>새가족 FAQ - 수정교회</title>
        <meta name="description" content="수정교회 새가족들이 자주 묻는 질문들에 대한 답변입니다." />
      </Helmet>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>새가족 FAQ</h1>
          <p>처음 교회에 오시는 분들이 자주 묻는 질문들을 모았습니다.</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.welcomeBox}>
              <h2>🤗 수정교회에 오신 것을 환영합니다!</h2>
              <p>
                처음 교회에 나오시는 것이 낯설고 궁금한 것이 많으실 것입니다. 
                아래의 자주 묻는 질문들을 통해 궁금증을 해결하시고, 
                편안한 마음으로 교회 생활을 시작하시기 바랍니다.
              </p>
              <div className={styles.quickContact}>
                <p><strong>💬 더 궁금한 점이 있으시면:</strong></p>
                <p>📞 전화: 031-212-0091 | ✉️ 이메일: suwoncrystalchurch@gmail.com</p>
              </div>
            </div>
          </section>

          {faqData.map((category, categoryIndex) => (
            <section key={categoryIndex} className={styles.section}>
              <h2 className={styles.categoryTitle}>{category.category}</h2>
              <div className={styles.faqList}>
                {category.items.map((item, itemIndex) => {
                  const globalIndex = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems.has(globalIndex);
                  
                  return (
                    <div key={itemIndex} className={styles.faqItem}>
                      <button
                        className={`${styles.faqQuestion} ${isOpen ? styles.open : ''}`}
                        onClick={() => toggleItem(globalIndex)}
                        aria-expanded={isOpen}
                      >
                        <span className={styles.questionIcon}>Q</span>
                        <span className={styles.questionText}>{item.question}</span>
                        <span className={styles.toggleIcon}>
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      
                      {isOpen && (
                        <div className={styles.faqAnswer}>
                          <span className={styles.answerIcon}>A</span>
                          <div className={styles.answerText}>
                            {item.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          <section className={styles.section}>
            <div className={styles.helpBox}>
              <h2>더 도움이 필요하신가요?</h2>
              <div className={styles.helpGrid}>
                <div className={styles.helpCard}>
                  <div className={styles.helpIcon}>
                    <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center" alt="새신자 환영실" />
                  </div>
                  <h3>새신자 환영실 방문</h3>
                  <p>주일 예배 후 새신자 환영실에서 직접 상담받으실 수 있습니다.</p>
                  <span className={styles.helpLocation}>📍 교육관 1층</span>
                </div>
                
                <div className={styles.helpCard}>
                  <div className={styles.helpIcon}>
                    <img src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=300&fit=crop&crop=center" alt="전화 상담" />
                  </div>
                  <h3>전화 상담</h3>
                  <p>궁금한 점이 있으시면 언제든지 전화로 문의해 주세요.</p>
                  <span className={styles.helpContact}>📞 031-212-0091</span>
                </div>
                
                <div className={styles.helpCard}>
                  <div className={styles.helpIcon}>
                    <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop&crop=center" alt="이메일 문의" />
                  </div>
                  <h3>이메일 문의</h3>
                  <p>자세한 문의사항은 이메일로 보내주시면 답변드리겠습니다.</p>
                  <span className={styles.helpEmail}>✉️ suwoncrystalchurch@gmail.com</span>
                </div>
                
                <div className={styles.helpCard}>
                  <div className={styles.helpIcon}>
                    <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center" alt="목사님 상담" />
                  </div>
                  <h3>담임목사님 상담</h3>
                  <p>개인적인 상담이 필요하시면 미리 예약하시고 방문해 주세요.</p>
                  <span className={styles.helpTime}>🕐 사전 예약 필요</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.nextStepsBox}>
              <h2>다음 단계</h2>
              <p>교회에 적응하시는 데 도움이 되는 단계별 안내입니다.</p>
              
              <div className={styles.stepsGrid}>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>1</div>
                  <h3>꾸준한 예배 참석</h3>
                  <p>주일 예배에 꾸준히 참석하며 하나님의 말씀을 들어보세요.</p>
                </div>
                
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>2</div>
                  <h3>새신자 교육 참여</h3>
                  <p>4주간의 새신자 교육을 통해 기독교 신앙의 기초를 배워보세요.</p>
                </div>
                
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>3</div>
                  <h3>소그룹 참여</h3>
                  <p>구역 모임이나 소그룹에 참여하여 교제의 즐거움을 누려보세요.</p>
                </div>
                
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>4</div>
                  <h3>봉사 참여</h3>
                  <p>자신의 은사에 맞는 봉사에 참여하여 섬김의 기쁨을 경험해보세요.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 