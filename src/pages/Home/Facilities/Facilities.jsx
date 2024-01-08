import React from 'react';
import './Facilities.css'
import { FaChalkboardTeacher, FaPhotoVideo } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { GiFlexibleLamp } from 'react-icons/gi';
import { Fade } from 'react-awesome-reveal';

const Facilities = () => {
    return (
        <div className='grid md:grid-cols-4 gap-4 my-10 px-6 md:px-14'>
            <div  className='bg-gray-200 text-center border p-5 shadow-xl hover:shadow-xl hover:shadow-[#ff6e13] parent-div'>
                <Fade direction='right' triggerOnce>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='mb-4'>
                            <FaPhotoVideo  className='text-[80px] transition-transform duration-300 transform-gpu icon'></FaPhotoVideo >
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold my-3'>Learning Through Play</h1>
                            <p>Engaging Toys for Holistic and Creative Child Development</p>
                        </div>
                    </div>
                </Fade>

            </div>
            <div  className='bg-gray-200 text-center border p-5 shadow-xl hover:shadow-xl hover:shadow-[#ff6e13] parent-div'>
                <Fade direction='up' triggerOnce>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='mb-4'>
                            <FaChalkboardTeacher className='text-[80px] transition-transform duration-300 transform-gpu icon'></FaChalkboardTeacher>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold my-3'>Curated Educational Kits</h1>
                            <p>Inspiring Creativity and Critical Thinking with Thoughtfully Designed Learning Kits.</p>
                        </div>
                    </div>
                </Fade>

            </div>
            <div  className=' bg-gray-200 text-center border p-5 shadow-xl hover:shadow-xl hover:shadow-[#ff6e13] parent-div'>
                <Fade direction='down' triggerOnce>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='mb-4'>
                            <AiOutlineFundProjectionScreen className='text-[80px] transition-transform duration-300 transform-gpu icon'></AiOutlineFundProjectionScreen>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold my-3'>STEM-Focused Fun</h1>
                            <p>Explore Science, Technology, Engineering, and Math Through Exciting Educational Toys.</p>
                        </div>
                    </div>
                </Fade>

            </div>
            <div  className='bg-gray-200 text-center border p-5 shadow-xl hover:shadow-xl hover:shadow-[#ff6e13] parent-div'>
                <Fade direction='left' triggerOnce>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='mb-4'>
                            <GiFlexibleLamp className='text-[80px] transition-transform duration-300 transform-gpu icon'></GiFlexibleLamp>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold my-3'>Age-Appropriate Learning Tools</h1>
                            <p>Tailored Toys for Every Stage, Nurturing Growth and Exploration.</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Facilities;