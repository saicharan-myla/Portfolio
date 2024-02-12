import { Outlet } from "react-router-dom";
import Header from "./Header";
import MainContainer from "./MainContainer";
import About from "./About";
import Logo from "./Logo"
import Contact from "./Contact";
import Experience from "./Experience";
import Verizon from "./Verizon";
import Projects from "./Projects";
import React from "react";
import Exp from "./Exp2";

const Body = () => {
    return (<div  id="body" className="min-w-screen h-full w-full min-h-screen">
    <MainContainer/>
    <About/>
    <Exp/>
    <Projects/>
    <Contact/>
    </div>);

    
}
export default Body;