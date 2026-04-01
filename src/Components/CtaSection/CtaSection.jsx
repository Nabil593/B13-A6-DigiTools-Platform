import React from 'react';

const CtaSection = () => {
    return (
        <div className='w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='w-full max-w-[1200px] text-white lg:px-0 md:px-8 sm:px-6 px-6 mx-auto p-32'>
                <div className='text-center space-y-4 mb-10'>
                    <h2 className='lg:text-6xl md:text-5xl sm:text-5xl text-4xl font-extrabold'>Ready to Transform Your Workflow?</h2>
                    <p className='text-[16px] text-gray-300'>Join thousands of professionals who are already using Digitools to work smarter.<br></br> Start your free trial today.</p>
                </div>

                <div className='text-center'>
                    <div className='flex items-center justify-center gap-4 mb-4'>
                    <button className='px-5 py-3 bg-white  rounded-full cursor-pointer'> <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px] font-bold'>Explore Products</span></button>
                    <button className='lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px] px-8.5 py-3 font-medium border-2 border-gray-100 text-white rounded-full'>View Pricing</button>
                    </div>
                    <p className='text-[16px] text-gray-300'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>    
        </div>
    );
};

export default CtaSection;