import React from 'react';
import { Link } from 'react-router-dom';
import styles from './QuickLinksGridPage.module.css';

const notices = [
  {
    title: '2025년 7월 공지사항',
    description: '7월 교회 일정 및 공지사항',
    image: '/thekingofkings.jpg',
    href: 'https://accurate-spinach-48b.notion.site/22fe40ba5bcd80fc987bc3fd5094c69d',
    external: false,
  },
  // {
  //   title: '2025년 2월 공지사항',
  //   description: '2월 교회 일정 및 공지사항',
  //   image: '/banner2.jpg',
  //   href: '#',
  //   external: false,
  // },
  // {
  //   title: '2025년 3월 공지사항',
  //   description: '3월 교회 일정 및 공지사항',
  //   image: '/banner4.jpg',
  //   href: '#',
  //   external: false,
  // },
  // {
  //   title: '2025년 4월 공지사항',
  //   description: '4월 교회 일정 및 공지사항',
  //   image: '/banner5.jpg',
  //   href: '#',
  //   external: false,
  // },
];

export default function Notice() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>공지사항</h1>
      <div className={styles.grid}>
        {notices.map((notice, index) => (
          notice.external ? (
            <a
              key={index}
              href={notice.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardImage} style={{ backgroundImage: `url(${notice.image})` }}></div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{notice.title}</h2>
                {notice.description && <p className={styles.cardDescription}>{notice.description}</p>}
                <span className={styles.cardLinkText}>바로가기</span>
              </div>
            </a>
          ) : (
            <Link
              key={index}
              to={notice.href}
              className={styles.card}
            >
              <div className={styles.cardImage} style={{ backgroundImage: `url(${notice.image})` }}></div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{notice.title}</h2>
                {notice.description && <p className={styles.cardDescription}>{notice.description}</p>}
                <span className={styles.cardLinkText}>바로가기</span>
              </div>
            </Link>
          )
        ))}
      </div>
    </div>
  );
} 