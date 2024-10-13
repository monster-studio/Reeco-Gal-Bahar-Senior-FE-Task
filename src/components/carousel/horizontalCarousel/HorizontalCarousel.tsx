import { useCarouselContext } from '../CarouselContext';
import ArrowButton from '../arrowButton/ArrowButton';
import CarouselItem from '../carouselItem/CarouselItem';
import useHorizontalCarousel from './hooks/useHorizontalCarousel';

const HorizontalCarousel = <T,>() => {
  const { items, itemMargin } = useCarouselContext<T>();
  
  const {
    scrollRef,
    isLeftDisabled,
    isRightDisabled,
    handleLeftClick,
    handleRightClick,
  } = useHorizontalCarousel(items.length, itemMargin);

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
