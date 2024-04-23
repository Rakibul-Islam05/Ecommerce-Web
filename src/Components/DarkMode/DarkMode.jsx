import React from 'react';
import LightButton from '../../assets/light-mode-toggle-icon.png';
import DarkButton from '../../assets/dark-mode-button.png'
import { MdLightMode ,MdDarkMode } from "react-icons/md";

const DarkMode = () => {
    const [theme,setTheme]= React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    
    const element = document.documentElement;

    React.useEffect(()=>{
        if(theme == "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
        else{
            element.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    },[theme]);

    return (
        <div className='relative'>
            <MdLightMode 
            onClick={()=> setTheme(theme=='light'? "dark" : "light")}
            className={`w-12 cursor-pointer rounded-xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.1)] transition-all duration-200 absolute right-0 text-3xl z-10 ${theme == "light" ? "opacity-0" : "opacity-100"}`}/>

            <MdDarkMode 
            onClick={()=> setTheme(theme=='light'? "dark" : "light")}
            className={`w-12 cursor-pointer rounded-xl text-3xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme == "dark" ? 'opacity-0' : 'opacity-100' }`}/>
        </div>

    );
};

export default DarkMode;