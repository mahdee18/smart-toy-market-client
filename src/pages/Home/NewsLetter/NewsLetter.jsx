 const NewsLetter = () => {
    return (
        <section className="items-center mt-12 max-w-screen-full mx-auto px-4 gap-4 md:flex md:px-8 xl:gap-12 py-10 bg-[#8dc2d5]">
            <div className="flex-1 space-y-3 ">
                <h3 className="text-3xl text-white font-bold lg:text-3xl">
                    Subscribe to our newsletter
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.  
                </p>
            </div>
            <div className="mt-6 flex-1">
                <form 
                    onSubmit={(e) => e.preventDefault()}
                    className="items-center justify-center sm:flex">
                    <input 
                        type="email"
                        placeholder="Enter your email"
                        className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
                    />
                    <button
                        className="w-full mt-3 px-5 py-3 rounded-md text-white bg-[#ff6e13] hover:bg-indigo-500 active:bg-indigo-700 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-[#ff6e13] sm:mt-0 sm:ml-3 sm:w-auto"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="mt-3 text-[15px] text-gray-200">
                    Product updates, announcements, and discounts.
                    Read our <a className="text-indigo-600 underline" href="javascript:void(0)"> Privacy Policy </a>
                </p>
            </div>
        </section>
    )
}
export default NewsLetter