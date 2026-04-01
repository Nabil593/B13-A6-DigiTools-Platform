import React, { Suspense, useState } from 'react';
import Navber from './Components/Navber/Navber';
import Banner from './Components/Banner/Banner';
import Stats from './Components/Stats/Stats';
import MainSection from './Components/MainSection/MainSection';
import { ToastContainer } from 'react-toastify';
import StepSection from './Components/StepSection/StepSection';
import PricingSection from './Components/PricingSection/PricingSection';
import Footer from './Components/Footer/Footer';
import CtaSection from './Components/CtaSection/CtaSection';

const App = () => {

    const [open, setOpen] = useState('products');
    const [cartItem, setcartItem] = useState([]);
    const [visible, setVisible] = useState(false);


  return (
    <div className='manrope'>
      <Navber cartItem = {cartItem} setcartItem = {setcartItem} visible = {visible} setVisible = {setVisible} open = {open} setOpen = {setOpen}/>
      <Banner />
      <Stats />
      <MainSection cartItem = {cartItem} setcartItem = {setcartItem} visible = {visible} setVisible = {setVisible} open = {open} setOpen = {setOpen}/>
      <StepSection />
      <PricingSection />
      <CtaSection />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;