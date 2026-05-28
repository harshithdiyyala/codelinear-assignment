import { useEffect, useRef } from 'react';

function useReveal() {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element?.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.unobserve(element);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.14 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return elementRef;
}

export default useReveal;
