import React from 'react';
import styles from './MainBanner.module.css';
import { Carousel } from './ui/carousel';

const images = ['/banner1.jpg','/banner2.jpg'];

export default function MainBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <Carousel>
          {images.map((src, idx) => (
            <div
              key={idx}
              className={styles.bannerImage}
              style={{
                width: '100vw',
                height: '70vh',
                minHeight: '400px',
                backgroundImage: `url(${src})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* 오버레이 텍스트/버튼 등 */}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
