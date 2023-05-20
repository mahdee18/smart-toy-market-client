import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const toy = useLoaderData()
    console.log(toy)
    return (
        <div>
            <h2>This is product details</h2>
        </div>
    );
};

export default ProductDetails;