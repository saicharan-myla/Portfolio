import logo from '../logo.svg';
import Experience from './Experience';
import React from "react";
import {useEffect} from "react"
import LeftSide from './LeftSide';
import Rightside from './Rightside';
const About = ()=> {

    useEffect(() => {
        console.log('About Componet Triggered');
        window.scrollTo(0, 0);
      }, []);

    return (

        <div id="about" className='flex px-[10%]'>
          <div> 

{/* <div id="about" className='items-center justify-center flex flex-wrap z-10 min-h-screen'> */}
<div className="flex flex-col items-start bg-navy z-1 pt-[5%] pb-[5%] h-screen "  >
  
  <div className="bg-navy text-slate text-lg max-w-[70%]  text-left">

  <h2 className="flex flex-col flex-wrap text-md sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold text-lightestslate text-left pt-[1%] pb-[1%]">About Me</h2>
    <p className=" text-md sm:text-xs md:text-sm lg:text-md xl:text-lg pb-[2%]">
      Hello! I'm Sai Charan, a web enthusiast weaving digital wonders since 2013. 
      My journey began with the curiosity of the Inspect button. Fast-forward to today, I've had the privilege of working at an <span className='text-green'>early-stage start-up,
      a huge corporation, and student-led organizations</span>
    </p>

    <p className="text-md sm:text-xs md:text-sm lg:text-md xl:text-lg  pb-[2%]">
      Currently, my passion lies in crafting inclusive digital experiences and architecting cloud solutions for a variety of clients.
    </p>

    <p className=" text-md sm:text-xs md:text-sm lg:text-md xl:text-lg  pb-[2%]">
      Here are a few technologies I've been working with recently:    </p>
     
  </div>

  <div className=' max-w-[100%]'>
        <ul className='grid grid-rows-3 grid-cols-2  pb-[2%]'>
        <li>
      <i className="fa fa-arrow-right text-green"></i>
     
      <span className=' p-2 m-2 text-green'>React</span>
      </li>

      <li>
      <i className="fa fa-arrow-right text-green"></i>
     
      <span className='p-2 m-2 text-green'>Node.js</span>
      </li>

      <li>
      <i className="fa fa-arrow-right text-green"></i>
     
      <span className='p-2 m-2 text-green'>Express.js</span>
      </li>

      <li>
      <i className="fa fa-arrow-right text-green"></i>
     
      <span className='p-2 m-2 text-green'>JavaScript</span>

      </li>

      <li>
      <i className="fa fa-arrow-right text-green"></i>
     
      <span className='p-2 m-2 text-green'>Java</span>
      </li>


      <li>
      <i className =" fa fa-arrow-right text-green"></i>
     
      <span className='p-2 m-2 text-green'>Django</span>
      </li>
      </ul>
      </div>




</div>




{/* </div> */}
<div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-[0%]">
        <Rightside/>
    </div>

    <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-[0%]">
        <LeftSide/>
    </div>

    {/* <div className='hidden  md:flex w-full max-w-[40%] max-h-[10%] relative group right-[10%] '>
 <div className='absolute w-full max-h-[10%] right-10 top-6 rounded-lg'>
   <div className='w-full h-full relative z-1 flex pl-6 lg:pl-0'>
     <img  alt="profile_pic" src={logo} className='rounded-lg h-full object-cover'></img>
   </div>
 </div>
</div> */}
 


</div>

</div>
    )
}

export default About;