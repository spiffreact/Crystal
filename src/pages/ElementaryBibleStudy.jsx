import React from 'react';
import { Link } from 'react-router-dom';
import styles from './QuickLinksGridPage.module.css';

const links = [
  {
    title: '7월20일 바이블스터디',
    description: '바이블스터디 자료',
    image: '/bible2.jpg',
    href: 'https://accurate-spinach-48b.notion.site/14-1-12-212e40ba5bcd805a93dbc4fc0c333c1d',
    external: true,
  },
  {
    title: '7월27일 바이블스터디',
    description: '바이블스터디 자료',
    image: '/bible2.jpg',
    href: 'https://www.notion.so/14-13-16-212e40ba5bcd8089b934e3019950363e',
    external: true,
  },
  {
    title: '8월3일 바이블스터디',
    description: '바이블스터디 자료',
    image: '/bible2.jpg',
    href: '#',
    external: false,
  },
  {
    title: '8월10일 바이블스터디',
    description: '바이블스터디 자료',
    image: '/bible2.jpg',
    href: '#',
    external: false,
  },
  {
    title: '8월17일 바이블스터디',
    description: '바이블스터디 자료',
    image: '/bible2.jpg',
    href: '#',
    external: false,
  },
  {
    title: '8월24일 바이블스터디',
    description: '바이블스터디 자료',
    image: '/bible2.jpg',
    href: '#',
    external: false,
  },
];

export default function ElementaryBibleStudy() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>바이블스터디 자료</h1>
      <div className={styles.grid}>
        {links.map((link, index) => (
          link.external ? (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardImage} style={{ backgroundImage: `url(${link.image})` }}></div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{link.title}</h2>
                {link.description && <p className={styles.cardDescription}>{link.description}</p>}
                <span className={styles.cardLinkText}>바로가기</span>
              </div>
            </a>
          ) : (
            <Link
              key={index}
              to={link.href}
              className={styles.card}
            >
              <div className={styles.cardImage} style={{ backgroundImage: `url(${link.image})` }}></div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{link.title}</h2>
                {link.description && <p className={styles.cardDescription}>{link.description}</p>}
                <span className={styles.cardLinkText}>바로가기</span>
              </div>
            </Link>
          )
        ))}
      </div>
    </div>
  );
} 