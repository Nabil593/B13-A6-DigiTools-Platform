import React from 'react';
import playImg from '../../assets/Play.png';
import banner from '../../assets/banner.png';
import dot from '../../assets/Group 5.png';

const Banner = () => {
    return (
        <div>
            <div className='w-full max-w-[1200px] mx-auto flex lg:flex-row md:flex-row sm:flex-col flex-col justify-between items-center mt-20'>
                <div className='max-w-[640px] space-y-4'>
                    <div className='bg-[#E1E7FF] px-4 py-2 max-w-[300px] rounded-full'>
                    <p className='flex items-center gap-1.5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'><span className='status animate-ping'><img src={dot} alt="dot" /></span> New: AI-Powered Tools Available</p>
                    </div>

                    <h2 className='text-7xl font-extrabold text-[#101727] opacity-90'>Supercharge Your<br></br>Digital Workflow</h2>
                    <p className='text-[18px] text-[#627382] leading-8'>Access premium AI tools, design assets, templates, and productivity<br></br>software—all in one place. Start creating faster today.<br></br> Explore Products</p>

                    <div className='flex items-center gap-4 mt-8'>
                        <button className='px-5 py-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-[16px] font-medium text-white rounded-full cursor-pointer'>Explore Products</button>
                        <button className='px-5 py-3 bg-white text-black border-2 border-[#9514FA] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-[16px] font-bold rounded-full cursor-pointer flex items-center gap-2'><img src={playImg} alt="Play button"/> Watch Demo</button>
                    </div>
                </div>

                <div>
                    <img src={banner} alt="Banner" className='w-[450px]'/>
                </div>
            </div>
        </div>
    );
};

export default Banner;