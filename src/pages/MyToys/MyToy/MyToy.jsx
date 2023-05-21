import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToy = ({ toy, handleDelete}) => {
    const { _id, seller, category, price, rating, name, quantity, picture } = toy;
    console.log(toy)


    return (
        <tr className='text-center'>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-primary bg-[#ff6e13] opacity-75 border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {<img src={picture} />}
                    </div>
                </div>
            </td>
            <td>
                {seller}
            </td>
            <td>
                {name}
            </td>
            <td>
                {category}
            </td>
            <td> ${price}</td>
            <td>{quantity}</td>
            <th className='text-center'>
                <Link to={`/alltoys/${_id}`}><button className='border-0 btn btn-primary  bg-[#ff6e13] opacity-75 text-white'>View Details</button></Link>
                <Link to={`/update/${_id}`}><button className='border-0 btn btn-primary bg-[#ff6e13] opacity-75 text-white ml-4'>Update</button></Link>
            </th>
        </tr>
    );
};

export default MyToy;