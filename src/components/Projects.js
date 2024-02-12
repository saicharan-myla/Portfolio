import { Tab } from '@headlessui/react'
import React from "react";
import { useState } from 'react';
import ImgProj from "./ImgProj"
import LeftSide from './LeftSide';
import Rightside from './Rightside';
const Projects = () => {

const [isVisible,setIsVisible] = useState(false);



    return (
        <div id="project" className='h-full min-h-screen'>

            <ImgProj/>

    {(isVisible === false) ?  <button className=" ml-[10%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 justify-center items-center my-[4%] p-[1%] mx-[0.5%] max-w-[50%] text-green text-md sm:text-sm md:text-lg lg:text-xl xl:text-2xl border border-green rounded-[5%] shadow-green hover:shadow-lg" onClick={()=>{setIsVisible(true)}} >Show More</button> : "" }
        
    {  isVisible &&  <div className='flex bg-navy justify-center items-center h-full min-h-screen'>
     <div className='min-h-screen h-full z-5 justify-center items-center pl-[10%] pr-[10%]'>
     <h2 className=" flex flex-col flex-wrap text-md sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold text-lightestslate text-left pt-[2%] pb-[2%]">Noteworthy Projects</h2> 

    <div className=' bg-navy text-lightestslate grid xs:grid-rows-3 xs:grid-cols-2 sm:grid-rows-3 sm:grid-cols-2 md:grid-rows-2 md:grid-cols-3 lg:grid-rows-2 lg:grid-cols-3 xl:grid-rows-2 xl:grid-cols-2 gap-[1%] pb-[5%]'>

    <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 p-2 m-2 rounded-lg shadow-md shadow-green row-span-1 text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>
        
        <div className='flex  flex-wrap items-center justify-between text-green font-bold text-xl pr-2'>
             <span>Portfolio</span>
            <a href='https://github.com/saicharan-myla/Portfolio'><i className="fab fa-github"></i></a>
        </div>
            <p className='text-base sm:text-sm md:text-sm lg:text-md xl:text-lg'>
                React powered portfolio levaraging router and redux store
            </p>
            <span className='flex flex-wrap my-2'>
            <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                React
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                Redux
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                React-Router
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                Jest
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                Tailwind
                </span>
            </span>
    </div>



    <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 p-2 m-2 rounded-lg shadow-md shadow-green row-span-1 text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>
        
        <div className='flex flex-wrap items-center justify-between text-green font-bold text-xl'>
             <span className='flex flex-wrap'>Web App</span>
            <a href='https://github.com/SaiCharan-Northeastern/Express_App'><i className="fab fa-github"></i></a>
        </div>
            <p className='text-base sm:text-sm md:text-sm lg:text-md xl:text-lg'>
                An inventory management system with authentication
            </p>
            <span className='flex flex-wrap my-2'>

            <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                Express.js
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                Node.js
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                JWT
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                REST APIs
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                MySQL
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                AWS SDK
                </span>
            </span>
    </div>



    <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 p-2 m-2 rounded-lg shadow-md shadow-green row-span-1 text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>
        
        <div className='flex  flex-wrap items-center justify-between text-green font-bold text-xl'>
             <span>Infrastructure Using Terraform</span>
            <a href='https://github.com/SaiCharan-Northeastern/aws-infra'><i className="fab fa-github"></i></a>
        </div>
            <p className='text-base sm:text-sm md:text-sm lg:text-md xl:text-lg'>
                Building AMIs and deploying the Infrastructure using a Launch Template to trigger the load balancer on CloudWatch Alarms
            </p>
            <span className='flex flex-wrap my-2'>
            <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                Terraform
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                Load Balancer
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                AWS IAM
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                AWS RDS
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                AWS S3
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                Route 53
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                AWS CloudWatch
                </span>
                
            </span>
    </div>





    <div className=' z-1 bg-navy transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 p-2 m-2 rounded-lg shadow-md shadow-green row-span-1 text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>
        
        <div className='flex flex-wrap items-center justify-between text-green font-bold text-xl'>
             <span>Health Care Management</span>
            <a href='https://github.com/saicharan-myla/Aed_HealthCareManagement'><i className="fab fa-github"></i></a>
        </div>
            <p className='text-base sm:text-sm md:text-sm lg:text-md xl:text-lg'>
                An end-to-end healthcare management system designed for streamlined staff operations and patient care
            </p>
            <span className='flex flex-wrap my-2'>
            <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                Java
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                Spring
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                Spring Data
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                Spring Cache
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                MySQL
                </span>
                <span className=" rounded-lg px-2 mx-2 my-2  text-green border border-green bg-navy">
                Java Swing
                </span>
               
            </span>
    </div>








    </div>
    {(isVisible === true) ?  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 justify-center items-center my-[4%] p-[1%] mx-[0.5%] max-w-[50%] text-green text-md sm:text-sm md:text-lg lg:text-xl xl:text-2xl border border-green rounded-[5%] shadow-green hover:shadow-lg" onClick={()=>{setIsVisible(false)}} >Show Less</button> : "" }

</div>


</div>
}

<div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-[0%]">
        <Rightside/>
    </div>

    <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-[0%]">
        <LeftSide/>
    </div>

</div>
   
    );
};



export default Projects;