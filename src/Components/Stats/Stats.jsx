import React from 'react';

const Stats = () => {
    return (
        <div className='w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='w-full max-w-[1200px] lg:px-0 md:px-8 sm:px-6 px-6 mx-auto lg:mt-20 md:mt-20 sm:mt-15 mt-15 flex items-center justify-center lg:flex-row md:flex-row flex-col gap-10 py-16'>
                <div className='m-auto text-center'>
                    <p className='lg:text-6xl md:text-4xl text-3xl font-extrabold text-white'>50K+</p>
                    <p className='text-2xl font-medium text-white opacity-80'>Active Users</p>
                </div>

                    <div className='hidden md:block border-l border-white/50 h-20'></div>

                <div className='m-auto text-center'>
                    <p className='lg:text-6xl md:text-4xl text-3xl font-extrabold text-white'>200+</p>
                    <p className='text-2xl font-medium text-white opacity-80'>Premium Tools</p>
                </div>

                    <div className='hidden lg:block md:block border-l border-white/50 h-20'></div>

                <div className='m-auto text-center'>
                    <p className='lg:text-6xl md:text-4xl text-3xl font-extrabold text-white'>4.9</p>
                    <p className='text-2xl font-medium text-white opacity-80'>Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Stats;