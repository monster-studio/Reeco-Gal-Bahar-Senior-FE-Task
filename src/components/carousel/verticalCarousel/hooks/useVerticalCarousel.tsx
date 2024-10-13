// src/hooks/useVerticalCarousel.ts

import { useRef, useState, useEffect, useCallback } from 'react';

const useVerticalCarousel = (itemsLength: number, itemMargin: number) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isUpDisabled, setIsUpDisabled] = useState(true);
  const [isDownDisabled, setIsDownDisabled] = useState(false);

  const getScrollAmount = (): number => {
    if (scrollRef.current) {
      const itemHeight = scrollRef.current.scrollHeight / itemsLength;
      return itemHeight + itemMargin;
    }
    return 0;
  };

  const handleUpClick = () => {
    if (scrollRef.current) {
      const scrollAmount = getScrollAmount();
      scrollRef.current.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleDownClick = () => {
    if (scrollRef.current) {
      const scrollAmount = getScrollAmount();
      scrollRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  };

  const updateButtonStates = useCallback(() => {
    if (scrollRef.current) {
      const scrollTop = scrollRef.current.scrollTop;
      const scrollHeight = scrollRef.current.scrollHeight;
      const clientHeight = scrollRef.current.clientHeight;

      setIsUpDisabled(scrollTop <= itemMargin);
      setIsDownDisabled(scrollTop + clientHeight >= scrollHeight - itemMargin);
    }
  }, [itemMargin]);

  useEffect(() => {
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener('scroll', updateButtonStates);
    }
    return () => {
      if (currentScrollRef) {
        currentScrollRef.removeEventListener('scroll', updateButtonStates);
      }
    };
  }, [updateButtonStates]);

  useEffect(() => {
    updateButtonStates();
  }, [itemsLength, updateButtonStates]);

  return {
    scrollRef,
    isUpDisabled,
    isDownDisabled,
    handleUpClick,
    handleDownClick,
  };
};

export default useVerticalCarousel;
