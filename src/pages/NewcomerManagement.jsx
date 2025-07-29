import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import styles from './NewcomerManagement.module.css';

/**
 * 새신자 양육 관리 페이지 컴포넌트
 * 교육팀 전용 새신자 관리 도구
 */
export default function NewcomerManagement() {
  const navigate = useNavigate();
  
  // 초기 샘플 데이터와 새가족 등록 데이터 합치기
  const getInitialNewcomers = async () => {
    const sampleData = [
    {
      id: 1,
      name: '김○○',
      registrationDate: '2024.01.15',
      phone: '010-1234-5678',
      status: '양육 진행 중',
      stage: '2차 양육',
      notes: '성경에 대한 관심도가 높음. 다음 주 2차 양육 예정.',
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
    },
    {
      id: 2,
      name: '이○○',
      registrationDate: '2024.01.08',
      phone: '010-2345-6789',
      status: '양육 진행 중',
      stage: '1차 양육',
      notes: '가족과 함께 등록. 어린 자녀가 있어 주일학교 연계 필요.',
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
    },
    {
      id: 3,
      name: '박○○',
      registrationDate: '2024.01.01',
      phone: '010-3456-7890',
      status: '양육 완료',
      stage: '정착 완료',
      notes: '3차 양육 완료. 청년부 소그룹 연결 완료.',
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
    }
    ];

    let registeredNewcomers = [];

    try {
      // 서버에서 새신자 데이터 먼저 시도
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const response = await fetch('/api/newcomers', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const result = await response.json();
            if (result.success && result.newcomers) {
              registeredNewcomers = result.newcomers.map(newcomer => ({
                ...newcomer,
                registrationDate: newcomer.registration_date ? 
                  newcomer.registration_date.replace(/-/g, '.') : 
                  new Date(newcomer.created_at).toISOString().split('T')[0].replace(/-/g, '.'),
                interests: Array.isArray(newcomer.interests) ? newcomer.interests : 
                  (typeof newcomer.interests === 'string' ? JSON.parse(newcomer.interests || '[]') : [])
              }));
              console.log('🌐 서버에서 새가족 데이터 로드 성공:', registeredNewcomers.length, '명');
              
              // 서버 데이터를 localStorage에도 백업
              localStorage.setItem('newcomerRegistrations', JSON.stringify(registeredNewcomers));
              localStorage.setItem('crystal_church_newcomers', JSON.stringify(registeredNewcomers));
            }
          } else if (response.status === 401 || response.status === 403) {
            console.warn('🔐 인증이 필요하거나 토큰이 만료됨, localStorage 백업 사용');
            throw new Error('Authentication required');
          }
        } catch (serverError) {
          console.warn('⚠️ 서버 연결 실패, localStorage로 폴백:', serverError.message);
        }
      }

      // 서버에서 실패했거나 토큰이 없으면 localStorage에서 로드
      if (registeredNewcomers.length === 0) {
        // 메인 키에서 데이터 로드 시도
        const mainData = localStorage.getItem('newcomerRegistrations');
        if (mainData) {
          const parsed = JSON.parse(mainData);
          if (Array.isArray(parsed)) {
            registeredNewcomers = parsed;
            console.log('📋 메인 키에서 새가족 데이터 로드 성공:', registeredNewcomers.length, '명');
          }
        }

        // 백업 키에서도 데이터 확인 (중복 제거 포함)
        const backupData = localStorage.getItem('crystal_church_newcomers');
        if (backupData && registeredNewcomers.length === 0) {
          const parsed = JSON.parse(backupData);
          if (Array.isArray(parsed)) {
            registeredNewcomers = parsed;
            console.log('🔄 백업 키에서 새가족 데이터 복원 성공:', registeredNewcomers.length, '명');
            
            // 메인 키로 복원
            localStorage.setItem('newcomerRegistrations', JSON.stringify(registeredNewcomers));
          }
        }

        // 개별 백업에서 누락된 데이터 복원
        const existingIds = new Set(registeredNewcomers.map(item => item.id));
        Object.keys(localStorage).forEach(key => {
          if (key.startsWith('newcomer_backup_')) {
            try {
              const backupItem = JSON.parse(localStorage.getItem(key));
              if (backupItem && !existingIds.has(backupItem.id)) {
                registeredNewcomers.push(backupItem);
                console.log('🔧 개별 백업에서 데이터 복원:', backupItem.name);
              }
            } catch (e) {
              console.warn('개별 백업 복원 실패:', key, e);
            }
          }
        });

        // 중복 제거 (ID 기준)
        const uniqueNewcomers = registeredNewcomers.filter((item, index, self) => 
          index === self.findIndex(t => t.id === item.id)
        );

        if (uniqueNewcomers.length !== registeredNewcomers.length) {
          console.log('🧹 중복 데이터 제거 완료');
          localStorage.setItem('newcomerRegistrations', JSON.stringify(uniqueNewcomers));
          registeredNewcomers = uniqueNewcomers;
        }
      }

    } catch (error) {
      console.error('❌ 새가족 데이터 로드 실패:', error);
      registeredNewcomers = [];
    }
    
    // 등록된 데이터와 샘플 데이터 합치기 (등록된 데이터가 위에 표시)
    const allNewcomers = [...registeredNewcomers, ...sampleData];
    
    console.log('📊 전체 새가족 목록:', allNewcomers.length, '명 (등록:', registeredNewcomers.length, '명, 샘플:', sampleData.length, '명)');
    
    return allNewcomers;
  };

  // 새신자 목록 상태
  const [newcomers, setNewcomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 컴포넌트가 마운트될 때와 페이지에 다시 포커스될 때 데이터 새로고침
  useEffect(() => {
    const refreshData = async () => {
      setIsLoading(true);
      try {
        const data = await getInitialNewcomers();
        setNewcomers(data);
      } catch (error) {
        console.error('데이터 로드 오류:', error);
      } finally {
        setIsLoading(false);
      }
    };

    refreshData();

    // 페이지 포커스 시 데이터 새로고침 (다른 탭에서 등록 후 돌아왔을 때)
    window.addEventListener('focus', refreshData);
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('focus', refreshData);
    };
  }, []);

  // 선택된 새신자 상태
  const [selectedNewcomer, setSelectedNewcomer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingResource, setIsAddingResource] = useState(false);
  const [newResource, setNewResource] = useState({ title: '', url: '', type: 'link' });

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    navigate('/', { replace: true });
  };

  const handleBackToEducationTeam = () => {
    navigate('/community/education-team');
  };

  const handleSelectNewcomer = (newcomer) => {
    setSelectedNewcomer(newcomer);
    setIsEditing(false);
  };

  const handleEditNewcomer = () => {
    setIsEditing(true);
  };

  const handleSaveNewcomer = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (token && selectedNewcomer.id && selectedNewcomer.id > 3) { // 샘플 데이터가 아닌 경우
        // 서버에 저장 시도
        const response = await fetch(`/api/newcomers/${selectedNewcomer.id}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: selectedNewcomer.name,
            phone: selectedNewcomer.phone,
            email: selectedNewcomer.email,
            status: selectedNewcomer.status,
            stage: selectedNewcomer.stage,
            notes: selectedNewcomer.notes
          })
        });

        if (response.ok) {
          console.log('✅ 서버 저장 성공');
        } else {
          throw new Error('서버 저장 실패');
        }
      }
    } catch (error) {
      console.warn('⚠️ 서버 저장 실패, localStorage만 업데이트:', error);
    }

    // localStorage 업데이트 (기존 로직 유지)
    const updatedNewcomers = newcomers.map(n => 
      n.id === selectedNewcomer.id ? selectedNewcomer : n
    );
    setNewcomers(updatedNewcomers);
    
    // 만약 편집된 새신자가 등록된 새가족 데이터라면 localStorage도 업데이트
    const registeredNewcomers = JSON.parse(localStorage.getItem('newcomerRegistrations') || '[]');
    const isRegisteredNewcomer = registeredNewcomers.find(r => r.id === selectedNewcomer.id);
    
    if (isRegisteredNewcomer) {
      const updatedRegistrations = registeredNewcomers.map(r => r.id === selectedNewcomer.id ? selectedNewcomer : r);
      localStorage.setItem('newcomerRegistrations', JSON.stringify(updatedRegistrations));
    }
    
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setSelectedNewcomer(newcomers.find(n => n.id === selectedNewcomer.id));
  };

  const handleAddResource = () => {
    if (newResource.title && newResource.url) {
      const updatedNewcomer = {
        ...selectedNewcomer,
        resources: [...selectedNewcomer.resources, { ...newResource, id: Date.now() }]
      };
      setSelectedNewcomer(updatedNewcomer);
      setNewcomers(newcomers.map(n => 
        n.id === selectedNewcomer.id ? updatedNewcomer : n
      ));
      setNewResource({ title: '', url: '', type: 'link' });
      setIsAddingResource(false);
    }
  };

  const handleDeleteResource = (resourceIndex) => {
    const updatedNewcomer = {
      ...selectedNewcomer,
      resources: selectedNewcomer.resources.filter((_, index) => index !== resourceIndex)
    };
    setSelectedNewcomer(updatedNewcomer);
    setNewcomers(newcomers.map(n => 
      n.id === selectedNewcomer.id ? updatedNewcomer : n
    ));
  };

  return (
    <>
      <Helmet>
        <title>새신자 양육 관리 - 수정교회</title>
        <meta name="description" content="새신자 양육 관리 시스템" />
      </Helmet>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.headerContent}>
              <h1>새신자 양육 관리</h1>
              <p>새신자 개별 관리 및 양육 자료 관리 시스템</p>
            </div>
            <div className={styles.headerButtons}>
              <button onClick={handleBackToEducationTeam} className={styles.backButton}>
                ← 교육팀으로
              </button>
              <button onClick={handleLogout} className={styles.logoutButton}>
                로그아웃
              </button>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.mainLayout}>
            {/* 새신자 목록 */}
            <div className={styles.newcomerList}>
              <div className={styles.listHeader}>
                <h2>새신자 목록</h2>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('✅ 출석체크 버튼 클릭됨!');
                    console.log('🔄 페이지 이동 시작...');
                    
                    // 즉시 alert로 테스트
                    const confirmed = window.confirm('출석체크 페이지로 이동하시겠습니까?');
                    
                    if (confirmed) {
                      console.log('➡️ /community/education-team/attendance-check 로 이동');
                      navigate('/community/education-team/attendance-check');
                      
                      // 백업 방법 - 3초 후에도 이동하지 않으면 강제 이동
                      setTimeout(() => {
                        console.log('⚠️ 백업 이동 시도');
                        window.location.href = '/community/education-team/attendance-check';
                      }, 3000);
                    }
                  }}
                  className={styles.attendanceButton}
                  type="button"
                >
                  📋 출석체크
                </button>
              </div>
              <div className={styles.listContainer}>
                {isLoading ? (
                  <div className={styles.loadingState}>
                    <div className={styles.loadingSpinner}>⏳</div>
                    <p>새신자 목록을 불러오는 중...</p>
                  </div>
                ) : newcomers.length === 0 ? (
                  <div className={styles.emptyState}>
                    <p>등록된 새신자가 없습니다.</p>
                  </div>
                ) : (
                  newcomers.map(newcomer => (
                    <div 
                      key={newcomer.id}
                      className={`${styles.newcomerItem} ${selectedNewcomer?.id === newcomer.id ? styles.selected : ''}`}
                      onClick={() => handleSelectNewcomer(newcomer)}
                    >
                      <div className={styles.newcomerInfo}>
                        <h3>{newcomer.name}</h3>
                        <p className={styles.registrationDate}>{newcomer.registrationDate} 등록</p>
                        <span className={`${styles.status} ${styles[newcomer.status.replace(' ', '')]}`}>
                          {newcomer.status}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* 상세 정보 */}
            <div className={styles.newcomerDetail}>
              {selectedNewcomer ? (
                <div className={styles.detailContent}>
                  <div className={styles.detailHeader}>
                    <h2>{selectedNewcomer.name}님 상세 정보</h2>
                    {!isEditing && (
                      <button onClick={handleEditNewcomer} className={styles.editButton}>
                        수정
                      </button>
                    )}
                  </div>

                  <div className={styles.detailSections}>
                    {/* 기본 정보 */}
                    <div className={styles.section}>
                      <h3>📋 기본 정보</h3>
                      <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                          <label>이름</label>
                          {isEditing ? (
                            <input 
                              type="text" 
                              value={selectedNewcomer.name}
                              onChange={(e) => setSelectedNewcomer({...selectedNewcomer, name: e.target.value})}
                            />
                          ) : (
                            <span>{selectedNewcomer.name}</span>
                          )}
                        </div>
                        <div className={styles.infoItem}>
                          <label>연락처</label>
                          {isEditing ? (
                            <input 
                              type="text" 
                              value={selectedNewcomer.phone}
                              onChange={(e) => setSelectedNewcomer({...selectedNewcomer, phone: e.target.value})}
                            />
                          ) : (
                            <span>{selectedNewcomer.phone}</span>
                          )}
                        </div>
                        <div className={styles.infoItem}>
                          <label>등록일</label>
                          <span>{selectedNewcomer.registrationDate}</span>
                        </div>
                        <div className={styles.infoItem}>
                          <label>양육 단계</label>
                          {isEditing ? (
                            <select 
                              value={selectedNewcomer.stage}
                              onChange={(e) => setSelectedNewcomer({...selectedNewcomer, stage: e.target.value})}
                            >
                              <option value="1차 양육">1차 양육</option>
                              <option value="2차 양육">2차 양육</option>
                              <option value="3차 양육">3차 양육</option>
                              <option value="정착 완료">정착 완료</option>
                            </select>
                          ) : (
                            <span>{selectedNewcomer.stage}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* 양육 노트 */}
                    <div className={styles.section}>
                      <h3>📝 양육 노트</h3>
                      {isEditing ? (
                        <textarea 
                          value={selectedNewcomer.notes}
                          onChange={(e) => setSelectedNewcomer({...selectedNewcomer, notes: e.target.value})}
                          className={styles.notesTextarea}
                          placeholder="양육 과정에서의 특이사항이나 메모를 작성해주세요."
                        />
                      ) : (
                        <p className={styles.notesContent}>{selectedNewcomer.notes}</p>
                      )}
                    </div>

                    {/* 양육 자료 */}
                    <div className={styles.section}>
                      <h3>📚 양육 자료</h3>
                      <div className={styles.resourcesList}>
                        {selectedNewcomer.resources.map((resource, index) => (
                          <div key={index} className={styles.resourceItem}>
                            <div className={styles.resourceInfo}>
                              <h4>{resource.title}</h4>
                              <a href={resource.url} target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                                {resource.type === 'notion' ? '📄 Notion 페이지' : '🔗 링크'} 열기
                              </a>
                            </div>
                            {isEditing && (
                              <button 
                                onClick={() => handleDeleteResource(index)}
                                className={styles.deleteResourceButton}
                              >
                                삭제
                              </button>
                            )}
                          </div>
                        ))}
                        
                        {isEditing && (
                          <div className={styles.addResourceSection}>
                            {isAddingResource ? (
                              <div className={styles.addResourceForm}>
                                <input 
                                  type="text" 
                                  placeholder="자료 제목"
                                  value={newResource.title}
                                  onChange={(e) => setNewResource({...newResource, title: e.target.value})}
                                />
                                <input 
                                  type="url" 
                                  placeholder="자료 URL"
                                  value={newResource.url}
                                  onChange={(e) => setNewResource({...newResource, url: e.target.value})}
                                />
                                <select 
                                  value={newResource.type}
                                  onChange={(e) => setNewResource({...newResource, type: e.target.value})}
                                >
                                  <option value="link">일반 링크</option>
                                  <option value="notion">Notion 페이지</option>
                                </select>
                                <div className={styles.addResourceButtons}>
                                  <button onClick={handleAddResource} className={styles.saveResourceButton}>
                                    추가
                                  </button>
                                  <button onClick={() => setIsAddingResource(false)} className={styles.cancelResourceButton}>
                                    취소
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <button 
                                onClick={() => setIsAddingResource(true)}
                                className={styles.addResourceButton}
                              >
                                + 자료 추가
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {isEditing && (
                    <div className={styles.editActions}>
                      <button onClick={handleSaveNewcomer} className={styles.saveButton}>
                        저장
                      </button>
                      <button onClick={handleCancelEdit} className={styles.cancelButton}>
                        취소
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className={styles.noSelection}>
                  <h3>새신자를 선택해 주세요</h3>
                  <p>왼쪽 목록에서 관리할 새신자를 클릭하세요.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 