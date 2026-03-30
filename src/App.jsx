import React from 'react';
import Navber from './Components/Navber/Navber';
import Banner from './Components/Banner/Banner';
import Stats from './Components/Stats/Stats';

const App = () => {
  return (
    <div className='manrope'>
      <Navber />
      <Banner />
      <Stats />
    </div>
  );
};

export default App;