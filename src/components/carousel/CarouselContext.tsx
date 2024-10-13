import { createContext, useContext } from 'react';

interface CarouselContextProps<T> {
  items: T[];
  itemType: string;
  itemsOnViewport: number;
  itemMargin: number;
}

const CarouselContext = createContext<CarouselContextProps<any> | undefined>(undefined);

export const useCarouselContext = <T,>(): CarouselContextProps<T> => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarouselContext must be used within a CarouselProvider');
  }
  return context;
};

export default CarouselContext;
