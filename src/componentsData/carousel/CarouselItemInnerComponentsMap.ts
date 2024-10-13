import { lazy } from 'react';

const CarouselItemInnerComponentsMap = {
  'Product Card': lazy(() => import('../../components/productCard/ProductCard')),
  'Chip': lazy(() => import('../../components/chip/Chip')),
};

export default CarouselItemInnerComponentsMap;