import React from 'react';
import styles from './SectionCard.module.css';

export default function SectionCard({ title, description, linkText }) {
  // 예배 안내 카드에만 모임시간 표 추가
  const isWorship = title === '예배 안내';
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {isWorship && (
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>주일예배</td>
              <td>오전 11:00</td>
            </tr>
            <tr>
              <td>수요예배</td>
              <td>수요일 오후 7:00</td>
            </tr>
            <tr>
              <td>금요기도회</td>
              <td>금요일 오후 9:00</td>
            </tr>
            <tr>
              <td>새벽기도회</td>
              <td>매일 오전 5:30</td>
            </tr>
            <tr>
              <td>청년부 모임</td>
              <td>주일 오후 1:00</td>
            </tr>
          </tbody>
        </table>
      )}
      <a href="#" className={styles.link}>
        {linkText}
      </a>
    </div>
  );
}
