import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { AiOutlineMail, AiOutlineUserAdd } from 'react-icons/ai';
import { MdOutlineHeadsetMic } from 'react-icons/md';
import { Link } from 'react-router-dom';


const CallToAction = () => {
    return (
        <div className='bg-indigo-500 my-5 p-6 md:p-14 grid md:grid-cols-3 space-y-5 items-center'>
            <Fade direction='left' triggerOnce>
                <div className='text-white md:space-y-3 border md:border-none p-4 hover:text-black'>
                    <AiOutlineMail className='text-5xl'></AiOutlineMail>
                    <Link>
                        <h1 className='text-2xl md:text-4xl font-semibold'>Get Quote</h1>
                    </Link>
                    <p>Find the price of your ideal Toys</p>
                </div>
            </Fade>
            <Fade direction='up' triggerOnce>
                <div className='text-white space-y-3 border md:border-none p-4 hover:text-black'>
                    <MdOutlineHeadsetMic className='text-5xl'></MdOutlineHeadsetMic>
                    <Link>
                        <h1 className='text-2xl md:text-4xl font-semibold'>Ask a question</h1>
                    </Link>
                    <p>Not sure what you need? Ask our Advisors</p>
                </div>
            </Fade>

            <Fade direction='right' triggerOnce>
            <div className='text-white space-y-3 border md:border-none p-4 hover:text-black'>
                <AiOutlineUserAdd className='text-5xl'></AiOutlineUserAdd>
                <Link>
                    <h1 className='text-2xl md:text-4xl font-semibold'>Join today</h1>
                </Link>
                <p>ing Up Now for a Free 30 Day Tria</p>
            </div>
            </Fade>
        </div>
    );
};

export default CallToAction;