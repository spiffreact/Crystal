import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import styles from './WorshipTeam.module.css';

/**
 * 찬양팀 페이지 컴포넌트
 * 악보와 큐시트 관리 시스템
 */
export default function WorshipTeam() {
  const navigate = useNavigate();
  
  // 악보 목록 상태
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: '놀라운 은혜',
      key: 'G',
      tempo: '♩ = 72',
      genre: '찬송가',
      sheetMusic: 'https://example.com/sheet1.pdf',
      audioLink: 'https://example.com/audio1.mp3',
      lyrics: '놀라운 은혜 나같은 죄인 살리셨네\n잃었던 생명 찾았고 광명을 얻었네',
      notes: '2절부터 화음 변경'
    },
    {
      id: 2,
      title: '주 은혜임이라',
      key: 'D',
      tempo: '♩ = 84',
      genre: 'CCM',
      sheetMusic: 'https://example.com/sheet2.pdf',
      audioLink: 'https://example.com/audio2.mp3',
      lyrics: '주 은혜임이라 나의 기쁨이라\n주님만이 나의 소망이 되시네',
      notes: '키보드 인트로 4마디'
    },
    {
      id: 3,
      title: '하나님의 은혜',
      key: 'F',
      tempo: '♩ = 80',
      genre: '현대찬양',
      sheetMusic: 'https://example.com/sheet3.pdf',
      audioLink: 'https://example.com/audio3.mp3',
      lyrics: '하나님의 은혜 크고 놀라워라\n내 마음을 다해 찬양드리네',
      notes: '브릿지 부분 강조'
    }
  ]);

  // 예배별 큐시트 목록 상태
  const [sundayCueSheets, setSundayCueSheets] = useState([
    {
      id: 1,
      date: '2025-01-21',
      service: '주일 오전 예배',
      equipment: {
        preacher_mic: '무선마이크',
        leader_mic: '핸드마이크',
        keyboard: true,
        drums: true,
        stage_support: ''
      },
      schedule: [
        { time: '11:00', content: '함께찬양', person: '사회자', notes: '잔잔한 배경 음악' },
        { time: '11:15', content: '찬양 인도', person: '찬양팀', notes: '찬양 2-3곡' },
        { time: '11:30', content: '대표기도', person: '기도 담당자', notes: '' },
        { time: '11:35', content: '성경봉독', person: '성경봉독자', notes: '예: 시편 23편' },
        { time: '11:40', content: '설교', person: '김○○ 목사님', notes: '본문 및 제목 사전 전달' },
        { time: '12:20', content: '결단 찬양', person: '찬양팀', notes: '설교 후 찬양 1곡' },
        { time: '12:25', content: '봉헌', person: '봉헌자', notes: '봉헌기도 포함' },
        { time: '12:30', content: '광고', person: '사회자', notes: '주간 일정, 행사 공지' },
        { time: '12:35', content: '축도', person: '김○○ 목사님', notes: '' },
        { time: '12:40', content: '폐회 및 교제 안내', person: '사회자', notes: '커피 교제 안내 포함' }
      ],
      notes: '테스트 큐시트'
    },
    {
      id: 2,
      date: '2025-01-28',
      service: '주일 오전 예배',
      equipment: {
        preacher_mic: '무선마이크',
        leader_mic: '핸드마이크',
        keyboard: true,
        drums: false,
        stage_support: '프로젝터 점검'
      },
      schedule: [
        { time: '11:00', content: '함께찬양', person: '사회자', notes: '조용한 분위기' },
        { time: '11:15', content: '찬양 인도', person: '찬양팀', notes: '회중 찬양' },
        { time: '11:30', content: '설교', person: '이○○ 목사님', notes: '' },
        { time: '12:10', content: '축도', person: '이○○ 목사님', notes: '' }
      ],
      notes: ''
    }
  ]);

  const [wednesdayCueSheets, setWednesdayCueSheets] = useState([
    {
      id: 1,
      date: '2025-01-22',
      service: '수요 기도회',
      equipment: {
        preacher_mic: '무선마이크',
        leader_mic: '핸드마이크',
        keyboard: true,
        drums: false,
        stage_support: ''
      },
      schedule: [
        { time: '19:30', content: '찬양', person: '찬양팀', notes: '경건한 분위기' },
        { time: '19:45', content: '기도', person: '기도 담당자', notes: '합심 기도' },
        { time: '20:00', content: '말씀', person: '김○○ 목사님', notes: '짧은 메시지' },
        { time: '20:30', content: '축도', person: '김○○ 목사님', notes: '' }
      ],
      notes: ''
    }
  ]);

  const [fridayCueSheets, setFridayCueSheets] = useState([
    {
      id: 1,
      date: '2025-01-24',
      service: '금요 기도회',
      equipment: {
        preacher_mic: '무선마이크',
        leader_mic: '핸드마이크',
        keyboard: true,
        drums: false,
        stage_support: ''
      },
      schedule: [
        { time: '20:30', content: '찬양', person: '찬양팀', notes: '은혜로운 찬양' },
        { time: '20:45', content: '중보기도', person: '기도 담당자', notes: '교회와 성도를 위한 기도' },
        { time: '21:00', content: '말씀', person: '이○○ 목사님', notes: '기도 말씀' },
        { time: '21:30', content: '축도', person: '이○○ 목사님', notes: '' }
      ],
      notes: ''
    }
  ]);

  // 선택된 항목 상태
  const [selectedSong, setSelectedSong] = useState(null);
  const [selectedCueSheet, setSelectedCueSheet] = useState(null);
  const [activeTab, setActiveTab] = useState('songs'); // 'songs', 'sunday', 'wednesday', 'friday'
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // 새 곡/큐시트 상태
  const [newSong, setNewSong] = useState({
    title: '', key: '', tempo: '', genre: '', sheetMusic: '', audioLink: '', lyrics: '', notes: ''
  });
  const [newCueSheet, setNewCueSheet] = useState({
    date: '', 
    service: '', 
    equipment: {
      preacher_mic: '',
      leader_mic: '',
      keyboard: false,
      drums: false,
      stage_support: ''
    },
    schedule: [], 
    notes: ''
  });

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    navigate('/', { replace: true });
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  // 악보 관리 함수들
  const handleSelectSong = (song) => {
    setSelectedSong(song);
    setIsEditing(false);
  };

  const handleEditSong = () => {
    setIsEditing(true);
  };

  const handleSaveSong = () => {
    setSongs(songs.map(s => s.id === selectedSong.id ? selectedSong : s));
    setIsEditing(false);
  };

  const handleCancelEditSong = () => {
    setIsEditing(false);
    setSelectedSong(songs.find(s => s.id === selectedSong.id));
  };

  const handleAddNewSong = () => {
    if (newSong.title) {
      const newId = Math.max(...songs.map(s => s.id)) + 1;
      setSongs([...songs, { ...newSong, id: newId }]);
      setNewSong({ title: '', key: '', tempo: '', genre: '', sheetMusic: '', audioLink: '', lyrics: '', notes: '' });
      setIsAddingNew(false);
    }
  };

  const handleDeleteSong = (songId) => {
    setSongs(songs.filter(s => s.id !== songId));
    if (selectedSong?.id === songId) {
      setSelectedSong(null);
    }
  };

  // 큐시트 관리 함수들 - 예배별로 분리
  const getCurrentCueSheets = () => {
    switch(activeTab) {
      case 'sunday': return sundayCueSheets;
      case 'wednesday': return wednesdayCueSheets;
      case 'friday': return fridayCueSheets;
      default: return [];
    }
  };

  const getCurrentSetCueSheets = () => {
    switch(activeTab) {
      case 'sunday': return setSundayCueSheets;
      case 'wednesday': return setWednesdayCueSheets;
      case 'friday': return setFridayCueSheets;
      default: return () => {};
    }
  };

  const getServiceName = () => {
    switch(activeTab) {
      case 'sunday': return '주일 오전 예배';
      case 'wednesday': return '수요 기도회';
      case 'friday': return '금요 기도회';
      default: return '';
    }
  };

  const handleSelectCueSheet = (cueSheet) => {
    setSelectedCueSheet(cueSheet);
    setIsEditing(false);
  };

  const handleEditCueSheet = () => {
    setIsEditing(true);
  };

  const handleSaveCueSheet = () => {
    const currentCueSheets = getCurrentCueSheets();
    const setCueSheets = getCurrentSetCueSheets();
    setCueSheets(currentCueSheets.map(c => c.id === selectedCueSheet.id ? selectedCueSheet : c));
    setIsEditing(false);
  };

  const handleCancelEditCueSheet = () => {
    const currentCueSheets = getCurrentCueSheets();
    setIsEditing(false);
    setSelectedCueSheet(currentCueSheets.find(c => c.id === selectedCueSheet.id));
  };

  const handleAddNewCueSheet = () => {
    if (newCueSheet.date) {
      const currentCueSheets = getCurrentCueSheets();
      const setCueSheets = getCurrentSetCueSheets();
      const newId = currentCueSheets.length > 0 ? Math.max(...currentCueSheets.map(c => c.id)) + 1 : 1;
      const cueSheetWithService = { 
        ...newCueSheet, 
        id: newId, 
        service: getServiceName()
      };
      setCueSheets([...currentCueSheets, cueSheetWithService]);
      setNewCueSheet({ 
        date: '', 
        service: '', 
        equipment: {
          preacher_mic: '',
          leader_mic: '',
          keyboard: false,
          drums: false,
          stage_support: ''
        },
        schedule: [], 
        notes: '' 
      });
      setIsAddingNew(false);
    }
  };

  // 큐시트 스케줄 항목 추가/삭제/수정 함수들
  const handleAddScheduleItem = () => {
    if (selectedCueSheet) {
      const newSchedule = [...selectedCueSheet.schedule, { time: '', content: '', person: '', notes: '' }];
      setSelectedCueSheet({...selectedCueSheet, schedule: newSchedule});
    }
  };

  const handleDeleteScheduleItem = (index) => {
    if (selectedCueSheet) {
      const newSchedule = selectedCueSheet.schedule.filter((_, i) => i !== index);
      setSelectedCueSheet({...selectedCueSheet, schedule: newSchedule});
    }
  };

  const handleUpdateScheduleItem = (index, field, value) => {
    if (selectedCueSheet) {
      const newSchedule = [...selectedCueSheet.schedule];
      newSchedule[index] = {...newSchedule[index], [field]: value};
      setSelectedCueSheet({...selectedCueSheet, schedule: newSchedule});
    }
  };

  const handleDeleteCueSheet = (cueSheetId) => {
    const currentCueSheets = getCurrentCueSheets();
    const setCueSheets = getCurrentSetCueSheets();
    setCueSheets(currentCueSheets.filter(c => c.id !== cueSheetId));
    if (selectedCueSheet?.id === cueSheetId) {
      setSelectedCueSheet(null);
    }
  };

  return (
    <>
      <Helmet>
        <title>찬양팀 - 수정교회</title>
        <meta name="description" content="수정교회 찬양팀 악보 및 큐시트 관리 시스템" />
      </Helmet>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.headerContent}>
              <h1>찬양팀</h1>
              <p>악보와 큐시트를 관리하는 찬양팀 전용 시스템입니다.</p>
            </div>
            <div className={styles.headerButtons}>
              <button onClick={handleBackToHome} className={styles.backButton}>
                ← 홈으로
              </button>
              <button onClick={handleLogout} className={styles.logoutButton}>
                로그아웃
              </button>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          {/* 탭 네비게이션 */}
          <div className={styles.tabNavigation}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'songs' ? styles.active : ''}`}
              onClick={() => {
                setActiveTab('songs');
                setSelectedCueSheet(null);
                setIsEditing(false);
                setIsAddingNew(false);
              }}
            >
              🎵 악보 관리
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'sunday' ? styles.active : ''}`}
              onClick={() => {
                setActiveTab('sunday');
                setSelectedCueSheet(null);
                setIsEditing(false);
                setIsAddingNew(false);
              }}
            >
              📋 주일예배
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'wednesday' ? styles.active : ''}`}
              onClick={() => {
                setActiveTab('wednesday');
                setSelectedCueSheet(null);
                setIsEditing(false);
                setIsAddingNew(false);
              }}
            >
              📋 수요예배
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'friday' ? styles.active : ''}`}
              onClick={() => {
                setActiveTab('friday');
                setSelectedCueSheet(null);
                setIsEditing(false);
                setIsAddingNew(false);
              }}
            >
              📋 금요예배
            </button>
          </div>

          {/* 악보 관리 탭 */}
          {activeTab === 'songs' && (
            <div className={styles.mainLayout}>
              {/* 악보 목록 */}
              <div className={styles.itemList}>
                <div className={styles.listHeader}>
                  <h2>악보 목록</h2>
                  <button 
                    onClick={() => setIsAddingNew(true)}
                    className={styles.addButton}
                  >
                    + 새 곡 추가
                  </button>
                </div>

                <div className={styles.listContainer}>
                  {songs.map(song => (
                    <div 
                      key={song.id}
                      className={`${styles.listItem} ${selectedSong?.id === song.id ? styles.selected : ''}`}
                      onClick={() => handleSelectSong(song)}
                    >
                      <div className={styles.itemInfo}>
                        <h3>{song.title}</h3>
                        <p className={styles.itemDetails}>
                          {song.key}조 • {song.tempo} • {song.genre}
                        </p>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteSong(song.id);
                        }}
                        className={styles.deleteButton}
                      >
                        삭제
                      </button>
                    </div>
                  ))}
                </div>

                {/* 새 곡 추가 폼 */}
                {isAddingNew && (
                  <div className={styles.addForm}>
                    <h3>새 곡 추가</h3>
                    <div className={styles.formGrid}>
                      <input 
                        type="text" 
                        placeholder="곡 제목"
                        value={newSong.title}
                        onChange={(e) => setNewSong({...newSong, title: e.target.value})}
                      />
                      <input 
                        type="text" 
                        placeholder="조성 (예: G)"
                        value={newSong.key}
                        onChange={(e) => setNewSong({...newSong, key: e.target.value})}
                      />
                      <input 
                        type="text" 
                        placeholder="템포 (예: ♩ = 72)"
                        value={newSong.tempo}
                        onChange={(e) => setNewSong({...newSong, tempo: e.target.value})}
                      />
                      <input 
                        type="text" 
                        placeholder="장르"
                        value={newSong.genre}
                        onChange={(e) => setNewSong({...newSong, genre: e.target.value})}
                      />
                      <input 
                        type="url" 
                        placeholder="악보 링크"
                        value={newSong.sheetMusic}
                        onChange={(e) => setNewSong({...newSong, sheetMusic: e.target.value})}
                      />
                      <input 
                        type="url" 
                        placeholder="음원 링크"
                        value={newSong.audioLink}
                        onChange={(e) => setNewSong({...newSong, audioLink: e.target.value})}
                      />
                    </div>
                    <textarea 
                      placeholder="가사"
                      value={newSong.lyrics}
                      onChange={(e) => setNewSong({...newSong, lyrics: e.target.value})}
                      className={styles.textarea}
                    />
                    <textarea 
                      placeholder="특이사항"
                      value={newSong.notes}
                      onChange={(e) => setNewSong({...newSong, notes: e.target.value})}
                      className={styles.textarea}
                    />
                    <div className={styles.formActions}>
                      <button onClick={handleAddNewSong} className={styles.saveButton}>
                        추가
                      </button>
                      <button onClick={() => setIsAddingNew(false)} className={styles.cancelButton}>
                        취소
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 악보 상세 정보 */}
              <div className={styles.itemDetail}>
                {selectedSong ? (
                  <div className={styles.detailContent}>
                    <div className={styles.detailHeader}>
                      <h2>{selectedSong.title}</h2>
                      {!isEditing && (
                        <button onClick={handleEditSong} className={styles.editButton}>
                          수정
                        </button>
                      )}
                    </div>

                    <div className={styles.detailSections}>
                      <div className={styles.section}>
                        <h3>🎼 기본 정보</h3>
                        <div className={styles.infoGrid}>
                          <div className={styles.infoItem}>
                            <label>곡 제목</label>
                            {isEditing ? (
                              <input 
                                type="text" 
                                value={selectedSong.title}
                                onChange={(e) => setSelectedSong({...selectedSong, title: e.target.value})}
                              />
                            ) : (
                              <span>{selectedSong.title}</span>
                            )}
                          </div>
                          <div className={styles.infoItem}>
                            <label>조성</label>
                            {isEditing ? (
                              <input 
                                type="text" 
                                value={selectedSong.key}
                                onChange={(e) => setSelectedSong({...selectedSong, key: e.target.value})}
                              />
                            ) : (
                              <span>{selectedSong.key}</span>
                            )}
                          </div>
                          <div className={styles.infoItem}>
                            <label>템포</label>
                            {isEditing ? (
                              <input 
                                type="text" 
                                value={selectedSong.tempo}
                                onChange={(e) => setSelectedSong({...selectedSong, tempo: e.target.value})}
                              />
                            ) : (
                              <span>{selectedSong.tempo}</span>
                            )}
                          </div>
                          <div className={styles.infoItem}>
                            <label>장르</label>
                            {isEditing ? (
                              <input 
                                type="text" 
                                value={selectedSong.genre}
                                onChange={(e) => setSelectedSong({...selectedSong, genre: e.target.value})}
                              />
                            ) : (
                              <span>{selectedSong.genre}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className={styles.section}>
                        <h3>🔗 링크</h3>
                        <div className={styles.linkGrid}>
                          <div className={styles.infoItem}>
                            <label>악보 링크</label>
                            {isEditing ? (
                              <input 
                                type="url" 
                                value={selectedSong.sheetMusic}
                                onChange={(e) => setSelectedSong({...selectedSong, sheetMusic: e.target.value})}
                              />
                            ) : (
                              <a href={selectedSong.sheetMusic} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                📄 악보 보기
                              </a>
                            )}
                          </div>
                          <div className={styles.infoItem}>
                            <label>음원 링크</label>
                            {isEditing ? (
                              <input 
                                type="url" 
                                value={selectedSong.audioLink}
                                onChange={(e) => setSelectedSong({...selectedSong, audioLink: e.target.value})}
                              />
                            ) : (
                              <a href={selectedSong.audioLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                🎵 음원 듣기
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className={styles.section}>
                        <h3>📝 가사</h3>
                        {isEditing ? (
                          <textarea 
                            value={selectedSong.lyrics}
                            onChange={(e) => setSelectedSong({...selectedSong, lyrics: e.target.value})}
                            className={styles.lyricsTextarea}
                          />
                        ) : (
                          <pre className={styles.lyricsContent}>{selectedSong.lyrics}</pre>
                        )}
                      </div>

                      <div className={styles.section}>
                        <h3>💡 특이사항</h3>
                        {isEditing ? (
                          <textarea 
                            value={selectedSong.notes}
                            onChange={(e) => setSelectedSong({...selectedSong, notes: e.target.value})}
                            className={styles.notesTextarea}
                          />
                        ) : (
                          <p className={styles.notesContent}>{selectedSong.notes}</p>
                        )}
                      </div>
                    </div>

                    {isEditing && (
                      <div className={styles.editActions}>
                        <button onClick={handleSaveSong} className={styles.saveButton}>
                          저장
                        </button>
                        <button onClick={handleCancelEditSong} className={styles.cancelButton}>
                          취소
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={styles.noSelection}>
                    <h3>곡을 선택해 주세요</h3>
                    <p>왼쪽 목록에서 관리할 곡을 클릭하세요.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 큐시트 관리 탭들 */}
          {(activeTab === 'sunday' || activeTab === 'wednesday' || activeTab === 'friday') && (
            <div className={styles.mainLayout}>
              {/* 큐시트 목록 */}
              <div className={styles.itemList}>
                <div className={styles.listHeader}>
                  <h2>{activeTab === 'sunday' ? '주일예배' : activeTab === 'wednesday' ? '수요예배' : '금요예배'} 큐시트</h2>
                  <button 
                    onClick={() => setIsAddingNew(true)}
                    className={styles.addButton}
                  >
                    + 새 큐시트 추가
                  </button>
                </div>

                <div className={styles.listContainer}>
                  {getCurrentCueSheets().map(cueSheet => (
                    <div 
                      key={cueSheet.id}
                      className={`${styles.listItem} ${selectedCueSheet?.id === cueSheet.id ? styles.selected : ''}`}
                      onClick={() => handleSelectCueSheet(cueSheet)}
                    >
                      <div className={styles.itemInfo}>
                        <h3>{new Date(cueSheet.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' })}</h3>
                        <p className={styles.itemDetails}>{cueSheet.service}</p>
                        <p className={styles.songCount}>{cueSheet.schedule.length}개 순서</p>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteCueSheet(cueSheet.id);
                        }}
                        className={styles.deleteButton}
                      >
                        삭제
                      </button>
                    </div>
                  ))}
                </div>

                {/* 새 큐시트 추가 폼 */}
                {isAddingNew && (
                  <div className={styles.addForm}>
                    <h3>새 큐시트 추가</h3>
                    <div className={styles.formGrid}>
                      <input 
                        type="date" 
                        value={newCueSheet.date}
                        onChange={(e) => setNewCueSheet({...newCueSheet, date: e.target.value})}
                      />
                      <input 
                        type="text" 
                        placeholder={`예배명 (예: ${getServiceName()})`}
                        value={getServiceName()}
                        readOnly
                        className={styles.readOnlyInput}
                      />
                    </div>
                    
                    <div className={styles.equipmentSection}>
                      <h4>장비 및 담당자</h4>
                      <div className={styles.equipmentGrid}>
                        <div className={styles.equipmentItem}>
                          <label>설교자 마이크</label>
                          <input 
                            type="text" 
                            placeholder="무선마이크"
                            value={newCueSheet.equipment.preacher_mic}
                            onChange={(e) => setNewCueSheet({
                              ...newCueSheet, 
                              equipment: {...newCueSheet.equipment, preacher_mic: e.target.value}
                            })}
                          />
                        </div>
                        <div className={styles.equipmentItem}>
                          <label>인도자 마이크</label>
                          <input 
                            type="text" 
                            placeholder="핸드마이크"
                            value={newCueSheet.equipment.leader_mic}
                            onChange={(e) => setNewCueSheet({
                              ...newCueSheet, 
                              equipment: {...newCueSheet.equipment, leader_mic: e.target.value}
                            })}
                          />
                        </div>
                        <div className={styles.equipmentItem}>
                          <label>건반</label>
                          <input 
                            type="checkbox"
                            checked={newCueSheet.equipment.keyboard}
                            onChange={(e) => setNewCueSheet({
                              ...newCueSheet, 
                              equipment: {...newCueSheet.equipment, keyboard: e.target.checked}
                            })}
                          />
                        </div>
                        <div className={styles.equipmentItem}>
                          <label>드럼</label>
                          <input 
                            type="checkbox"
                            checked={newCueSheet.equipment.drums}
                            onChange={(e) => setNewCueSheet({
                              ...newCueSheet, 
                              equipment: {...newCueSheet.equipment, drums: e.target.checked}
                            })}
                          />
                        </div>
                        <div className={styles.equipmentItem}>
                          <label>무대지원팀</label>
                          <input 
                            type="text" 
                            placeholder="특이사항"
                            value={newCueSheet.equipment.stage_support}
                            onChange={(e) => setNewCueSheet({
                              ...newCueSheet, 
                              equipment: {...newCueSheet.equipment, stage_support: e.target.value}
                            })}
                          />
                        </div>
                      </div>
                    </div>
                    <textarea 
                      placeholder="특이사항"
                      value={newCueSheet.notes}
                      onChange={(e) => setNewCueSheet({...newCueSheet, notes: e.target.value})}
                      className={styles.textarea}
                    />
                    <div className={styles.formActions}>
                      <button onClick={handleAddNewCueSheet} className={styles.saveButton}>
                        추가
                      </button>
                      <button onClick={() => setIsAddingNew(false)} className={styles.cancelButton}>
                        취소
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 큐시트 상세 정보 */}
              <div className={styles.itemDetail}>
                {selectedCueSheet ? (
                  <div className={styles.detailContent}>
                    <div className={styles.detailHeader}>
                      <div className={styles.cueSheetTitle}>
                        <h2>{selectedCueSheet.service} Cue-Sheet</h2>
                        <h3>{new Date(selectedCueSheet.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' })}</h3>
                      </div>
                      {!isEditing && (
                        <button onClick={handleEditCueSheet} className={styles.editButton}>
                          수정
                        </button>
                      )}
                    </div>

                    <div className={styles.detailSections}>
                      {/* 장비 및 담당자 섹션 */}
                      <div className={styles.section}>
                        <h3>🎤 장비 및 담당자</h3>
                        <div className={styles.equipmentDisplay}>
                          <div className={styles.equipmentRow}>
                            <div className={styles.equipmentGroup}>
                              <strong>마이크:</strong>
                              <span>설교자 - {isEditing ? (
                                <input 
                                  type="text" 
                                  value={selectedCueSheet.equipment.preacher_mic}
                                  onChange={(e) => setSelectedCueSheet({
                                    ...selectedCueSheet, 
                                    equipment: {...selectedCueSheet.equipment, preacher_mic: e.target.value}
                                  })}
                                  className={styles.inlineInput}
                                />
                              ) : selectedCueSheet.equipment.preacher_mic}</span>
                              <span>인도자 - {isEditing ? (
                                <input 
                                  type="text" 
                                  value={selectedCueSheet.equipment.leader_mic}
                                  onChange={(e) => setSelectedCueSheet({
                                    ...selectedCueSheet, 
                                    equipment: {...selectedCueSheet.equipment, leader_mic: e.target.value}
                                  })}
                                  className={styles.inlineInput}
                                />
                              ) : selectedCueSheet.equipment.leader_mic}</span>
                            </div>
                          </div>
                          <div className={styles.equipmentRow}>
                            <div className={styles.equipmentGroup}>
                              <strong>반주:</strong>
                              <span>건반 {isEditing ? (
                                <input 
                                  type="checkbox"
                                  checked={selectedCueSheet.equipment.keyboard}
                                  onChange={(e) => setSelectedCueSheet({
                                    ...selectedCueSheet, 
                                    equipment: {...selectedCueSheet.equipment, keyboard: e.target.checked}
                                  })}
                                />
                              ) : (selectedCueSheet.equipment.keyboard ? '✓' : '○')}</span>
                              <span>드럼 {isEditing ? (
                                <input 
                                  type="checkbox"
                                  checked={selectedCueSheet.equipment.drums}
                                  onChange={(e) => setSelectedCueSheet({
                                    ...selectedCueSheet, 
                                    equipment: {...selectedCueSheet.equipment, drums: e.target.checked}
                                  })}
                                />
                              ) : (selectedCueSheet.equipment.drums ? '✓' : '○')}</span>
                            </div>
                          </div>
                          <div className={styles.equipmentRow}>
                            <div className={styles.equipmentGroup}>
                              <strong>무대지원팀:</strong>
                              {isEditing ? (
                                <input 
                                  type="text" 
                                  value={selectedCueSheet.equipment.stage_support}
                                  onChange={(e) => setSelectedCueSheet({
                                    ...selectedCueSheet, 
                                    equipment: {...selectedCueSheet.equipment, stage_support: e.target.value}
                                  })}
                                  className={styles.inlineInput}
                                  placeholder="특이사항"
                                />
                              ) : selectedCueSheet.equipment.stage_support}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 예배 순서 섹션 */}
                      <div className={styles.section}>
                        <div className={styles.scheduleHeader}>
                          <h3>📋 예배 순서</h3>
                          {isEditing && (
                            <button onClick={handleAddScheduleItem} className={styles.addScheduleButton}>
                              + 순서 추가
                            </button>
                          )}
                        </div>
                        <div className={styles.cueSheetTable}>
                          <div className={styles.tableHeader}>
                            <span>시간</span>
                            <span>내용</span>
                            <span>담당자</span>
                            <span>비고</span>
                            {isEditing && <span>작업</span>}
                          </div>
                          {selectedCueSheet.schedule.map((item, index) => (
                            <div key={index} className={styles.tableRow}>
                              {isEditing ? (
                                <>
                                  <input 
                                    type="text" 
                                    value={item.time}
                                    onChange={(e) => handleUpdateScheduleItem(index, 'time', e.target.value)}
                                    className={styles.tableInput}
                                    placeholder="11:00"
                                  />
                                  <input 
                                    type="text" 
                                    value={item.content}
                                    onChange={(e) => handleUpdateScheduleItem(index, 'content', e.target.value)}
                                    className={styles.tableInput}
                                    placeholder="예배 내용"
                                  />
                                  <input 
                                    type="text" 
                                    value={item.person}
                                    onChange={(e) => handleUpdateScheduleItem(index, 'person', e.target.value)}
                                    className={styles.tableInput}
                                    placeholder="담당자"
                                  />
                                  <input 
                                    type="text" 
                                    value={item.notes}
                                    onChange={(e) => handleUpdateScheduleItem(index, 'notes', e.target.value)}
                                    className={styles.tableInput}
                                    placeholder="비고"
                                  />
                                  <button 
                                    onClick={() => handleDeleteScheduleItem(index)}
                                    className={styles.deleteScheduleButton}
                                  >
                                    삭제
                                  </button>
                                </>
                              ) : (
                                <>
                                  <span>{item.time}</span>
                                  <span>{item.content}</span>
                                  <span>{item.person}</span>
                                  <span>{item.notes}</span>
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={styles.section}>
                        <h3>📝 특이사항</h3>
                        {isEditing ? (
                          <textarea 
                            value={selectedCueSheet.notes}
                            onChange={(e) => setSelectedCueSheet({...selectedCueSheet, notes: e.target.value})}
                            className={styles.notesTextarea}
                          />
                        ) : (
                          <p className={styles.notesContent}>{selectedCueSheet.notes}</p>
                        )}
                      </div>
                    </div>

                    {isEditing && (
                      <div className={styles.editActions}>
                        <button onClick={handleSaveCueSheet} className={styles.saveButton}>
                          저장
                        </button>
                        <button onClick={handleCancelEditCueSheet} className={styles.cancelButton}>
                          취소
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={styles.noSelection}>
                    <h3>큐시트를 선택해 주세요</h3>
                    <p>왼쪽 목록에서 관리할 큐시트를 클릭하세요.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 