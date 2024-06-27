// import { FaArrowRight } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

export default function Mystore(){
    const className = "max-w-[1120px]  w-[90vw] py-[1rem] m-auto";
    return <div className={`${className}`}>
        <div>

     <Link className="border p-2 rounded-full border-violet-600 px-4 capitalize">store</Link>
<Link className=" border-violet-600 px-4 capitalize"> landing page</Link>
     <Link className="rounded-full border-violet-600 px-4 capitalize">edit design</Link>
        </div> 
      
        <Outlet/>

    </div>
}