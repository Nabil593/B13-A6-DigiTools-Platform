import React, { use } from 'react';
import SingleCard from '../../SingleCard/SingleCard';

const ProductsCard = ({featchData}) => {
    const allData = use(featchData);

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12 items-center'>
                {
                allData.map((data) => {
                    return (
                        <SingleCard key={data.id} data = {data} />
                    )
                })
                }
            </div>
        </div>
    );
};

export default ProductsCard;