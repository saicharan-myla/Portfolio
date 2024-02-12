const ImgProj = ()=> {
    return (
        <div  id="img_proj" className="max-w-container text-lightestslate">
              <h2 className=" pl-[10%] flex flex-col flex-wrap text-md sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold text-lightestslate text-left pt-[2%] pb-[2%]">Things I have built</h2> 
            <section className="py-[2%] pl-[10%] pr-[10%]">
             <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row gap-6">
                <a href="https://github.com/saicharan-myla/YtClone" className="w-full xl:w-[60%] h-auto group">
                    <div>
                        <img  alt="yt_image" className="w-full h-full object-contain"src="/YT.png"></img>
                    </div>
                        </a>
                        <div className="w-full xl:w-[60%] flex flex-col gap-6  items-end text-right xl:-ml-16">

            <p className="text-sm text-green tracking-wide"> Featured Project</p>
            <h3 className="text-2xl font-bold">YouTube Clone</h3>
            <p className=" bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                A YouTube Clone implemented using the YT public APIs,with efficient search functionality using debouncing.
            </p>
            <ul className="text-xs md:text:sm tracking-wide flex gap-2 md:gap-5 justify-between text-slate">
                <li className="hover:text-green">React</li>
                <li className="hover:text-green">Redux</li>
                <li className="hover:text-green">React-router</li>
                <li className="hover:text-green">Tailwindcss</li>
                
            </ul>

</div>
                </div>
             
             </div>
            
            
            
            
            </section>

            <section className="py-[2%] pl-[10%] pr-[10%]">
             <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row-reverse static gap-6">
                <a href="https://github.com/saicharan-myla/Express_Chat" className="w-full xl:w-[60%] h-auto group">
                    <div className="z-[-100]">
                        <img  alt="chat_image" className="w-full h-full object-contain"src="/Wa.png"></img>
                    </div>
                        </a>
                        <div className="w-full xl:w-[60%] flex flex-col gap-6 items-end text-right ">

            <p className="text-sm text-green tracking-wide"> Featured Project</p>
            <h3 className="text-2xl font-bold">Express Chat</h3>
            <p className=" bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16 z-[1]">
                A real-time chat application using websockets with customizable themes and expressions</p>
            <ul className="text-xs md:text:sm tracking-wide flex gap-2 md:gap-5 justify-between text-slate">
                <li className="hover:text-green">React</li>
                <li className="hover:text-green">Express.js</li>
                <li className="hover:text-green">JWT</li>
                <li className="hover:text-green">MongoDB</li>
                <li className="hover:text-green">Redux</li>
                <li className="hover:text-green">React-router</li>
            </ul>
           

</div>
                </div>
             
             </div>
            
            
            
            
            </section>
        </div> 
    )
}


export default ImgProj;