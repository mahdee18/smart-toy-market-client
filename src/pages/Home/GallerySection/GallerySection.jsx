import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GallerySection = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const images = [
        'https://ae01.alicdn.com/kf/HTB1T_HYcPgy_uJjSZPxq6ynNpXa3/Endev-Mechanical-Engineering-Building-Blocks-Bricks-Kids-Toys-DIY-Model-Collection-Gift-mechanicstechnic-mechanics-gear-toy.jpg',

        'https://ae01.alicdn.com/kf/HTB1R1PpXcrrK1Rjy1zeq6xalFXan/89-232Pcs-DIY-City-House-Roof-Big-Particle-Building-Blocks-Castle-Educational-Toys-For-Children-Compatible.jpg',

        'https://th.bing.com/th/id/R.e23ff288d02fb3ec0030cb7277ec48d6?rik=GGOw0Zb8NubEIQ&pid=ImgRaw&r=0',
        
        'https://th.bing.com/th/id/OIP.GV_SJr7bISBeg_dpJdi0_AHaHa?pid=ImgDet&w=1000&h=1000&rs=1',

        'https://i.ebayimg.com/images/g/VvUAAOSw7jtfCjxp/s-l640.jpg',
        'https://th.bing.com/th/id/OIP.XQ-9FW5MPKc6ThpEQFuA5wHaHa?pid=ImgDet&rs=1'
    ];

    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-3xl font-extrabold text-gray-900 mb-4"
                    data-aos="fade-up"
                >
                    Gallery
                </h2>
                <p
                    className="text-lg text-gray-600 mb-8"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Explore our collection of amazing toys and creations.
                </p>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                            data-aos="zoom-in"
                            data-aos-duration="500"
                            data-aos-delay={index * 100}
                        >
                            <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="w-full h-64 object-cover"
                                data-aos="flip-left"
                                data-aos-duration="800"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
