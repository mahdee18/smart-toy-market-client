import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const toy = useLoaderData()
    console.log(toy)
    return (
        <div>
            
        </div>
    );
};

export default ProductDetails;