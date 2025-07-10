import styles from './QuickLinks.module.css';

const links = [
  {
    title: '주보 · 수정신문',
    icon: '/icon-news.svg',
    href: '#',
    bg: '#0a2a5c',
  },
  {
    title: '헌금 안내',
    icon: '/icon-heart.svg',
    href: '#',
    bg: '#0a2a5c',
  },
  {
    title: '',
    icon: '', // 아이콘 없음
    href: '#',
    bg: 'url(/youtube.png) center/cover',
  },
  {
    title: '기독교 OTT 플랫폼 퐁당',
    icon: '/icon-ott.svg',
    href: '#',
    bg: '#1a1a3c',
  },
];

export default function QuickLinks() {
  return (
    <div className={styles.grid}>
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          className={styles.card}
          style={{ background: link.bg }}
        >
          {link.icon && <img src={link.icon} alt="" className={styles.icon} />}
          <span className={styles.title}>{link.title}</span>
        </a>
      ))}
    </div>
  );
}
