import {Link, Outlet} from "react-router-dom";
import { useState,useEffect } from "react";
import Verizon from "./Verizon";


import React from "react";
const Experience = ()=> {

    const [isClicked, setIsClicked] = useState("");
    useEffect(() => {
        // Set the initial state when the component is mounted
        setIsClicked("Verizon");
      }, []);
    
    return (
        <div className="min-h-screen h-full h-screen">
            {/* <SectionTitle title="Where I have Worked" titleNo="02"/> */}
            <h1 className=" flex flex-col flex-wrap items-center justify-center font-bold text-lg sm:text-sm md:text-2xl lg:text-3xl xl:text-4xl mb-[1%] text-slate">Where I've worked</h1> 
          <div className= "justify-center items-center text-lightestslate min-w-full w-full h-full">
           
            <ul className="md:flex flex flex-wrap xs:hidden justify-center items-center list-none">
                
               <Link to="/experience/Verizon"> 
               <li className={`flex items-center ${isClicked === 'Verizon' ? 'text-green' : 'text-lightestSlate'} text-lg sm:text-sm md:text-lg lg:text-3xl xl:text-xl p-5`} onClick={()=> setIsClicked("Verizon")}>
                    <i className={`fas fa-solid fa-mobile-screen-button ${isClicked === 'Verizon' ? 'text-green' : 'text-lightestSlate'} hover:text-green mr-2 active:text-green text-lg sm:text-sm md:text-lg lg:text-3xl xl:text-4xl`}></i> Verizon
                </li>
                </Link>
                <Link to="/experience/Infosys">
                <li className={`flex items-center ${isClicked === 'Infosys' ? 'text-green' : 'text-lightestSlate'} text-lg sm:text-sm md:text-lg lg:text-3xl xl:text-xl p-5`} onClick={()=> setIsClicked("Infosys")} >
                    <i className={`fas fa-light fa-computer ${isClicked === 'Infosys' ? 'text-green' : 'text-lightestSlate'} hover:text-green mr-2 active:text-green text-lg sm:text-sm md:text-lg lg:text-3xl xl:text-4xl`}></i> Infosys
                </li>
                </Link>
                <Link to="/experience/ThinkMax">
                <li className={`flex items-center ${isClicked === 'ThinkMax' ? 'text-green' : 'text-lightestSlate'} text-lg sm:text-sm md:text-lg lg:text-3xl xl:text-xl p-5`} onClick={()=> setIsClicked("ThinkMax")} >
                    <i className={`fas fa-landmark ${isClicked === 'ThinkMax' ? 'text-green' : 'text-lightestSlate'} hover:text-green mr-2 active:text-green text-lg sm:text-sm md:text-lg lg:text-3xl xl:text-4xl`}></i> ThinkMax
                </li>
                </Link>
    
            </ul>
            <Outlet/>
            </div>
           
          </div>

        
    )
}

export default Experience;