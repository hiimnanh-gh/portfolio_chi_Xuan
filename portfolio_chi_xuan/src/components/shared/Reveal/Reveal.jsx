import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils';

const DIRECTION_CLASSES = {
  up: 'reveal-up',
  left: 'reveal-left',
  right: 'reveal-right',
};

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (isVisible || !ref.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={ref}
      style={{ '--reveal-delay': `${delay}ms` }}
      className={cn(
        'reveal',
        DIRECTION_CLASSES[direction] || DIRECTION_CLASSES.up,
        isVisible && 'is-visible',
        className,
      )}
    >
      {children}
    </div>
  );
}
