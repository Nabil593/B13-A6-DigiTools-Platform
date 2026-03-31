import React, { use } from 'react';
import SingleCard from '../../SingleCard/SingleCard';

const ProductsCard = ({featchData, cartItem, setcartItem, visible, setVisible, totalPrice, setTotalPrice}) => {
    const allData = use(featchData);

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12 items-center'>
                {
                allData.map((data) => {
                    return (
                        <SingleCard key={data.id} data = {data} cartItem = {cartItem} setcartItem = {setcartItem} visible = {visible} setVisible = {setVisible} totalPrice = {totalPrice} setTotalPrice = {setTotalPrice}/>
                    )
                })
                }
            </div>
        </div>
    );
};

export default ProductsCard;