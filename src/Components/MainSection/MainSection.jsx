import React, { Suspense, useState } from 'react';
import ProductsCard from './ProductsCard/ProductsCard';
import Cart from '../Cart/Cart';

const featchFunction = async() => {
    const res = await fetch('./Data.json')
    const data = await res.json();
    return data;
};
const featchData = featchFunction();


const MainSection = ({cartItem, setcartItem, visible, setVisible, open, setOpen }) => {

    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <div id="cart-section" className='w-full max-w-[1200px] lg:px-0 md:px-8 sm:px-6 px-6 mx-auto lg:mt-30 md:mt-20 sm:mt-15 mt-15 mb-30'>
    
            <div className='text-center space-y-4'>
                <h1 className='lg:text-6xl md:text-5xl sm:text-5xl text-4xl font-extrabold'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed<br></br> to boost your productivity and creativity.</p>

                <div className='max-w-[235px] mx-auto px-1 py-1 bg-white border-2 border-gray-400 rounded-full flex items-center justify-between'>
                    <button onClick={() => setOpen('products')} className={`px-5 py-3 ${open === 'products' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-white text-black'} text-[16px] font-medium rounded-full cursor-pointer hover:opacity-80 transition-opacity`}>Products</button>

                    <button onClick={() => setOpen('cart')} className={`px-5 py-3 ${open === 'cart' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-white text-black'} text-[16px] font-medium rounded-full cursor-pointer hover:opacity-80 transition-opacity`}>Cart ({cartItem.length})</button>
                </div>
            </div>


            {
                open === 'products' 
                ? <div>
                    <Suspense fallback={<div className='flex items-center justify-center h-150'><span className="loading loading-dots loading-xl"></span></div>}>
                    <ProductsCard featchData = {featchData} cartItem = {cartItem} setcartItem = {setcartItem} visible = {visible} setVisible = {setVisible} totalPrice = {totalPrice} setTotalPrice = {setTotalPrice}/>
                    </Suspense>
                 </div> 
                : <Suspense fallback={<div className='flex items-center justify-center h-150'><span className="loading loading-dots loading-xl"></span></div>}>
                    <Cart open = {open} setOpen ={setOpen} featchData = {featchData} cartItem = {cartItem} setcartItem = {setcartItem} totalPrice = {totalPrice} setTotalPrice = {setTotalPrice}/>
                </Suspense>
            }
    
        </div>
    );
};

export default MainSection;