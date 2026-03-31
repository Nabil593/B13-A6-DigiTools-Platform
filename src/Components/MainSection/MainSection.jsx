import React, { Suspense, useState } from 'react';
import ProductsCard from './ProductsCard/ProductsCard';

const featchFunction = async() => {
    const res = await fetch('./Data.json')
    const data = await res.json();
    return data;
};
const featchData = featchFunction();


const MainSection = () => {


    const [open, setOpen] = useState('products');

    return (
        <div className='w-full max-w-[1200px] lg:px-0 md:px-8 sm:px-6 px-6 mx-auto lg:mt-28 md:mt-20 sm:mt-15 mt-15'>
            <div className='text-center space-y-4'>
                <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed<br></br> to boost your productivity and creativity.</p>

                <div className='max-w-[235px] mx-auto px-1 py-1 bg-white border-2 border-gray-400 rounded-full flex items-center justify-between'>
                    <button onClick={() => setOpen('products')} className={`px-5 py-3 ${open === 'products' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-white text-black'} text-[16px] font-medium rounded-full cursor-pointer`}>Products</button>

                    <button onClick={() => setOpen('cart')} className={`px-5 py-3 ${open === 'cart' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-white text-black'} text-[16px] font-medium rounded-full cursor-pointer`}>Cart (0)</button>
                </div>
            </div>

            <div>
                <Suspense fallback={<div className='flex items-center justify-center h-150'><span className="loading loading-dots loading-xl"></span></div>}>
                    <ProductsCard featchData = {featchData}/>
                </Suspense>
            </div>
        </div>
    );
};

export default MainSection;