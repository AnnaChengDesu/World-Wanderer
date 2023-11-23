import { useEffect, useRef } from "react";

export default function useInView(callback) {
  const observeRef = useRef(null);

  useEffect(() => {
    if (!observeRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          callback();
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    observer.observe(observeRef.current);
    return () => observer.disconnect();
  }, [callback]);

  return { observeRef };
}