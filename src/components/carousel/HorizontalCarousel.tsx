import { useRef, useState, useEffect } from 'react';
import ArrowButton from './arrowButton/ArrowButton';
import CarouselItem from './carouselItem/CarouselItem';
import { useCarouselContext } from './CarouselContext';

const HorizontalCarousel = <T,>() => {
  const { items, itemType, itemsOnViewport } = useCarouselContext<T>();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const itemMargin = 8;

  const getScrollAmount = () => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.scrollWidth / items.length;
      return itemWidth + itemMargin;
    }
    return 0;
  };

  const handleLeftClick = () => {
    if (scrollRef.current) {
      const scrollAmount = getScrollAmount();
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleRightClick = () => {
    if (scrollRef.current) {
      const scrollAmount = getScrollAmount();
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const updateButtonStates = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;

      setIsLeftDisabled(scrollLeft <= itemMargin);
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth - itemMargin);
    }
  };

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
  }, [items]);

  useEffect(() => {
    updateButtonStates();
  }, [items]);

  return (
    <div className="relative max-w-full overflow-hidden">
      <div className="flex gap-2 justify-center items-center">
        <ArrowButton onClick={handleLeftClick} disabled={isLeftDisabled} direction="left" />
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hidden whitespace-nowrap flex-row"
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
          }}
        >
          {items.map((item, index) => (
            <CarouselItem key={`item-${index}`} index={index} />
          ))}
        </div>
        <ArrowButton onClick={handleRightClick} disabled={isRightDisabled} direction="right" />
      </div>
    </div>
  );
};

export default HorizontalCarousel;
