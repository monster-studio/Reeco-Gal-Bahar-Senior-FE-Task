import React from 'react';

type ProductCardProps = {
  item: { name: string; description?: string; image?: string };
};

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div
      className="m-2 p-4 bg-white shadow-md rounded-lg flex flex-col items-center"
    >
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-500">{item.description}</p>
    </div>
  );
};

export default ProductCard;
