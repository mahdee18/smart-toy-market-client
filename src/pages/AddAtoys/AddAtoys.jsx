import React from 'react';
import Swal from 'sweetalert2'
import useTitle from '../../Hook/useTitle';

const AddAtoys = () => {
    useTitle('Add A Toys')
    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.toyName.value;
        const picture = form.pictureURL.value;
        const seller = form.sellerName.value;
        const email = form.sellerEmail.value;
        const category = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.details.value;
        const toyData = { category, picture, name, price, rating, quantity, seller, description, email }
    
        fetch('https://smart-toy-market-server.vercel.app/alltoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged == true) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added successfully!!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <form onSubmit={handleAddToy} className="max-w-[750px] mx-auto overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-400">
            {/* Body*/}
            <div className="p-6">
                <header className="mb-4 text-center">
                    <h3 className="text-xl font-medium text-slate-700">Please add a toy!</h3>
                </header>
                <div className="flex flex-col">
                    <div className='flex gap-4 w-full'>
                        {/* Input field */}
                        <div className="relative my-6 w-1/2">
                            <input

                                type="text"
                                name="toyName"
                                placeholder="Toy Name"
                                className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b03"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Toy Name
                            </label>
                            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-700 peer-invalid:text-pink-500">
                                <span></span>
                            </small>
                        </div>

                        {/* Additional fields */}
                        <div className="relative my-6 w-1/2">
                            <input
                                id="pictureURL"
                                type="text"
                                name="pictureURL"
                                placeholder="Picture URL of the toy"
                                className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b14"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                            >
                                Picture URL of the toy
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-4 w-full'>

                        {/* Seller name field */}
                        <div className="relative my-6 w-1/2">
                            <input
                                id="sellerName"
                                type="text"
                                name="sellerName"
                                placeholder="Seller name"
                                className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b16"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                            >
                                Seller name
                            </label>
                        </div>
                        {/* Seller email field */}
                        <div className="relative my-6 w-1/2">
                            <input
                                id="sellerEmail"
                                type="email"
                                name="sellerEmail"
                                placeholder="Seller email"
                                className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b17"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                            >
                                Seller email
                            </label>
                        </div>
                    </div>
                    <div className='flex w-full gap-4'>

                        {/* Sub Category field */}
                        <div className="relative my-6 w-1/2">
                            <input
                                type="text"
                                name="subCategory"
                                placeholder="Name"
                                className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b15"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                            >
                                Sub-Category
                            </label>
                        </div>

                        {/* Price field */}
                        <div className="relative my-6 w-1/2">
                            <input
                                id="name"
                                type="text"
                                name="price"
                                placeholder="Price"
                                className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b15"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                            >
                                Price
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-4 w-full'>

                        {/* Rating field */}
                        <div className="relative my-6 w-1/2">
                            <input
                                type="text"
                                name="rating"
                                placeholder="Rating"
                                className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b15"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                            >
                                Rating
                            </label>
                        </div>
                        {/* Available Quantity field */}
                        <div className="relative my-6 w-1/2">
                            <input
                                type="text"
                                name="quantity"
                                placeholder="Available Quantity"
                                className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b15"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                            >
                                Available Quantity
                            </label>
                        </div>
                    </div>
                    {/* Details Description field */}
                    <div className="relative my-6">
                        <input
                            type="text"
                            name="details"
                            placeholder="Details Description"
                            className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        />
                        <label
                            htmlFor="id-b15"
                            className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                        >
                            Details Description
                        </label>
                    </div>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full h-10 mt-6 font-medium text-white transition-all bg-[#ff6e13]  rounded hover:bg-gray-600"
                >
                    Add A Toy
                </button>
            </div>
        </form>
    );
};

export default AddAtoys;