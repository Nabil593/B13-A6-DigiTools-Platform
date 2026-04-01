import React from 'react';
import playImg from '../../assets/Play.png';
import banner from '../../assets/banner.png';
import dot from '../../assets/Group 5.png';

const Banner = () => {
    return (
        <div>
            <div className='w-full max-w-[1200px] lg:px-0 md:px-8 sm:px-6 px-6 mx-auto flex lg:flex-row md:flex-row sm:flex-col flex-col justify-between items-center gap-10 lg:mt-40 md:mt-35 sm:mt-30 mt-30'>
                <div className='max-w-[640px] space-y-4'>
                    <div className='bg-[#E1E7FF] px-4 py-2 max-w-[300px] rounded-full'>
                    <p className='flex items-center gap-1.5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'><span className='status animate-ping'><img src={dot} alt="dot" /></span> New: AI-Powered Tools Available</p>
                    </div>
                    
                    <h2 className='lg:text-6xl md:text-5xl sm:text-5xl text-4xl font-extrabold text-[#101727] opacity-90 lg:leading-22 md:leading-14 leading-14'>Supercharge Your Digital Workflow</h2>
                    <p className='lg:text-[18px] md:text-[16px]  text-[#627382] lg:leading-8 md:leading-6 sm:leading-6 leading-6'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>

                    <div className='flex items-center gap-4 mt-8'>
                        <button className='px-5 py-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px] font-medium text-white rounded-full cursor-pointer hover:opacity-80 transition-opacity'>Explore Products</button>
                        <button className='px-5 py-3 bg-white text-black border-2 border-[#9514FA] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px] font-bold rounded-full cursor-pointer flex items-center gap-2'><img src={playImg} alt="Play button"/> Watch Demo</button>
                    </div>
                </div>

                <div>
                    <img src={banner} alt="Banner" className='w-[450px] md:ml-0'/>
                </div>
            </div>
        </div>
    );
};

export default Banner;