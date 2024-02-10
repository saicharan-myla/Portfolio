import LeftSide from "./LeftSide";
import Rightside from "./Rightside";
import Vz from "./Vz";
import { useState } from "react";
import Infosys from "./Infosys"
import ThinkMax from "./ThinkMax";
import GMR from "./GMR";
const Exp = ()=> {

    const [exp, setExp] = useState("Verizon");
    return (
        <div className="max-w-contianerxs mx-auto px-[10%] w-full mb-[3%]">
             <h1 className="text-lightestslate mt-8 sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl font-bold"> Where I've Worked </h1>

        <div className="text-slate mt-10 flex flex-row gap-16">
           
            <ul className="max-w-[16%]">
                <li  className={`${
    exp === 'Verizon'
      ? 'text-green  border-l-2 border-l-green'
      : 'text-slate border-l-2 border-l-slate' // Changed this part
  } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} 
                onClick={()=>{setExp("Verizon")}}
                >
                    Verizon</li>
                <li className={`${
    exp === 'Infosys'
      ? 'text-green  border-l-2 border-l-green'
      : 'text-slate border-l-2 border-l-slate' // Changed this part
  } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}  onClick={()=>{setExp("Infosys")}}>Infosys</li>
            
            <li className={`${
    exp === 'ThinkMax'
      ? 'text-green  border-l-2 border-l-green'
      : 'text-slate border-l-2 border-l-slate' // Changed this part
  } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}  onClick={()=>{setExp("ThinkMax")}}>ThinkMax</li>
               
               
                <li className={`${
    exp === 'GMR'
      ? 'text-green  border-l-2 border-l-green'
      : 'text-slate border-l-2 border-l-slate' // Changed this part
  } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}  onClick={()=>{setExp("GMR")}}>GMR</li>
            </ul>
            {exp==="Verizon" && <Vz/>}
            {exp==="Infosys" && <Infosys/>}
            {exp==="ThinkMax" && <ThinkMax/>}
            {exp==="GMR" && <GMR/>}

            

        </div>






 <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-[0%]">
        <Rightside/>
    </div>

    <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-[0%]">
        <LeftSide/>
    </div>


        </div>
    )
}

export default Exp;