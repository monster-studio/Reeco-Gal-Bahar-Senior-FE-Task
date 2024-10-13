import { lazy } from 'react';

const carouselItemInnerComponentsMap = {
  'Product Card': lazy(() => import('../../components/productCard/ProductCard')),
  'Chip': lazy(() => import('../../components/chip/Chip')),
};

export default carouselItemInnerComponentsMap;