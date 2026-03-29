import { useEffect, useState } from "react";

interface UseInViewOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useInView(
  ref: React.RefObject<HTMLElement>,
  options: UseInViewOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isInView) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        options
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options, isInView]);

  return isInView;
}
