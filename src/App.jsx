import React from 'react';
import Navber from './Components/Navber/Navber';
import Banner from './Components/Banner/Banner';
import AllCounter from './Components/AllCounter/AllCounter';

const App = () => {
  return (
    <div className='manrope'>
      <Navber />
      <Banner />
      <AllCounter />
    </div>
  );
};

export default App;