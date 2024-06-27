import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Header(){
    const className = "max-w-[1170px]  w-[90vw] py-[6rem] m-auto";
    return <header className={` md:hidden grid place-items-center`}>
        <article className={`${className} text-center`}>
        <div >
<h2 className="text-white">Name</h2>
<p className="text-white m-auto">Lorem, ipsum dolor is simply a dummy text of the printing andf typesetting industry !</p>
<div className="flex justify-center gap-2 text-2xl">
<FaTiktok className="border rounded-md"/>
<FaInstagram className="border rounded-md"/>
</div>
<div className="border rounded-md gap-2 flex mt-8 text-white">
    <div>
    <img src="/images/gift.jpg" alt="img" className="h-[5rem]"/>
    </div>
    <div className="text-left">
    <h4 className="mb-0">custom video or product</h4>
    <p>i'll send you a custom video/prroduct adressing your unique request</p>
    <span>9.99</span>
    </div>
</div>
        </div>
        </article>
    </header>
}