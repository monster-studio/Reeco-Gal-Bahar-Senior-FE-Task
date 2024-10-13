import HorizontalCarousel from './HorizontalCarousel';
import VerticalCarousel from './VerticalCarousel';
import { isMobile } from 'react-device-detect';
import CarouselContext from './CarouselContext';

interface CarouselProps<T> {
  items: T[];
  itemType: string;
  itemsOnViewportDesktop?: number;
  itemsOnViewportMobile?: number;
  orientation?: 'horizontal' | 'vertical';
}

const Carousel = <T,>({
  items,
  itemType,
  itemsOnViewportDesktop = 4,
  itemsOnViewportMobile = 1,
  orientation = 'horizontal',
}: CarouselProps<T>) => {
  const itemsOnViewport = isMobile ? itemsOnViewportMobile : itemsOnViewportDesktop;

  const carouselContextValue = {
    items,
    itemType,
    itemsOnViewport,
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
