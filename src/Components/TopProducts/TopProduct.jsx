import React from 'react';
import image1 from "../../assets/shirt/shirt1.jpeg";
import image2 from "../../assets/shirt/shirt2.jpeg";
import image3 from "../../assets/shirt/shirt3.jpeg";
import { FaStar } from 'react-icons/fa';
import { MdStar } from "react-icons/md";





const productsData = [
    {
        id: 1,
        img: image1,
        title: "Printed t-shirt",
        description: "Gear up for you at anywhere"
    },
    {
        id: 2,
        img: image2,
        title: "Casual Wear",
        description: "Bring the cozy atmosphere."
    },
    {
        id: 3,
        img: image3,
        title: "Classic Shirt",
        description: "touch of urban to your home."
    }
];
const TopProduct = ({handleOrderPopup}) => {
    return (
        <div>
            <div className="container">
                {/*header section */}
                <div className='mb-28'>
                    <p data-aos="fade-up" className='text-primary font-semibold'>Top Rated Products for you</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, expedita?
                    </p>
                </div>

                {/*body section */}
                <div data-aos="zoom-in" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                    {
                        productsData.map((data) => (
                            <div
                                className='rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary/50 hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group max-w[300px] mt-10'
                                key={data.id}>

                                {/**image section */}
                                <div className="h-[100px]">
                                    <img
                                        src={data.img}
                                        className='max-w-[170px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                                    />
                                </div>
                                {/**image details section */}
                                <div className='p-4 text-center mt-10'>
                                    <div className='w-full flex items-center justify-center gap-2'>
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                    </div>

                                    <h1 className='text-xl font-bold'>{data.title}</h1>

                                    <p
                                        className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'
                                    >{data.description}
                                    </p>
                                    
                                    <button className='bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full text-white hover:scale-105 duration-200 mt-3' onClick={handleOrderPopup}>Order Now</button>
                                

                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TopProduct;