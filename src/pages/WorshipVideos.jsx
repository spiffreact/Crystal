import React, { useState } from 'react';

const sampleVideos = [
  {
    id: 1,
    title: '주일 예배 - 2025년 7월 6일',
    category: '주일',
    preacher: '김광호',
    date: '2025-07-06',
    thumbnail: '',
  },
  {
    id: 2,
    title: '수요 예배 - 2025년 7월 2일',
    category: '수요',
    preacher: '김모세',
    date: '2025-07-02',
    thumbnail: '',
  },
  {
    id: 3,
    title: '금요 예배 - 2025년 6월 27일',
    category: '금요',
    preacher: '김광호',
    date: '2025-06-27',
    thumbnail: '',
  },
  {
    id: 5,
    title: '영어 예배 - 2025년 6월 20일',
    category: '영어',
    preacher: 'Moses Kim',
    date: '2025-06-20',
    thumbnail: '',
  },
];

const categories = ['전체', '주일', '수요', '금요', '새벽', '영어'];

export default function WorshipVideos() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('전체');

  const filtered = sampleVideos.filter(
    v => (category === '전체' || v.category === category) && v.title.includes(search)
  );

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 32 }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16 }}>예배 영상</h1>
      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              padding: '8px 18px',
              borderRadius: 20,
              border: 'none',
              background: category === cat ? '#1976d2' : '#eee',
              color: category === cat ? '#fff' : '#333',
              fontWeight: category === cat ? 700 : 400,
              cursor: 'pointer',
            }}
          >
            {cat}
          </button>
        ))}
        <input
          type="text"
          placeholder="영상 제목 검색"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ marginLeft: 'auto', padding: 8, borderRadius: 8, border: '1px solid #ccc', minWidth: 180 }}
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
        {filtered.length === 0 && <div>검색 결과가 없습니다.</div>}
        {filtered.map(video => (
          <div key={video.id} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 12 }}>
            <a href={`/worship/videos/${video.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={video.thumbnail} alt={video.title} style={{ width: '100%', borderRadius: 8, marginBottom: 8 }} />
              <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 4 }}>{video.title}</div>
              <div style={{ color: '#1976d2', fontWeight: 500 }}>{video.preacher}</div>
              <div style={{ color: '#888', fontSize: '0.95rem' }}>{video.date}</div>
            </a>
          </div>
        ))}
      </div>
      {/* 페이지네이션 등 추가 가능 */}
    </div>
  );
} 