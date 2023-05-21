import React from 'react';

const Discount = () => {
    return (
        <section>
            <div className=" rounded-none card w-full mx-auto bg-gray-500 text-neutral-content mt-10">
                <div className="py-20">
                    <div className="flex items-center md:flex-row flex-col-reverse">
                        <div className="md:w-1/2 w-full mt-10">
                            <h2 className="text-white font-bold text-xl md:text-5xl ml-10 mb-4">
                                Don't miss out!
                            </h2>
                            <h2 className="text-white font-bold text-lg md:text-2xl ml-10">
                                Act quickly and seize the opportunity of our New Summer Sale with discounts of up to 20%.
                            </h2>
                            <button className="btn border-0 btn-primary bg-[#ff6e13] mt-5 ml-10 text-white">Shop Now !</button>
                        </div>

                        <div className="md:w-1/2 w-full">
                            <img src="https://toysferry.com/wp-content/uploads/2017/05/kid-right.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Discount;