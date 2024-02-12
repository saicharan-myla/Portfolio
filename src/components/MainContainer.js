import React from "react";
import Rightside from "./Rightside"
import Leftside from "./LeftSide";
const MainContainer = ()=> {
    return (
        <div  id="maincontainer" className="pl-[10%] h-screen">
    <div >

        < div className="max-w-[70%] py-[5%]">
        <span className="text-md sm:text-sm md:text-sm lg:text-lg xl:text-xl text-green pb-[2%]">Hi, My name is</span>
        
        <div className="text-2xl sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-lightestslate pb-[2%]">Sai Charan. </div>
      
        <div className=" text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl text-slate font-bold">I build things for the web.</div>
        <br></br>

       <p className="flex flex-col flex-wrap text-md sm:text-sm md:text-sm lg:text-md xl:text-lg text-slate max-w-[50%] text-justify tracking-wide">
        I am a Software Engineer specializing in building exceptional digital experiences. My passion lies in crafting pixel-perfect digital solutions and architecting cloud solutions.
        I'm open to discussing potential collaborations or opportunities.
       </p>

      
       
          <a href="https://www.linkedin.com/in/saicharanreddymyla/"><button className="  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 justify-center items-center my-[4%] p-[1%] mx-[0.5%] max-w-[50%] text-green text-md sm:text-sm md:text-lg lg:text-xl xl:text-2xl border border-green rounded-[5%] shadow-green hover:shadow-lg">LinkedIn</button> </a>
          
       
      
   
    </div>
   
      

      {/* className="  min-h-screen px-2  mx-[5%] my-[5%] bg-navy h-full" */}

    
    </div>

    <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-[0%]">
        <Rightside/>
    </div>

    <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-[0%]">
        <Leftside/>
    </div>
    
</div>
    )
}

export default MainContainer;