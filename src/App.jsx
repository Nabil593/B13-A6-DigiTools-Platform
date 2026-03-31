import React, { Suspense } from 'react';
import Navber from './Components/Navber/Navber';
import Banner from './Components/Banner/Banner';
import Stats from './Components/Stats/Stats';
import MainSection from './Components/MainSection/MainSection';

const App = () => {
  return (
    <div className='manrope'>
      <Navber />
      <Banner />
      <Stats />
      <MainSection />
    </div>
  );
};

export default App;