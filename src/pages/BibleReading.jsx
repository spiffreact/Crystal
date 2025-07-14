import React, { useState, useEffect } from 'react';

const IMAGE_URL = '/bible-reading-table-1.jpg';
const IMAGE_URL2 = '/bible-reading-table-2.jpg';

export default function BibleReading() {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]); // 등록된 이름 리스트
  const [selectedName, setSelectedName] = useState('');
  const [progress, setProgress] = useState('');
  const [records, setRecords] = useState({}); // { 이름: {progress, date} }
  const [showImages, setShowImages] = useState(false);

  // localStorage에서 불러오기
  useEffect(() => {
    const savedNames = localStorage.getItem('bibleNames');
    if (savedNames) setNames(JSON.parse(savedNames));
    const savedRecords = localStorage.getItem('bibleRecordsByName');
    if (savedRecords) setRecords(JSON.parse(savedRecords));
  }, []);

  // 이름 등록
  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    if (!names.includes(name)) {
      const newNames = [...names, name];
      setNames(newNames);
      localStorage.setItem('bibleNames', JSON.stringify(newNames));
    }
    setSelectedName(name);
    setName('');
  };

  // 기록 추가/업데이트 (한 명당 1개만)
  const handleProgressSubmit = (e) => {
    e.preventDefault();
    if (!selectedName || !progress.trim()) return;
    const newRecord = { progress, date: new Date().toLocaleString() };
    const newRecords = {
      ...records,
      [selectedName]: newRecord
    };
    setRecords(newRecords);
    localStorage.setItem('bibleRecordsByName', JSON.stringify(newRecords));
    setProgress('');
  };

  // 기록 삭제
  const handleDelete = () => {
    if (!selectedName) return;
    const newRecords = { ...records };
    delete newRecords[selectedName];
    setRecords(newRecords);
    localStorage.setItem('bibleRecordsByName', JSON.stringify(newRecords));
  };

  // 이름 삭제
  const handleDeleteName = (delName) => {
    const newNames = names.filter(n => n !== delName);
    setNames(newNames);
    localStorage.setItem('bibleNames', JSON.stringify(newNames));
    const newRecords = { ...records };
    delete newRecords[delName];
    setRecords(newRecords);
    localStorage.setItem('bibleRecordsByName', JSON.stringify(newRecords));
    if (selectedName === delName) setSelectedName('');
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16 }}>성경읽기표</h1>
      <button
        onClick={() => setShowImages(v => !v)}
        style={{
          padding: '10px 28px',
          background: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          fontWeight: 700,
          fontSize: '1.1rem',
          marginBottom: 24,
          cursor: 'pointer'
        }}
      >
        성경읽기표 보기
      </button>
      {showImages && (
        <div style={{
          width: '100vw',
          maxWidth: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          marginBottom: 32
        }}>
          <img src={IMAGE_URL} alt="성경읽기표1" style={{ width: '100vw', minWidth: 320, objectFit: 'cover', borderRadius: 0 }} />
          <img src={IMAGE_URL2} alt="성경읽기표2" style={{ width: '100vw', minWidth: 320, objectFit: 'cover', borderRadius: 0 }} />
        </div>
      )}
      {/* 이름 등록 폼 */}
      <form onSubmit={handleNameSubmit} style={{ marginBottom: 24, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="이름 등록"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc', minWidth: 120 }}
        />
        <button type="submit" style={{ padding: '8px 18px', borderRadius: 6, background: '#1976d2', color: '#fff', border: 'none', fontWeight: 600 }}>
          이름 추가/선택
        </button>
      </form>
      {/* 이름 리스트 */}
      <div style={{ marginBottom: 32, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {names.map(n => (
          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <button
              onClick={() => setSelectedName(n)}
              style={{
                padding: '6px 16px',
                borderRadius: 20,
                border: selectedName === n ? '2px solid #1976d2' : '1px solid #ccc',
                background: selectedName === n ? '#1976d2' : '#f5f7fa',
                color: selectedName === n ? '#fff' : '#222',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '1rem',
                marginRight: 2
              }}
            >
              {n}
            </button>
            <button
              onClick={() => handleDeleteName(n)}
              style={{
                background: '#e53935',
                color: '#fff',
                border: 'none',
                borderRadius: 10,
                padding: '2px 8px',
                cursor: 'pointer',
                fontSize: '0.95em'
              }}
              title="이름 삭제"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      {/* 선택된 이름의 기록 추가/리스트 */}
      {selectedName && (
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: 12 }}>{selectedName}님의 성경읽기 기록</h2>
          <form onSubmit={handleProgressSubmit} style={{ marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="읽은 부분 (예: 창세기 1~10장)"
              value={progress}
              onChange={e => setProgress(e.target.value)}
              style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc', minWidth: 180 }}
            />
            <button type="submit" style={{ padding: '8px 18px', borderRadius: 6, background: '#1976d2', color: '#fff', border: 'none', fontWeight: 600 }}>
              {records[selectedName] ? '기록 수정' : '기록 추가'}
            </button>
          </form>
          {records[selectedName] ? (
            <div style={{ background: '#f8f9fa', borderRadius: 6, padding: 10, position: 'relative', marginBottom: 10 }}>
              <span style={{ color: '#1976d2', fontWeight: 600 }}>{records[selectedName].progress}</span>
              <span style={{ float: 'right', color: '#aaa', fontSize: '0.95em' }}>{records[selectedName].date}</span>
              <button
                onClick={handleDelete}
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  background: '#e53935',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  padding: '2px 10px',
                  cursor: 'pointer',
                  fontSize: '0.95em'
                }}
                title="삭제"
              >
                삭제
              </button>
            </div>
          ) : (
            <div style={{ color: '#888' }}>아직 기록이 없습니다.</div>
          )}
        </div>
      )}
    </div>
  );
} 