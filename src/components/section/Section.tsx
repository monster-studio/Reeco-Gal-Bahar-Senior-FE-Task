import React, { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <div className='flex flex-col items-center w-[800px] max-w-full'>
      {children}
    </div>
  );
};

export default Section;
