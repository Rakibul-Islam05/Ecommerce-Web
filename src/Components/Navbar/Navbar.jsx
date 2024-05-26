import React from 'react';
import logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa";
import DarkMode from '../DarkMode/DarkMode';


const menu = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Top Rated", link: "/about" },
    { id: 3, name: "Kids Wear", link: "/services" },
    { id: 4, name: "Mens Wear", link: "/products" },
    { id: 4, name: "Electronics", link: "/products" }
];

const DropdownLinks = [
    { id: 1, name: "Trending Products", link: "/#" },
    { id: 2, name: "Best Selling", link: "/about" },
    { id: 3, name: "Top Rated", link: "/services" },

];


const Navbar = ({ handleOrderPopup }) => {
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
                                className='w-[100px] sm:w-[200px] group-hover:w-[150px] sm:group-hover:w-[300px] transition-all duration-300 px-2 py-1 border rounded-full border-gray-300 focus:outline-none focus:border-primary dark:border-gray-500
                                dark:bg-gray-800'
                            />
                            <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                        </div>
                    </div>

                    {/*Order*/}
                    <button onClick={() => handleOrderPopup()} className='bg-gradient-to-r from-primary to-secondary transition-all duration-300 px-4 py-1 rounded-full text-white flex items-center gap-3 group'>
                        <span className='group-hover:block hidden transition-all'>Order</span>
                        <FaShoppingCart className='text-xl text-white drop-shadow-sm cursor-pointer' />
                    </button>

                    {/*darkmode switch*/}
                    <div>
                        <DarkMode></DarkMode>
                    </div>
                </div>
            </div>

            {/*Lower navbar*/}
            <div className='flex justify-center'>
                <ul className='sm:flex hidden  items-center gap-5'>
                    {
                        menu.map((data) => (
                            <li key={data.id}>
                                <a className='inline-block px-4 hover:text-primary duration-200' href={data.link}>{data.name}</a>
                            </li>
                        ))
                    }

                    <li className='group relative'>
                        <a className='flex items-center gap-[2px] py-2' href="#">Trending Products
                            <span>
                                <FaCaretDown
                                    className='transition-all duration-200 hover:rotate-180'
                                />
                            </span>
                        </a>
                        <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
                            <ul>
                                {
                                    DropdownLinks.map((data) => (
                                        <li key={data.id}>
                                            <a
                                                className='inline-block w-full rounded-md p-2 hover:bg-primary/30'
                                                href={data.link}>{data.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;