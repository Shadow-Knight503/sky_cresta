import Icon from "../assets/CrestaLogo.png"
import MenuIcon from "../assets/BurgerMenu.png"
import {Link} from "react-router-dom";

interface NavProps {
    scrollToFooter: () => void
}

function Navbar({scrollToFooter}: NavProps) {
    const navCont = [
        {nme: "About Us", lnk: "/about"},
        {nme: "Services", lnk: "/services"},
        {nme: "Gallery", lnk: "/gallery"},
    ]

    return (
        <nav className="fixed top-0 w-screen z-50 flex items-center bg-back
            text-prim font-prim text-lg lg:px-[10vmin] border-b-4 border-prim">
            <Link to={"/"}>
                <h2 className="font-titl flex items-center text-3xl basis-2/3">
                    <img className="size-16 md:m-2" src={Icon}
                         alt="Company logo"/>Skycresta Solutions</h2></Link>
            <ul className="grow hidden md:flex gap-8 justify-end font-semibold">
                {navCont.map((navItm) => (
                    <Link to={navItm.lnk} key={navItm.lnk}>
                        <p className="hover:text-accn hover:underline underline-offset-4
                            transition-colors duration-200">{navItm.nme}</p></Link>
                ))}
                <p className="hover:text-accn hover:underline underline-offset-4
                    transition-colors duration-200" onClick={scrollToFooter}>Contact Us</p>
            </ul>
            <span className="group/mob relative grow lg:hidden active"
                onClick={(e) => e.currentTarget.classList.toggle("active")}>
                <img className="float-right group-[.active]/mob:rotate-180 size-12" src={MenuIcon} alt="Nav Icon"/>
                <div className="absolute bg-back mt-14 rounded-lg border border-prim hidden group-[.active]/mob:block">
                    {navCont.map((navItm, ind) => (
                        <Link to={navItm.lnk} key={navItm.lnk}>
                            <p className={`hover:text-accn hover:underline p-2 underline-offset-4
                                transition-colors duration-200 ${ind > 0 ? "border-t-2": ""}`}>
                                {navItm.nme}</p></Link>
                    ))}
                </div>
            </span>
        </nav>
    )
}

export default Navbar;