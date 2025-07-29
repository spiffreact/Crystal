import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const sampleVideos = [
  {
    id: "3",
    title: '수요 예배 - 2025년 7월 23일',
    category: '수요',
    preacher: '김모세',
    date: '2025-07-23',
    thumbnail: 'https://img.youtube.com/vi/MEQ3G8H8k6A/maxresdefault.jpg',
  },
  {
    id: "2",
    title: '주일 예배 - 2025년 7월 20일',
    category: '주일',
    preacher: '바링고차',
    date: '2025-07-20',
    thumbnail: 'https://img.youtube.com/vi/34QobpblN20/maxresdefault.jpg',
  },
  {
    id: "1",
    title: '주일 예배 - 2025년 7월 13일',
    category: '주일',
    preacher: '김광호',
    date: '2025-07-13',
    thumbnail: 'https://img.youtube.com/vi/F1mw5Pe4CZA/maxresdefault.jpg',
  },
  {
    id: "5",
    title: '영어 예배 - 2025년 6월 20일',
    category: '영어',
    preacher: 'Moses Kim',
    date: '2025-06-20',
    thumbnail: '',
  },
  {
    id: "4",
    title: '주일 예배 - 2025년 7월 27일',
    category: '주일',
    preacher: '김광호',
    date: '2025-07-27',
    thumbnail: 'https://img.youtube.com/vi/ZLbXoZB8Yqs/maxresdefault.jpg',
  },
];

// 자동 날짜순 정렬 함수 - 최신 날짜가 맨 위로
const sortVideosByDate = (videos) => {
  return [...videos].sort((a, b) => {
    // 날짜를 Date 객체로 변환하여 비교
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    // 내림차순 정렬 (최신이 위로)
    return dateB - dateA;
  });
};

const categories = ['전체', '주일', '수요', '금요', '새벽', '영어'];

export default function WorshipVideos() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');

  // 🔄 자동으로 날짜순 정렬된 영상 목록 생성
  const sortedVideos = sortVideosByDate(sampleVideos);

  // 필터링된 영상 목록
  const filteredVideos = sortedVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(search.toLowerCase()) ||
                         video.preacher.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === '전체' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>예배 영상 - 수정침례교회</title>
        <meta name="description" content="수정침례교회의 주일예배, 수요예배, 금요기도회, 새벽기도회 영상을 온라인으로 시청하실 수 있습니다." />
        <meta name="keywords" content="수정침례교회 예배영상, 주일예배, 수요예배, 설교, 김광호목사" />
        <link rel="canonical" href="https://crystal-church.netlify.app/worship/videos" />
      </Helmet>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 32 }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16 }}>예배 영상</h1>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: 20,
                border: 'none',
                background: selectedCategory === cat ? '#1976d2' : '#eee',
                color: selectedCategory === cat ? '#fff' : '#333',
                fontWeight: selectedCategory === cat ? 700 : 400,
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
          {filteredVideos.length === 0 && <div>검색 결과가 없습니다.</div>}
          {filteredVideos.map(video => (
            <div key={video.id} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 12 }}>
              <a href={`/worship/videos/${video.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img 
                  src={video.thumbnail || '/youtube.png'} 
                  alt={video.title} 
                  style={{ 
                    width: '100%', 
                    height: '120px', 
                    borderRadius: 8, 
                    marginBottom: 8,
                    objectFit: 'cover',
                    backgroundColor: '#f5f5f5'
                  }} 
                />
                <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 4 }}>{video.title}</div>
                <div style={{ color: '#1976d2', fontWeight: 500 }}>{video.preacher}</div>
                <div style={{ color: '#888', fontSize: '0.95rem' }}>{video.date}</div>
              </a>
            </div>
          ))}
        </div>
        {/* 페이지네이션 등 추가 가능 */}
      </div>
    </>
  );
} 