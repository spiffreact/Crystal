import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// 샘플 데이터 (실제 서비스에서는 API 등에서 받아옴)
const sampleVideos = [
  {
    id: '1',
    title: '주일 예배 - 2025년 7월 6일',
    category: '주일',
    preacher: '김광호',
    date: '2025-07-06',
    youtubeId: 'dQw4w9WgXcQ',
    description: '2025년 7월 6일 주일 예배 영상입니다.'
  },
  {
    id: '2',
    title: '수요 예배 - 2025년 7월 2일',
    category: '수요',
    preacher: '김모세',
    date: '2025-07-02',
    youtubeId: '9bZkp7q19f0',
    description: '2025년 7월 2일 수요 예배 영상입니다.'
  },
  {
    id: '3',
    title: '금요 예배 - 2025년 6월 27일',
    category: '금요',
    preacher: '김광호',
    date: '2025-06-27',
    youtubeId: '3JZ_D3ELwOQ',
    description: '2025년 6월 27일 금요 예배 영상입니다.'
  },
  {
    id: '5',
    title: '영어 예배 - 2025년 6월 20일',
    category: '영어',
    preacher: 'Moses Kim',
    date: '2025-06-20',
    youtubeId: 'OPf0YbXqDm0',
    description: '2025년 6월 20일 영어 예배 영상입니다.'
  },
];

export default function WorshipVideoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = sampleVideos.find(v => v.id === id);

  if (!video) return <div style={{ padding: 32 }}>영상을 찾을 수 없습니다.</div>;

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 32 }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 16, padding: '6px 18px', borderRadius: 8, border: '1px solid #ccc', background: '#f5f5f5', cursor: 'pointer' }}>← 목록으로</button>
      <h1 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: 12 }}>{video.title}</h1>
      <div style={{ marginBottom: 18, color: '#1976d2', fontWeight: 500 }}>{video.preacher} | {video.date} | {video.category}</div>
      <div style={{ marginBottom: 24 }}>
        <iframe
          width="100%"
          height="390"
          // src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div style={{ fontSize: '1.1rem', color: '#333', marginBottom: 24 }}>{video.description}</div>
    </div>
  );
} 