import {useEffect} from 'react'
import React from "react";
const Verizon = ()=> {
    useEffect(() => {
        console.log('Verizon component useEffect triggered');
        window.scrollTo(0, 0);
      }, []);
    return (

        <div className='flex flex-col flex-wrap  min-h-screen h-full '>
        <h1 className="flex flex-wrap items-center justify-start text-sm sm:text-sm md:text-sm lg:text-lg xl:text-lg p-1"> Software Engineer <span className='p-1 text-green'>@Verizon</span>  </h1>
        <ul className=" flex flex-col justify-start flex-wrap items-start text-left list-none max-w-[80%]">

        <li className="flex items-center justify-start text-sm xl:text-lg p-1">
            <i className="fas fa-thin fa-caret-right text-green hover:text-green active:text-green pr-2"></i>
            Developed custom hooks to encapsulate complex logic and handle API calls
        </li>
        <li className="flex items-center justify-start text-sm sm:text-sm md:text-sm lg:text-md xl:text-lg p-1">
            <i className="fas fa-thin fa-caret-right text-green hover:text-green active:text-green pr-2"></i>
            Developed a library of Reusable components like Shimmer UI and Nav bars 
        </li>
        <li className="flex items-center text-sm sm:text-sm md:text-sm lg:text-md xl:text-lg p-1">
            <i className="fas fa-thin fa-caret-right text-green hover:text-green active:text-green pr-2"></i>
            Used Redux for state management and React router for route management
        </li>
        <li className="flex items-center text-sm sm:text-sm md:text-sm lg:text-md xl:text-lg p-1">
            <i className="fas fa-thin fa-caret-right text-green hover:text-green active:text-green pr-2"></i>
            Implemented REST APIs with Spring and Hibernate for FIOS channel data retrieval using a config-driven approach
        </li>
        <li className="flex items-center text-sm sm:text-sm md:text-sm lg:text-md xl:text-lg p-1">
            <i className="fas fa-thin fa-caret-right text-green hover:text-green active:text-green pr-2"></i>
            Maximized test coverage through Jest for front-end development and JUnit for robust back-end implementation
        </li>
        </ul>

        </div>


)
}

export default Verizon;