import ContrBanner from "../assets/PanaromicBanner.jpg"
import ConstructImg0 from "../assets/BulldozerBanner.jpg"
import ConstructImg1 from "../assets/ConstructionRail.jpg"
import ConstructImg2 from "../assets/RedConstruction.jpg"
import ConstructImg3 from "../assets/Skyline.jpg"
import GearImg from "../assets/Gear.svg"
import {Link} from "react-router-dom";

function Home() {
    const heroStyle: React.CSSProperties = {
        backgroundImage: `url(${ContrBanner})`,
        backgroundSize: "cover",
        width: "100%",
    }

    const bannerStyle: React.CSSProperties = {
        backgroundImage: `url(${ConstructImg1})`,
        backgroundSize: 'cover', // Optional: scale image to cover the entire div
        width: '100%',
    };

    return (
        <section className="text-text">
            <div className="relative flex animate-banner h-[90vh] mt-4 w-screen"
                 style={heroStyle}>
                <h2 className="grid grid-cols-1 basis-5/7 place-content-between h-8/11 pt-8 pl-8
                    text-4xl md:text-4xl font-titl text-back">
                    <h1 className="text-6xl mt-12">Skycresta Solutions</h1>
                    <h3 className="">Integrated <span className="text-sky-400">Infrastructure</span> &
                        <p className=""><span className="text-sky-400">Engineering</span>
                            {' '}Company in Chennai</p>
                        <p className="text-sm md:text-lg font-prim w-2/3 md:w-[35rem] mt-2
                            " style={{animationDelay: "1s"}}>Delivering machinery solutions,
                            civil construction, and
                            interior & exterior development with structured execution and professional excellence.</p>
                    </h3>
                </h2>
                <div className="relative basis-3/7 ml-12 h-10/11 hidden">
                    <div className="absolute bottom-0 overflow-hidden w-130 h-140 transform
                        -skew-x-[10deg] border-4 border-prim rounded-sm">
                        <img src={ConstructImg0} alt="Parallelogram"
                            className="size-full transform skew-x-[10deg] scale-125"/>
                    </div>
                    <div className="absolute bottom-6 left-6 z-10 overflow-hidden w-130 h-140 transform
                        -skew-x-[10deg] border-4 border-prim rounded-sm
                        animate-fadeIn [animation-delay:1s] opacity-0">
                        <img src={ConstructImg1} alt="Parallelogram"
                            className="size-full transform skew-x-[10deg] scale-125"/>
                    </div>
                    <div className="absolute bottom-12 left-12 z-20 overflow-hidden w-130 h-140 transform
                        -skew-x-[10deg] border-4 border-prim rounded-sm
                        animate-fadeIn [animation-delay:2s] opacity-0">
                        <img src={ConstructImg2} alt="Parallelogram"
                            className="size-full transform skew-x-[10deg] scale-125"/>
                    </div>
                    <div className="absolute bottom-18 left-18 z-30 overflow-hidden w-130 h-140 transform
                        -skew-x-[10deg] border-4 border-prim rounded-sm
                        animate-fadeIn [animation-delay:3s] opacity-0">
                        <img src={ConstructImg3} alt="Parallelogram"
                            className="size-full transform skew-x-[10deg] scale-125"/>
                    </div>
                </div>
                <div className="absolute bottom-4 md:right-2">
                    <button className="text-white rounded-xl text-xl font-titl font-semibold p-3 bg-prim ml-6
                        outline-prim outline-2 outline-offset-4 animate-glowUp [animation-delay:2s]">
                        Request a Quote
                    </button>
                    <button className="text-white rounded-xl text-xl font-titl font-semibold p-3 bg-prim ml-6
                        outline-prim outline-2 outline-offset-4 animate-glowUp [animation-delay:2s]">
                        Contact Our Team
                    </button>
                </div>
            </div>
            <article className="flex flex-wrap px-2 md:px-12 py-8 font-prim
                bg-prim to-blue-400">
                <div className="basis-1/2 hidden lg:block px-24 py-4">
                    <div className="group relative h-full rounded-lg" style={bannerStyle}>
                        <img className="absolute -left-6 -bottom-6 h-[15%] group-hover:animate-gears invert
                            hidden xl:block" src={GearImg} alt="Gear Image"/>
                        <img className="absolute -left-3 bottom-8 h-[8%] group-hover:animate-gears invert
                            hidden lg:block" src={GearImg} alt="Gear Image"/>
                        <img className="absolute -right-7 -top-7 h-[20%] group-hover:animate-gears
                            hidden 2xl:block" src={GearImg} alt="Gear Image"/>
                    </div>
                </div>
                <p className="relative basis-1/2 grow px-8 text-lg text-back/80 text-justify">
                    <h3 className="text-4xl text-white font-titl mb-2">About Skycresta</h3>
                    Skycresta Solutions is a South India based integrated infrastructure and engineering company
                    delivering end-to-end solutions across machinery, civil construction, and interior & exterior
                    development.
                    <br/>With strong technical expertise and struc tured project management systems, we serve
                    residential, commercial, and industrial sectors across South India.
                    <br/>From equipment supply and engineering execution to finishing and long-term maintenance support,
                    we provide complete lifecycle infrastructure solutions under one platform.
                    <br/><br/><span className="text-xl md:text-2xl text-sky-100 font-bold">We're not only contractors —
                    <br/>We're also Infrastructure Partners.</span>
                    <Link to={"/about"}>
                        <button className="block mt-4 p-3 rounded-lg bg-sky-100 text-prim font-bold
                            hover:bg-accn hover:text-prim transition-colors">Know more
                        </button>
                    </Link>
                </p>
            </article>
        </section>
    )
}

export default Home;
