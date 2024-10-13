import { Suspense } from 'react';
import Loading from '../../loading/Loading';
import CarouselItemInnerComponentsMap from '../../../componentsData/carousel/CarouselItemInnerComponentsMap';
import { useCarouselContext } from '../CarouselContext';

const CarouselItem = ({ index }) => {
  const { items, itemType, itemsOnViewport } = useCarouselContext();
  const CarouselItemInner = CarouselItemInnerComponentsMap[itemType];

  return (
    <div style={{ minWidth: `${100 / itemsOnViewport}%`, scrollSnapAlign: 'start' }}>
      {CarouselItemInner ? (
        <Suspense fallback={<Loading />}>
          <CarouselItemInner item={items[index]} />
        </Suspense>
      ) : null}
    </div>
  );
};

export default CarouselItem;
