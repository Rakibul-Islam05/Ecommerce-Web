import React from 'react';
import Slider from "react-slick"

const testimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur maxime deserunt quaerat a, quis hic!",
        img: "https://i.pinimg.com/564x/47/91/f0/4791f027dcad85f85883359daf191c5d.jpg"
    },
    {
        id: 2,
        name: "Staya Nadella",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur maxime deserunt quaerat a, quis hic!",
        img: "https://i.pinimg.com/564x/04/19/a2/0419a27cde314d96055bca552507bdf0.jpg"
    },
    {
        id: 3,
        name: "James",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur maxime deserunt quaerat a, quis hic!",
        img: "https://i.pinimg.com/564x/4c/57/ba/4c57ba8c4c5e7245bdb58c5e9e8d1170.jpg"
    },
    {
        id: 4,
        name: "Henry William",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur maxime deserunt quaerat a, quis hic!",
        img: "https://i.pinimg.com/564x/79/f4/eb/79f4eb7f1d7bf7b8d56b5ccfc43de58c.jpg"
    },
    {
        id: 5,
        name: "Michael Oliver",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur maxime deserunt quaerat a, quis hic!",
        img: "https://i.pinimg.com/564x/35/41/ea/3541ea71d49833e5d8f5cb9647348342.jpg"
    },
]

const Testimonials = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return (
        <div className='py-10 mb-10'>
            <div className='container'>
                {/**header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>

                    <p data-aos="fade-up" className='text-primary font-semibold'>Top What our customers are saying</p>

                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonial</h1>

                    <p data-aos="fade-up" className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, expedita?
                    </p>

                </div>

                {/**Testimonial cards */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {testimonialData.map((data) => (
                            <div
                                key={data.id}
                                className='my-6'
                            >
                                <div
                                    className='flex flex-col gap4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'
                                >

                                    <div className='mb-4'>
                                        <img src={data.img}
                                            alt=""
                                            className='rounded-full w-20 h-20'
                                        />
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3'>
                                            <p className='text-xs text-gray-500'>{data.text}</p>

                                            <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
                                        </div>
                                    </div>
                                        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;