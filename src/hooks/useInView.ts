import { useCallback, useState } from 'react';

export function useInView() {
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const ref = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node || hasTriggered) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasTriggered(true);
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
      );

      observer.observe(node);
    },
    [hasTriggered]
  );

  return { ref, isInView } as const;
}
