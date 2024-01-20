import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export const CarouselMain = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://i5.walmartimages.com/asr/b06f9009-4aa8-4bdd-8559-498b21971489_1.affe7ba283dbb15367933ad26c6c3d91.jpeg", tags: "Room", }, { img: "https://th.bing.com/th/id/OIP.BBftAWLH_5FeTmZgQm8mUwHaHa?w=800&h=800&rs=1&pid=ImgDetMain", tags: "Room", }, { img: "https://m.media-amazon.com/images/I/715pZyRnyeL._AC_SX569_.jpg", tags: "Room", }, { img: "https://th.bing.com/th/id/OIP.UVj71BrUO93IXor4uRvGygHaHa?rs=1&pid=ImgDetMain", tags: "Room", }, { img: "https://m.media-amazon.com/images/I/91nO8S2XFPL._AC_SL1500_.jpg", tags: "Room", },];
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
    return (
        <div className="sm:w-2/3 h-[540px] md:h-[670px] flex items-center relative overflow-hidden">
            {/* arrow */}
            <button onClick={nextSlider} className="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-6 h-6 md:w-8 md:h-8 bgWhite ">
                <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
            </button>
            {/* slider container */}
            <div className="ease-linear duration-300 flex gap-[2%]" style={{ transform: `translateX(-${currentSlider * 52}%)` }}>
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <div key={inx}
                        className={`${currentSlider === inx ? 'h-[310px] md:h-[310px] lg:h-[580px] ' : 'h-[260px] md:h-[280px] lg:h-[480px]'} min-w-[50%] bg-black/30 relative duration-200`}
                    >
                        <img src={slide.img} className="w-full h-full" alt={slide.tags} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Carousel2 = () => {
    return (
        <div className="max-w-full mx-auto h-[540px] lg:h-[670px] px-3 lg:px-10 flex flex-col lg:flex-row items-center justify-center overflow-hidden gap-5 lg:gap-10 relative">
            <div className="bg-[#a7cedd] w-full absolute left-0 h-[540px] lg:h-[670px] -z-40"></div>

            <div className="w-2/3 lg:w-1/3 text-center lg:text-left space-y-2 lg:space-y-5 py-5">
                <Fade direction='left' triggerOnce>
                    <h1 className="text-4xl lg:text-5xl font-semibold">
                        Welcome to <br />
                        <span className='text-[#ff6e13] font-bold'>Smart Toy Market</span>
                    </h1>
                    <p className="text-[#616161] text-xs md:text-lg"> Explore our wide range of innovative and 
                        educational toys for engineering, language learning, and more!</p>
                    <Link to='/allToys' className="font-bold py-2 xl:py-3 text-xs md:text-base lg:text-lg xl:text-xl hover:scale-95 duration-300 px-4 lg:px-10 text-white bg-[#ff6e13]">Explore More</Link>
                </Fade>
            </div>
            <CarouselMain />
        </div>
    );
};