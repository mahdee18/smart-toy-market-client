import React from 'react';
import { Link } from 'react-router-dom';

const ParralaxBanner = () => {
    return (
        <section className="relative my-8 text-center">
            <div className="h-96 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('https://th.bing.com/th/id/OIP.d-BVg3sfNbWOZEnx1O2aUAHaGN?w=533&h=447&rs=1&pid=ImgDetMain')` }}>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <h2 className="text-xl font-semibold">BUY YOUR TOY FROM US</h2>
                    <h1 className="text-4xl font-bold my-5">CHOOSE YOUR BEST TOY FROM SAMRT TOY MARKET</h1>
                    <Link to='/allclasses' className='btn bg-[#ff6e13] text-white hover:bg-indigo-500'>Get Start Now!</Link>
                </div>
            </div>
        </section>
    );
};

export default ParralaxBanner;