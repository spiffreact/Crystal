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

  return (
    <div className="carousel-root">
      <div className="carousel-track" ref={ref}>
        {React.Children.map(children, (child, idx) => (
          <div className="carousel-slide" key={idx}>
            {child}
          </div>
        ))}
      </div>
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
