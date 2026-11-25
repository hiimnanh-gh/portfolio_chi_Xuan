import { useEffect, useRef, useState } from 'react';
import { ProgressBar } from '@/components/ui';

const LEVEL_WIDTH_MAP = {
  Beginner: 40,
  Intermediate: 68,
  Advanced: 90,
};

export function SkillProgress({
  percentage = null,
  levelLabel = '',
  color = 'primary',
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (isVisible || !containerRef.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  const targetValue =
    typeof percentage === 'number'
      ? percentage
      : LEVEL_WIDTH_MAP[levelLabel] ?? 0;

  if (targetValue <= 0) return null;

  return (
    <div ref={containerRef} className="mt-1.5">
      <ProgressBar
        value={isVisible ? targetValue : 0}
        variant={color}
        size="sm"
      />
    </div>
  );
}
