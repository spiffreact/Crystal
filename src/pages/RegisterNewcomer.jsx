import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './RegisterNewcomer.module.css';

/**
 * 새가족 등록 페이지 컴포넌트
 * 새가족 등록 양식과 안내 정보
 */
export default function RegisterNewcomer() {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    phone: '',
    email: '',
    address: '',
    visitReason: '',
    previousChurch: '',
    baptism: '',
    interests: [],
    questions: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 새가족 등록 데이터를 교육팀 명단 형식으로 변환
    const newcomerData = {
      id: Date.now(), // 임시 ID (타임스탬프 사용)
      name: formData.name,
      registrationDate: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
      phone: formData.phone,
      email: formData.email || '',
      address: formData.address || '',
      visitReason: formData.visitReason || '',
      previousChurch: formData.previousChurch || '',
      baptism: formData.baptism || '',
      interests: formData.interests,
      status: '신규 등록',
      stage: '1차 양육 대기',
      notes: formData.questions || '새가족으로 등록 완료',
      resources: [
        {
          title: '새가족 정착 시스템',
          url: 'https://accurate-spinach-48b.notion.site/23ee40ba5bcd80a39653e5afa2ccf094',
          type: 'notion'
        },
        {
          title: '새가족 멘토 교재',
          url: 'https://accurate-spinach-48b.notion.site/23ee40ba5bcd80eeb3e4e106baead2a5',
          type: 'notion'
        }
      ]
    };

    // localStorage에서 기존 새가족 등록 데이터 가져오기
    const existingRegistrations = JSON.parse(localStorage.getItem('newcomerRegistrations') || '[]');
    
    // 새로운 등록 데이터 추가
    const updatedRegistrations = [...existingRegistrations, newcomerData];
    
    // localStorage에 저장
    localStorage.setItem('newcomerRegistrations', JSON.stringify(updatedRegistrations));
    
    console.log('새가족 등록 데이터 저장:', newcomerData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>등록 완료 - 수정교회</title>
          <meta name="description" content="새가족 등록이 완료되었습니다." />
        </Helmet>
        
        <div className={styles.container}>
          <div className={styles.successPage}>
            <div className={styles.successIcon}>✅</div>
            <h1>새가족 등록이 완료되었습니다!</h1>
            <p>
              {formData.name}님의 소중한 등록을 진심으로 환영합니다.<br />
              곧 담당자가 연락을 드릴 예정입니다.
            </p>
            <div className={styles.nextSteps}>
              <h3>다음 단계 안내</h3>
              <ul>
                <li>📞 담당자가 2-3일 내에 연락드립니다</li>
                <li>📚 새가족 환영 패키지를 준비해드립니다</li>
                <li>🤝 새신자 양육 프로그램 안내를 받으실 수 있습니다</li>
                <li>⛪ 다음 주일에 새가족 소개 시간이 있습니다</li>
              </ul>
            </div>
                         <div className={styles.actionButtons}>
               <Link to="/" className={styles.homeButton}>
                 홈으로 돌아가기
               </Link>
               <Link to="/community/newcomer-care" className={styles.programButton}>
                 새신자 양육 보기
               </Link>
             </div>
             
             <div className={styles.adminNote}>
               <p><small>📋 등록된 정보는 교육팀에서 확인 및 관리됩니다.</small></p>
             </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>새가족 등록 - 수정교회</title>
        <meta name="description" content="수정교회 새가족 등록 페이지입니다. 교회 가족이 되어주세요." />
      </Helmet>
      
      <div className={styles.container}>
        {/* 헤더 */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1>새가족 등록</h1>
            <p>
              수정교회 가족이 되어주셔서 감사합니다.<br />
              아래 양식을 작성해 주시면 더 나은 섬김을 제공할 수 있습니다.
            </p>
          </div>
        </div>

        <div className={styles.content}>
          {/* 안내 섹션 */}
          <section className={styles.infoSection}>
            <h2>🎁 새가족 혜택</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>📖</div>
                <h3>환영 패키지</h3>
                <p>교회 소개서, 성경, 찬송가 등 새가족을 위한 특별한 선물을 드립니다.</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>👥</div>
                <h3>멘토 배정</h3>
                <p>신앙생활에 도움을 드릴 수 있는 따뜻한 멘토를 연결해드립니다.</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>📚</div>
                <h3>양육 프로그램</h3>
                <p>체계적인 새신자 양육 과정을 통해 신앙의 기초를 세워드립니다.</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>🤝</div>
                <h3>소그룹 연결</h3>
                <p>나이와 관심사가 비슷한 소그룹에 참여하여 깊은 교제를 나누실 수 있습니다.</p>
              </div>
            </div>
          </section>

          {/* 등록 양식 */}
          <section className={styles.formSection}>
            <h2>📝 등록 정보</h2>
            <form onSubmit={handleSubmit} className={styles.registrationForm}>
              {/* 기본 정보 */}
              <div className={styles.formGroup}>
                <h3>기본 정보</h3>
                <div className={styles.inputGrid}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">성명 *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="홍길동"
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="birthDate">생년월일</label>
                    <input
                      type="date"
                      id="birthDate"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="phone">연락처 *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="010-1234-5678"
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">이메일</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="address">주소</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="경기도 수원시 ..."
                  />
                </div>
              </div>

              {/* 신앙 정보 */}
              <div className={styles.formGroup}>
                <h3>신앙 정보</h3>
                <div className={styles.inputGroup}>
                  <label htmlFor="visitReason">교회 방문 계기</label>
                  <select
                    id="visitReason"
                    name="visitReason"
                    value={formData.visitReason}
                    onChange={handleInputChange}
                  >
                    <option value="">선택해 주세요</option>
                    <option value="가족소개">가족/친구 소개</option>
                    <option value="인터넷검색">인터넷 검색</option>
                    <option value="지나가다">지나가다 보게 되어서</option>
                    <option value="이사">이사로 인해</option>
                    <option value="기타">기타</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="previousChurch">이전 출석 교회</label>
                  <input
                    type="text"
                    id="previousChurch"
                    name="previousChurch"
                    value={formData.previousChurch}
                    onChange={handleInputChange}
                    placeholder="없음 또는 교회명"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="baptism">세례/침례 여부</label>
                  <select
                    id="baptism"
                    name="baptism"
                    value={formData.baptism}
                    onChange={handleInputChange}
                  >
                    <option value="">선택해 주세요</option>
                    <option value="완료">세례/침례 받음</option>
                    <option value="미완료">아직 받지 않음</option>
                    <option value="계획중">받을 계획임</option>
                  </select>
                </div>
              </div>

              {/* 관심사 */}
              <div className={styles.formGroup}>
                <h3>관심 있는 사역/활동 (복수 선택 가능)</h3>
                <div className={styles.checkboxGrid}>
                  {[
                    '새신자 양육', '성경공부', '찬양팀', '교육사역',
                    '봉사활동', '선교사역', '청년모임', '가정모임',
                    '기도모임', '상담사역', '어린이사역', '기타'
                  ].map((interest) => (
                    <label key={interest} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                      />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 기타 */}
              <div className={styles.formGroup}>
                <h3>기타</h3>
                <div className={styles.inputGroup}>
                  <label htmlFor="questions">궁금한 점이나 요청사항</label>
                  <textarea
                    id="questions"
                    name="questions"
                    value={formData.questions}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="교회에 대해 궁금한 점이나 특별한 요청사항이 있으시면 자유롭게 적어주세요."
                  />
                </div>
              </div>

              {/* 개인정보 동의 */}
              <div className={styles.agreementSection}>
                <label className={styles.agreementLabel}>
                  <input type="checkbox" required />
                  <span>
                    개인정보 수집 및 이용에 동의합니다. 
                    <small>(수집된 정보는 새가족 관리 및 교회 소식 전달 목적으로만 사용됩니다.)</small>
                  </span>
                </label>
              </div>

              {/* 제출 버튼 */}
              <div className={styles.submitSection}>
                <button type="submit" className={styles.submitButton}>
                  새가족 등록하기
                </button>
                <p className={styles.submitNote}>
                  등록 후 담당자가 2-3일 내에 연락을 드릴 예정입니다.
                </p>
              </div>
            </form>
          </section>

          {/* 연락처 정보 */}
          <section className={styles.contactSection}>
            <h2>📞 문의사항</h2>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <strong>전화:</strong> 031-212-0091
              </div>
              <div className={styles.contactItem}>
                <strong>이메일:</strong> suwoncrystalchurch@gmail.com
              </div>
              <div className={styles.contactItem}>
                <strong>주소:</strong> 경기 수원시 팔달구 팔달문로150번길 13 수정교회
              </div>
            </div>
            <p className={styles.contactNote}>
              등록 과정에서 도움이 필요하시거나 궁금한 점이 있으시면 언제든 연락해 주세요.
            </p>
          </section>
        </div>
      </div>
    </>
  );
} 