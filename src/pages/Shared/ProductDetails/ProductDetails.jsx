import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const toy = useLoaderData()
    const { category, picture, name, price, rating, quantity, seller, description, email } = toy
    console.log(toy)
    return (
        <div className=" mt-10 mx-auto bg-white rounded-lg shadow-md overflow-hidden w-full flex items-center">
            <img className="w-1/2 object-cover" src={picture} alt={name} />
            <div className="px-4 py-4 w-1/2">
                <h1 className="text-2xl font-bold  text-gray-800">{name}</h1>
                <div className="text-gray-500 text-lg mt-2">
                    <p className=" mt-2"><strong>Category:</strong> {category}</p>
                    <p className="py-2"><strong>Price:</strong> {price}</p>
                    <p className=""><strong>Rating:</strong> {rating}</p>
                    <p className="py-2"><strong>Quantity: </strong>{quantity}</p>
                    <p className=""><strong>Seller: </strong>{seller}</p>
                    <p className="py-2"><strong>Email: </strong>{email}</p>
                    <p className=""><strong>Description:</strong> {description}</p>
                </div>
            </div>
        </div>


    );
};

export default ProductDetails;