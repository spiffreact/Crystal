import React from 'react';
import { Link } from 'react-router-dom';
import styles from './QuickLinksGridPage.module.css';

const links = [
  {
    title: '8월 QT',
    description: '하루 묵상 - 생명의 말씀',
    image: '/bible.jpg',
    href: 'https://accurate-spinach-48b.notion.site/8-QT-Week1-245e40ba5bcd8034aca5eb1001a27758',
    external: false,
  },
  // {
  //   title: '7월19일 QT',
  //   description: '하루 묵상 - 생명의 말씀',
  //   image: '/bible.jpg',
  //   href: 'https://accurate-spinach-48b.notion.site/6-QT-219e40ba5bcd80bba83ed3f299f9f4f0',
  //   external: false,
  // },
  // {
  //   title: '7월20일 QT',
  //   description: '하루 묵상 - 생명의 말씀',
  //   image: '/bible.jpg',
  //   href: 'https://accurate-spinach-48b.notion.site/7-QT-228e40ba5bcd80a1b6fdd50e3c6ccb91',
  //   external: false,
  // },
  // {
  //   title: '7월21일 QT',
  //   description: '하루 묵상 - 생명의 말씀',
  //   image: '/bible.jpg',
  //   href: 'https://accurate-spinach-48b.notion.site/7-QT-233e40ba5bcd800d8734e25be280bddf',
  //   external: false,
  // },
  // {
  //   title: '7월22일 QT',
  //   description: '하루 묵상 - 생명의 말씀',
  //   image: '/bible.jpg',
  //   href: 'https://accurate-spinach-48b.notion.site/7-22-QT-238e40ba5bcd80da9553e18dd8cb1872',
  //   external: false,
  // },
  // {
  //   title: '7월24일 QT',
  //   description: '하루 묵상 - 생명의 말씀',
  //   image: '/bible.jpg',
  //   href: 'https://accurate-spinach-48b.notion.site/7-24-QT-239e40ba5bcd8000a49be873ad866bab?source=copy_link',
  //   external: false,
  // },
  {
    title: '주일 QT',
    description: '하루 묵상 - 생명의 말씀',
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