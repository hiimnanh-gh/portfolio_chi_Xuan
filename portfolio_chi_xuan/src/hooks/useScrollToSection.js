import { useCallback } from 'react';

/**
 * Returns a callback that smoothly scrolls to a target section by its DOM ID.
 * @param {number} headerOffset - Sticky header height offset in pixels.
 * @returns {(sectionId: string) => void}
 */
export function useScrollToSection(headerOffset = 88) {
  return useCallback(
    (sectionId) => {
      const target = document.getElementById(sectionId);
      if (!target) return;

      const elementTop = target.getBoundingClientRect().top + window.scrollY;
      const scrollTarget = Math.max(0, elementTop - headerOffset);

      window.scrollTo({
        top: scrollTarget,
        behavior: 'smooth',
      });
    },
    [headerOffset],
  );
}
