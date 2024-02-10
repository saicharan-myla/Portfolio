
const vz = ()=>{
    return (
        <div id="Verizon">
            <h3 className="flex gap-1 font-medium text-xl font-titleFont text-lightestslate"> Software Development Engineer <span className="text-green tracking-wide">@Verizon</span></h3>
            <p className="mt-1 mb-1">
                Apr 2023 - Dec 2023
            </p>

            <ul className="max-w-[60%]" >
            <li className="flex gap-2 pt-2">
                    <i className ="fa fa-arrow-right text-green pt-2"></i>
                    <span> Engineered the migration of a monolith to microservices using the Strangler pattern </span>
                </li>
                <li className="flex gap-2 pt-2">
                    <i className =" fa fa-arrow-right text-green pt-2"></i>
                    <span className=''> Developed custom hooks to encapsulate complex logic and handle API calls</span>
                </li>

                <li className="flex gap-2 pt-2">
                    <i className =" fa fa-arrow-right text-green pt-2"></i>
                    <span className=''>  Developed a library of Reusable components like Shimmer UI and Nav bars, used Redux for state management and React router for route management </span>
                </li>
               

                <li className="flex gap-2 pt-2">
                    <i className =" fa fa-arrow-right text-green pt-2"></i>
                    <span className=''> Streamlined software delivery by constructing end-to-end CI/CD workflows, ensuring seamless integration and automated deployment </span>
                </li>


                

            </ul>

        </div>
    )
}
export default vz;