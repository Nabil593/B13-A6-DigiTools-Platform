import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='w-full bg-[#101727]'>
            <div className='w-full max-w-[1200px] text-white lg:px-0 md:px-8 sm:px-6 px-6 mx-auto pt-28 pb-8'>
                <div className='flex lg:flex-row flex-col justify-between gap-20'>
                    <div className='space-y-4'>
                        <h2 className='text-5xl font-extrabold'>DigTools</h2>
                        <p className='text-[16px] opacity-80'>Premium digital tools for creators,<br></br> professionals, and businesses. Work smarter<br></br> with our suite of powerful tools.</p>
                    </div>

                    <div className='space-y-4'>
                        <p className='font-medium text-2xl'>Product</p>
                        <div className='text-[16px] opacity-80 space-y-4 flex flex-col'>
                            <a href="#">Features</a>
                            <a href="#">Pricing</a>
                            <a href="#">Templates</a>
                            <a href="#">Integrations</a>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <p className='font-medium text-2xl'>Company</p>
                        <div className='text-[16px] opacity-80 space-y-4 flex flex-col'>
                            <a href="#">About</a>
                            <a href="#">Blog</a>
                            <a href="#">Careers</a>
                            <a href="#">Press</a>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <p className='font-medium text-2xl'>Resources</p>
                        <div className='text-[16px] opacity-80 space-y-4 flex flex-col'>
                            <a href="#">Documentation</a>
                            <a href="#">Help Center</a>
                            <a href="#">Community</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <p className='font-medium text-2xl'>Social Links</p>
                        <div className='flex items-center gap-6'>
                            <a href="#" className='bg-white p-2.5 rounded-full hover:opacity-60 transition-opacity'>
                            <FaInstagram className='text-2xl text-black'/>
                            </a>
                            <a href="#"  className='bg-white p-2.5 rounded-full hover:opacity-60 transition-opacity'>
                            <FaFacebook className='text-2xl text-black'/>
                            </a>
                            <a href="#"  className='bg-white p-2.5 rounded-full hover:opacity-60 transition-opacity'>
                            <FaXTwitter className='text-2xl text-black'/>
                            </a>
                        </div>
                    </div>
                </div>

                <hr className='mt-20 mb-8 text-gray-600'></hr>

                <div className='flex lg:flex-row flex-col justify-between gap-4 text-[16px] opacity-50'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex lg:flex-row md:flex-row flex-col lg:gap-8 md:gap-6 gap-4'>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;