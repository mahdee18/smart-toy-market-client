import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="mx-auto relative">
        <img className="w-full h-[500px] object-cover" src="https://cdn.shopify.com/s/files/1/0475/2385/6541/files/slide-1.jpg?v=1613706860" alt="banner" />
        <div className="absolute top-0 w-full h-full bg-black opacity-10"></div>
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2 text-gray-500 text-center sm:text-right lg:text-center lg:max-w-lg lg:pr-10">
          <h1 className="text-5xl font-semibold">
            Welcome to <br />
            <span className='text-[#ff6e13] opacity-75 font-bold'>Smart Toy Market</span>
          </h1>
          <p className="py-6 text-gray-500">
            Explore our wide range of innovative and <br />
            educational toys for engineering, language learning, and more!
          </p>
          <button className="btn btn-active bg-[#ff6e13] opacity-75 border-0 font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
