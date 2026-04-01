import { FiDelete, FiShoppingCart } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const Cart = ({open, cartItem, setcartItem, totalPrice, setTotalPrice}) => {

    const removeItem = (id) => {
        const finteredItem = cartItem.filter((item) => item.id !== id);
        setcartItem(finteredItem);

        const removedItemPrice = cartItem.find((item) => item.id === id)
        setTotalPrice((prev) => prev - removedItemPrice.price);
        toast.error('Item removed from cart!');
    }

    const removeAll = () => {
        setcartItem([]);
        setTotalPrice(0);
        toast.error('All items removed from cart!');
    }

    return (
        <div className='border-2 border-gray-300 p-10 mt-10 rounded-2xl'>
            {
                open === "cart" && 
                <div>
                    <h1 className='text-2xl font-bold mb-6'>Your Cart</h1>
                    {
                        cartItem.length === 0 
                        ? <div className='text-center space-y-2 my-20'>
                            <FiShoppingCart className='text-7xl mx-auto text-gray-400 '/>
                            <p className='text-[20px] font-medium text-gray-500'>Your Cart is empty</p>
                          </div> 
                        : <div className='space-y-4'>
                            {
                                cartItem.map((item) => {
                                    return (
                                        <div key={item.id} className='bg-gray-100 p-5 rounded-2xl flex lg:items-center md:items-center justify-between gap-2'>
                                            <div className='flex items-center gap-3'>
                                            <div className='w-14 border-2 border-gray-200 p-3.5 rounded-full'><img src={item.image} alt={item.name}/></div>
                                            <div>
                                                <p className='lg:text-[20px] md:text-[20px] text-[14px] font-semibold'>{item.name}</p>
                                                <p className='text-[16px] font-medium text-[#627382]'>${item.price}</p>
                                            </div>
                                            </div>


                                            <div>
                                                <button onClick={() => removeItem(item.id)} className='btn text-[#ff3939] text-[16px] font-bold hover:opacity-80 transition-opacity'><MdDelete /></button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div> 
                    }
                </div>
            }
            { cartItem.length > 0 &&
            <div>
                <div className='flex items-center justify-between my-4'>
                        <p className='text-[16px] font-medium text-gray-600'>Total</p>
                        <h2 className='text-2xl font-bold text-[#101727]'>${totalPrice}</h2>
                    </div>
                    <button onClick={removeAll} className='w-full px-5 py-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px] font-medium text-white rounded-full cursor-pointer hover:opacity-80 transition-opacity'>Proceed to Checkout</button>
            </div>
            }
        </div>
    );
};

export default Cart;