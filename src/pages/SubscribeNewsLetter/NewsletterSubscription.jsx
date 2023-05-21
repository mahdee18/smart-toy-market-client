import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="px-6 py-4 w-full flex items-center bg-[#88cada] text-white mt-12">
      <div className='w-1/2'>
        <h2 className="text-2xl mb-4">Subscribe to Our Newsletter</h2>
        <p>Be the first to know about new products, sales and promotions.
        </p>

      </div>
      <form onSubmit={handleSubmit} className='w-1/2 h-[200px] flex items-center relative'>
        <input
          placeholder='Your email'
          type="email"
          id="email"
          value={email}
          required
          className="px-4 py-2 mb-4 border rounded-3xl w-2/3"
        />

        <button
          type="submit"
          className="px-4 py-2.5 bg-[#ff6e13] text-white rounded-3xl  focus:outline-none border-[#ff6e13]  absolute top-[70px] right-[161px] border-dotted"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSubscription;
