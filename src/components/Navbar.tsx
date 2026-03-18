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
            text-prim font-prim text-lg lg:px-[10vmin]">
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
            <span className="ml-12 border grow lg:hidden">
                <img className="size-12" src={MenuIcon} alt="Nav Icon"/>
            </span>
        </nav>
    )
}

export default Navbar;