import { FaCopy } from "react-icons/fa";

export default function Navbar(){
    const className = "max-w-[1120px]  w-[90vw] py-[1rem] m-auto";
    return <nav className={` bg-white`}>
        <div className={`${className}`}>

        <div className="flex justify-between">
            <h3> my store</h3>
            <div className="flex items-center">

            <FaCopy />
            <span>copy</span>
            </div>
        </div>
        </div>
    </nav>
}