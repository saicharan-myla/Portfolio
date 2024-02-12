import { Link, useLocation, useNavigate} from "react-router-dom";
import React, { useSyncExternalStore } from "react";
import { useState } from "react";
import * as Scroll from 'react-scroll';
import { Link as ScrollLink, Element } from 'react-scroll';
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";


const Header = ()=> {


  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const handleLinkClick = (to) => {
    // Change the route programmatically
  

    navigate(`/${to}`);

    // Scroll to the corresponding section
    scroller.scrollTo("", {
      duration: 500,
      delay: 0,
      smooth:true,
      spy:true,
      offset: -70,
    });

    // Set the active link state if needed
    setIsClicked("Projects");

   
    
    


    // Scroll to the corresponding section
    // ... (add your logic to scroll to the section with the specified sectionId)
  };

    const [isClicked, setIsClicked] = useState("");
    const [sideClick, setSideClick] = useState(false);
   console.log("I am rendered");


   const goToPageAndScroll = async (selector) => {
    console.log("came here cusotm fucn")
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -75,
      spy: true
    });
  };



   return (
   
<>
<div id="header" className=" pl-[10%] max-w-full w-full flex items-start top-0 z-[10000] sticky bg-navy text-slate text-md sm:text-sm md:text-md lg:text-lg xl:text-xl">

    
<svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 84 96"
          className=" md:flex text-green pt-[1%] max-h-20 max-w-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-101 duration-300"
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
            onClick={()=>{setIsClicked("") }}
         >
            
            SC
          </text>
          </Link>
        </svg>

    <div className="mr-auto">
    </div>
    <ul className="hidden md:flex justify-end flex-wrap text-slate max-w-[50%]">
    
    
    <Link to="/about">
    {/* <ScrollLink
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => setIsClicked("About")}
  > */}
   
          <li
            className={`${isClicked === 'About' ? 'text-green' : 'text-lightestSlate'} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green m-2 p-2`}
            onClick={() => { setIsClicked("About") }}
          >
            About
          </li>
          {/* </ScrollLink> */}
      </Link>
       
        <Link to="/experience">
        {/* <ScrollLink
    to="Experience"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => setIsClicked("Experience")}
  > */}
        <li
            className={`${isClicked === 'Experience' ? 'text-green' : 'text-lightestSlate'} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green m-2 p-2`}
            onClick={() => { setIsClicked("Experience") }}
          >
           Experience
          </li>
          {/* </ScrollLink> */}
            </Link>
         <Link to="/projects">
        {/* <ScrollLink
    to="projects"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => setIsClicked("Projects")}
  > */}
        <li
            className={`${isClicked === 'Projects' ? 'text-green' : 'text-lightestSlate'} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green m-2 p-2`}
            onClick={() => { setIsClicked("Projects") }}
          >
           Projects
          </li>
          {/* </ScrollLink> */}
            </Link>


            <Link to="/contact">
            {/* <ScrollLink
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => setIsClicked("Contact")}
  > */}
        <li
            className={`${isClicked === 'Contact' ? 'text-green' : 'text-lightestSlate'} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green m-2 p-2`}
            onClick={() => { setIsClicked("Contact") }}
          >
           Contact
          </li>
          {/* </ScrollLink> */}
            </Link>
        <li className="shadow-sm shadow-green text-green px-[%] rounded-[5%] p-2 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-300 ">
            <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-300 "href="https://yawsresumebucket.s3.us-east-2.amazonaws.com/Saicharan+Resume.pdf">Resume</a>
        </li>
    </ul>
       { (sideClick===false) ? (<div className="p-2 m-2">
        < div onClick={()=>{setSideClick(!sideClick)}}  className="top-[1%] w-6 h-5 flex flex-col justify-between items-center md:hidden text-2xl text-green cursor-pointer group">
            <span className="w-full h-[2px] bg-green inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-green inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-green inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
            </div>
        </div>) : ""

        }


       
  


{sideClick && (


<div className=" absolute md:hidden top-0 right-0 w-[50%] bg-black bg-opacity-75 h-screen flex flex-col items-end">

<ul className="flex sticky top-0  right-10 flex-col justify-center items-center flex-wrap text-slate">
<li className="top-0  justify-end right-0" onClick={()=>{setSideClick(false)}}><button className="text-green text-2xl border-lg border-green">X</button></li>
<Link to="/">
        <li
            className={`${isClicked === 'Home' ? 'text-green' : 'text-lightestSlate'} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green m-2 p-2`}
            onClick={() => { setIsClicked("Home")
                              setSideClick(false)} }
          >
           Home
        </li>
</Link>



<Link to="/experience">
<li
 className={`${isClicked === 'Experience' ? 'text-green' : 'text-lightestSlate'} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green m-2 p-2`}
 onClick={() => { setIsClicked("Experience")
 setSideClick(false) }}
>
Experience
</li>
 </Link>
<Link to="/projects">
<li
 className={`${isClicked === 'Projects' ? 'text-green' : 'text-lightestSlate'} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green m-2 p-2`}
 onClick={() => { setIsClicked("Projects")
 setSideClick(false) }}
>
Projects
</li>
 </Link>
 <Link to="/contact">
<li
 className={`${isClicked === 'Contact' ? 'text-green' : 'text-lightestSlate'} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green m-2 p-2`}
 onClick={() => { setIsClicked("Contact")
 setSideClick(false) }}
>
Contact
</li>
 </Link>
<li className="shadow-sm shadow-green text-green px-[%] rounded-[5%] p-2 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-300 ">
 <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-300 "href="https://yawsresumebucket.s3.us-east-2.amazonaws.com/Saicharan+Resume.pdf">Resume</a>
</li>
</ul>  





</div>)}
</div>


</>

)

}

export default Header;