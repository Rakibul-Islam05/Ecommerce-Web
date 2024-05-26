import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const ImageList = [
    {
        id: 1,
        img: image1,
        title: "Outdoor Adventure Backpack",
        description: "Gear up for your next outdoor adventure with this rugged backpack. Designed for comfort and durability, it features ample storage space for all your essentials. Whether you're hiking through mountain landscapes or exploring remote trails, this backpack has got you covered."
    },
    {
        id: 2,
        img: image2,
        title: "Home Espresso Machine",
        description: "Bring the cozy atmosphere of a coffee shop into your home with this high-quality espresso machine. Craft barista-quality beverages from the comfort of your kitchen and savor the rich aroma of freshly brewed coffee. With its sleek design and intuitive controls, making your favorite brews has never been easier."
    },
    {
        id: 3,
        img: image3,
        title: "Urban Photography Prints Set",
        description: "Add a touch of urban sophistication to your home decor with this set of stunning photography prints. Capturing the beauty of city sunsets and skylines, these prints will instantly elevate any space. Printed on high-quality paper and available in a variety of sizes, they make the perfect statement piece for your living room, office, or bedroom."
    }
];

const Hero = ({handleOrderPopup}) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>

            {/* background pattern */}
            <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-1'>
            </div>

            {/* Carousel section */}
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings} className="w-full">
                    {ImageList.map((data) => (
                        <div key={data.id} className=''>
                            <div className=''>
                                <div className='flex flex-col justify-center gap-4 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative'>
                                    <h1
                                        data-aos="zoom-out"
                                        data-aos-once="true"
                                        data-aos-duration="500"
                                        className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                        className='text-sm'>{data.description}</p>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    data-aos-delay="300"
                                >
                                    <button className='bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full text-white hover:scale-105 duration-200 mt-3' onClick={handleOrderPopup}>Order Now</button>
                                </div>
                            </div>

                            <div className='order-1 sm:order-2'>
                                <div
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    className='relative z-10'>
                                    <img src={data.img} alt="" className='w-[500px] h-[450px] sm:h-[450px] sm:scale-125 object-contain mx-auto' />
                                </div>
                            </div>
                        </div>
                    ))}

                </Slider>

            </div>
        </div>
    );
};

export default Hero;
