import Carousel from '../../components/carousel/Carousel';
import Section from '../../components/section/Section';
import { mockDataProductCard, mockDataChip } from '../../componentsData/carousel/mockData';

const carouselDemoPage = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <img src="https://www.reeco.io/assets/logo.8468681a.svg" alt="Reeco" className="w-20" />

      <Section>
        <h2 className="text-lg font-bold mt-8">Product Card Carousel</h2>
        <h3 className="text-sm mb-8 text-gray-500">Horizontal Implementation</h3>
        <Carousel
          itemType="Product Card"
          items={mockDataProductCard}
          itemsOnViewportDesktop={4}
          itemsOnViewportMobile={1}
          orientation="horizontal"
        />
      </Section>

      <Section>
        <h2 className="text-lg font-bold mt-8">Chip Carousel</h2>
        <h3 className="text-sm mb-8 text-gray-500">Vertical Implementation</h3>
        <Carousel 
          itemType="Chip"
          items={mockDataChip}
          itemsOnViewportDesktop={4}
          orientation="vertical"
        />
      </Section>
    </div>
  );
};

export default carouselDemoPage;
