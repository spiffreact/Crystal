import React from 'react';
import { Link } from 'react-router-dom';

const cards = [
  {
    title: 'Instagram',
    image: '/banner1.jpg',
    link: '#',
    description: '인스타그램',
    external: true,
  },
  {
    title: '공지',
    image: '/banner2.jpg',
    link: '/notice',
    description: '공지사항',
    external: false,
  },
  {
    title: '유튜브 채널',
    image: '/youtube.png',
    link: '#',
    description: '다음세대 예배 공식 유튜브 채널',
    external: true,
  },
  {
    title: '바이블스터디',
    image: '/bible.jpg',
    link: '/elementary-bible-study',
    description: '바이블스터디 자료',
    external: false,
  }
];

export default function ElementaryGroup() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '24px',
      padding: '32px',
      background: '#f5f7fa'
    }}>
      {cards.map((card, idx) => (
        <div key={idx} style={{
          background: '#fff',
          borderRadius: '16px',
          boxShadow: '0 2px 12px #0002',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          <img src={card.image} alt={card.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
          <div style={{ padding: '20px', flex: 1 }}>
            <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.5em 0' }}>{card.title}</h3>
            <p style={{ color: '#555', marginBottom: '1em' }}>{card.description}</p>
            {card.external ? (
              <a href={card.link} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '10px 24px',
                  background: '#1976d2',
                  color: '#fff',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 600
                }}>
                바로가기
              </a>
            ) : (
              <Link to={card.link}
                style={{
                  display: 'inline-block',
                  padding: '10px 24px',
                  background: '#1976d2',
                  color: '#fff',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 600
                }}>
                바로가기
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 