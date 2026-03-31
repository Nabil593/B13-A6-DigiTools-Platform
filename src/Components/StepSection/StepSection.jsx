import React from 'react';
import userImage from '../../assets/user.png';
import packageImage from '../../assets/package.png';
import rocketImage from '../../assets/rocket.png';

const StepSection = () => {
    return (
        <div className='w-full bg-[#F9FAFC]'>
        <div className='w-full max-w-[1200px] lg:px-0 md:px-8 sm:px-6 px-6 mx-auto py-[120px]'>
            <div className='text-center space-y-4 mb-10'>
                <h2 className='text-5xl font-extrabold'>Get Started in 3 Steps</h2>
                <p className='text-[16px] text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-7 '>
                <div className='relative bg-white border-2 border-gray-300 px-6 py-22 text-center rounded-2xl space-y-4'>
                    <p className='absolute top-2 right-2 text-[14px] font-bold text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-3 py-2.5 rounded-full'>01</p>
                    <div className='w-[100px] mx-auto bg-[#f1dfff] p-5 rounded-full'>
                        <img src={userImage} alt="User Image" />
                    </div>
                    <h3 className='text-2xl font-bold'>Create Account</h3>
                    <p className='text-[16px] text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

                <div className='relative bg-white border-2 border-gray-300 px-6 py-22 text-center rounded-2xl space-y-4'>
                    <p className='absolute top-2 right-2 text-[14px] font-bold text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-3 py-2.5 rounded-full'>02</p>
                    <div className='w-[100px] mx-auto bg-[#f1dfff] p-5 rounded-full'>
                        <img src={packageImage} alt="Package Image" />
                    </div>
                    <h3 className='text-2xl font-bold'>Choose Products</h3>
                    <p className='text-[16px] text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                </div>

                <div className='relative bg-white border-2 border-gray-300 px-6 py-22 text-center rounded-2xl space-y-4'>
                    <p className='absolute top-2 right-2 text-[14px] font-bold text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-3 py-2.5 rounded-full'>03</p>
                    <div className='w-[100px] mx-auto bg-[#f1dfff] p-5 rounded-full'>
                        <img src={rocketImage} alt="Rocket Image" />
                    </div>
                    <h3 className='text-2xl font-bold'>Start Creating</h3>
                    <p className='text-[16px] text-[#627382]'>Download and start using your premium tools immediately.</p>
                </div>

            </div>
        </div>
        </div>
    );
};

export default StepSection;