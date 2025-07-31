import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './ChurchGlossary.module.css';

/**
 * 교회 용어집 페이지 컴포넌트
 */
export default function ChurchGlossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const glossaryData = [
    // 예배 관련 용어
    { term: '주일예배', category: 'worship', definition: '매주 주일(일요일)에 드리는 정규 예배로, 하나님께 영광과 찬양을 올려드리는 성도들의 모임입니다.', example: '"이번 주일예배는 오전 11시에 시작됩니다."' },
    { term: '수요예배', category: 'worship', definition: '매주 수요일 저녁에 드리는 예배로, 말씀과 기도에 더욱 집중하는 시간입니다.', example: '"수요예배에서는 성경공부와 기도회가 함께 진행됩니다."' },
    { term: '새벽기도회', category: 'worship', definition: '이른 새벽 시간에 드리는 기도 중심의 예배로, 하루를 하나님께 맡기며 시작하는 기도 모임입니다.', example: '"새벽기도회는 매일 오전 5시 30분에 시작됩니다."' },
    { term: '찬양', category: 'worship', definition: '하나님의 은혜와 사랑을 노래로 표현하여 영광을 돌리는 것입니다.', example: '"오늘 찬양팀이 준비한 특별찬양이 있습니다."' },
    { term: '헌금', category: 'worship', definition: '하나님께 감사의 마음으로 드리는 물질적 예물로, 교회 사역과 선교를 위해 사용됩니다.', example: '"십일조와 감사헌금을 정성껏 준비해 주세요."' },
    { term: '축도', category: 'worship', definition: '예배의 마지막에 목사가 회중에게 하나님의 축복을 빌어주는 기도입니다.', example: '"이제 축도로써 예배를 마치겠습니다."' },
    { term: '찬송', category: 'worship', definition: '하나님을 찬양하는 전통적인 기독교 찬양곡으로, 찬송가를 의미합니다.', example: '"찬송 1장을 함께 부르겠습니다."' },
    { term: '기도', category: 'worship', definition: '하나님과 대화하며 소통하는 것으로, 감사, 회개, 간구 등을 포함합니다.', example: '"대표기도를 김 집사님이 해주시겠습니다."' },

    // 교회 직분 관련 용어
    { term: '목사', category: 'position', definition: '하나님의 말씀을 전하고 교회를 목양하는 일을 하는 교역자입니다.', example: '"김목사님께서 오늘 말씀을 전해주실 예정입니다."' },
    { term: '장로', category: 'position', definition: '교회의 치리와 영적 지도를 담당하는 직분으로, 목사와 함께 교회를 다스립니다.', example: '"장로님들이 당회를 구성하여 교회 중요 사안을 결정합니다."' },
    { term: '집사', category: 'position', definition: '교회의 봉사와 섬김을 담당하는 직분으로, 교회 운영을 돕습니다.', example: '"집사님들이 예배 준비를 도와주고 계십니다."' },
    { term: '권사', category: 'position', definition: '여성 성도 중에서 세워진 직분으로, 교회의 봉사와 섬김을 담당합니다.', example: '"권사님들이 새가족 돌봄 사역을 담당하고 있습니다."' },
    { term: '전도사', category: 'position', definition: '복음을 전하고 교회 사역을 돕는 교역자로, 목사가 되기 전 단계의 사역자입니다.', example: '"전도사님이 청년부를 담당하고 계십니다."' },
    { term: '교역자', category: 'position', definition: '교회에서 하나님의 일을 전담하는 사람으로, 목사, 전도사 등을 포함합니다.', example: '"우리 교회 교역자분들을 위해 기도해 주세요."' },

    // 교회 조직 관련 용어
    { term: '당회', category: 'organization', definition: '목사와 장로들로 구성된 교회의 최고 의결기구입니다.', example: '"다음 주 당회에서 중요한 안건이 논의될 예정입니다."' },
    { term: '교구', category: 'organization', definition: '지역별로 나누어진 교회 조직 단위로, 체계적인 목양을 위해 구성됩니다.', example: '"1교구 모임이 이번 주 토요일에 있습니다."' },
    { term: '셀', category: 'organization', definition: '교구보다 작은 단위의 조직으로, 가정 중심의 친교와 교제를 위한 모임입니다.', example: '"우리 셀 성경공부는 매주 화요일에 합니다."' },
    { term: '소그룹', category: 'organization', definition: '작은 규모의 모임으로, 깊이 있는 교제와 성경공부를 위한 그룹입니다.', example: '"소그룹 모임에서 서로의 기도제목을 나누었습니다."' },
    { term: '공동체', category: 'organization', definition: '같은 믿음을 가진 성도들이 함께 모여 이루는 신앙 공동체입니다.', example: '"우리는 하나님 안에서 하나 된 공동체입니다."' },

    // 성경 관련 용어
    { term: '구약', category: 'bible', definition: '예수 그리스도가 오시기 이전의 하나님과 인간의 약속을 기록한 성경의 첫 번째 부분입니다.', example: '"오늘은 구약 창세기 말씀을 읽겠습니다."' },
    { term: '신약', category: 'bible', definition: '예수 그리스도를 통한 새로운 약속을 기록한 성경의 두 번째 부분입니다.', example: '"신약 복음서에는 예수님의 생애가 기록되어 있습니다."' },
    { term: '복음', category: 'bible', definition: '예수 그리스도를 통한 구원의 소식으로, 하나님의 사랑과 은혜를 전하는 기쁜 소식입니다.', example: '"복음을 전하는 것이 우리의 사명입니다."' },
    { term: '말씀', category: 'bible', definition: '하나님께서 인간에게 주신 계시로, 주로 성경을 의미합니다.', example: '"오늘 말씀은 시편 23편입니다."' },
    { term: '성경', category: 'bible', definition: '하나님의 계시를 기록한 66권의 책으로, 기독교 신앙의 유일한 규범입니다.', example: '"매일 성경 읽기를 실천해 보세요."' },
    { term: '장', category: 'bible', definition: '성경의 각 권을 구분하는 큰 단위입니다.', example: '"요한복음 3장을 읽어보겠습니다."' },
    { term: '절', category: 'bible', definition: '성경의 각 장을 구분하는 작은 단위입니다.', example: '"요한복음 3장 16절 말씀입니다."' },

    // 신앙 생활 관련 용어
    { term: '신앙', category: 'faith', definition: '하나님을 믿고 의지하는 마음과 삶의 자세입니다.', example: '"신앙생활을 통해 하나님과 더 가까워집시다."' },
    { term: '구원', category: 'faith', definition: '예수 그리스도를 믿음으로 죄에서 구원받아 영생을 얻는 것입니다.', example: '"구원은 오직 예수 그리스도를 통해서만 가능합니다."' },
    { term: '회개', category: 'faith', definition: '자신의 죄를 인정하고 하나님께 돌아오는 것입니다.', example: '"진정한 회개는 삶의 변화를 가져옵니다."' },
    { term: '침례', category: 'faith', definition: '예수 그리스도를 구주로 믿는다는 신앙고백의 의식입니다.', example: '"다음 달에 침례식이 예정되어 있습니다."' },
    { term: '은혜', category: 'faith', definition: '하나님께서 값없이 주시는 사랑과 축복입니다.', example: '"하나님의 은혜로 오늘도 평안합니다."' },
    { term: '성령', category: 'faith', definition: '삼위일체 하나님의 한 위격으로, 성도들과 함께 하시는 하나님의 영입니다.', example: '"성령님께서 우리를 인도해 주십니다."' },
    { term: '기도제목', category: 'faith', definition: '기도할 내용이나 간구할 사항을 의미합니다.', example: '"오늘의 기도제목을 함께 나누겠습니다."' },

    // 교회 시설 관련 용어
    { term: '본당', category: 'facility', definition: '주일예배를 드리는 교회의 주요 예배당입니다.', example: '"본당에서 주일예배를 드립니다."' },
    { term: '소예배실', category: 'facility', definition: '작은 규모의 예배나 모임을 위한 공간입니다.', example: '"소예배실에서 수요예배를 드립니다."' },
    { term: '교제실', category: 'facility', definition: '성도들이 함께 교제하고 식사를 나누는 공간입니다.', example: '"예배 후 교제실에서 친교 시간을 갖겠습니다."' },
    { term: '영유아실', category: 'facility', definition: '영유아들을 돌보는 전용 공간입니다.', example: '"영유아실에서 아이들을 돌봐드립니다."' },
    { term: '사무실', category: 'facility', definition: '교회 행정 업무를 처리하는 공간입니다.', example: '"교회 등록은 사무실에서 해주세요."' },
    { term: '강단', category: 'facility', definition: '목사가 설교를 하는 교회 앞쪽의 높은 단입니다.', example: '"목사님께서 강단에서 말씀을 전하고 계십니다."' },

    // 사역 관련 용어
    { term: '사역', category: 'ministry', definition: '하나님을 섬기고 이웃을 돕는 모든 활동을 의미합니다.', example: '"각자의 은사에 따라 사역에 참여해 주세요."' },
    { term: '봉사', category: 'ministry', definition: '자발적으로 교회와 이웃을 섬기는 활동입니다.', example: '"교회 청소 봉사에 많은 분들이 참여해 주셨습니다."' },
    { term: '선교', category: 'ministry', definition: '복음을 전하여 하나님 나라를 확장하는 사역입니다.', example: '"해외선교사님들을 위해 기도해 주세요."' },
    { term: '전도', category: 'ministry', definition: '복음을 전하여 사람들을 예수님께로 인도하는 것입니다.', example: '"친구들에게 전도할 기회를 달라고 기도합시다."' },
    { term: '양육', category: 'ministry', definition: '새신자나 성도들의 신앙 성장을 돕는 사역입니다.', example: '"새가족 양육 프로그램이 시작됩니다."' },
    { term: '목양', category: 'ministry', definition: '목자가 양을 돌보듯 성도들을 영적으로 돌보는 것입니다.', example: '"목사님의 목양을 통해 많은 도움을 받았습니다."' }
  ];

  const categories = [
    { id: 'all', name: '전체', icon: '📚' },
    { id: 'worship', name: '예배', icon: '⛪' },
    { id: 'position', name: '직분', icon: '👥' },
    { id: 'organization', name: '조직', icon: '🏛️' },
    { id: 'bible', name: '성경', icon: '📖' },
    { id: 'faith', name: '신앙생활', icon: '🙏' },
    { id: 'facility', name: '시설', icon: '🏢' },
    { id: 'ministry', name: '사역', icon: '✋' }
  ];

  const filteredGlossary = useMemo(() => {
    let filtered = glossaryData;
    
    // 카테고리 필터링
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // 검색어 필터링
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // 가나다순 정렬
    return filtered.sort((a, b) => a.term.localeCompare(b.term, 'ko'));
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>교회 용어집 - 수정교회</title>
        <meta name="description" content="수정침례교회 용어집입니다. 교회에서 사용하는 다양한 용어들을 쉽게 찾아보고 이해할 수 있습니다." />
        <meta name="keywords" content="수정교회, 교회용어, 기독교용어, 예배용어, 성경용어, 교회생활" />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1>교회 용어집</h1>
            <p>교회 생활에 필요한 용어들을 쉽게 찾아보세요</p>
            <div className={styles.headerStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{glossaryData.length}+</span>
                <span className={styles.statLabel}>수록 용어</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{categories.length - 1}</span>
                <span className={styles.statLabel}>주요 분야</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>이해하기 쉽게</span>
              </div>
            </div>
          </div>
          <div className={styles.headerImage}>
            <img src="/bible.jpg" alt="교회 용어집" />
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.searchSection}>
            <h2>🔍 용어 찾기</h2>
            <div className={styles.searchContainer}>
              <div className={styles.searchInput}>
                <input
                  type="text"
                  placeholder="찾고 싶은 용어를 입력하세요... (예: 예배, 기도, 헌금)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className={styles.searchIcon}>🔍</span>
              </div>
              <div className={styles.searchResults}>
                {searchTerm && (
                  <p className={styles.resultCount}>
                    "{searchTerm}" 검색 결과: <strong>{filteredGlossary.length}개</strong>
                  </p>
                )}
              </div>
            </div>
          </section>

          <section className={styles.categorySection}>
            <h2>📂 분야별 보기</h2>
            <div className={styles.categoryGrid}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`${styles.categoryCard} ${selectedCategory === category.id ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <span className={styles.categoryName}>{category.name}</span>
                  <span className={styles.categoryCount}>
                    {category.id === 'all' 
                      ? glossaryData.length 
                      : glossaryData.filter(item => item.category === category.id).length
                    }개
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className={styles.glossarySection}>
            <h2>📖 용어 목록</h2>
            {filteredGlossary.length === 0 ? (
              <div className={styles.noResults}>
                <div className={styles.noResultsIcon}>🔍</div>
                <h3>검색 결과가 없습니다</h3>
                <p>다른 검색어를 입력하거나 카테고리를 변경해 보세요.</p>
              </div>
            ) : (
              <div className={styles.glossaryGrid}>
                {filteredGlossary.map((item, index) => (
                  <div key={index} className={styles.glossaryCard}>
                    <div className={styles.termHeader}>
                      <h3 className={styles.term}>{item.term}</h3>
                      <span className={styles.categoryBadge}>
                        {categories.find(cat => cat.id === item.category)?.icon} {categories.find(cat => cat.id === item.category)?.name}
                      </span>
                    </div>
                    <p className={styles.definition}>{item.definition}</p>
                    {item.example && (
                      <div className={styles.example}>
                        <h4>예시</h4>
                        <p>{item.example}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className={styles.helpSection}>
            <h2>❓ 용어집 사용 도움말</h2>
            <div className={styles.helpGrid}>
              <div className={styles.helpCard}>
                <div className={styles.helpIcon}>🔍</div>
                <h3>검색하기</h3>
                <p>찾고 싶은 용어나 관련 단어를 입력하면 해당하는 모든 용어를 찾을 수 있습니다.</p>
                <ul>
                  <li>용어 이름으로 검색</li>
                  <li>설명 내용으로 검색</li>
                  <li>부분 검색 지원</li>
                </ul>
              </div>
              <div className={styles.helpCard}>
                <div className={styles.helpIcon}>📂</div>
                <h3>분야별 보기</h3>
                <p>용어를 7개 주요 분야로 나누어 체계적으로 찾아볼 수 있습니다.</p>
                <ul>
                  <li>예배 관련 용어</li>
                  <li>교회 직분과 조직</li>
                  <li>성경과 신앙생활</li>
                  <li>교회 시설과 사역</li>
                </ul>
              </div>
              <div className={styles.helpCard}>
                <div className={styles.helpIcon}></div>
                <h3>이해하기</h3>
                <p>각 용어마다 쉬운 설명과 실제 사용 예시를 제공하여 이해를 돕습니다.</p>
                <ul>
                  <li>간단하고 명확한 정의</li>
                  <li>실제 사용 예시</li>
                  <li>관련 용어 연결</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.suggestionSection}>
            <h2>용어 추가 요청</h2>
            <div className={styles.suggestionContent}>
              <div className={styles.suggestionText}>
                <p>
                  용어집에 없는 교회 용어가 있거나, 더 자세한 설명이 필요한 용어가 있다면 
                  언제든지 교회 사무실로 문의해 주세요. 여러분의 제안을 반영하여 더 나은 용어집을 만들어가겠습니다.
                </p>
              </div>
              <div className={styles.suggestionContact}>
                <h3>📞 문의처</h3>
                <p><strong>전화:</strong> 031-212-0091</p>
                <p><strong>이메일:</strong> suwoncrystalchurch@gmail.com</p>
                <p><strong>운영시간:</strong> 월~금 오전 9시~오후 6시</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 