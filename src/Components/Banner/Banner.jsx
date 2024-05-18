import React from 'react';
import bannerImg from "../../assets/Banner.jpeg"
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodChain, GiFoodTruck } from 'react-icons/gi';

const Banner = () => {
    return (
        <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>

                    <div data-aos="zoom-in">
                        <img src={bannerImg}
                            alt=""
                            className='max-w-[400px] h-[350px] w-full mx-auto shadow-lg shadow-gray-950  object-cover]'
                        />
                    </div>
                    {/**text section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 data-aos="fade-down" className='text-3xl sm:text-4xl font-bold'> Winter sell 50% off</h1>

                        <p data-aos="fade-down" className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem possimus qui cupiditate delectus id.</p>

                        <div className='flex flex-col gap-4'>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
                                <p>Quality Products</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
                                <p>Fast Delivery</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
                                <p>Easy payment method</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <GiFoodChain className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
                                <p>Get Offer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;