import React from 'react';
import logo from "../../assets/logo.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";



const Footer = () => {
    return (
        <div className=''>
            <footer className=" footer p-10 bg-neutral text-neutral-content">
                <nav data-aos="zoom-in" className='md:col-span-2 flex flex-col justify-center items-center'>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={logo} alt="" className='h-20' />
                        <h1 className='text-2xl font-bold'>MegaMart</h1>
                    </div>
                    <p className='text-gray-300 w-5/6 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellendus tenetur saepe fugit asperiores aliquam.</p>
                </nav>
                <nav data-aos="zoom-in">
                    <h6 className="footer-title">Important Links</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav data-aos="zoom-in">
                    <h6 className="footer-title">Links</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav data-aos="zoom-in">
                    <div className='flex gap-3 text-2xl'>
                        <FaInstagram />
                        <FaFacebook />
                        <FaLinkedin />
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaLocationArrow />
                        <p>Dhaka,Bangladesh</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoIosPhonePortrait />
                        <p>+91 12345678</p>
                    </div>

                </nav>
            </footer>
        </div>
    );
};

export default Footer;