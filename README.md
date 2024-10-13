# Carousel Component

## Overview

The Carousel component provides a flexible way to display a horizontal or vertical carousel of items. It supports different item types and adapts to mobile and desktop viewports.

## Installation

To install the necessary packages for this project, run:

```bash
npm install
```

## Usage

### Importing the Carousel Component

To use the Carousel in your project, first import it:

```javascript
import Carousel from "./path/to/Carousel";
```

### carouselItemInnerComponentsMap

The carouselItemInnerComponentsMap is used to map item types to their corresponding components. You can extend this map by adding more components as needed (src\componentsData\carousel\carouselItemInnerComponentsMap.ts):

```const carouselItemInnerComponentsMap = {
  'Product Card': lazy(() => import('../../productCard/ProductCard')),
  'Chip': lazy(() => import('../../chip/Chip')),
  // Add more mappings here as needed
};
```

### Example

Here’s a basic example of how to use the Carousel component:

```javascript
const items = [
  /* your item data here */
];

const Page = () => (
  <Carousel
    items={items}
    itemType="Product Card" // or "Chip" (You can add more 'itemType's as many as you wish)
    itemsOnViewportDesktop={4}
    itemsOnViewportMobile={1}
    orientation="horizontal" // or "vertical"
    itemMargin={8}
  />
);
```

### Props

- `items` (T[]): An array of items to display in the carousel.
- `itemType` (string): A string that determines the type of item being rendered (e.g., "Product Card" or "Chip").
- `itemsOnViewportDesktop` (number, optional): The number of items to display on desktop viewports. Default is `4`.
- `itemsOnViewportMobile` (number, optional): The number of items to display on mobile viewports. Default is `1`.
- `orientation` ('horizontal' | 'vertical', optional): The orientation of the carousel. Default is `'horizontal'`.

### Accessing the Carousel Context

Within child components of the Carousel, you can access the carousel context using the `useCarouselContext` hook:

```javascript
import { useCarouselContext } from "./path/to/Carousel";

const MyComponent = () => {
  const { items, itemType, itemsOnViewport } = useCarouselContext();

  return <div>{/* Render your component using context values */}</div>;
};
```

## Adjust Mockdata for this specific premade example

Edit mockData.ts to edit the carousel data (src\componentsData\carousel\mockData.ts)

## Conclusion

The Carousel component is designed to be flexible and easy to integrate into your project. Customize it further by modifying its props to suit your needs.
