import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Facilities = () => {
    return (
        <div className='my-16 px-6 md:px-14'>
            <div data-aos="zoom-in" className='text-center mb-6'>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">About Us</h2>
                <p className="text-lg text-gray-600">We make your children happier with the best toys</p>
            </div>
            <div className='grid md:grid-cols-4 gap-4'>
                <div data-aos="zoom-in" className='text-center p-10 rounded shadow-xl space-y-3'>
                    <img className='mx-auto' src='https://cdn1.iconfinder.com/data/icons/big-data-orchid-vol-1/256/Feature_Selection-256.png' alt="" />
                    <h1 className='text-2xl font-bold'>Big Selection</h1>
                    <p>The widest toy range.</p>
                </div>
                <div data-aos="zoom-in" className='text-center p-10 rounded shadow-xl space-y-3'>
                    <img className='mx-auto' src='https://www.pixerea.co.in/images/e-commerce.png' alt="" />
                    <h1 className='text-2xl font-bold'>Online Store</h1>
                    <p>Easiest online shopping.</p>
                </div>                    
                
                <div data-aos="zoom-in" className='text-center p-10 rounded shadow-xl space-y-3'>
                    <img className='mx-auto' src='https://th.bing.com/th/id/OIP.LVWEW_dDEj6rr_Fj3DxnTwHaHa?rs=1&pid=ImgDetMain' alt="" />
                    <h1 className='text-2xl font-bold'>Delivery</h1>
                    <p>Fast and easy delivery.</p>
                </div>
                <div data-aos="zoom-in" className='text-center p-10 rounded shadow-xl space-y-3'>
                    <img className='mx-auto' src='https://th.bing.com/th/id/OIP.GOMfpYXn7tz31xp25z96XQAAAA?rs=1&pid=ImgDetMain' alt="" />
                    <h1 className='text-2xl font-bold'>Support</h1>
                    <p>Call our awesome team.</p>
                </div>
            </div>
        </div>
    );
};

export default Facilities;