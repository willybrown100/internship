import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AppLayout(){
    const className = "max-w-[1170px]  w-[90vw] py-[1rem] m-auto";
    return <div className=" hidden md:flex">
        <Sidebar/>
        <div className="h-[100vh] w-full bg-stone-50">
          <Navbar/>
      <Outlet/>
        </div>
    </div>
}