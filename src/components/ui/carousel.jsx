import * as React from 'react';
import { useRef, useState } from 'react';

import './carousel.css';

export function Carousel({ children }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const length = React.Children.count(children);

  const goTo = (idx) => {
    setCurrent(idx);
    ref.current.scrollTo({
      left: ref.current.offsetWidth * idx,
      behavior: 'smooth',
    });
  };

  const goToPrevious = () => {
    const newIndex = current === 0 ? length - 1 : current - 1;
    goTo(newIndex);
  };

  const goToNext = () => {
    const newIndex = current === length - 1 ? 0 : current + 1;
    goTo(newIndex);
  };

  return (
    <div className="carousel-root">
      <div className="carousel-track" ref={ref}>
        {React.Children.map(children, (child, idx) => (
          <div className="carousel-slide" key={idx}>
            {child}
          </div>
        ))}
      </div>

      {/* 좌우 화살표 버튼 */}
      <button
        className="carousel-arrow carousel-arrow-left"
        onClick={goToPrevious}
        aria-label="이전 슬라이드"
      >
        ‹
      </button>
      <button
        className="carousel-arrow carousel-arrow-right"
        onClick={goToNext}
        aria-label="다음 슬라이드"
      >
        ›
      </button>

      <div className="carousel-dots">
        {Array.from({ length }).map((_, idx) => (
          <button
            key={idx}
            className={'carousel-dot' + (current === idx ? ' active' : '')}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
