import SampleIcon from "../assets/HardHatOnGear.png"
import {Link} from "react-router-dom";

function Navbar() {
    const navCont = [
        {nme: "About Us", lnk: "/about"},
        {nme: "Services", lnk: "/services"},
        {nme: "Gallery", lnk: "/gallery"},
        {nme: "Contact Us", lnk: "/contact"},
    ]

    return (
        <nav className="fixed top-0 w-screen z-50 flex items-center bg-gray-950
            text-white font-prim text-lg px-[10vmin]">
            <Link to={"/"}>
                <h2 className="font-titl flex items-center text-3xl basis-2/3">
                    <img className="size-12 my-2 p-2 grayscale brightness-200" src={SampleIcon}
                         alt="Company logo"/>Sky Cresta Solutions</h2></Link>
            <ul className="grow flex gap-8 justify-end">
                {navCont.map((navItm) => (
                    <Link to={navItm.lnk}>
                        <p className="hover:text-orange-500 hover:underline underline-offset-4
                            transition-colors duration-200">{navItm.nme}</p></Link>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;