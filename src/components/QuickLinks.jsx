import { FaCross } from 'react-icons/fa';
import { FaBookBible } from 'react-icons/fa6';
import { TbCircleLetterNFilled } from 'react-icons/tb';
import styles from './QuickLinks.module.css';

const links = [
  {
    title: '주보 · 수정신문',
    icon: TbCircleLetterNFilled, // React 아이콘 컴포넌트
    href: '#',
    bg: '#0a2a5c',
  },
  {
    title: '헌금 안내',
    icon: FaCross,
    href: '/offering',
    bg: '#0a2a5c',
  },
  {
    title: '',
    icon: '', // 아이콘 없음
    href: 'https://www.youtube.com/@%EC%88%98%EC%A0%95%EC%B9%A8%EB%A1%80%EA%B5%90%ED%9A%8C-m1o',
    bg: 'url(/youtube.png) center/cover',
  },
  {
    title: '매일 아침 만나는 QT',
    icon: FaBookBible,
    href: 'https://www.duranno.com/',
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
          {/* React 아이콘 컴포넌트면 JSX로, 문자열이면 <img>로 */}
          {typeof link.icon === 'function' && (
            <link.icon className={styles.icon} />
          )}
          {typeof link.icon === 'string' && link.icon && (
            <img src={link.icon} alt="" className={styles.icon} />
          )}
          <span className={styles.title}>{link.title}</span>
        </a>
      ))}
    </div>
  );
}
