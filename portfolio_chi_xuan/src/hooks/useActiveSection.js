import { useEffect, useState } from 'react';

/**
 * Tracks the currently active section ID in the viewport using IntersectionObserver.
 * @param {string[]} sectionIds - Ordered list of section DOM IDs.
 * @param {IntersectionObserverInit} options - Optional IntersectionObserver configuration.
 * @returns {string} Active section ID.
 */
export function useActiveSection(sectionIds = [], options = {}) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const rootMargin = options.rootMargin ?? '-25% 0px -60% 0px';
  const threshold = options.threshold ?? 0.05;

  useEffect(() => {
    if (!sectionIds.length) return undefined;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { rootMargin, threshold },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, rootMargin, threshold]);

  return activeSection;
}
