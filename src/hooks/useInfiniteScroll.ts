// src/hooks/useInfiniteScroll.ts

import { useCallback, useRef, useState } from "react";

export const useInfiniteScroll = (callback: () => void) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setIsIntersecting(true);
          callback();
        } else {
          setIsIntersecting(false);
        }
      });

      if (node) observer.current.observe(node);
    },
    [callback]
  );

  return { lastElementRef, isIntersecting };
};
