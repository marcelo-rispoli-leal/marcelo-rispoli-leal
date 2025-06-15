import { useEffect, useState, useRef } from "react";

export default function useHeaderObserver(sections) {
  const [isH1Visible, setIsH1Visible] = useState(true);
  const h1Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsH1Visible(entry.isIntersecting);
      },
      { threshold: 0.95 },
    );

    if (h1Ref.current) {
      observer.observe(h1Ref.current);
    }

    return () => {
      if (h1Ref.current) {
        observer.unobserve(h1Ref.current);
      }
    };
  }, [sections]);

  return { isH1Visible, h1Ref };
}
