import { useRef, useState, useEffect, useCallback } from 'react';

const useHorizontalCarousel = (itemsLength: number, itemMargin: number) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const calculateScrollAmount = useCallback(() => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.scrollWidth / itemsLength;
      return itemWidth + itemMargin;
    }
    return 0;
  }, [itemsLength, itemMargin]);

  const handleLeftClick = useCallback(() => {
    const scrollAmount = calculateScrollAmount();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  }, [calculateScrollAmount]);

  const handleRightClick = useCallback(() => {
    const scrollAmount = calculateScrollAmount();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, [calculateScrollAmount]);

  const updateButtonStates = useCallback(() => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;

      setIsLeftDisabled(scrollLeft <= itemMargin);
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth - itemMargin);
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
    isLeftDisabled,
    isRightDisabled,
    handleLeftClick,
    handleRightClick,
  };
};

export default useHorizontalCarousel;