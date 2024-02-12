import LeftSide from "./LeftSide";
import Rightside from "./Rightside";
const Contact = ()=>{
    return (
        <div id="contact" className="h-screen">
        <div className="flex flex-col justify-center items-center text-slate pt-[10%]">
            <h5 className="text-green text-sm pb-2">What's next?</h5>
            <h3 className="text-3xl text-lightestslate font-bold pb-2">Get in Touch</h3>

            <p className="max-w-[40%] text-lg">
            I'm currently looking full-time opportunities in front-end and full-stack development. 
            I'm eager to contribute to innovative projects in a collaborative environment.
            Please feel free to reach out to me for any suggestions or opportunities.

            </p>

        
            </div>
        
        <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-[0%]">
        <Rightside/>
    </div>

    <a  className='flex justify-center items-center'href="mailto:saicharan6118@gmail.com">
                <button className=" text-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 
                hover:scale-110 duration-300 justify-center items-center pb-2 my-[2%] px-2 max-w-[40%] text-green text-md sm:text-sm md:text-lg lg:text-xl xl:text-2xl 
                border border-green rounded-[5%] shadow-green hover:shadow-lg">Say Hello</button> </a>


    <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-[0%]">
        <LeftSide/>
    </div>

        
        </div>
    )     
}

export default  Contact;