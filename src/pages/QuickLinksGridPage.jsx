import React from 'react';
import { Link } from 'react-router-dom';
import styles from './QuickLinksGridPage.module.css';

const links = [
  {
    title: '월요일 QT',
    description: '하루 묵상 - 월요일 말씀',
    image: '/bible.jpg',
    href: 'https://accurate-spinach-48b.notion.site/5-QT-201e40ba5bcd80afbad5c8f16a83a863',
    external: false,
  },
  {
    title: '화요일 QT',
    description: '하루 묵상 - 화요일 말씀',
    image: '/bible.jpg',
    href: 'https://accurate-spinach-48b.notion.site/6-QT-219e40ba5bcd80bba83ed3f299f9f4f0',
    external: false,
  },
  {
    title: '수요일 QT',
    description: '하루 묵상 - 수요일 말씀',
     image: '/bible.jpg',
    href: 'https://accurate-spinach-48b.notion.site/7-QT-228e40ba5bcd80a1b6fdd50e3c6ccb91',
    external: false,
  },
  {
    title: '목요일 QT',
    description: '하루 묵상 - 목요일 말씀',
     image: '/bible.jpg',
    href: 'https://accurate-spinach-48b.notion.site/7-QT-233e40ba5bcd800d8734e25be280bddf',
    external: false,
  },
  {
    title: '금요일 QT',
    description: '하루 묵상 - 금요일 말씀',
     image: '/bible.jpg',
    href: '#',
    external: false,
  },
  {
    title: '토요일 QT',
    description: '하루 묵상 - 토요일 말씀',
     image: '/bible.jpg',
    href: '#',
    external: false,
  },
  {
    title: '주일 QT',
    description: '하루 묵상 - 주일 말씀',
     image: '/bible.jpg',
    href: '#',
    external: false,
  },
];

export default function QuickLinksGridPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>매일 아침 만나는 QT</h1>
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