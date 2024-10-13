import React from 'react';

type ChipProps = {
  item: { name: string };
};

const Chip: React.FC<ChipProps> = ({ item }) => {
  return (
    <div
      className="m-2 p-4 bg-blue-100 rounded-full flex items-center justify-center"
    >
      <span className="text-sm font-medium">{item.name}</span>
    </div>
  );
};

export default Chip;