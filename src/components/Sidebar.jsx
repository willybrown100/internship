import { SiUlule } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";

const className = "max-w-[1170px]  w-[90vw] py-[1rem] m-auto";
export default function Sidebar(){
   
    return <aside className=" bg-violet-200 w-[16rem] grid place-items-center ">
        <div className="grid grid-rows-[1fr,40px] gap-2 h-[29rem]">
       <ul>
        <li><NavLink NavLink to="/" className="capitalize w-full font-semibold">home</NavLink></li>
        <li><NavLink to="/mystore" className=" font-semibold">myStore</NavLink></li>
        <li><NavLink to="/income" className="capitalize font-semibold">income</NavLink></li>
        <li><NavLink to="/analytics" className="capitalize font-semibold">analytics</NavLink></li>
        <li><NavLink to="/customer" className="capitalize font-semibold">customer</NavLink></li>
        <li><NavLink to="/more">more</NavLink></li>
       </ul>

       <ul>
       <li><Link to="/analytics">ask</Link></li>
        <li><Link to="/customer">settings</Link></li>
        <li><Link to="/more">rohit45</Link></li>
       </ul>
        </div>
    </aside>
}