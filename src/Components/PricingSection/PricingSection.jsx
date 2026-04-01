import React from 'react';
import checkIcon from '../../assets/check.png'

const PricingSection = () => {
    return (
        <div>
                <div className='w-full max-w-[1200px] lg:px-0 md:px-8 sm:px-6 px-6 mx-auto my-[120px]'>
                    <div className='text-center space-y-4 mb-10'>
                        <h2 className='lg:text-6xl md:text-5xl sm:text-5xl text-4xl font-extrabold'>Simple, Transparent Pricing</h2>
                        <p className='text-[16px] text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                    </div>
        
                    <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-7 '>
                        <div className='bg-white border-2 border-gray-300 p-6 rounded-2xl'>
                            <h3 className='text-2xl font-bold mb-2'>Starter</h3>
                            <p className='text-[16px] text-[#627382]'>Perfect for getting started</p>
                            <p className='my-6'><span className='text-[40px] font-bold'>$0</span><span className='text-[16px] text-[#627382]'>/Month</span></p>
                               <ul className='mb-22 space-y-2'>
                                   <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>Access to 10 free tools</span></li>
                                   <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>Basic templates</span></li>
                                   <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>Community support</span></li>
                                   <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>1 project per month</span></li>
                               </ul>
                            <button className='w-full px-5 py-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px] font-medium text-white rounded-full cursor-pointer hover:opacity-80 transition-opacity'>Get Started Free</button>
                        </div>

                        <div className='relative bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-2 border-gray-300 p-6 rounded-2xl text-white'>
                            <p className='absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 text-[#BB4D00] bg-[#FEF3C6] rounded-full'>Most Popular</p>
                            <h3 className='text-2xl font-bold mb-2'>Pro</h3>
                            <p className='text-[16px] text-[#ffffff]'>Best for professionals</p>
                            <p className='my-6'><span className='text-[40px] font-bold'>$29</span><span className='text-[16px] text-[#ffffff]'>/Month</span></p>
                               <ul className='mb-6 space-y-2'>
                                   <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>Access to all premium tools</span></li>
                                   <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>Unlimited templates</span></li>
                                   <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>Priority support</span></li>
                                   <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>Unlimited projects</span></li>
                                   <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>Cloud sync</span></li>
                                   <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>Advanced analytics</span></li>
                               </ul>
                            <button className='w-full px-5 py-3 bg-white  rounded-full cursor-pointer'> <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px] font-bold hover:opacity-80 transition-opacity'>Start Pro Trial</span></button>
                        </div>

                        <div className='bg-white border-2 border-gray-300 p-6 rounded-2xl'>
                            <h3 className='text-2xl font-bold mb-2'>Enterprise</h3>
                            <p className='text-[16px] text-[#627382]'>For teams and businesses</p>
                            <p className='my-6'><span className='text-[40px] font-bold'>$99</span><span className='text-[16px] text-[#627382]'>/Month</span></p>
                               <ul className='mb-6 space-y-2'>
                                   <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>Everything in Pro</span></li>
                                   <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>Team collaboration</span></li>
                                   <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>Custom integrations</span></li>
                                   <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>Dedicated support</span></li>
                                   <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>SLA guarantee</span></li>
                                   <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>Custom branding</span></li>
                               </ul>
                            <button className='w-full px-5 py-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px] font-medium text-white rounded-full cursor-pointer hover:opacity-80 transition-opacity'>Contact Sales</button>
                        </div>
                        
                    </div>
                </div>
                </div>
    );
};

export default PricingSection;