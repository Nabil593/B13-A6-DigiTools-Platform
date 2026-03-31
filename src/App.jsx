import React, { Suspense, useState } from 'react';
import Navber from './Components/Navber/Navber';
import Banner from './Components/Banner/Banner';
import Stats from './Components/Stats/Stats';
import MainSection from './Components/MainSection/MainSection';
import { ToastContainer } from 'react-toastify';

const App = () => {

    const [cartItem, setcartItem] = useState([]);
    const [visible, setVisible] = useState(false);
    


  return (
    <div className='manrope'>
      <Navber cartItem = {cartItem} setcartItem = {setcartItem} visible = {visible} setVisible = {setVisible}/>
      <Banner />
      <Stats />
      <MainSection cartItem = {cartItem} setcartItem = {setcartItem} visible = {visible} setVisible = {setVisible}/>
      <ToastContainer />
    </div>
  );
};

export default App;