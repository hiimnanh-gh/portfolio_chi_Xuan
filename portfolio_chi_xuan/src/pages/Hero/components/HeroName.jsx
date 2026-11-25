import { useEffect, useState } from 'react';

export function HeroName({ name }) {
  const characters = name ? Array.from(name) : [];

  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window === 'undefined') return characters.length;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? characters.length
      : 0;
  });

  useEffect(() => {
    if (!characters.length || visibleCount >= characters.length) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, 85);

    return () => window.clearTimeout(timer);
  }, [visibleCount, characters.length]);

  if (!name) return null;

  const isTyping = visibleCount < characters.length;

  return (
    <h1
      aria-label={name}
      className="mt-4 min-h-[1.3em] text-3xl font-extrabold tracking-tight text-[var(--color-text-heading)] sm:text-4xl lg:text-[2.75rem]"
    >
      <span aria-hidden="true">
        {characters.slice(0, visibleCount).map((char, index) => (
          <span
            key={index}
            className="animate-letter-bounce"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
        {isTyping && <span className="animate-cursor-blink" />}
      </span>
    </h1>
  );
}
