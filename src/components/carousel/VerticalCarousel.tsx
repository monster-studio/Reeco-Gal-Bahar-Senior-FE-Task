import { useRef, useState, useEffect } from 'react';
import ArrowButton from './arrowButton/ArrowButton';
import CarouselItem from './carouselItem/CarouselItem';
import { useCarouselContext } from './CarouselContext';

const VerticalCarousel = <T,>() => {
  const { items, itemType, itemsOnViewport } = useCarouselContext<T>();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isUpDisabled, setIsUpDisabled] = useState(true);
  const [isDownDisabled, setIsDownDisabled] = useState(false);
  const itemMargin = 8;

  const getScrollAmount = () => {
    if (scrollRef.current) {
      const itemHeight = scrollRef.current.scrollHeight / items.length;
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

  const updateButtonStates = () => {
    if (scrollRef.current) {
      const scrollTop = scrollRef.current.scrollTop;
      const scrollHeight = scrollRef.current.scrollHeight;
      const clientHeight = scrollRef.current.clientHeight;

      setIsUpDisabled(scrollTop <= itemMargin);
      setIsDownDisabled(scrollTop + clientHeight >= scrollHeight - itemMargin);
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
      <div className="flex flex-col gap-2 justify-center items-center">
        <ArrowButton onClick={handleUpClick} disabled={isUpDisabled} direction="up" />
        <div
          ref={scrollRef}
          className="flex overflow-y-auto scrollbar-hidden whitespace-nowrap flex-col max-h-52"
          style={{
            scrollSnapType: 'y mandatory',
            scrollBehavior: 'smooth',
          }}
        >
          {items.map((item, index) => (
            <CarouselItem key={`item-${index}`} index={index}  />
          ))}
        </div>
        <ArrowButton onClick={handleDownClick} disabled={isDownDisabled} direction="down" />
      </div>
    </div>
  );
};

export default VerticalCarousel;
