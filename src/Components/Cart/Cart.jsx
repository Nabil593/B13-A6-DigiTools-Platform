import React, { use } from 'react';
import soppingCard from '../../assets/products/shopping-cart.png';

const Cart = ({open, featchData}) => {

    const data = use(featchData);

    return (
        <div>
            {
                open === "cart" && 
                <div>
                    <h1>Your Cart</h1>
                    {
                        data.length === 0 
                        ? <div className=''>
                            <img src={soppingCard} alt="Shopping Cart"/>
                            <p>Your Cart is empty</p>
                          </div> 
                        : <div>
                            <h1>Hello</h1>
                        </div> 
                    }
                </div>
            }
        </div>
    );
};

export default Cart;