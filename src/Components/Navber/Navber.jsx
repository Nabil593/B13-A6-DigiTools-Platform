import soppingCard from '../../assets/products/shopping-cart.png';
import { FiMenu } from 'react-icons/fi';

const Navber = ({ cartItem, visible }) => {

    return (
        <div className='border-b-1 border-gray-300 fixed top-0 left-0 w-full bg-white z-50'>
            <div className='w-full max-w-[1200px] lg:px-0 md:px-8 sm:px-6 px-6 mx-auto lg:h-[92px] md:h-20 sm:h-18 h-18 flex justify-between items-center'>
                <div><h1 className='lg:text-4xl md:text-3xl text-3xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent leading-tight py-1'>DigTools</h1></div>

                <div className='lg:block md:hidden sm:hidden hidden'>
                    <ul className='flex gap-8 text-[16px] font-medium'>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>



                <div className='lg:flex md:hidden sm:hidden hidden gap-4 items-center'>
                    <div className='relative'><img src={soppingCard} alt="Shopping-Cart" className='w-[18px]'/>
                    {visible && cartItem.length > 0 && <span className='absolute -top-2.5 -right-2.5 text-[12px] bg-red-500 px-[6px] rounded-full text-white '>{cartItem.length}</span>}</div>
                    <a href="#" className='text-[16px] font-medium'>Login</a>
                    <button className='px-5 py-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-[16px] font-medium text-white rounded-full cursor-pointer'>Get Started</button>
                </div>

                <FiMenu className='lg:hidden md:block sm:block block text-2xl'/>
            </div>
        </div>
    );
};

export default Navber;