import checkIcon from '../../assets/check.png'
import { FaCheck } from 'react-icons/fa';
import { ImTelegram } from 'react-icons/im';
import { toast } from 'react-toastify';

const SingleCard = ({ data, cartItem, setcartItem, setVisible, setTotalPrice }) => {
    
     const isAdded = cartItem.find((item) => item.id === data.id);

     const handleCart = () => {
         setVisible(true);

        if (!isAdded) {
            toast.success('Item added to cart!');
            setcartItem((prev) => [...prev, data]);
            setTotalPrice((prev) => prev + data.price);
        }

     }


 
    return (
        <div>
            <div className='relative w-full rounded-2xl border-2 border-gray-300 p-6 space-y-4'>
            
                <p className={`absolute top-2 right-2 px-4 py-1.5 rounded-full 
                    ${data.tagType === "new" && "text-[#0A883E] bg-[#DBFCE7]"} 
                    ${data.tagType === "best-seller" && "text-[#BB4D00] bg-[#FEF3C6]"} 
                    ${data.tagType === "popular" && "bg-[#E1E7FF]"}`}>
                        {data.tagType === "popular" ? <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>{data.tag}</span> : data.tag}
                </p>
            
                <div className='w-14 border-2 border-gray-200 p-3.5 rounded-full'><img src={data.image} alt={data.name}/></div>
                <h2 className='text-2xl font-bold'>{data.name}</h2>
                <p className='text-[16px] text-[#627382]'>{data.description}</p>
                <p><span className='text-2xl font-bold'>${data.price}</span><span className='text-[16px] text-[#627382]'>/{data.period}</span></p>
                <ul>
                    <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>{data.features[0]}</span></li>
                    <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>{data.features[1]}</span></li>
                    <li className='flex items-center gap-2'><img src={checkIcon} alt="" className='w-4'/> <span>{data.features[2]}</span></li>
                </ul>
                <button  onClick={handleCart} className={`w-full px-5 py-3 ${isAdded ? 'bg-green-500' : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'} text-[16px] font-medium text-white rounded-full cursor-pointer`}>
                {isAdded 
                ? (<div className='flex items-center justify-center gap-2'><FaCheck /> Added to Cart</div>) 
                : 'Buy Now'
                }
                </button>
            </div>
        </div>
    );
};

export default SingleCard;