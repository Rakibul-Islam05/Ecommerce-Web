import React from 'react';
import Img1 from "../../assets/women/img1.jpg"
import Img2 from "../../assets/women/img2.jpg"
import Img3 from "../../assets/women/img3.jpg"
import Img4 from "../../assets/women/img4.jpg"
import Img5 from "../../assets/women/img5.jpg"
import { FaStar } from 'react-icons/fa';

const productsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5,
        color: "White",
        aosdelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women Ethnic",
        rating: 4.4,
        color: "Red",
        aosdelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Women Ethnic",
        rating: 4.2,
        color: "Blue",
        aosdelay: "100",
    },
    {
        id: 4,
        img: Img4,
        title: "Women Ethnic",
        rating: 5,
        color: "Brown",
        aosdelay: "300",
    },
    {
        id: 5,
        img: Img5,
        title: "Women Ethnic",
        rating: 4.7,
        color: "Black",
        aosdelay: "150",
    },

];

const Products = () => {
    return (
        <div className='mt-5 mb-12'>
            <div className='container'>
                {/*header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-primary font-semibold'>Top Selling Products for you</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, expedita?
                    </p>
                </div>

                {/*body section */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>

                        {productsData.map((data) => (
                            <div
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                key={data.id}
                                className='space-y-3'
                            >
                                <img
                                    src={data.img}
                                    alt=""
                                    className='h-[200px] w-[]'
                                />
                                <div className=''>
                                    <h3 className='font-semibold'>{data.title}</h3>
                                    <p className='text-gray-600'>{data.color}</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-400' />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/**view all button */}
                    <div data-aos="zoom-in" className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-primary text-white py-2 px-2 rounded-md'>View All Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;