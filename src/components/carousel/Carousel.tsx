import HorizontalCarousel from './horizontalCarousel/HorizontalCarousel';
import VerticalCarousel from './verticalCarousel/VerticalCarousel';
import { isMobile } from 'react-device-detect';
import CarouselContext from './CarouselContext';

interface CarouselProps<T> {
  items: T[];
  itemType: string;
  itemsOnViewportDesktop?: number;
  itemsOnViewportMobile?: number;
  orientation?: 'horizontal' | 'vertical';
  itemMargin?: number;
}

const Carousel = <T,>({
  items,
  itemType,
  itemsOnViewportDesktop = 4,
  itemsOnViewportMobile = 1,
  orientation = 'horizontal',
  itemMargin = 8,
}: CarouselProps<T>) => {
  const itemsOnViewport = isMobile ? itemsOnViewportMobile : itemsOnViewportDesktop;

  const carouselContextValue = {
    items,
    itemType,
    itemsOnViewport,
    itemMargin,
  };

  return (
    <CarouselContext.Provider value={carouselContextValue}>
      {orientation === 'horizontal' ? (
        <HorizontalCarousel />
      ) : (
        <VerticalCarousel />
      )}
    </CarouselContext.Provider>
  );
};

export default Carousel;
