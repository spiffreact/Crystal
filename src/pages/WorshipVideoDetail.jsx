import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// 샘플 데이터 (실제 서비스에서는 API 등에서 받아옴)
const sampleVideos = [
  {
    id: '7',
    title: '주일 예배 - 2025년 8월 3일',
    category: '주일',
    preacher: '김광호',
    date: '2025-08-03',
    youtubeId: '8SJpiGdQb1E',
    description: '2025년 8월 3일 주일 예배 영상입니다.'
  },
  {
    id: '8',
    title: '금요 예배 - 2025년 8월 1일',
    category: '금요',
    preacher: '바링고차',
    date: '2025-08-01',
    youtubeId: 'JKHv_2czmCc',
    description: '2025년 8월 1일 금요 예배 영상입니다.'
  },
  {
    id: '6',
    title: '수요 예배 - 2025년 7월 30일',
    category: '수요',
    preacher: '김모세',
    date: '2025-07-30',
    youtubeId: 'iMzzxgLi6BI',
    description: '2025년 7월 30일 수요 예배 영상입니다.'
  },
  {
    id: '3',
    title: '수요 예배 - 2025년 7월 23일',
    category: '수요',
    preacher: '김모세',
    date: '2025-07-23',
    youtubeId: 'MEQ3G8H8k6A',
    description: '2025년 7월 23일 수요 예배 영상입니다.'
  },
  {
    id: '2',
    title: '주일 예배 - 2025년 7월 20일',
    category: '주일',
    preacher: '바링고차',
    date: '2025-07-20',
    youtubeId: '34QobpblN20',
    description: '2025년 7월 20일 주일 예배 영상입니다.'
  },
  {
    id: '1',
    title: '주일 예배 - 2025년 7월 13일',
    category: '주일',
    preacher: '김광호',
    date: '2025-07-13',
    youtubeId: 'F1mw5Pe4CZA',
    description: '2025년 7월 13일 주일 예배 영상입니다.'
  },
  {
    id: '5',
    title: '영어 예배 - 2025년 6월 20일',
    category: '영어',
    preacher: 'Moses Kim',
    date: '2025-06-20',
    youtubeId: '',
    description: '2025년 6월 20일 영어 예배 영상입니다.'
  },
  {
    id: '4',
    title: '주일 예배 - 2025년 7월 27일',
    category: '주일',
    preacher: '김광호',
    date: '2025-07-27',
    youtubeId: 'ZLbXoZB8Yqs',
    description: '2025년 7월 27일 주일 예배 영상입니다.'
  },
];

// 자동 날짜순 정렬 함수 - 최신 날짜가 맨 위로
const sortVideosByDate = (videos) => {
  return [...videos].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // 내림차순 정렬 (최신이 위로)
  });
};

// 정렬된 비디오 목록
const sortedVideos = sortVideosByDate(sampleVideos);

export default function WorshipVideoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = sortedVideos.find(v => v.id === id);

  if (!video) return <div style={{ padding: 32 }}>영상을 찾을 수 없습니다.</div>;

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 32 }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 16, padding: '6px 18px', borderRadius: 8, border: '1px solid #ccc', background: '#f5f5f5', cursor: 'pointer' }}>← 목록으로</button>
      <h1 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: 12 }}>{video.title}</h1>
      <div style={{ marginBottom: 18, color: '#1976d2', fontWeight: 500 }}>{video.preacher} | {video.date} | {video.category}</div>
      <div style={{ 
        marginBottom: 24,
        width: '100%',
        aspectRatio: '16/9', // 반응형 비율
        background: '#000'
      }}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display: 'block', width: '100%', height: '100%' }}
        ></iframe>
      </div>
      <div style={{ fontSize: '1.1rem', color: '#333', marginBottom: 24 }}>{video.description}</div>
    </div>
  );
} 