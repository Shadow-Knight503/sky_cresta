import SampleIcon from "../assets/HardHatOnGear.png"

function Navbar() {
    const navCont = ["About Us", "Services", "Gallery", "Contact Us"]

    return (
        <nav className="fixed top-0 w-screen z-50 flex items-center bg-slate-950
            text-white font-prim text-lg px-[10vmin]">
            <h2 className="font-titl flex items-center text-3xl basis-2/3">
                <img className="size-12 my-2 p-2 grayscale brightness-200" src={SampleIcon} alt="Company logo"/>
                Sky Cresta Solutions</h2>
            <ul className="grow flex gap-8 justify-end">
                {navCont.map((navItm) => (
                    <p className="hover:text-orange-500 hover:underline underline-offset-4
                        transition-colors duration-200">{navItm}</p>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;