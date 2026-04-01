import { useState } from 'react';
import soppingCard from '../../assets/products/shopping-cart.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Navber = ({ cartItem, visible, setOpen }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const allManu = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

    return (
        <div className='border-b border-gray-300 fixed top-0 left-0 w-full bg-white z-50'>
            <div className='w-full max-w-[1200px] lg:px-0 md:px-8 px-6 mx-auto lg:h-[92px] md:h-20 h-18 flex justify-between items-center'>
                
                {/* Logo */}
                <div>
                    <h1 className='lg:text-4xl md:text-3xl text-3xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent leading-tight py-1'>
                        DigTools
                    </h1>
                </div>

                {/* Navigation Links */}

                {/* Mobile Menu*/}
                <div className={`
                    ${isMenuOpen ? 'flex flex-col absolute top-[100%] left-0 w-full bg-white border-b border-gray-300 p-7 shadow-md gap-6' : 'hidden'} 
                    lg:static lg:flex lg:flex-row lg:w-auto lg:border-none lg:shadow-none lg:p-0 lg:gap-8 lg:mt-0
                `}>
                    {
                        allManu.map((menu, index) => (
                            <a href="#" key={index} className='font-medium hover:text-[#4F39F6] transition-colors'>
                                {menu}
                            </a>
                        ))
                    }
                </div>

                {/* Right Side Icons & Buttons */}
                <div className='flex gap-4 items-center'>
                    {/* Cart */}
                    <div className='relative cursor-pointer'>
                        <a href="#cart-section">
                        <img onClick={() => setOpen('cart')} src={soppingCard} alt="Shopping-Cart" className='w-[20px]'/>
                        </a>
                        {visible && cartItem.length > 0 && (
                            <span className='absolute -top-2.5 -right-2.5 text-[10px] bg-red-500 px-[5px] py-[1px] rounded-full text-white font-bold'>
                                {cartItem.length}
                            </span>
                        )}
                    </div>

                    <a href="#" className='text-[16px] font-medium ml-2'>Login</a>
                    
                    <button className='hidden lg:block px-5 py-2.5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-[16px] font-medium text-white rounded-full cursor-pointer hover:opacity-90 transition-opacity'>
                        Get Started
                    </button>

                    {/* Mobile Menu Icon */}
                    <div className='lg:hidden cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navber;