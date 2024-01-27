import { Rating } from '@mui/material';
import React from 'react';
import { BsCart4 } from "react-icons/bs";
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const toy = useLoaderData()
    const { category, picture, name, price, rating, quantity, seller, description, email } = toy
    console.log(toy)
    return (
        <div className=" mt-10 mx-auto bg-white rounded-lg shadow-md overflow-hidden w-full grid md:grid-cols-2 gap-0 justify-items-center items-center">
            <img className="w-[400px] object-cover h-[400px]" src={picture} alt={name} />
            <div className="px-4 py-2 w-1/2">
                <h1 className="text-3xl font-bold  text-gray-800">{name}</h1>
                <div className="text-gray-500 text-lg mt-2">
                    <p className="py-2 text-2xl"><strong> ${price}</strong></p>
                    <p className="font-semibold"> {description}</p>
                    <p className=" mt-2"><strong>Category:</strong> {category}</p>
                    <p className='flex py-2 gap-2 items-center '><strong>Rating:</strong><span>{toy.rating}</span><Rating name="half-rating-read" defaultValue={rating} precision={0.1} readOnly /> </p>
                    <p className=""><strong>Quantity: </strong>{quantity}</p>
                    <p className="pt-2"><strong>Seller: </strong>{seller}</p>
                    <button className="bg-[#ff6e13]  text-white px-4 py-2 rounded-md mt-4 w-full flex items-center justify-center font-bold gap-5">
                       Add To Cart <BsCart4 className='text-white'></BsCart4>
                    </button>
                </div>
            </div>
        </div>


    );
};

export default ProductDetails;