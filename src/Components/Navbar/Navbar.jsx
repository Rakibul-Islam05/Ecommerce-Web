import React from 'react';
import logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from '../DarkMode/DarkMode';

const Navbar = () => {
    return (
        <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            {/*upper navbar*/}
            <div className='bg-primary/40 py-3'>
                <div className='container flex justify-between items-center'>

                    {/*Logo and Name*/}
                    <div >
                        <a href="" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                            <img src={logo} alt="logo" className='w-10' />
                            MegaMart
                        </a>
                    </div>

                    {/*input*/}
                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative group sm:block'>
                            <input type="text"
                                placeholder='search'
                                className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 px-2 py-1 border rounded-full border-gray-300 focus:outline-none focus:border-primary'
                            />
                            <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                        </div>
                    </div>

                    {/*Order*/}
                    <button onClick={() => alert("order not available yet")} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 px-4 py-1 rounded-full text-white flex items-center gap-3 group'>
                        <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                        <FaShoppingCart className='text-xl text-white drop-shadow-sm cursor-pointer' />
                    </button>

                    {/*darkmode switch*/}
                    <div>
                    <DarkMode></DarkMode>
                    </div>
                </div>
            </div>

            {/*Lower navbar*/}
            <div>
            </div>
        </div>
    );
};

export default Navbar;