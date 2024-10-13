import React from 'react';
import CarouselDemoPage from './pages/carouselDemo/page';
import Logo from './components/logo/Logo';

const App: React.FC = () => {
  return (
    <main className='m-2 flex flex-col justify-center items-center'>
      <Logo/>
      <CarouselDemoPage/>
    </main>
  );
};

export default App;
