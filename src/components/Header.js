import { Link } from "react-router-dom";
import React, { useSyncExternalStore } from "react";
import { useState } from "react";

const Header = ()=> {


    const [isClicked, setIsClicked] = useState("");
    const [sideClick, setSideClick] = useState(false);
   console.log("I am rendered");
   return (
   
<>
<div className=" pl-[10%] max-w-full w-full flex items-start top-0 z-[10000] sticky bg-navy text-slate text-md sm:text-sm md:text-md lg:text-lg xl:text-xl">

    
<svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 84 96"
          className="hidden  md:flex text-green pt-[1%] max-h-20 max-w-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-101 duration-300"
        >
          <title>Logo</title>
          <g transform="translate(-8.000000, -2.000000)">
          <g transform="translate(11.000000, 5.000000)">
          <polygon
            id="Shape"
            className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-101 duration-300 stroke-green stroke-5 stroke-linecap-round stroke-linejoin-round"
            fill="#0a192f"
            points="39 0 0 22 0 67 39 90 78 68 78 23"
          />
          </g>
          </g>
           <Link to="/"><text
            x="27"
            y="55"
            fill="#64ffda"
            className=" pl-[10%] text-green transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-101 duration-300  sm:text-lg text-2xl font-serif" // Tailwind CSS classes for fontSize and fontFamily
          >
            SC
          </text>
          </Link>
        </svg>

    <div className="mr-auto">
    </div>
    <ul className="hidden md:flex justify-end flex-wrap text-slate max-w-[50%]">
    
    


    <Link to="/about">
          <li
            className={`${isClicked === 'About' ? 'text-green' : 'text-lightestSlate'} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green m-2 p-2`}
            onClick={() => { setIsClicked("About") }}
          >
            About
          </li>
        </Link>
        <Link to="/experience">
        <li
            className={`${isClicked === 'Experience' ? 'text-green' : 'text-lightestSlate'} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green m-2 p-2`}
            onClick={() => { setIsClicked("Experience") }}
          >
           Experience
          </li>
            </Link>
        <Link to="/projects">
        <li
            className={`${isClicked === 'Projects' ? 'text-green' : 'text-lightestSlate'} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green m-2 p-2`}
            onClick={() => { setIsClicked("Projects") }}
          >
           Projects
          </li>
            </Link>
            <Link to="/contact">
        <li
            className={`${isClicked === 'Contact' ? 'text-green' : 'text-lightestSlate'} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green m-2 p-2`}
            onClick={() => { setIsClicked("Contact") }}
          >
           Contact
          </li>
            </Link>
        <li className="shadow-sm shadow-green text-green px-[%] rounded-[5%] p-2 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-300 ">
            <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-300 "href="https://yawsresumebucket.s3.us-east-2.amazonaws.com/Saicharan+Resume.pdf">Resume</a>
        </li>
    </ul>
        <div className="p-2 m-2">
        < div onClick={()=>{setSideClick(!sideClick)}}  className="top-[1%] w-6 h-5 flex flex-col justify-between items-center md:hidden text-2xl text-green cursor-pointer group">
            <span className="w-full h-[2px] bg-green inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-green inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-green inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
            </div>
        </div>


       
  
</div>

{sideClick && 


<div className="absolute md:hidden w-full h-screen flex flex-col items-end z-[100]">




<ul className="flex fixed sticky top-0 flex-col md:hidden justify-end flex-wrap text-slate max-w-[50%]">

<Link to="/">
        <li
            className={`${isClicked === 'Home' ? 'text-green' : 'text-lightestSlate'} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green m-2 p-2`}
            onClick={() => { setIsClicked("Home")}}
          >
           Home
        </li>
</Link>



<Link to="/experience">
<li
 className={`${isClicked === 'Experience' ? 'text-green' : 'text-lightestSlate'} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green m-2 p-2`}
 onClick={() => { setIsClicked("Experience") }}
>
Experience
</li>
 </Link>
<Link to="/projects">
<li
 className={`${isClicked === 'Projects' ? 'text-green' : 'text-lightestSlate'} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green m-2 p-2`}
 onClick={() => { setIsClicked("Projects") }}
>
Projects
</li>
 </Link>
 <Link to="/contact">
<li
 className={`${isClicked === 'Contact' ? 'text-green' : 'text-lightestSlate'} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green m-2 p-2`}
 onClick={() => { setIsClicked("Contact") }}
>
Contact
</li>
 </Link>
<li className="shadow-sm shadow-green text-green px-[%] rounded-[5%] p-2 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-300 ">
 <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-300 "href="https://yawsresumebucket.s3.us-east-2.amazonaws.com/Saicharan+Resume.pdf">Resume</a>
</li>
</ul>  





</div>}


</>

)

}

export default Header;