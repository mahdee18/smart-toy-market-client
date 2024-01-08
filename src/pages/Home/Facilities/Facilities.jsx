import React from 'react';
import './Facilities.css'
import { FaChalkboardTeacher, FaPhotoVideo } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { GiFlexibleLamp } from 'react-icons/gi';
import { Fade } from 'react-awesome-reveal';

const Facilities = () => {
    return (
        <div className='grid md:grid-cols-4 gap-4 my-10 px-6 md:px-14'>
            <div  className='bg-gray-200 text-center border p-5 shadow-xl hover:shadow-xl hover:shadow-green-100 parent-div'>
                <Fade direction='right' triggerOnce>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='mb-4'>
                            <FaPhotoVideo  className='text-[80px] transition-transform duration-300 transform-gpu icon'></FaPhotoVideo >
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold my-3'>Photographic Diversity</h1>
                            <p>Discover the Joy of Learning Different Photography that Inspire You</p>
                        </div>
                    </div>
                </Fade>

            </div>
            <div  className='bg-gray-200 text-center border p-5 shadow-xl hover:shadow-xl hover:shadow-green-100 parent-div'>
                <Fade direction='up' triggerOnce>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='mb-4'>
                            <FaChalkboardTeacher className='text-[80px] transition-transform duration-300 transform-gpu icon'></FaChalkboardTeacher>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold my-3'>Expert Instructor</h1>
                            <p>Learn from Seasoned Professionals and Industry Leaders in Photography courses</p>
                        </div>
                    </div>
                </Fade>

            </div>
            <div  className=' bg-gray-200 text-center border p-5 shadow-xl hover:shadow-xl hover:shadow-green-100 parent-div'>
                <Fade direction='down' triggerOnce>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='mb-4'>
                            <AiOutlineFundProjectionScreen className='text-[80px] transition-transform duration-300 transform-gpu icon'></AiOutlineFundProjectionScreen>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold my-3'>Interactive Learning</h1>
                            <p>Engage and Make Progress with Immersive Tools and Interactive Resources</p>
                        </div>
                    </div>
                </Fade>

            </div>
            <div  className='bg-gray-200 text-center border p-5 shadow-xl hover:shadow-xl hover:shadow-green-100 parent-div'>
                <Fade direction='left' triggerOnce>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='mb-4'>
                            <GiFlexibleLamp className='text-[80px] transition-transform duration-300 transform-gpu icon'></GiFlexibleLamp>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold my-3'>Flexible Option</h1>
                            <p>Customize Your Photographic Journey to Fit Your Busy Schedule and Learning Style</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Facilities;