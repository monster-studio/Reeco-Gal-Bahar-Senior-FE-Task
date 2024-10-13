// src/components/VerticalCarousel.tsx

import { useCarouselContext } from '../CarouselContext';
import ArrowButton from '../arrowButton/ArrowButton';
import CarouselItem from '../carouselItem/CarouselItem';
import useVerticalCarousel from './hooks/useVerticalCarousel';

const VerticalCarousel = <T,>() => {
  const { items, itemMargin } = useCarouselContext<T>();
  
  const {
    scrollRef,
    isUpDisabled,
    isDownDisabled,
    handleUpClick,
    handleDownClick,
  } = useVerticalCarousel(items.length, itemMargin);

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
            <CarouselItem key={`item-${index}`} index={index} />
          ))}
        </div>
        <ArrowButton onClick={handleDownClick} disabled={isDownDisabled} direction="down" />
      </div>
    </div>
  );
};

export default VerticalCarousel;
