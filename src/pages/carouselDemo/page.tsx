import Carousel from '../../components/carousel/Carousel';
import Section from '../../components/section/Section';
import { mockDataProductCard, mockDataChip } from '../../componentsData/carousel/mockData';

const carouselDemoPage = () => {
  return (
    <div className="flex flex-col items-center">

      <Section>
        <h2 className="text-lg font-bold">Product Card Carousel</h2>
        <h3 className="text-sm mb-8 text-gray-500">Horizontal Implementation</h3>
        <Carousel
          itemType="Product Card"
          items={mockDataProductCard}
          itemsOnViewportDesktop={4}
          itemsOnViewportMobile={1}
          orientation="horizontal"
          itemMargin={8}
        />
      </Section>

      <Section>
        <h2 className="text-lg font-bold">Chip Carousel</h2>
        <h3 className="text-sm mb-8 text-gray-500">Vertical Implementation</h3>
        <Carousel 
          itemType="Chip"
          items={mockDataChip}
          itemsOnViewportDesktop={4}
          orientation="vertical"
          itemMargin={8}
        />
      </Section>
    </div>
  );
};

export default carouselDemoPage;
